
import React from 'react';
import { BTS_PHOTOS, BRAND_LOGOS } from '../constants';
import { Logos3 } from './ui/Logos3';

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

      {/* Brand Logos Carousel */}
      <Logos3
        logos={[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => ({
          id: `${logo.name}-${i}`,
          description: logo.name,
          image: logo.image,
        }))}
        className="border-y border-brand-cream/5"
      />
    </div>
  );
};

export default ProofSection;
