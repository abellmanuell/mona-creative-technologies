// JS
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
/* import "./App.css"; */
import "./index.css";

const container = document.getElementById("root");

const renderApplication = (children) =>
  ReactDOM.createRoot(container).render(children);

renderApplication(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
