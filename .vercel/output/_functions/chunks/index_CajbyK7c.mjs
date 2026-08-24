import { n as __exportAll, t as createComponent } from "./compiler_awyIfSGs.mjs";
import { f as renderTemplate, g as maybeRenderHead, o as renderComponent } from "./server_4y7-RSFg.mjs";
import { t as $$Mainlayout } from "./mainlayout_Doqbc8aw.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "MainLayout", $$Mainlayout, {
		"title": "Weilin Lai - 首頁",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="hero-box" data-astro-cid-lcdefpme><h1 data-astro-cid-lcdefpme>Welcome!</h1><p data-astro-cid-lcdefpme>點擊上方選單開始探索</p></div>` })}`;
}, "C:/js/Github/src/pages/index.astro", void 0);
var $$file = "C:/js/Github/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
