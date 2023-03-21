import { flux_css_api } from "../../flux-css-api/src/FluxCssApi.mjs";

/** @typedef {import("./Loading/FullscreenLoadingElement.mjs").FullscreenLoadingElement} FullscreenLoadingElement */
/** @typedef {import("./Loading/LoadingElement.mjs").LoadingElement} LoadingElement */

const __dirname = import.meta.url.substring(0, import.meta.url.lastIndexOf("/"));

flux_css_api.adopt(
    document,
    await flux_css_api.import(
        `${__dirname}/Loading/LoadingVariables.css`
    )
);

export class FluxLoadingApi {
    /**
     * @returns {FluxLoadingApi}
     */
    static new() {
        return new this();
    }

    /**
     * @private
     */
    constructor() {

    }

    /**
     * @returns {Promise<FullscreenLoadingElement>}
     */
    async getFullscreenLoadingElement() {
        return (await import("./Loading/FullscreenLoadingElement.mjs")).FullscreenLoadingElement.new(
            await this.getLoadingElement()
        );
    }

    /**
     * @returns {Promise<LoadingElement>}
     */
    async getLoadingElement() {
        return (await import("./Loading/LoadingElement.mjs")).LoadingElement.new();
    }
}
