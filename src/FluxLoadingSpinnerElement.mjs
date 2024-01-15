import css from "./FluxLoadingSpinnerElement.css" with { type: "css" };
import root_css from "./FluxLoadingSpinnerElementRoot.css" with { type: "css" };

/** @typedef {import("./StyleSheetManager/StyleSheetManager.mjs").StyleSheetManager} StyleSheetManager */

export const FLUX_LOADING_SPINNER_ELEMENT_VARIABLE_PREFIX = "--flux-loading-spinner-";

export class FluxLoadingSpinnerElement extends HTMLElement {
    /**
     * @param {StyleSheetManager | null} style_sheet_manager
     * @returns {Promise<FluxLoadingSpinnerElement>}
     */
    static async new(style_sheet_manager = null) {
        if (style_sheet_manager !== null) {
            await style_sheet_manager.generateVariablesRootStyleSheet(
                FLUX_LOADING_SPINNER_ELEMENT_VARIABLE_PREFIX,
                {
                    [`${FLUX_LOADING_SPINNER_ELEMENT_VARIABLE_PREFIX}color`]: "accent-color"
                },
                true
            );

            await style_sheet_manager.addRootStyleSheet(
                root_css,
                true
            );
        } else {
            if (!document.adoptedStyleSheets.includes(root_css)) {
                document.adoptedStyleSheets.unshift(root_css);
            }
        }

        const flux_loading_spinner_element = new this();

        const shadow = flux_loading_spinner_element.attachShadow({
            mode: "closed"
        });

        await style_sheet_manager?.addStyleSheetsToShadow(
            shadow
        );

        shadow.adoptedStyleSheets.push(css);

        return flux_loading_spinner_element;
    }

    /**
     * @private
     */
    constructor() {
        super();
    }
}

export const FLUX_LOADING_SPINNER_ELEMENT_TAG_NAME = "flux-loading-spinner";

customElements.define(FLUX_LOADING_SPINNER_ELEMENT_TAG_NAME, FluxLoadingSpinnerElement);
