import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Landing28xx from './components/Landing28xx';
import Footer from './components/Footer';
import Header from './components/Header';
import CookieBanner from './components/CookieBanner';

const Landing28xxPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-brand-black">
      <Header isScrolled={isScrolled} />
      <Landing28xx />
      <Footer />
      <CookieBanner />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Landing28xxPage />
  </React.StrictMode>
);
