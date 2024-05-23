
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);