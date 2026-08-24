---
title: "astro 教學"
date: "2026年8月"
subject: "# article"
---
## 下載必要資料
如果你擁有的是包含完整`package.json`的檔案，僅需執行
```bash
npm install
```
如果沒有，於專案根目錄的終端機執行
```bash
npm create astro@latest
```

## 初始化與本地運行
在確定該有的元件都有了時候，執行
```bash
npm run dev
```
即可跑出`localhost:4321`網頁。

## 元件
### components
#### header
掌管`header`區塊，只要把他弄好，主視覺大概就沒問題了。
#### footer
可以在下面放運行時間、copyright等東西。
#### others
可以製作彈窗，表格等元件，這樣在不同頁面就可以用到相同元素。
### mainlayout
引用`footer`與`header`，免去後續`pages`要去引用他們的麻煩；也可把`title`整合在`mainlayout`方便維護
```astro
---
// src/layout/mainlayout.astro
import Header from '../components/header.astro';
import Footer from '../components/footer.astro';
const { title = "weilinlai的網站" } = Astro.props;  //給後續不同頁面做title傳輸
---
<html lang="zh-TW">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <link rel="icon" href="icon網址or位址" />    
</head>
<body>
    <Header />
    <main class="main-container">
        <slot />
    </main>  
    <Footer />
</body>
</html>
```
另外，全域`style`也可以放這裡，記得開`is:global`。
### pages
有了`mainlayout`，在`pages`就只需要呼叫`mainlayout`啦!
```astro
---
// src/pages/index.astro
import MainLayout from '../layout/mainlayout.astro';
---

<MainLayout title="title，可以傳回去layout">
    <div class="text-box">
        <h1>Welcome!</h1>
        <p>點擊上方選單開始探索</p>
    </div>
</MainLayout>
```
## 架構
```text
astro-page/                     # 根目錄
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自動部署設定(如果不是用github page那就不需要)
├── public/                     # 所有靜態資源裝在這裡
├── src/
|   ├── assets/                 # 需要編譯的資源放這邊
│   ├── components/             # 可複用的 HTML / UI 元件
│   │   ├── header.astro        # 導覽列
│   │   └── footer.astro        # 頁尾資訊與資料來源聲明
│   ├── layouts/
│   │   └── mainlayout.astro    # 全站統一的主版型 (包含 Meta、CSS 與 JS 引入)
│   └── pages/
│       ├── index.astro         # 網站首頁 
│       └── www.astro           # 其他頁面
├── .gitignore
├── README.md                   # 專案 README 文件
├── astro.config.mjs            # Astro 專案設定檔
├── package.json                # npm 套件與指令設定
└── package-lock.json
```
## 部屬
### 打包
```bash
npm run build
```
### 預覽
```bash
npm run preview
```
### deploy
如果用github action，`git- push`上去他會自己跑。
如果用vercel，登入or註冊，選擇repo，選擇語言`astro`...

## 總結
一份簡單的`astro`網頁就完成了，當然，還有不少更方便好用的功能，甚至我也還沒用過。
如果有機會，還會再更新。