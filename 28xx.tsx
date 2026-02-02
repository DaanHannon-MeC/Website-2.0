import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing28xx from './components/Landing28xx';
import Footer from './components/Footer';

const Landing28xxPage: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-brand-black">
      <Landing28xx />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Landing28xxPage />
  </React.StrictMode>
);
