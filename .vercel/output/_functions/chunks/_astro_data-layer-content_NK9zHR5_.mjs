//#region \0astro:data-layer-content
var _astro_data_layer_content_default = [
	[
		"Map",
		1,
		2,
		136,
		137
	],
	"article",
	[
		"Map",
		3,
		4,
		28,
		29,
		75,
		76,
		90,
		91
	],
	"關於這個網站",
	{
		id: 3,
		data: 5,
		body: 8,
		filePath: 9,
		digest: 10,
		rendered: 11
	},
	{
		title: 3,
		date: 6,
		subject: 7
	},
	"2026年7月",
	"# 網站公告",
	"## 技術\r\n-Astro 動態網頁  \r\n-Vercel 網頁託管  \r\n-duckdns.org DNS代管  \r\n-Render 後端伺服器  \r\n-Google Sheets 資料庫\r\n\r\n## 內容\r\n在`POST/`我會偶爾發布貼文記錄生活  \r\n在`ARTICLE/`有空時我會寫一些文章貼這裡(也許?)  \r\n`PROJECT`記錄了我的一些專案、網頁作品  \r\n`ABOUT`關於我這個人~\r\n## 未來展望\r\n有時間會上來加一些內容把它完成，比如說我也想做個包含進度條的專案列表  \r\n`INDEX`首頁完成(還在想...)\r\n\r\n## 致謝\r\ngemini給我在架構上的諮詢以及工具的解說\\\r\nvscode Co-pilot 幫我整理我的屎山代碼\\\r\n擁有個人 Blog 的電神們的網頁css檔案\\\r\n還有很多...\\\r\n**不知道要謝誰的話，就謝天吧!**",
	"src/content/article/關於這個網站.md",
	"114d59748de50422",
	{
		html: 12,
		metadata: 13
	},
	"<h2 id=\"技術\">技術</h2>\n<p>-Astro 動態網頁<br>\n-Vercel 網頁託管<br>\n-duckdns.org DNS代管<br>\n-Render 後端伺服器<br>\n-Google Sheets 資料庫</p>\n<h2 id=\"內容\">內容</h2>\n<p>在<code>POST/</code>我會偶爾發布貼文記錄生活<br>\n在<code>ARTICLE/</code>有空時我會寫一些文章貼這裡(也許?)<br>\n<code>PROJECT</code>記錄了我的一些專案、網頁作品<br>\n<code>ABOUT</code>關於我這個人~</p>\n<h2 id=\"未來展望\">未來展望</h2>\n<p>有時間會上來加一些內容把它完成，比如說我也想做個包含進度條的專案列表<br>\n<code>INDEX</code>首頁完成(還在想…)</p>\n<h2 id=\"致謝\">致謝</h2>\n<p>gemini給我在架構上的諮詢以及工具的解說<br>\nvscode Co-pilot 幫我整理我的屎山代碼<br>\n擁有個人 Blog 的電神們的網頁css檔案<br>\n還有很多…<br>\n<strong>不知道要謝誰的話，就謝天吧!</strong></p>\n",
	{
		headings: 14,
		localImagePaths: 24,
		remoteImagePaths: 25,
		frontmatter: 26,
		imagePaths: 27
	},
	[
		15,
		18,
		20,
		22
	],
	{
		depth: 16,
		slug: 17,
		text: 17
	},
	2,
	"技術",
	{
		depth: 16,
		slug: 19,
		text: 19
	},
	"內容",
	{
		depth: 16,
		slug: 21,
		text: 21
	},
	"未來展望",
	{
		depth: 16,
		slug: 23,
		text: 23
	},
	"致謝",
	[],
	[],
	{
		title: 3,
		date: 6,
		subject: 7
	},
	[],
	"astro教學",
	{
		id: 28,
		data: 30,
		body: 34,
		filePath: 35,
		digest: 36,
		rendered: 37
	},
	{
		title: 31,
		date: 32,
		subject: 33
	},
	"astro 教學",
	"2026年8月",
	"# article",
	"## 下載必要資料\r\n如果你擁有的是包含完整`package.json`的檔案，僅需執行\r\n```bash\r\nnpm install\r\n```\r\n如果沒有，於專案根目錄的終端機執行\r\n```bash\r\nnpm create astro@latest\r\n```\r\n\r\n## 初始化與本地運行\r\n在確定該有的元件都有了時候，執行\r\n```bash\r\nnpm run dev\r\n```\r\n即可跑出`localhost:4321`網頁。\r\n\r\n## 元件\r\n### components\r\n#### header\r\n掌管`header`區塊，只要把他弄好，主視覺大概就沒問題了。\r\n#### footer\r\n可以在下面放運行時間、copyright等東西。\r\n#### others\r\n可以製作彈窗，表格等元件，這樣在不同頁面就可以用到相同元素。\r\n### mainlayout\r\n引用`footer`與`header`，免去後續`pages`要去引用他們的麻煩；也可把`title`整合在`mainlayout`方便維護\r\n```astro\r\n---\r\n// src/layout/mainlayout.astro\r\nimport Header from '../components/header.astro';\r\nimport Footer from '../components/footer.astro';\r\nconst { title = \"weilinlai的網站\" } = Astro.props;  //給後續不同頁面做title傳輸\r\n---\r\n<html lang=\"zh-TW\">\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>{title}</title>\r\n    <link rel=\"icon\" href=\"icon網址or位址\" />    \r\n</head>\r\n<body>\r\n    <Header />\r\n    <main class=\"main-container\">\r\n        <slot />\r\n    </main>  \r\n    <Footer />\r\n</body>\r\n</html>\r\n```\r\n另外，全域`style`也可以放這裡，記得開`is:global`。\r\n### pages\r\n有了`mainlayout`，在`pages`就只需要呼叫`mainlayout`啦!\r\n```astro\r\n---\r\n// src/pages/index.astro\r\nimport MainLayout from '../layout/mainlayout.astro';\r\n---\r\n\r\n<MainLayout title=\"title，可以傳回去layout\">\r\n    <div class=\"text-box\">\r\n        <h1>Welcome!</h1>\r\n        <p>點擊上方選單開始探索</p>\r\n    </div>\r\n</MainLayout>\r\n```\r\n## 架構\r\n```text\r\nastro-page/                     # 根目錄\r\n├── .github/\r\n│   └── workflows/\r\n│       └── deploy.yml          # GitHub Actions 自動部署設定(如果不是用github page那就不需要)\r\n├── public/                     # 所有靜態資源裝在這裡\r\n├── src/\r\n|   ├── assets/                 # 需要編譯的資源放這邊\r\n│   ├── components/             # 可複用的 HTML / UI 元件\r\n│   │   ├── header.astro        # 導覽列\r\n│   │   └── footer.astro        # 頁尾資訊與資料來源聲明\r\n│   ├── layouts/\r\n│   │   └── mainlayout.astro    # 全站統一的主版型 (包含 Meta、CSS 與 JS 引入)\r\n│   └── pages/\r\n│       ├── index.astro         # 網站首頁 \r\n│       └── www.astro           # 其他頁面\r\n├── .gitignore\r\n├── README.md                   # 專案 README 文件\r\n├── astro.config.mjs            # Astro 專案設定檔\r\n├── package.json                # npm 套件與指令設定\r\n└── package-lock.json\r\n```\r\n## 部屬\r\n### 打包\r\n執行\r\n```bash\r\nnpm run build\r\n```\r\n### 預覽\r\n```bash\r\nnpm run preview\r\n```\r\n### deploy\r\n如果用github action，`git- push`上去他會自己跑。\r\n如果用vercel，登入or註冊，選擇repo，選擇語言`astro`...",
	"src/content/article/astro教學.md",
	"729d33bccb9f4f83",
	{
		html: 38,
		metadata: 39
	},
	"<h2 id=\"下載必要資料\">下載必要資料</h2>\n<p>如果你擁有的是包含完整<code>package.json</code>的檔案，僅需執行</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> install</span></span></code></pre>\n<p>如果沒有，於專案根目錄的終端機執行</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> create</span><span style=\"color:#9ECBFF\"> astro@latest</span></span></code></pre>\n<h2 id=\"初始化與本地運行\">初始化與本地運行</h2>\n<p>在確定該有的元件都有了時候，執行</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> run</span><span style=\"color:#9ECBFF\"> dev</span></span></code></pre>\n<p>即可跑出<code>localhost:4321</code>網頁。</p>\n<h2 id=\"元件\">元件</h2>\n<h3 id=\"components\">components</h3>\n<h4 id=\"header\">header</h4>\n<p>掌管<code>header</code>區塊，只要把他弄好，主視覺大概就沒問題了。</p>\n<h4 id=\"footer\">footer</h4>\n<p>可以在下面放運行時間、copyright等東西。</p>\n<h4 id=\"others\">others</h4>\n<p>可以製作彈窗，表格等元件，這樣在不同頁面就可以用到相同元素。</p>\n<h3 id=\"mainlayout\">mainlayout</h3>\n<p>引用<code>footer</code>與<code>header</code>，免去後續<code>pages</code>要去引用他們的麻煩；也可把<code>title</code>整合在<code>mainlayout</code>方便維護</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"astro\"><code><span class=\"line\"><span style=\"color:#6A737D\">---</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">// src/layout/mainlayout.astro</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">import</span><span style=\"color:#E1E4E8\"> Header </span><span style=\"color:#F97583\">from</span><span style=\"color:#9ECBFF\"> '../components/header.astro'</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">import</span><span style=\"color:#E1E4E8\"> Footer </span><span style=\"color:#F97583\">from</span><span style=\"color:#9ECBFF\"> '../components/footer.astro'</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">const</span><span style=\"color:#E1E4E8\"> { </span><span style=\"color:#79B8FF\">title</span><span style=\"color:#F97583\"> =</span><span style=\"color:#9ECBFF\"> \"weilinlai的網站\"</span><span style=\"color:#E1E4E8\"> } </span><span style=\"color:#F97583\">=</span><span style=\"color:#E1E4E8\"> Astro.props;  </span><span style=\"color:#6A737D\">//給後續不同頁面做title傳輸</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">---</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">html</span><span style=\"color:#B392F0\"> lang</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"zh-TW\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">head</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">meta</span><span style=\"color:#B392F0\"> charset</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"utf-8\"</span><span style=\"color:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">meta</span><span style=\"color:#B392F0\"> name</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"viewport\"</span><span style=\"color:#B392F0\"> content</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"width=device-width, initial-scale=1.0\"</span><span style=\"color:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">title</span><span style=\"color:#E1E4E8\">>{title}&#x3C;/</span><span style=\"color:#85E89D\">title</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">link</span><span style=\"color:#B392F0\"> rel</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"icon\"</span><span style=\"color:#B392F0\"> href</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"icon網址or位址\"</span><span style=\"color:#E1E4E8\"> />    </span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;/</span><span style=\"color:#85E89D\">head</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">body</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#79B8FF\">Header</span><span style=\"color:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">main</span><span style=\"color:#B392F0\"> class</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"main-container\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        &#x3C;</span><span style=\"color:#85E89D\">slot</span><span style=\"color:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;/</span><span style=\"color:#85E89D\">main</span><span style=\"color:#E1E4E8\">>  </span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#79B8FF\">Footer</span><span style=\"color:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;/</span><span style=\"color:#85E89D\">body</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;/</span><span style=\"color:#85E89D\">html</span><span style=\"color:#E1E4E8\">></span></span></code></pre>\n<p>另外，全域<code>style</code>也可以放這裡，記得開<code>is:global</code>。</p>\n<h3 id=\"pages\">pages</h3>\n<p>有了<code>mainlayout</code>，在<code>pages</code>就只需要呼叫<code>mainlayout</code>啦!</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"astro\"><code><span class=\"line\"><span style=\"color:#6A737D\">---</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">// src/pages/index.astro</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">import</span><span style=\"color:#E1E4E8\"> MainLayout </span><span style=\"color:#F97583\">from</span><span style=\"color:#9ECBFF\"> '../layout/mainlayout.astro'</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">---</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#79B8FF\">MainLayout</span><span style=\"color:#B392F0\"> title</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"title，可以傳回去layout\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">div</span><span style=\"color:#B392F0\"> class</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"text-box\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        &#x3C;</span><span style=\"color:#85E89D\">h1</span><span style=\"color:#E1E4E8\">>Welcome!&#x3C;/</span><span style=\"color:#85E89D\">h1</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">        &#x3C;</span><span style=\"color:#85E89D\">p</span><span style=\"color:#E1E4E8\">>點擊上方選單開始探索&#x3C;/</span><span style=\"color:#85E89D\">p</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;/</span><span style=\"color:#85E89D\">div</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;/</span><span style=\"color:#79B8FF\">MainLayout</span><span style=\"color:#E1E4E8\">></span></span></code></pre>\n<h2 id=\"架構\">架構</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"text\"><code><span class=\"line\"><span>astro-page/                     # 根目錄</span></span>\n<span class=\"line\"><span>├── .github/</span></span>\n<span class=\"line\"><span>│   └── workflows/</span></span>\n<span class=\"line\"><span>│       └── deploy.yml          # GitHub Actions 自動部署設定(如果不是用github page那就不需要)</span></span>\n<span class=\"line\"><span>├── public/                     # 所有靜態資源裝在這裡</span></span>\n<span class=\"line\"><span>├── src/</span></span>\n<span class=\"line\"><span>|   ├── assets/                 # 需要編譯的資源放這邊</span></span>\n<span class=\"line\"><span>│   ├── components/             # 可複用的 HTML / UI 元件</span></span>\n<span class=\"line\"><span>│   │   ├── header.astro        # 導覽列</span></span>\n<span class=\"line\"><span>│   │   └── footer.astro        # 頁尾資訊與資料來源聲明</span></span>\n<span class=\"line\"><span>│   ├── layouts/</span></span>\n<span class=\"line\"><span>│   │   └── mainlayout.astro    # 全站統一的主版型 (包含 Meta、CSS 與 JS 引入)</span></span>\n<span class=\"line\"><span>│   └── pages/</span></span>\n<span class=\"line\"><span>│       ├── index.astro         # 網站首頁 </span></span>\n<span class=\"line\"><span>│       └── www.astro           # 其他頁面</span></span>\n<span class=\"line\"><span>├── .gitignore</span></span>\n<span class=\"line\"><span>├── README.md                   # 專案 README 文件</span></span>\n<span class=\"line\"><span>├── astro.config.mjs            # Astro 專案設定檔</span></span>\n<span class=\"line\"><span>├── package.json                # npm 套件與指令設定</span></span>\n<span class=\"line\"><span>└── package-lock.json</span></span></code></pre>\n<h2 id=\"部屬\">部屬</h2>\n<h3 id=\"打包\">打包</h3>\n<p>執行</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> run</span><span style=\"color:#9ECBFF\"> build</span></span></code></pre>\n<h3 id=\"預覽\">預覽</h3>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#B392F0\">npm</span><span style=\"color:#9ECBFF\"> run</span><span style=\"color:#9ECBFF\"> preview</span></span></code></pre>\n<h3 id=\"deploy\">deploy</h3>\n<p>如果用github action，<code>git- push</code>上去他會自己跑。\r\n如果用vercel，登入or註冊，選擇repo，選擇語言<code>astro</code>…</p>\n",
	{
		headings: 40,
		localImagePaths: 71,
		remoteImagePaths: 72,
		frontmatter: 73,
		imagePaths: 74
	},
	[
		41,
		43,
		45,
		47,
		50,
		53,
		55,
		57,
		59,
		61,
		63,
		65,
		67,
		69
	],
	{
		depth: 16,
		slug: 42,
		text: 42
	},
	"下載必要資料",
	{
		depth: 16,
		slug: 44,
		text: 44
	},
	"初始化與本地運行",
	{
		depth: 16,
		slug: 46,
		text: 46
	},
	"元件",
	{
		depth: 48,
		slug: 49,
		text: 49
	},
	3,
	"components",
	{
		depth: 51,
		slug: 52,
		text: 52
	},
	4,
	"header",
	{
		depth: 51,
		slug: 54,
		text: 54
	},
	"footer",
	{
		depth: 51,
		slug: 56,
		text: 56
	},
	"others",
	{
		depth: 48,
		slug: 58,
		text: 58
	},
	"mainlayout",
	{
		depth: 48,
		slug: 60,
		text: 60
	},
	"pages",
	{
		depth: 16,
		slug: 62,
		text: 62
	},
	"架構",
	{
		depth: 16,
		slug: 64,
		text: 64
	},
	"部屬",
	{
		depth: 48,
		slug: 66,
		text: 66
	},
	"打包",
	{
		depth: 48,
		slug: 68,
		text: 68
	},
	"預覽",
	{
		depth: 48,
		slug: 70,
		text: 70
	},
	"deploy",
	[],
	[],
	{
		title: 31,
		date: 32,
		subject: 33
	},
	[],
	"log",
	{
		id: 75,
		data: 77,
		body: 79,
		filePath: 80,
		digest: 81,
		rendered: 82
	},
	{
		title: 78,
		date: 6,
		subject: 7
	},
	"日誌",
	"**2026/1**  網站的開始，是一個簡單，只有一些網頁連結的陽春網頁。\\\r\n**2026/6**  構思改造，初步使用astro架構，並於本地測試...\\\r\n**2026/7**  完善`header`、加上hamburger選單。\\\r\n**2026/7**  加入`post`，首次使用`astro`的`server`功能，並與伺服器連動，是本網站邁向動態網站的里程碑。\\\r\n**2026/7**  加入`article`，在這裡寫入文章，並採用`Mark Down`文件編寫。\\\r\n**2026/7**  更新layout。\\\r\n**2026/8**  新增訪客數功能。\\\r\n**2026/8**  改善`Mark Down`外觀函式。\r\n\r\n> ...努力中",
	"src/content/article/log.md",
	"e3aee4f0e38603b5",
	{
		html: 83,
		metadata: 84
	},
	"<p><strong>2026/1</strong>  網站的開始，是一個簡單，只有一些網頁連結的陽春網頁。<br>\n<strong>2026/6</strong>  構思改造，初步使用astro架構，並於本地測試…<br>\n<strong>2026/7</strong>  完善<code>header</code>、加上hamburger選單。<br>\n<strong>2026/7</strong>  加入<code>post</code>，首次使用<code>astro</code>的<code>server</code>功能，並與伺服器連動，是本網站邁向動態網站的里程碑。<br>\n<strong>2026/7</strong>  加入<code>article</code>，在這裡寫入文章，並採用<code>Mark Down</code>文件編寫。<br>\n<strong>2026/7</strong>  更新layout。<br>\n<strong>2026/8</strong>  新增訪客數功能。<br>\n<strong>2026/8</strong>  改善<code>Mark Down</code>外觀函式。</p>\n<blockquote>\n<p>…努力中</p>\n</blockquote>\n",
	{
		headings: 85,
		localImagePaths: 86,
		remoteImagePaths: 87,
		frontmatter: 88,
		imagePaths: 89
	},
	[],
	[],
	[],
	{
		title: 78,
		date: 6,
		subject: 7
	},
	[],
	"test",
	{
		id: 90,
		data: 92,
		body: 96,
		filePath: 97,
		digest: 98,
		rendered: 99
	},
	{
		title: 93,
		date: 94,
		subject: 95
	},
	"Markdown 測試",
	"1989年6月",
	"# test",
	"# H1 標題\r\n## H2 標題\r\n### H3 標題\r\n#### H4 標題\r\n##### H5 標題\r\n###### H6 標題\r\n\r\n## 字體強調\r\n這是一段文字，包含了 *斜體*、**粗體**，以及使用波浪符號產生的 ~~刪除線~~。你也可以使用 _下劃線_ 或 __雙下劃線__ 來達到相同的強調效果。\r\n\r\n## 列表測試\r\n1. 第一個有序列表項目\r\n2. 另一個項目\r\n   * 無序子列表項目 A\r\n   * 無序子列表項目 B\r\n     1. 嵌套的有序子列表\r\n\r\n## 連結與圖片\r\n這是一個 [行內樣式的連結](https://www.google.com)。\r\n這是一個包含標題的 [連結](https://www.google.com \"Google 的首頁\")。\r\n\r\n![圖片替代文字](https://raw.githubusercontent.com/adam-p/markdown-here/master/src/common/images/icon48.png \"Logo 標題文字\")\r\n\r\n## 程式碼區塊\r\n這是一段行內的 `code` 測試。\r\n\r\n```javascript\r\n// JavaScript 語法高亮測試\r\nvar s = \"JavaScript 語法高亮\";\r\nalert(s); \r\n```\r\n```python\r\n# Python 語法高亮測試\r\ns = \"Python 語法高亮\"\r\nprint s\r\n```\r\n```c\r\n//C 語法高亮測試\r\ns = \"c 語法高亮\";\r\nprintf(%d,5);\r\n```\r\n引用：\r\n\r\n> 在電子郵件或文章中，引用文字可以很方便的模擬回應的文字。\r\n> 這行也在同樣的引用區塊。\r\n> \r\n> 就算這行很長，依然可以很好的被引用，也可以在引用文字中 *放入* 其他 **Markdown** 語法。",
	"src/content/article/test.md",
	"b442610560af0189",
	{
		html: 100,
		metadata: 101
	},
	"<h1 id=\"h1-標題\">H1 標題</h1>\n<h2 id=\"h2-標題\">H2 標題</h2>\n<h3 id=\"h3-標題\">H3 標題</h3>\n<h4 id=\"h4-標題\">H4 標題</h4>\n<h5 id=\"h5-標題\">H5 標題</h5>\n<h6 id=\"h6-標題\">H6 標題</h6>\n<h2 id=\"字體強調\">字體強調</h2>\n<p>這是一段文字，包含了 <em>斜體</em>、<strong>粗體</strong>，以及使用波浪符號產生的 <del>刪除線</del>。你也可以使用 <em>下劃線</em> 或 <strong>雙下劃線</strong> 來達到相同的強調效果。</p>\n<h2 id=\"列表測試\">列表測試</h2>\n<ol>\n<li>第一個有序列表項目</li>\n<li>另一個項目\n<ul>\n<li>無序子列表項目 A</li>\n<li>無序子列表項目 B\n<ol>\n<li>嵌套的有序子列表</li>\n</ol>\n</li>\n</ul>\n</li>\n</ol>\n<h2 id=\"連結與圖片\">連結與圖片</h2>\n<p>這是一個 <a href=\"https://www.google.com\">行內樣式的連結</a>。\r\n這是一個包含標題的 <a href=\"https://www.google.com\" title=\"Google 的首頁\">連結</a>。</p>\n<p><img src=\"https://raw.githubusercontent.com/adam-p/markdown-here/master/src/common/images/icon48.png\" alt=\"圖片替代文字\" title=\"Logo 標題文字\"></p>\n<h2 id=\"程式碼區塊\">程式碼區塊</h2>\n<p>這是一段行內的 <code>code</code> 測試。</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"javascript\"><code><span class=\"line\"><span style=\"color:#6A737D\">// JavaScript 語法高亮測試</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#E1E4E8\"> s </span><span style=\"color:#F97583\">=</span><span style=\"color:#9ECBFF\"> \"JavaScript 語法高亮\"</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">alert</span><span style=\"color:#E1E4E8\">(s); </span></span></code></pre>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"python\"><code><span class=\"line\"><span style=\"color:#6A737D\"># Python 語法高亮測試</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">s </span><span style=\"color:#F97583\">=</span><span style=\"color:#9ECBFF\"> \"Python 語法高亮\"</span></span>\n<span class=\"line\"><span style=\"color:#79B8FF\">print</span><span style=\"color:#E1E4E8\"> s</span></span></code></pre>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"c\"><code><span class=\"line\"><span style=\"color:#6A737D\">//C 語法高亮測試</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">s </span><span style=\"color:#F97583\">=</span><span style=\"color:#9ECBFF\"> \"c 語法高亮\"</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#B392F0\">printf</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#F97583\">%</span><span style=\"color:#E1E4E8\">d,</span><span style=\"color:#79B8FF\">5</span><span style=\"color:#E1E4E8\">);</span></span></code></pre>\n<p>引用：</p>\n<blockquote>\n<p>在電子郵件或文章中，引用文字可以很方便的模擬回應的文字。\r\n這行也在同樣的引用區塊。</p>\n<p>就算這行很長，依然可以很好的被引用，也可以在引用文字中 <em>放入</em> 其他 <strong>Markdown</strong> 語法。</p>\n</blockquote>\n",
	{
		headings: 102,
		localImagePaths: 132,
		remoteImagePaths: 133,
		frontmatter: 134,
		imagePaths: 135
	},
	[
		103,
		107,
		110,
		113,
		116,
		120,
		124,
		126,
		128,
		130
	],
	{
		depth: 104,
		slug: 105,
		text: 106
	},
	1,
	"h1-標題",
	"H1 標題",
	{
		depth: 16,
		slug: 108,
		text: 109
	},
	"h2-標題",
	"H2 標題",
	{
		depth: 48,
		slug: 111,
		text: 112
	},
	"h3-標題",
	"H3 標題",
	{
		depth: 51,
		slug: 114,
		text: 115
	},
	"h4-標題",
	"H4 標題",
	{
		depth: 117,
		slug: 118,
		text: 119
	},
	5,
	"h5-標題",
	"H5 標題",
	{
		depth: 121,
		slug: 122,
		text: 123
	},
	6,
	"h6-標題",
	"H6 標題",
	{
		depth: 16,
		slug: 125,
		text: 125
	},
	"字體強調",
	{
		depth: 16,
		slug: 127,
		text: 127
	},
	"列表測試",
	{
		depth: 16,
		slug: 129,
		text: 129
	},
	"連結與圖片",
	{
		depth: 16,
		slug: 131,
		text: 131
	},
	"程式碼區塊",
	[],
	[],
	{
		title: 93,
		date: 94,
		subject: 95
	},
	[],
	"meta::meta",
	[
		"Map",
		138,
		139,
		140,
		141,
		142,
		143
	],
	"astro-config-digest",
	"{\"root\":{},\"srcDir\":{},\"publicDir\":{},\"outDir\":{},\"cacheDir\":{},\"compressHTML\":\"jsx\",\"base\":\"/\",\"trailingSlash\":\"ignore\",\"output\":\"server\",\"scopedStyleStrategy\":\"attribute\",\"build\":{\"format\":\"directory\",\"client\":{},\"server\":{},\"assets\":\"_astro\",\"serverEntry\":\"entry.mjs\",\"redirects\":false,\"inlineStylesheets\":\"auto\",\"concurrency\":1},\"server\":{\"open\":false,\"host\":false,\"port\":4321,\"allowedHosts\":[]},\"redirects\":{},\"image\":{\"endpoint\":{\"route\":\"/_image\"},\"service\":{\"entrypoint\":\"astro/assets/services/sharp\",\"config\":{}},\"dangerouslyProcessSVG\":false,\"domains\":[],\"remotePatterns\":[],\"responsiveStyles\":false},\"devToolbar\":{\"enabled\":true},\"markdown\":{\"syntaxHighlight\":{\"type\":\"shiki\",\"excludeLangs\":[\"math\"]},\"shikiConfig\":{\"langs\":[],\"langAlias\":{},\"theme\":\"github-dark\",\"themes\":{},\"wrap\":false,\"transformers\":[]},\"remarkPlugins\":[],\"rehypePlugins\":[],\"remarkRehype\":{},\"processor\":{\"name\":\"satteri\",\"options\":{\"mdastPlugins\":[],\"hastPlugins\":[],\"features\":{}}}},\"security\":{\"checkOrigin\":true,\"allowedDomains\":[],\"csp\":false,\"actionBodySizeLimit\":1048576,\"serverIslandBodySizeLimit\":1048576},\"env\":{\"schema\":{},\"validateSecrets\":false},\"prerenderConflictBehavior\":\"warn\",\"fetchFile\":\"fetch\",\"experimental\":{\"clientPrerender\":false,\"contentIntellisense\":false,\"chromeDevtoolsWorkspace\":false},\"legacy\":{\"collectionsBackwardsCompat\":false}}",
	"astro-version",
	"7.0.7",
	"content-config-digest",
	"b2169f83d4f01791"
];
//#endregion
export { _astro_data_layer_content_default as default };
