
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="font-serif text-5xl md:text-7xl mb-6">Hoe we werken</h2>
        <p className="text-xl text-brand-black/60 font-light max-w-xl mx-auto">
          Geen jargon, geen ingewikkelde contracten. Enkel resultaat in drie simpele stappen.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-16 relative">
        {/* Connection line for desktop */}
        <div className="hidden md:block absolute top-1/4 left-0 w-full h-[1px] bg-brand-black/10 -z-0" />

        {PROCESS_STEPS.map((step) => (
          <div key={step.number} className="relative z-10 group text-center md:text-left">
            <div className="bg-brand-black text-brand-cream w-16 h-16 rounded-full flex items-center justify-center text-xl font-serif mb-8 group-hover:bg-brand-green transition-colors duration-500 mx-auto md:mx-0">
              {step.number}
            </div>
            <h3 className="text-3xl font-serif italic mb-6">{step.title}</h3>
            <p className="text-brand-black/70 leading-relaxed text-lg">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="text-sm tracking-widest uppercase opacity-40 mb-8 font-bold">Klaar om te starten?</p>
        <a 
          href="#contact" 
          className="inline-block border-2 border-brand-black px-12 py-5 rounded-full text-xl font-bold hover:bg-brand-black hover:text-brand-cream transition-all transform hover:scale-105"
        >
          Plan je intake babbel
        </a>
      </div>
    </div>
  );
};

export default Process;
