import { t as createComponent } from "./compiler_awyIfSGs.mjs";
import { T as createAstro, _ as renderHead, f as renderTemplate, g as maybeRenderHead, l as renderSlot, o as renderComponent, v as addAttribute, y as createRenderInstruction } from "./server_4y7-RSFg.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/header.astro
createAstro("https://astro.build");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const pathname = Astro.url.pathname;
	const isAbout = pathname.includes("/about");
	const ispost = pathname.includes("/post");
	const isarticle = pathname.includes("/article");
	return renderTemplate`${maybeRenderHead($$result)}<header class="navbar" data-astro-cid-4oan7hod><div class="nav-container" data-astro-cid-4oan7hod><div class="nav-logo" data-astro-cid-4oan7hod><a href="/" class="logo-text" data-astro-cid-4oan7hod>Weilin Lai</a></div><button class="menu-toggle" id="menuToggle" aria-label="切換選單" data-astro-cid-4oan7hod><span class="hamburger-bar" data-astro-cid-4oan7hod></span><span class="hamburger-bar" data-astro-cid-4oan7hod></span><span class="hamburger-bar" data-astro-cid-4oan7hod></span></button><nav class="nav-menu" id="navMenu" data-astro-cid-4oan7hod><div class="nav-links" data-astro-cid-4oan7hod><a href="/post/"${addAttribute([
		"nav-item",
		"nav-link",
		{ active: ispost }
	], "class:list")} data-astro-cid-4oan7hod>Posts</a><a href="/article/"${addAttribute([
		"nav-item",
		"nav-link",
		{ active: isarticle }
	], "class:list")} data-astro-cid-4oan7hod>article</a><div class="nav-item dropdown" data-astro-cid-4oan7hod><button class="dropdown-trigger" id="projectsTrigger" data-astro-cid-4oan7hod>projects<svg class="chevron-icon" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-4oan7hod><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-4oan7hod></path></svg></button><div class="dropdown-content" data-astro-cid-4oan7hod><a href="https://weilinlai719.github.io/luckydraw" class="dropdown-link" target="_blank" rel="noopener noreferrer" data-astro-cid-4oan7hod><span class="link-title" data-astro-cid-4oan7hod>🎁 抽獎器</span></a><a href="https://weilinlai719.github.io/earth-science-explore/" class="dropdown-link" target="_blank" rel="noopener noreferrer" data-astro-cid-4oan7hod><span class="link-title" data-astro-cid-4oan7hod>🌎 地科探究</span></a><a href="/projects/cui/" class="dropdown-link" target="_blank" rel="noopener noreferrer" data-astro-cid-4oan7hod><span class="link-title" data-astro-cid-4oan7hod>開源專案：CUI</span></a></div></div><a href="/about/"${addAttribute([
		"nav-item",
		"nav-link",
		{ active: isAbout }
	], "class:list")} data-astro-cid-4oan7hod>about</a></div></nav></div></header>${renderScript($$result, "C:/js/Github/src/components/header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/js/Github/src/components/header.astro", void 0);
//#endregion
//#region src/components/footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer" data-astro-cid-ddhozxeg><p class="footertext" data-astro-cid-ddhozxeg>© 2026<a href="https://github.com/weilinlai" target="_blank" data-astro-cid-ddhozxeg>weilinlai</a>. All Rights Reserved. &emsp;瀏覽人數: <span id="footer-visitor-count" data-astro-cid-ddhozxeg>載入中...</span>人</p><div class="footertext" data-astro-cid-ddhozxeg><span data-astro-cid-ddhozxeg>網頁已運行：</span>&nbsp;<span id="runtime-years" data-astro-cid-ddhozxeg>0</span> 年 &nbsp;<span id="runtime-days" data-astro-cid-ddhozxeg>0</span> 天 &nbsp;<span id="runtime-hours" data-astro-cid-ddhozxeg>0</span> 小時 &nbsp;<span id="runtime-minutes" data-astro-cid-ddhozxeg>0</span> 分 &nbsp;<span id="runtime-seconds" data-astro-cid-ddhozxeg>0</span> 秒</div></footer>${renderScript($$result, "C:/js/Github/src/components/footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/js/Github/src/components/footer.astro", void 0);
//#endregion
//#region src/layout/mainlayout.astro
createAstro("https://astro.build");
var $$Mainlayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Mainlayout;
	const { title = "weilinlai的網站" } = Astro.props;
	return renderTemplate`<html lang="zh-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2iImWJm50T5v5TTO5SpCdBtwzCethsvs6lPV7DZr6MPhcCKQ6DviTxpsV&s=10">${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main class="main-container">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/js/Github/src/layout/mainlayout.astro", void 0);
//#endregion
export { renderScript as n, $$Mainlayout as t };
