import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import BlogListing from './components/BlogListing';
import BlogPost from './components/BlogPost';
import CookieBanner from './components/CookieBanner';

const BlogApp: React.FC = () => {
  return (
    <BrowserRouter basename="/blog">
      <Routes>
        <Route path="/" element={<BlogListing />} />
        <Route path="/:slug" element={<BlogPost />} />
      </Routes>
      <CookieBanner />
      <Analytics />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlogApp />
  </React.StrictMode>
);
