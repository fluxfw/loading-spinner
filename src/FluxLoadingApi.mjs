/** @typedef {import("./Loading/FullscreenLoadingElement.mjs").FullscreenLoadingElement} FullscreenLoadingElement */
/** @typedef {import("./Loading/LoadingElement.mjs").LoadingElement} LoadingElement */

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
