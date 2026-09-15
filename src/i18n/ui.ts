// src/i18n/ui.ts
// 所有介面上的「固定文字」（選單、按鈕、標題...）都寫在這裡。
// 之後要加新頁面的翻譯，就是在 zh 跟 en 裡各補一行對應的 key。

export const languages = {
  zh: '中文',
  en: 'English',
} as const;

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'nav.posts': 'Posts',
    'nav.article': 'article',
    'nav.projects': 'projects',
    'nav.about': 'about',

    'home.pageTitle': 'Weilin Lai - 首頁',
    'home.explore': '點擊上方選單開始探索',
    'home.exploreAria': '開始探索網站',

    'about.pageTitle': 'Weilin Lai - 關於',

    'cui.pageTitle': 'Weilin Lai - projects-CUI',

    'article.pageTitle': '💬 Articles',
    'article.untitled': '未命名文章',
    'article.uncategorized': '未分類',
    'article.clickToView': '點擊進入查看詳細內容...',
    'article.backToList': '← 返回列表',

    'nav.projects.lottery': '🎁 抽獎器',
    'nav.projects.earthscience': '🌎 地科探究',
    'nav.projects.cui': '開源專案：CUI',

    'footer.rights': '保留所有權利。',
    'footer.visitors': '瀏覽人數',
    'footer.visitorsUnit': '人',
    'footer.runtime': '網頁已運行：',
    'footer.years': '年',
    'footer.days': '天',
    'footer.hours': '小時',
    'footer.minutes': '分',
    'footer.seconds': '秒',

    '404.title': '這裡什麼都沒有',
    '404.desc': '你要找的頁面不存在，或是已經被移動了。',
    '404.home': '回到首頁',
    '404.posts': '看看貼文',
    '404.articles': '看看文章',

    'lang.switchTo': 'English',
  },
  en: {
    'nav.posts': 'Posts',
    'nav.article': 'Articles',
    'nav.projects': 'Projects',
    'nav.about': 'About',

    'home.pageTitle': 'Weilin Lai - Home',
    'home.explore': 'Click the menu above to start exploring',
    'home.exploreAria': 'Start exploring the site',

    'about.pageTitle': 'Weilin Lai - About',

    'cui.pageTitle': 'Weilin Lai - projects-CUI',

    'article.pageTitle': '💬 Articles',
    'article.untitled': 'Untitled article',
    'article.uncategorized': 'Uncategorized',
    'article.clickToView': 'Click to view details...',
    'article.backToList': '← Back to list',

    'nav.projects.lottery': '🎁 Lucky Draw',
    'nav.projects.earthscience': '🌎 Earth Science Explore',
    'nav.projects.cui': 'Open Source: CUI',

    'footer.rights': 'All Rights Reserved.',
    'footer.visitors': 'Visitors',
    'footer.visitorsUnit': '',
    'footer.runtime': 'Site has been running for:',
    'footer.years': 'y',
    'footer.days': 'd',
    'footer.hours': 'h',
    'footer.minutes': 'm',
    'footer.seconds': 's',

    '404.title': "There's nothing here",
    '404.desc': "The page you're looking for doesn't exist, or has been moved.",
    '404.home': 'Back to home',
    '404.posts': 'Browse posts',
    '404.articles': 'Browse articles',

    'lang.switchTo': '中文',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];
