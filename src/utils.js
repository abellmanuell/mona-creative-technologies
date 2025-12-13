import appConfig from "./config/app.config";

export const basePath = (path = "") =>
    new URL(appConfig.basePath + path, window.location).toString();
