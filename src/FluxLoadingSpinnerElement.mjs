import { flux_import_css } from "../../flux-style-sheet-manager/src/FluxImportCss.mjs";

/** @typedef {import("./StyleSheetManager/StyleSheetManager.mjs").StyleSheetManager} StyleSheetManager */

const root_css = await flux_import_css.import(
    `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/FluxLoadingSpinnerElementRoot.css`
);

const css = await flux_import_css.import(
    `${import.meta.url.substring(0, import.meta.url.lastIndexOf("/"))}/FluxLoadingSpinnerElement.css`
);

export const FLUX_LOADING_SPINNER_ELEMENT_VARIABLE_PREFIX = "--flux-loading-spinner-";

export class FluxLoadingSpinnerElement extends HTMLElement {
    /**
     * @param {StyleSheetManager | null} style_sheet_manager
     * @returns {Promise<FluxLoadingSpinnerElement>}
     */
    static async new(style_sheet_manager = null) {
        if (style_sheet_manager !== null) {
            await style_sheet_manager.generateVariablesRootStyleSheet(
                this.name,
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

        await style_sheet_manager.addStyleSheetsToShadow(
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
