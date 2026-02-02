
import React from 'react';

const ValueProp: React.FC = () => {
  return (
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          Rechtstreeks contact.<br />
          <span className="text-brand-green">Volledige controle.</span>
        </h2>
        <div className="w-24 h-1 bg-brand-green mb-8" />
        <p className="text-2xl font-light text-brand-cream/80 leading-relaxed italic">
          "Geen account managers die je visie vertroebelen. Geen agency fees die je budget opeten. Enkel de makers en jij."
        </p>
      </div>

      <div className="grid gap-12">
        <div className="group border-l border-brand-green/20 pl-8 hover:border-brand-green transition-colors duration-500">
          <h4 className="text-brand-green text-xs tracking-widest uppercase mb-3 font-bold">Product</h4>
          <h3 className="text-2xl mb-4 font-medium">Product Video's</h3>
          <p className="text-brand-cream/60 leading-relaxed">
            We laten je product spreken. High-end visuals die de kwaliteit van je werk weerspiegelen. Cinema-kwaliteit voor lokale prijzen.
          </p>
        </div>

        <div className="group border-l border-brand-green/20 pl-8 hover:border-brand-green transition-colors duration-500">
          <h4 className="text-brand-green text-xs tracking-widest uppercase mb-3 font-bold">Branding</h4>
          <h3 className="text-2xl mb-4 font-medium">Bedrijfscontent</h3>
          <p className="text-brand-cream/60 leading-relaxed">
            Authentieke verhalen over wie je bent en waarom je doet wat je doet. Geen stijve corporate video's, maar menselijke content.
          </p>
        </div>

        <div className="group border-l border-brand-green/20 pl-8 hover:border-brand-green transition-colors duration-500">
          <h4 className="text-brand-green text-xs tracking-widest uppercase mb-3 font-bold">Socials</h4>
          <h3 className="text-2xl mb-4 font-medium">Vertical Content</h3>
          <p className="text-brand-cream/60 leading-relaxed">
            Short-form content die blijft hangen. Geoptimaliseerd voor de platforms van nu, gefilmd met het oog van morgen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueProp;
