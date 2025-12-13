import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Home";
// import "./scss/main.css";
import React from "react";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}
