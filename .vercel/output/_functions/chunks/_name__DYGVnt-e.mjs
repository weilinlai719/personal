import { n as __exportAll, t as createComponent } from "./compiler_awyIfSGs.mjs";
import { T as createAstro, f as renderTemplate, g as maybeRenderHead, o as renderComponent } from "./server_4y7-RSFg.mjs";
import { n as renderScript, t as $$Mainlayout } from "./mainlayout_Doqbc8aw.mjs";
import { n as getEntry, r as renderEntry } from "./_astro_content_CJnYH2rb.mjs";
//#region src/pages/article/[name].astro
var _name__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Name,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Name = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Name;
	const { name } = Astro.params;
	if (!name) return Astro.redirect("/404");
	const entry = await getEntry("article", name);
	if (!entry) return Astro.redirect("/404");
	const { Content } = await renderEntry(entry);
	const { title, date, subject } = entry.data;
	return renderTemplate`${renderComponent($$result, "MainLayout", $$Mainlayout, { "title": `Weilin Lai - ${title}` }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="detail-container"><a href="/article/" class="back-btn">← 返回列表</a><article class="article-post-card"><header class="article-header"><div class="title-wrapper"><div class="orange-bar"></div><h1 class="article-main-title">${title}</h1></div><div class="meta-wrapper">${date && renderTemplate`<span class="meta-pill">📅 ${date}</span>`}${subject && renderTemplate`<span class="meta-pill">${subject}</span>`}</div></header><!-- 乾淨的內容容器 --><div class="md-content">${renderComponent($$result, "Content", Content, {})}</div></article></div>` })}${renderScript($$result, "C:/js/Github/src/pages/article/[name].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/js/Github/src/pages/article/[name].astro", void 0);
var $$file = "C:/js/Github/src/pages/article/[name].astro";
var $$url = "/article/[name]";
//#endregion
//#region \0virtual:astro:page:src/pages/article/[name]@_@astro
var page = () => _name__exports;
//#endregion
export { page };
