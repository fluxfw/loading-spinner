import { LoadingService } from "../../Service/Loading/Port/LoadingService.mjs";

/** @typedef {import("../../../../flux-css-api/src/Adapter/Api/CssApi.mjs").CssApi} CssApi */
/** @typedef {import("../Loading/LoadingElement.mjs").LoadingElement} LoadingElement */

const __dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

export class LoadingApi {
    /**
     * @type {CssApi}
     */
    #css_api;
    /**
     * @type {LoadingService | null}
     */
    #loading_service = null;

    /**
     * @param {CssApi} css_api
     * @returns {LoadingApi}
     */
    static new(css_api) {
        return new this(
            css_api
        );
    }

    /**
     * @param {CssApi} css_api
     * @private
     */
    constructor(css_api) {
        this.#css_api = css_api;
    }

    /**
     * @returns {Promise<void>}
     */
    async init() {
        this.#loading_service ??= this.#getLoadingService();

        this.#css_api.importCssToRoot(
            document,
            `${__dirname}/../Loading/LoadingVariables.css`
        );
    }

    /**
     * @returns {LoadingElement}
     */
    getLoadingElement() {
        return this.#loading_service.getLoadingElement();
    }

    /**
     * @returns {LoadingService}
     */
    #getLoadingService() {
        return LoadingService.new(
            this.#css_api
        );
    }
}
