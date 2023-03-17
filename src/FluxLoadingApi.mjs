/** @typedef {import("../../flux-css-api/src/FluxCssApi.mjs").FluxCssApi} FluxCssApi */
/** @typedef {import("./Loading/FullscreenLoadingElement.mjs").FullscreenLoadingElement} FullscreenLoadingElement */
/** @typedef {import("./Loading/LoadingElement.mjs").LoadingElement} LoadingElement */

const __dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

export class FluxLoadingApi {
    /**
     * @type {FluxCssApi}
     */
    #flux_css_api;

    /**
     * @param {FluxCssApi} flux_css_api
     * @returns {FluxLoadingApi}
     */
    static new(flux_css_api) {
        return new this(
            flux_css_api
        );
    }

    /**
     * @param {FluxCssApi} flux_css_api
     * @private
     */
    constructor(flux_css_api) {
        this.#flux_css_api = flux_css_api;
    }

    /**
     * @returns {Promise<void>}
     */
    async init() {
        this.#flux_css_api.importCssToRoot(
            document,
            `${__dirname}/Loading/LoadingVariables.css`
        );
    }

    /**
     * @returns {Promise<FullscreenLoadingElement>}
     */
    async getFullscreenLoadingElement() {
        return (await import("./Loading/FullscreenLoadingElement.mjs")).FullscreenLoadingElement.new(
            this.#flux_css_api,
            await this.getLoadingElement()
        );
    }

    /**
     * @returns {Promise<LoadingElement>}
     */
    async getLoadingElement() {
        return (await import("./Loading/LoadingElement.mjs")).LoadingElement.new(
            this.#flux_css_api
        );
    }
}
