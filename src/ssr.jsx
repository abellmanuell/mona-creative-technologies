// JS
import "@/bootstrap";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export const render = ({ config }) => {
  const helmetContext = {};

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter basename={config["base_path"]}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );

  const { helmet } = helmetContext;

  return {
    html,
    head: [
      helmet.title.toString(),
      helmet.priority.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].join(""),
  };
};
