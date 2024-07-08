import css from "./LoadingSpinnerElement.css" with { type: "css" };
import root_css from "./LoadingSpinnerElementRoot.css" with { type: "css" };

/** @typedef {import("./StyleSheetManager/StyleSheetManager.mjs").StyleSheetManager} StyleSheetManager */

export const LOADING_SPINNER_ELEMENT_VARIABLE_PREFIX = "--loading-spinner-";

export class LoadingSpinnerElement extends HTMLElement {
    /**
     * @param {StyleSheetManager | null} style_sheet_manager
     * @returns {Promise<LoadingSpinnerElement>}
     */
    static async new(style_sheet_manager = null) {
        if (style_sheet_manager !== null) {
            await style_sheet_manager.generateVariablesRootStyleSheet(
                LOADING_SPINNER_ELEMENT_VARIABLE_PREFIX,
                {
                    [`${LOADING_SPINNER_ELEMENT_VARIABLE_PREFIX}color`]: "accent-color"
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

        const loading_spinner_element = new this();

        const shadow = loading_spinner_element.attachShadow({
            mode: "closed"
        });

        await style_sheet_manager?.addStyleSheetsToShadow(
            shadow
        );

        shadow.adoptedStyleSheets.push(css);

        return loading_spinner_element;
    }

    /**
     * @private
     */
    constructor() {
        super();
    }
}

export const LOADING_SPINNER_ELEMENT_TAG_NAME = "loading-spinner";

customElements.define(LOADING_SPINNER_ELEMENT_TAG_NAME, LoadingSpinnerElement);
