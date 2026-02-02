
import React from 'react';
import { BTS_PHOTOS, BRAND_LOGOS } from '../constants';
import { Logos3 } from './ui/Logos3';

const ProofSection: React.FC = () => {
  return (
    <div className="bg-brand-black py-24 overflow-hidden">
      {/* BTS Photos Gallery */}
      <div className="w-full px-4 md:px-8 mb-32">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold">Behind the <span className="text-brand-green">Lens</span></h2>
          <p className="text-sm text-brand-cream/50 mt-2">
            A visual collection of our craft – each moment captured with intention and style.
          </p>
        </div>

        <div className="flex items-center gap-2 h-[400px] w-full max-w-6xl mx-auto overflow-hidden">
          {BTS_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full cursor-pointer"
            >
              <img
                className="h-full w-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
                src={photo.image}
                alt={photo.project}
              />

              {/* Project Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-brand-green font-bold mb-1">
                    Behind The Scenes
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-brand-cream">
                    {photo.project}
                  </h3>
                </div>
              </div>
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
