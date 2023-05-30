import { flux_css_api } from "../../flux-css-api/src/FluxCssApi.mjs";

const variables_css = await flux_css_api.import(
    `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/FluxLoadingSpinnerElementVariables.css`
);

document.adoptedStyleSheets.unshift(variables_css);

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

        const shadow = this.attachShadow({
            mode: "closed"
        });

        shadow.adoptedStyleSheets.push(css);
    }
}

export const FLUX_LOADING_SPINNER_ELEMENT_TAG_NAME = "flux-loading-spinner";

customElements.define(FLUX_LOADING_SPINNER_ELEMENT_TAG_NAME, FluxLoadingSpinnerElement);
