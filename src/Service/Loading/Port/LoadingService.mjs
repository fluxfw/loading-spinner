/** @typedef {import("../../../../../flux-css-api/src/Adapter/Api/CssApi.mjs").CssApi} CssApi */
/** @typedef {import("../../../Adapter/Loading/FullscreenLoadingElement.mjs").FullscreenLoadingElement} FullscreenLoadingElement */
/** @typedef {import("../../../Adapter/Loading/LoadingElement.mjs").LoadingElement} LoadingElement */

export class LoadingService {
    /**
     * @type {CssApi}
     */
    #css_api;

    /**
     * @param {CssApi} css_api
     * @returns {LoadingService}
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
     * @returns {Promise<FullscreenLoadingElement>}
     */
    async getFullscreenLoadingElement() {
        return (await import("../Command/GetFullscreenLoadingElementCommand.mjs")).GetFullscreenLoadingElementCommand.new(
            this.#css_api,
            this
        )
            .getFullscreenLoadingElement();
    }

    /**
     * @returns {Promise<LoadingElement>}
     */
    async getLoadingElement() {
        return (await import("../Command/GetLoadingElementCommand.mjs")).GetLoadingElementCommand.new(
            this.#css_api
        )
            .getLoadingElement();
    }
}
