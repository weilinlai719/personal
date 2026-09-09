# weilinlai.duckdns.org

Weilin Lai 的個人網站，一位就讀高中、目標開發者的學生所建，內容涵蓋生活/課業紀錄、技術文章與自製專案展示，並附有自建的文章管理後台。

## 網站組成

- **首頁**：歡迎頁，導引至上方選單各分頁
- **Posts**：類似動態牆，記錄生活點滴，例如課表分享、學測倒數、日常照片等
- **article**：技術與網站相關文章，例如「astro 教學」、「日誌」、「關於這個網站」
- **projects**：自製專案展示
  - 🎁 抽獎器
  - 🌎 地科探究
  - **CUI**：用 C 語言開發、以 SDL 實作的輕量化 UI 元件庫（含 Label、Image、Button、Slider、ProgressBar 等元件），由兩位高中生共同開發
- **about**：個人簡介，含身分（學生 / developer）、擅長語言（TypeScript、C）、興趣領域（API、後端、web、.NET、開源函式庫；想嘗試 AI、演算法、資安、無人機、賽車、火箭），以及 Gmail / Discord / Instagram / GitHub 等聯絡方式
- **文章管理後台（`/post/edit`）**：僅管理員可存取，用來發布/編輯 Posts 動態，是網站內容更新的入口

## 技術架構

- **前端**：Astro，靜態頁面 + 後台管理介面（`edit.astro`）
- **後端**：Node.js + Express（`index.js`），部署於 Render，同時處理後台 API 與 LINE Bot 整合
- **資料儲存**：Google Sheets（貼文資料、登入 token）
- **圖片上傳**：後端代理至 Cloudinary，前端不直接接觸金鑰
- **身分驗證**（後台）：管理員密碼登入 → 後端核發 token → 前端存於 `localStorage`（`admin_key`）→ 後續 API 以 `Authorization: Bearer <token>` 驗證

## 主要功能

- Posts 動態牆（生活紀錄、照片分享）
- 技術/公告文章（article）
- 自製專案展示（CUI、抽獎器、地科探究）
- 個人介紹與社群連結（about）
- 訪客瀏覽人數統計、網站運行時間顯示
- LINE Bot 整合
- 管理員後台：登入 / 發布、編輯、刪除貼文 / 貼文圖片上傳

## 安全性設計

| 項目 | 做法 |
|---|---|
| 圖片上傳金鑰 | 存於 Render 環境變數 `CLOUDINARY_*`，不出現在前端原始碼 |
| 登入 token 過期 | Google Sheets 後台自動清除過期 token |
| 登入防暴力破解 | `/api/login` 套用 `express-rate-limit`（15 分鐘內限 5 次） |
| 反向代理 IP | 已設定 `app.set('trust proxy', 1)`，確保 rate limit 抓到真實訪客 IP |


## 部署
By vercel
