
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-20 border-t border-brand-green/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <h2 className="font-serif text-3xl mb-4 tracking-tighter">ZEGET'IS</h2>
          <p className="text-brand-cream/40 text-sm max-w-xs font-light">
            Premium videoproductie zonder agency markup. Rechtstreeks beschikbaar voor Vlaamse ondernemers.
          </p>
        </div>

        <div className="flex gap-12 text-sm tracking-widest uppercase font-bold">
          <a href="https://www.instagram.com/daan.hannon/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/in/cameraman-from-belgium/recent-activity/all/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">LinkedIn</a>
        </div>

        <div className="text-right">
          <p className="text-[10px] tracking-[0.3em] uppercase text-brand-cream/30 mb-2">Made in Flanders</p>
          <p className="text-xs text-brand-cream/50">&copy; {new Date().getFullYear()} Zeget'is Videoproductie. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
