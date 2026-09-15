---
title: astro Tutorial
date: 2026年8月
subject: '# Front End'
---
## Downloading the Necessary Files
If you have a file that includes the complete `package.json`, simply run
```bash
npm install
```
If not, run the following in the terminal in the project's root directory
```bash
npm create astro@latest
```

## Initialization and Local Execution
Once you’ve confirmed that all necessary components are present, run
```bash
npm run dev
```
to launch the `localhost:4321` webpage.

## Components
### components
#### header
Manages the `header` block; as long as you get this right, the main visual layout should be fine.
#### footer
You can place elements such as runtime information and copyright notices here.
#### others
You can create components such as pop-ups and tables, allowing you to reuse the same elements across different pages.
### mainlayout
By including `footer` and `header`, eliminating the need to reference them later in `pages`; you can also integrate `title` into `mainlayout` for easier maintenance
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
Additionally, global `style` can be placed here; remember to enable `is:global`.
### pages
With `mainlayout` in place, all you need to do in `pages` is call `mainlayout`!
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
## Architecture
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
## Deployment
### Packaging
```bash
npm run build
```
### Preview
```bash
npm run preview
```
### Deployment
If you use GitHub Actions, `git- push` will run automatically.
If you use Vercel, log in or sign up, select a repo, choose the language `astro`...

## Summary
A simple `astro` web page is now complete. Of course, there are plenty of other convenient and useful features—some of which I haven’t even tried yet.
If I get the chance, I’ll update this post again.
