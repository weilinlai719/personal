import { n as getImage$1 } from "./assets_B6GRE7E8.mjs";
//#region \0virtual:astro:get-image
var imageConfig = {
	"endpoint": { "route": "/_image" },
	"service": {
		"entrypoint": "astro/assets/services/sharp",
		"config": {}
	},
	"dangerouslyProcessSVG": false,
	"domains": [],
	"remotePatterns": [],
	"responsiveStyles": false
};
Object.defineProperty(imageConfig, "assetQueryParams", {
	value: void 0,
	enumerable: false,
	configurable: true
});
var getImage = async (options) => await getImage$1(options, imageConfig);
//#endregion
export { getImage };
