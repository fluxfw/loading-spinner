import { flux_css_api } from "../../flux-css-api/src/FluxCssApi.mjs";
import { FluxLoadingSpinnerElement } from "./FluxLoadingSpinnerElement.mjs";

const css = await flux_css_api.import(
    `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/FluxFullscreenLoadingSpinnerElement.css`
);

export class FluxFullscreenLoadingSpinnerElement extends HTMLElement {
    /**
     * @returns {FluxFullscreenLoadingSpinnerElement}
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

        shadow.appendChild(FluxLoadingSpinnerElement.new());
    }
}

export const FLUX_FULLSCREEN_LOADING_SPINNER_ELEMENT_TAG_NAME = "flux-fullscreen-loading-spinner";

customElements.define(FLUX_FULLSCREEN_LOADING_SPINNER_ELEMENT_TAG_NAME, FluxFullscreenLoadingSpinnerElement);
