import { n as __exportAll, t as createComponent } from "./compiler_awyIfSGs.mjs";
import { f as renderTemplate, g as maybeRenderHead, o as renderComponent } from "./server_4y7-RSFg.mjs";
import { n as renderScript, t as $$Mainlayout } from "./mainlayout_Doqbc8aw.mjs";
//#region src/pages/article/chemistry.astro
var chemistry_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Chemistry,
	file: () => $$file,
	url: () => $$url
});
var $$Chemistry = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "MainLayout", $$Mainlayout, {
		"title": "Weilin Lai - 化學探究",
		"data-astro-cid-3myu67yd": true
	}, { "default": ($$result) => renderTemplate`<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"><\/script>${maybeRenderHead($$result)}<div class="physics-page-wrapper" data-astro-cid-3myu67yd><a href="/article/" class="back-to-science-btn" data-astro-cid-3myu67yd><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3myu67yd><line x1="19" y1="12" x2="5" y2="12" data-astro-cid-3myu67yd></line><polyline points="12 19 5 12 12 5" data-astro-cid-3myu67yd></polyline></svg>回探究</a><div class="physics-pdf-container" data-astro-cid-3myu67yd><img src="/science/chemistry.jpg" alt="化學" style="width: 100%; height: auto;" data-astro-cid-3myu67yd><div id="pdf-viewer" data-astro-cid-3myu67yd><div class="pdf-loading" data-astro-cid-3myu67yd>報告載入中，請稍候...</div></div></div></div>` })}${renderScript($$result, "C:/js/Github/src/pages/article/chemistry.astro?astro&type=script&index=0&lang.ts")}s`;
}, "C:/js/Github/src/pages/article/chemistry.astro", void 0);
var $$file = "C:/js/Github/src/pages/article/chemistry.astro";
var $$url = "/article/chemistry";
//#endregion
//#region \0virtual:astro:page:src/pages/article/chemistry@_@astro
var page = () => chemistry_exports;
//#endregion
export { page };
