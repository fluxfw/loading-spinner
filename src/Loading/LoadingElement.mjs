import { flux_css_api } from "../../../flux-css-api/src/FluxCssApi.mjs";

flux_css_api.adopt(
    document,
    await flux_css_api.import(
        `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/LoadingVariables.css`
    ),
    true
);

const css = await flux_css_api.import(
    `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/LoadingElement.css`
);

export class LoadingElement extends HTMLElement {
    /**
     * @type {ShadowRoot}
     */
    #shadow;

    /**
     * @returns {LoadingElement}
     */
    static new() {
        return new this();
    }

    /**
     * @private
     */
    constructor() {
        super();

        this.#shadow = this.attachShadow({ mode: "closed" });
        flux_css_api.adopt(
            this.#shadow,
            css
        );
    }
}

export const LOADING_ELEMENT_TAG_NAME = "flux-loading";

customElements.define(LOADING_ELEMENT_TAG_NAME, LoadingElement);
