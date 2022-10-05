import { GetFullscreenLoadingElementCommand } from "../Command/GetFullscreenLoadingElementCommand.mjs";
import { GetLoadingElementCommand } from "../Command/GetLoadingElementCommand.mjs";

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
     * @returns {FullscreenLoadingElement}
     */
    getFullscreenLoadingElement() {
        return GetFullscreenLoadingElementCommand.new(
            this.#css_api,
            this
        )
            .getFullscreenLoadingElement();
    }

    /**
     * @returns {LoadingElement}
     */
    getLoadingElement() {
        return GetLoadingElementCommand.new(
            this.#css_api
        )
            .getLoadingElement();
    }
}
