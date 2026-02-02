
import React from 'react';
import { BTS_PHOTOS, BRAND_LOGOS } from '../constants';

const ProofSection: React.FC = () => {
  return (
    <div className="bg-brand-black py-24 overflow-hidden">
      {/* BTS Photos Grid */}
      <div className="container mx-auto px-8 md:px-12 mb-32">
        <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
          <h2 className="font-serif text-4xl md:text-5xl italic tracking-tighter">Behind the <span className="text-brand-green">Lens</span></h2>
          <p className="text-brand-cream/30 text-[10px] tracking-widest uppercase font-bold">The craft in motion</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {BTS_PHOTOS.map((photo, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden group rounded-sm transition-all duration-1000 ${
                i % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'
              }`}
            >
              {/* Motion Blur Overlay */}
              <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none bg-brand-green mix-blend-overlay"></div>
              
              <img 
                src={photo} 
                alt="Behind the scenes" 
                className="w-full h-[400px] object-cover filter brightness-75 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 group-hover:blur-[2px]"
              />
              
              {/* Slow shutter light streak simulation */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-brand-cream/10 to-transparent group-hover:left-full transition-all duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Ticker */}
      <div className="relative border-y border-brand-cream/5 py-12">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10"></div>
        
        <div className="flex whitespace-nowrap animate-ticker">
          {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => (
            <div key={i} className="inline-block px-12 md:px-24">
              <span className="text-brand-cream/20 text-lg md:text-2xl font-serif italic tracking-widest uppercase hover:text-brand-green transition-colors cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ProofSection;
