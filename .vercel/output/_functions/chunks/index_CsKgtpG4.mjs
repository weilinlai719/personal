import { n as __exportAll, t as createComponent } from "./compiler_awyIfSGs.mjs";
import { f as renderTemplate, g as maybeRenderHead, o as renderComponent } from "./server_4y7-RSFg.mjs";
import { n as renderScript, t as $$Mainlayout } from "./mainlayout_Doqbc8aw.mjs";
//#region src/pages/post/index.astro
var post_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "MainLayout", $$Mainlayout, { "title": "Weilin Lai - post" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="board-container"><h1 class="page-title">💬 Posts</h1><div id="posts-container" class="posts-list"><div class="loading-text">載入貼文中，請稍候...</div></div></div>` })}${renderScript($$result, "C:/js/Github/src/pages/post/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/js/Github/src/pages/post/index.astro", void 0);
var $$file = "C:/js/Github/src/pages/post/index.astro";
var $$url = "/post";
//#endregion
//#region \0virtual:astro:page:src/pages/post/index@_@astro
var page = () => post_exports;
//#endregion
export { page };
