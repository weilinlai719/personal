import { n as __exportAll, t as createComponent } from "./compiler_awyIfSGs.mjs";
import { f as renderTemplate, g as maybeRenderHead, o as renderComponent } from "./server_4y7-RSFg.mjs";
import { n as renderScript, t as $$Mainlayout } from "./mainlayout_Doqbc8aw.mjs";
//#region src/pages/article/physics.astro
var physics_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Physics,
	file: () => $$file,
	url: () => $$url
});
var $$Physics = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "MainLayout", $$Mainlayout, {
		"title": "Weilin Lai - 物理探究",
		"data-astro-cid-fjci4ahe": true
	}, { "default": ($$result) => renderTemplate`<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"><\/script>${maybeRenderHead($$result)}<div class="physics-page-wrapper" data-astro-cid-fjci4ahe><a href="/article/" class="back-to-science-btn" data-astro-cid-fjci4ahe><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fjci4ahe><line x1="19" y1="12" x2="5" y2="12" data-astro-cid-fjci4ahe></line><polyline points="12 19 5 12 12 5" data-astro-cid-fjci4ahe></polyline></svg>回探究</a><div class="physics-pdf-container" data-astro-cid-fjci4ahe><img src="/science/physics.jpg" alt="物理" style="width: 100%; height: auto;" data-astro-cid-fjci4ahe><div id="pdf-viewer" data-astro-cid-fjci4ahe><div class="pdf-loading" data-astro-cid-fjci4ahe>報告載入中，請稍候...</div></div></div></div>` })}${renderScript($$result, "C:/js/Github/src/pages/article/physics.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/js/Github/src/pages/article/physics.astro", void 0);
var $$file = "C:/js/Github/src/pages/article/physics.astro";
var $$url = "/article/physics";
//#endregion
//#region \0virtual:astro:page:src/pages/article/physics@_@astro
var page = () => physics_exports;
//#endregion
export { page };
