import _ from "lodash";

const joinPaths = (...paths) =>
  paths.map((path) => _.trim(path, "/")).join("/");

export const usePaths = () => {
  const baseURL = (path = "") => joinPaths(path);

  const assetBaseURL = (path = "") => {
    return import.meta.env.SSR && import.meta.env.PROD ? joinPaths(path) : path;
  };

  const storagePath = (path) => baseURL(`storage/${path}`);

  return {
    baseURL,
    assetBaseURL,
    storagePath,
  };
};
