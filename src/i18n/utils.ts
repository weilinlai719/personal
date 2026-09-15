// src/i18n/utils.ts
import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** 從網址路徑判斷目前是哪個語言，例如 /en/about → 'en'，/about → 'zh'（預設） */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in ui) return maybeLang as Lang;
  return defaultLang;
}

/** 取得該語言的翻譯函式：const t = useTranslations(lang); t('nav.about') */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * 把一個「不帶語言前綴」的路徑，轉成指定語言的實際網址。
 * getLocalizedPath('en', '/article') -> '/en/article'
 * getLocalizedPath('zh', '/article') -> '/article'
 */
export function getLocalizedPath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * 語言切換用：目前在 en 頁面，想切回 zh（或反過來），
 * 把目前路徑的語言前綴換掉，其餘路徑保留。
 * 例如目前在 /en/article/hello，切成 zh 會得到 /article/hello
 */
export function swapLang(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  let path = url.pathname;

  if (currentLang !== defaultLang) {
    path = path.replace(`/${currentLang}`, '') || '/';
  }

  return getLocalizedPath(targetLang, path);
}

/**
 * 給 header 語言切換鈕用：大部分頁面直接切換語言前綴就好，
 * 但「貼文」目前只有中文版，如果使用者正在看貼文時按 EN，
 * 直接 swapLang 會導去一個不存在的 /en/post/xxx（404）。
 * 這裡遇到貼文頁就導去該語言的首頁，而不是硬切換出一個壞掉的網址。
 */
export function getLangSwitchHref(url: URL, targetLang: Lang): string {
  const pathWithoutLangPrefix = url.pathname.replace(/^\/en(\/|$)/, '/');

  return swapLang(url, targetLang);
}
