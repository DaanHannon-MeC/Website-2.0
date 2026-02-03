
import React from 'react';

const AboutSubject: React.FC = () => {
  return (
    <div className="relative bg-brand-black py-40 overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center gap-20">
        
        {/* Layered Subject Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Large Typography in Background */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
            <span className="text-[60vw] md:text-[40vw] font-serif font-black text-white/[0.08] md:text-white/[0.03] leading-none transform -translate-y-10">
              Z.
            </span>
          </div>
          
          {/* Silhouette Image */}
          <div className="relative z-10 w-full max-w-md aspect-[3/4] rounded-sm overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <img
               src="/assets/me/Daan.png"
               alt="Daan Hannon - Professionele videograaf en filmmaker Mechelen met 10+ jaar ervaring voor Lidl, Albert Heijn, Deloitte | Zeget'is videoproductie"
               title="Daan Hannon - Filmmaker & Videograaf Mechelen"
               className="w-full h-full object-contain object-center filter brightness-90 contrast-125 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 border border-brand-cream/10 m-4 pointer-events-none"></div>
          </div>
        </div>

        {/* Narrative */}
        <div className="w-full md:w-1/2 z-20">
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8 italic">
            Focus op de <span className="text-brand-green">Essentie.</span>
          </h2>
          <div className="w-20 h-[1px] bg-brand-green mb-10"></div>
          <p className="text-xl md:text-2xl text-brand-cream/70 font-light leading-relaxed mb-6">
            Tien jaar heb ik productiehuizen en grote merken gediend—Primus. Lidl. Albert Heijn. Deloitte. Martini. Ikea. Telenet. Maar nu werk ik lokaal, rechtstreeks met bedrijven in de buurt die dezelfde kwaliteit verdienen, zonder de omweg via agencies en productiehuizen.
          </p>
          <p className="text-xl md:text-2xl text-brand-cream/70 font-light leading-relaxed mb-10">
            Geen tussenpersonen. Geen agency markup. Jij werkt rechtstreeks met mij: de filmmaker die je video's schrijft, filmt én monteert. Van concept tot levering. Authenticiteit, de passie van de vakman, de ziel van je bedrijf. Soms neem ik wel een crew mee maar alleen als dat ECHT nodig is.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-brand-green font-bold">
               <span className="w-6 h-[1px] bg-brand-green"></span>
               Editorial Visie
            </div>
            <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-brand-green font-bold opacity-60">
               <span className="w-6 h-[1px] bg-brand-green opacity-40"></span>
               Cinematic Vakmanschap
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSubject;
