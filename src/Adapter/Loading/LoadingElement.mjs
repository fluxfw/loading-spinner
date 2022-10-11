/** @typedef {import("../../../../flux-css-api/src/Adapter/Api/CssApi.mjs").CssApi} CssApi */

const __dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

export class LoadingElement extends HTMLElement {
    /**
     * @type {CssApi}
     */
    #css_api;
    /**
     * @type {ShadowRoot}
     */
    #shadow;

    /**
     * @param {CssApi} css_api
     * @returns {LoadingElement}
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
        super();

        this.#css_api = css_api;

        this.#shadow = this.attachShadow({ mode: "closed" });
        this.#css_api.importCssToRoot(
            this.#shadow,
            `${__dirname}/${this.constructor.name}.css`
        );
    }
}

export const LOADING_ELEMENT_TAG_NAME = "flux-loading";

customElements.define(LOADING_ELEMENT_TAG_NAME, LoadingElement);
