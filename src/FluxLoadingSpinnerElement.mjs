import { flux_css_api } from "../../flux-css-api/src/FluxCssApi.mjs";

flux_css_api.adopt(
    document,
    await flux_css_api.import(
        `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/FluxLoadingSpinnerElementVariables.css`
    ),
    true
);

const css = await flux_css_api.import(
    `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/FluxLoadingSpinnerElement.css`
);

export class FluxLoadingSpinnerElement extends HTMLElement {
    /**
     * @returns {FluxLoadingSpinnerElement}
     */
    static new() {
        return new this();
    }

    /**
     * @private
     */
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "closed" });
        flux_css_api.adopt(
            shadow,
            css
        );
    }
}

export const FLUX_LOADING_SPINNER_ELEMENT_TAG_NAME = "flux-loading-spinner";

customElements.define(FLUX_LOADING_SPINNER_ELEMENT_TAG_NAME, FluxLoadingSpinnerElement);
