import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import InsightsListing from './components/InsightsListing';
import InsightsPost from './components/InsightsPost';
import CookieBanner from './components/CookieBanner';

const InsightsApp: React.FC = () => {
  return (
    <BrowserRouter basename="/insights">
      <Routes>
        <Route path="/" element={<InsightsListing />} />
        <Route path="/:slug" element={<InsightsPost />} />
      </Routes>
      <CookieBanner />
      <Analytics />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InsightsApp />
  </React.StrictMode>
);
