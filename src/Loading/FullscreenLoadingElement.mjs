/** @typedef {import("../../../flux-css-api/src/FluxCssApi.mjs").FluxCssApi} FluxCssApi */
/** @typedef {import("../Loading/LoadingElement.mjs").LoadingElement} LoadingElement */

const __dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

export class FullscreenLoadingElement extends HTMLElement {
    /**
     * @type {FluxCssApi}
     */
    #flux_css_api;
    /**
     * @type {LoadingElement}
     */
    #loading_element;
    /**
     * @type {ShadowRoot}
     */
    #shadow;

    /**
     * @param {FluxCssApi} flux_css_api
     * @param {LoadingElement} loading_element
     * @returns {FullscreenLoadingElement}
     */
    static new(flux_css_api, loading_element) {
        return new this(
            flux_css_api,
            loading_element
        );
    }

    /**
     * @param {FluxCssApi} flux_css_api
     * @param {LoadingElement} loading_element
     * @private
     */
    constructor(flux_css_api, loading_element) {
        super();

        this.#flux_css_api = flux_css_api;
        this.#loading_element = loading_element;

        this.#shadow = this.attachShadow({ mode: "closed" });
        this.#flux_css_api.importCssToRoot(
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
