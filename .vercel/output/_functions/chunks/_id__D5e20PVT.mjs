import { n as __exportAll, t as createComponent } from "./compiler_awyIfSGs.mjs";
import { f as renderTemplate, g as maybeRenderHead, o as renderComponent } from "./server_4y7-RSFg.mjs";
import { n as renderScript, t as $$Mainlayout } from "./mainlayout_Doqbc8aw.mjs";
//#region src/pages/post/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Id = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "MainLayout", $$Mainlayout, { "title": "Weilin Lai - 貼文內容" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="detail-container"><a href="/post" class="back-btn"><span class="back-arrow">←</span> 返回列表</a><div id="post-container"><div class="loading-text">正在載入貼文內容...</div></div><div class="comment-section"><h3 class="section-title">💬 留言回覆</h3><div id="comments-container" class="comments-list"><div class="loading-text">正在載入留言...</div></div><div class="comment-form-wrapper"><h4 class="form-title">撰寫新留言</h4><form id="comment-form" class="comment-form"><div class="form-group"><input type="text" id="comment-name" placeholder="署名" required></div><div class="form-group"><textarea id="comment-content" rows="3" placeholder="留言內文..." required></textarea></div><button type="submit" class="submit-btn">送出留言</button></form></div></div></div>` })}${renderScript($$result, "C:/js/Github/src/pages/post/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/js/Github/src/pages/post/[id].astro", void 0);
var $$file = "C:/js/Github/src/pages/post/[id].astro";
var $$url = "/post/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/post/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
