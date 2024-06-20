import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DownloadAppPage from './pages/DownloadApp/DownloadAppPage';
import NotFoundPage from './pages/PageNotFound/NotFoundPage';
import { createRoot } from 'react-dom/client';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/download-app-link" element={<DownloadAppPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
