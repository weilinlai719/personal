// scripts/translate-articles.mjs
//
// 用途：讀取 src/content/article/*.md，呼叫 DeepL API 翻成英文，
//       輸出到 src/content/article_en/*.md（檔名保持一致，slug 才會對得起來）
//
// ⚠️ 額度提醒：DeepL API Free 現在是「一次性 100 萬字元」，不是每月重置，
//    用完就沒了（除非升級付費方案）。這支腳本會在執行前後印出目前用量，
//    遇到額度用盡（HTTP 456）會立刻停止，不會繼續浪費 request。
//
// 執行方式：
//   1. 本機測試：DEEPL_API_KEY=你的金鑰 npm run translate
//   2. GitHub Actions 會自動帶入 secrets.DEEPL_API_KEY 執行
//
// 重要：src/content/article_en/ 底下的檔案是自動產生的，不要手動編輯，
//       下次腳本跑過去會被覆蓋。真的要修英文版，改中文原文然後重跑翻譯。
//
// 需要安裝套件：npm install gray-matter --save-dev

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';

const SRC_DIR = path.resolve('src/content/article');
const OUT_DIR = path.resolve('src/content/article_en');
const CACHE_FILE = path.resolve('scripts/.translation-cache.json');

const DEEPL_API_KEY = "666c39b4-1349-4df3-b66d-ce92c9afaaa9:fx";
// 免費版 DeepL 帳號用 api-free.deepl.com，付費版用 api.deepl.com。
// 如果你之後升級成付費版，把這行網址改掉就好。
const DEEPL_ENDPOINT = 'https://api-free.deepl.com/v2/translate';
const DEEPL_USAGE_ENDPOINT = 'https://api-free.deepl.com/v2/usage';

if (!DEEPL_API_KEY) {
  console.error('❌ 缺少環境變數 DEEPL_API_KEY，無法呼叫 DeepL API。');
  process.exit(1);
}

/**
 * DeepL Free 現在是「一次性 100 萬字元」的額度，不是每月重置，
 * 用完就真的沒了，所以用專屬的錯誤類型讓 main() 可以馬上停下來，
 * 而不是繼續浪費 request（反正額度用盡後每個 request 都只會再失敗一次）。
 */
class QuotaExceededError extends Error {}

async function checkUsage() {
  try {
    const res = await fetch(DEEPL_USAGE_ENDPOINT, {
      headers: { Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}` },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      used: data.character_count,
      limit: data.character_limit,
      remaining: data.character_limit - data.character_count,
    };
  } catch {
    return null;
  }
}

function printUsage(usage, label) {
  if (!usage) {
    console.log(`（${label}：查詢額度失敗，略過顯示）`);
    return;
  }
  const percent = ((usage.used / usage.limit) * 100).toFixed(1);
  console.log(`${label}：已用 ${usage.used.toLocaleString()} / ${usage.limit.toLocaleString()} 字元（${percent}%），剩餘 ${usage.remaining.toLocaleString()} 字元`);
}

function hashContent(str) {
  return crypto.createHash('sha256').update(str).digest('hex');
}

function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_FILE), { recursive: true });
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
}

/**
 * 翻譯前把 code block（```...``` 跟 `inline code`）抽掉換成佔位字串，
 * 避免程式碼被 DeepL 誤翻或破壞縮排/符號；翻完再塞回原本的程式碼。
 */
function protectCodeBlocks(text) {
  const blocks = [];
  const protectedText = text.replace(/```[\s\S]*?```|`[^`\n]+`/g, (match) => {
    const token = `@@CODE_BLOCK_${blocks.length}@@`;
    blocks.push(match);
    return token;
  });
  return { protectedText, blocks };
}

function restoreCodeBlocks(text, blocks) {
  return text.replace(/@@CODE_BLOCK_(\d+)@@/g, (_, i) => blocks[Number(i)] ?? '');
}

async function translateText(text) {
  if (!text || !text.trim()) return text;

  const { protectedText, blocks } = protectCodeBlocks(text);

  const res = await fetch(DEEPL_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: [protectedText],
      source_lang: 'ZH',
      target_lang: 'EN-US',
      preserve_formatting: true,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    if (res.status === 456) {
      throw new QuotaExceededError(`DeepL 額度已用盡 (456): ${errText}`);
    }
    throw new Error(`DeepL API 錯誤 (${res.status}): ${errText}`);
  }

  const data = await res.json();
  const translated = data.translations?.[0]?.text ?? '';
  return restoreCodeBlocks(translated, blocks);
}

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`❌ 找不到來源資料夾: ${SRC_DIR}`);
    process.exit(1);
  }

  const usageBefore = await checkUsage();
  printUsage(usageBefore, '執行前額度');
  if (usageBefore && usageBefore.remaining <= 0) {
    console.error('❌ DeepL 額度已經用完了（一次性額度，不會自動重置），無法繼續翻譯。');
    console.error('   要嘛升級付費方案，要嘛先手動翻譯剩下的文章。');
    process.exit(1);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const cache = loadCache();

  const files = fs.readdirSync(SRC_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

  if (files.length === 0) {
    console.log('沒有找到任何文章，結束。');
    return;
  }

  let translatedCount = 0;
  let skippedCount = 0;
  let quotaHit = false;

  for (const file of files) {
    const filePath = path.join(SRC_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const fileHash = hashContent(raw);

    if (cache[file] === fileHash) {
      console.log(`⏭️  跳過（未變更）: ${file}`);
      skippedCount++;
      continue;
    }

    console.log(`🌐 翻譯中: ${file}`);

    try {
      const { data: frontmatter, content } = matter(raw);

      const translatedTitle = frontmatter.title
        ? await translateText(frontmatter.title)
        : frontmatter.title;
      const translatedSubject = frontmatter.subject
        ? await translateText(frontmatter.subject)
        : frontmatter.subject;
      const translatedBody = await translateText(content);

      const newFrontmatter = {
        ...frontmatter,
        title: translatedTitle,
        subject: translatedSubject,
        // date 保持原樣，不翻譯
      };

      const output = matter.stringify(translatedBody, newFrontmatter);
      fs.writeFileSync(path.join(OUT_DIR, file), output, 'utf-8');

      cache[file] = fileHash;
      translatedCount++;
    } catch (err) {
      if (err instanceof QuotaExceededError) {
        console.error(`❌ ${err.message}`);
        console.error('   額度已經用盡，剩下還沒翻的文章這次先跳過，不會再繼續嘗試。');
        quotaHit = true;
        break; // 一次性額度用完了，繼續 loop 只會一直失敗，直接停下來
      }
      console.error(`❌ 翻譯失敗: ${file}`, err.message);
      // 單篇失敗（非額度問題）不要讓整個流程掛掉，繼續處理下一篇；
      // 這篇因為沒寫進 cache，下次執行還會再嘗試翻譯一次。
    }
  }

  saveCache(cache);
  console.log(`\n完成：翻譯 ${translatedCount} 篇，跳過 ${skippedCount} 篇（未變更）。`);

  const usageAfter = await checkUsage();
  printUsage(usageAfter, '執行後額度');

  if (quotaHit) {
    // 讓 GitHub Actions 這個 job 明確顯示成失敗，而不是悄悄地漏翻了幾篇文章
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('翻譯腳本執行失敗:', err);
  process.exit(1);
});
