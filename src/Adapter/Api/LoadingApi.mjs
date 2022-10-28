/** @typedef {import("../../../../flux-css-api/src/Adapter/Api/CssApi.mjs").CssApi} CssApi */
/** @typedef {import("../Loading/FullscreenLoadingElement.mjs").FullscreenLoadingElement} FullscreenLoadingElement */
/** @typedef {import("../Loading/LoadingElement.mjs").LoadingElement} LoadingElement */
/** @typedef {import("../../Service/Loading/Port/LoadingService.mjs").LoadingService} LoadingService */

const __dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

export class LoadingApi {
    /**
     * @type {CssApi}
     */
    #css_api;
    /**
     * @type {LoadingService | null}
     */
    #loading_service = null;

    /**
     * @param {CssApi} css_api
     * @returns {LoadingApi}
     */
    static new(css_api) {
        return new this(
            css_api
        );
    }

    /**
     * @param {CssApi} css_api
     * @private
     */
    constructor(css_api) {
        this.#css_api = css_api;
    }

    /**
     * @returns {Promise<void>}
     */
    async init() {
        this.#css_api.importCssToRoot(
            document,
            `${__dirname}/../Loading/LoadingVariables.css`
        );
    }

    /**
     * @returns {Promise<FullscreenLoadingElement>}
     */
    async getFullscreenLoadingElement() {
        return (await this.#getLoadingService()).getFullscreenLoadingElement();
    }

    /**
     * @returns {Promise<LoadingElement>}
     */
    async getLoadingElement() {
        return (await this.#getLoadingService()).getLoadingElement();
    }

    /**
     * @returns {Promise<LoadingService>}
     */
    async #getLoadingService() {
        this.#loading_service ??= (await import("../../Service/Loading/Port/LoadingService.mjs")).LoadingService.new(
            this.#css_api
        );

        return this.#loading_service;
    }
}
