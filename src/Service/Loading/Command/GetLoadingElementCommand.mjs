import { LoadingElement } from "../../../Adapter/Loading/LoadingElement.mjs";

/** @typedef {import("../../../../../flux-css-api/src/Adapter/Api/CssApi.mjs").CssApi} CssApi */

export class GetLoadingElementCommand {
    /**
     * @type {CssApi}
     */
    #css_api;

    /**
     * @param {CssApi} css_api
     * @returns {GetLoadingElementCommand}
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
     * @returns {LoadingElement}
     */
    getLoadingElement() {
        return LoadingElement.new(
            this.#css_api
        );
    }
}
