/** @typedef {import("../../../../flux-css-api/src/Adapter/Api/CssApi.mjs").CssApi} CssApi */
/** @typedef {import("../Loading/LoadingElement.mjs").LoadingElement} LoadingElement */

const __dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

export class FullscreenLoadingElement extends HTMLElement {
    /**
     * @type {CssApi}
     */
    #css_api;
    /**
     * @type {LoadingElement}
     */
    #loading_element;
    /**
     * @type {ShadowRoot}
     */
    #shadow;

    /**
     * @param {CssApi} css_api
     * @param {LoadingElement} loading_element
     * @returns {FullscreenLoadingElement}
     */
    static new(css_api, loading_element) {
        return new this(
            css_api,
            loading_element
        );
    }

    /**
     * @param {CssApi} css_api
     * @param {LoadingElement} loading_element
     * @private
     */
    constructor(css_api, loading_element) {
        super();

        this.#css_api = css_api;
        this.#loading_element = loading_element;

        this.#shadow = this.attachShadow({ mode: "closed" });
        this.#css_api.importCssToRoot(
            this.#shadow,
            `${__dirname}/${this.constructor.name}.css`
        );

        this.#render();
    }

    /**
     * @returns {void}
     */
    #render() {
        this.#shadow.appendChild(this.#loading_element);
    }
}

export const FULLSCREEN_LOADING_ELEMENT_TAG_NAME = "flux-fullscreen-loading";

customElements.define(FULLSCREEN_LOADING_ELEMENT_TAG_NAME, FullscreenLoadingElement);
