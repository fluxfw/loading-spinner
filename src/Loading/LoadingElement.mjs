/** @typedef {import("../../../flux-css-api/src/FluxCssApi.mjs").FluxCssApi} FluxCssApi */

const __dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

export class LoadingElement extends HTMLElement {
    /**
     * @type {FluxCssApi}
     */
    #flux_css_api;
    /**
     * @type {ShadowRoot}
     */
    #shadow;

    /**
     * @param {FluxCssApi} flux_css_api
     * @returns {LoadingElement}
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
        super();

        this.#flux_css_api = flux_css_api;

        this.#shadow = this.attachShadow({ mode: "closed" });
        this.#flux_css_api.importCssToRoot(
            this.#shadow,
            `${__dirname}/${this.constructor.name}.css`
        );
    }
}

export const LOADING_ELEMENT_TAG_NAME = "flux-loading";

customElements.define(LOADING_ELEMENT_TAG_NAME, LoadingElement);
