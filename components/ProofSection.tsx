
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
            Een visuele collectie van ons vakmanschap – elk moment vastgelegd met intentie en stijl.
          </p>
        </div>

        {/* Desktop Gallery */}
        <div className="hidden md:flex items-center gap-2 h-[400px] w-full max-w-6xl mx-auto overflow-hidden">
          {BTS_PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full cursor-pointer"
            >
              <img
                className="h-full w-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
                src={photo.image}
                alt={`Behind the scenes ${photo.project} videoproductie door Zeget'is videograaf Daan Hannon in Mechelen - Professionele filmmaking set`}
                title={`${photo.project} - Behind the Scenes fotografie`}
                loading="lazy"
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

        {/* Mobile Gallery - Grouped by Project */}
        <div className="md:hidden max-w-2xl mx-auto space-y-8">
          {/* Agentschap Inburgering - 3 photos in grid */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-brand-green mb-3 font-bold">Agentschap Inburgering</h4>
            <div className="grid grid-cols-3 gap-2">
              {BTS_PHOTOS.slice(0, 3).map((photo, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden aspect-square">
                  <img className="h-full w-full object-cover object-center filter grayscale" src={photo.image} alt={`Behind the scenes ${photo.project} videoproductie door Zeget'is videograaf Mechelen`} title={`${photo.project} - BTS fotografie`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Deloitte - Single large photo */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-brand-green mb-3 font-bold">Deloitte</h4>
            <div className="relative rounded-lg overflow-hidden aspect-[16/10]">
              <img className="h-full w-full object-cover object-center filter grayscale" src={BTS_PHOTOS[3].image} alt={BTS_PHOTOS[3].project} loading="lazy" />
            </div>
          </div>

          {/* Lidl Campaign - 3 photos in grid */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-brand-green mb-3 font-bold">Lidl Campaign</h4>
            <div className="grid grid-cols-3 gap-2">
              {BTS_PHOTOS.slice(4, 7).map((photo, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden aspect-square">
                  <img className="h-full w-full object-cover object-center filter grayscale" src={photo.image} alt={`Behind the scenes ${photo.project} videoproductie door Zeget'is videograaf Mechelen`} title={`${photo.project} - BTS fotografie`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Tejo Campaign - Single large photo */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-brand-green mb-3 font-bold">Tejo Campaign</h4>
            <div className="relative rounded-lg overflow-hidden aspect-[16/10]">
              <img className="h-full w-full object-cover object-center filter grayscale" src={BTS_PHOTOS[7].image} alt={BTS_PHOTOS[7].project} loading="lazy" />
            </div>
          </div>

          {/* STERK Project - 2 photos side by side */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-brand-green mb-3 font-bold">STERK Project</h4>
            <div className="grid grid-cols-2 gap-2">
              {BTS_PHOTOS.slice(8, 10).map((photo, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden aspect-square">
                  <img className="h-full w-full object-cover object-center filter grayscale" src={photo.image} alt={`Behind the scenes ${photo.project} videoproductie door Zeget'is videograaf Mechelen`} title={`${photo.project} - BTS fotografie`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Carousel */}
      <Logos3
        logos={[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, i) => ({
          id: `${logo.name}-${i}`,
          description: logo.name,
          image: logo.image,
          className: logo.className,
        }))}
        className="border-y border-brand-cream/5"
      />
    </div>
  );
};

export default ProofSection;
