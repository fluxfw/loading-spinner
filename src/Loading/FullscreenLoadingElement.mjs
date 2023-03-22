import { flux_css_api } from "../../../flux-css-api/src/FluxCssApi.mjs";

/** @typedef {import("../Loading/LoadingElement.mjs").LoadingElement} LoadingElement */

const css = await flux_css_api.import(
    `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/FullscreenLoadingElement.css`
);

export class FullscreenLoadingElement extends HTMLElement {
    /**
     * @type {LoadingElement}
     */
    #loading_element;
    /**
     * @type {ShadowRoot}
     */
    #shadow;

    /**
     * @param {LoadingElement} loading_element
     * @returns {FullscreenLoadingElement}
     */
    static new(loading_element) {
        return new this(
            loading_element
        );
    }

    /**
     * @param {LoadingElement} loading_element
     * @private
     */
    constructor(loading_element) {
        super();

        this.#loading_element = loading_element;

        this.#shadow = this.attachShadow({ mode: "closed" });
        flux_css_api.adopt(
            this.#shadow,
            css
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
