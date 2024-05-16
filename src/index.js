
import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='/outra' element={<Outra/>}/>
      </Routes>
    </HashRouter>-
  </React.StrictMode>
);
