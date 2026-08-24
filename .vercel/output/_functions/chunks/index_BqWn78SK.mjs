import { n as __exportAll, t as createComponent } from "./compiler_awyIfSGs.mjs";
import { f as renderTemplate, g as maybeRenderHead, o as renderComponent, v as addAttribute } from "./server_4y7-RSFg.mjs";
import { t as $$Mainlayout } from "./mainlayout_Doqbc8aw.mjs";
import { t as getCollection } from "./_astro_content_CJnYH2rb.mjs";
//#region src/pages/article/index.astro
var article_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const allArticles = await getCollection("article");
	allArticles.sort((a, b) => {
		const dateA = a.data.date || "";
		return (b.data.date || "").localeCompare(dateA);
	});
	return renderTemplate`${renderComponent($$result, "MainLayout", $$Mainlayout, { "title": "Weilin Lai - 文章" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="science-archive-container"><h1 class="page-title">💬 Articles</h1><div class="science-cards-grid">${allArticles.map((article) => renderTemplate`<a${addAttribute(`/article/${article.id}/`, "href")} class="science-card-link"><div class="custom-science-card"><div class="card-left-content"><div class="title-wrapper"><div class="orange-bar"></div><h2 class="card-main-title">${article.data.title || "未命名文章"}</h2></div><div class="meta-wrapper"><span class="meta-pill">📅 ${article.data.date || "未分類"}</span><span class="meta-pill-tag"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>${article.data.subject || "# 文章"}</span></div><p class="card-summary">點擊進入查看詳細內容...</p></div><div class="card-right-arrow"><i class="arrow-shape"></i></div></div></a>`)}</div></div>` })}`;
}, "C:/js/Github/src/pages/article/index.astro", void 0);
var $$file = "C:/js/Github/src/pages/article/index.astro";
var $$url = "/article";
//#endregion
//#region \0virtual:astro:page:src/pages/article/index@_@astro
var page = () => article_exports;
//#endregion
export { page };
