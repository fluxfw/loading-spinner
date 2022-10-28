/** @typedef {import("../../../../../flux-css-api/src/Adapter/Api/CssApi.mjs").CssApi} CssApi */
/** @typedef {import("../../../Adapter/Loading/FullscreenLoadingElement.mjs").FullscreenLoadingElement} FullscreenLoadingElement */
/** @typedef {import("../Port/LoadingService.mjs").LoadingService} LoadingService */

export class GetFullscreenLoadingElementCommand {
    /**
     * @type {CssApi}
     */
    #css_api;
    /**
     * @type {LoadingService}
     */
    #loading_service;

    /**
     * @param {CssApi} css_api
     * @param {LoadingService} loading_service
     * @returns {GetFullscreenLoadingElementCommand}
     */
    static new(css_api, loading_service) {
        return new this(
            css_api,
            loading_service
        );
    }

    /**
     * @param {CssApi} css_api
     * @param {LoadingService} loading_service
     * @private
     */
    constructor(css_api, loading_service) {
        this.#css_api = css_api;
        this.#loading_service = loading_service;
    }

    /**
     * @returns {Promise<FullscreenLoadingElement>}
     */
    async getFullscreenLoadingElement() {
        return (await import("../../../Adapter/Loading/FullscreenLoadingElement.mjs")).FullscreenLoadingElement.new(
            this.#css_api,
            await this.#loading_service.getLoadingElement()
        );
    }
}
