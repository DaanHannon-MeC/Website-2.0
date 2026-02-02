
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 md:px-12 py-8 ${
        isScrolled ? 'bg-brand-black/80 backdrop-blur-sm py-6' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center">
        <a href="#hero" className="group">
          <h1 className="font-serif text-2xl md:text-3xl tracking-tighter transition-colors duration-300 group-hover:text-brand-green uppercase font-bold">
            ZEGET'IS
          </h1>
        </a>

        <button className="text-brand-cream group flex flex-col items-end gap-1.5 focus:outline-none">
          <span className="w-8 h-[2px] bg-brand-cream group-hover:bg-brand-green transition-all"></span>
          <span className="w-5 h-[2px] bg-brand-cream group-hover:bg-brand-green transition-all group-hover:w-8"></span>
          <span className="w-8 h-[2px] bg-brand-cream group-hover:bg-brand-green transition-all"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
