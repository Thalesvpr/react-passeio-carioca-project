import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DownloadAppPage from './pages/DownloadApp/DownloadAppPage';
import NotFoundPage from './pages/PageNotFound/NotFoundPage';




const basename = process.env.REACT_APP_DEV ? process.env.PUBLIC_URL : undefined;
console.log(process.env.REACT_APP_DEV ? process.env.PUBLIC_URL : undefined)
ReactDOM.render(
  <Router

    basename={basename}
  >
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/download-app-link" element={<DownloadAppPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);