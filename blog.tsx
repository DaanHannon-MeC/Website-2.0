import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';

const BlogPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-brand-black">
      <Header isScrolled={isScrolled} />
      <main className="pt-32">
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlogPage />
  </React.StrictMode>
);
