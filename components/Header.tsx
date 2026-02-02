
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 md:px-12 py-8 ${
          isScrolled ? 'bg-brand-black/80 backdrop-blur-sm py-6' : 'bg-transparent'
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <a href="/" className="group">
            <h1 className="font-serif text-2xl md:text-3xl tracking-tighter transition-colors duration-300 group-hover:text-brand-green uppercase font-bold">
              ZEGET'IS
            </h1>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-cream group flex flex-col items-end gap-1.5 focus:outline-none z-50"
          >
            <span className={`w-8 h-[2px] bg-brand-cream group-hover:bg-brand-green transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-brand-cream group-hover:bg-brand-green transition-all group-hover:w-8 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-8 h-[2px] bg-brand-cream group-hover:bg-brand-green transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-brand-black/95 backdrop-blur-lg z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-4xl md:text-5xl hover:text-brand-green transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-4xl md:text-5xl hover:text-brand-green transition-colors duration-300"
            >
              Blog
            </a>
            <a
              href="#work"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-4xl md:text-5xl hover:text-brand-green transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="font-serif text-4xl md:text-5xl hover:text-brand-green transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
