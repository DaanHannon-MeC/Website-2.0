
import React, { useState, useEffect, useRef } from 'react';
import { POSTAL_DATA } from '../constants';

const DigitRoll: React.FC<{ digit: string; isSpinning: boolean }> = ({ digit, isSpinning }) => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      const interval = setInterval(() => {
        setOffset(Math.floor(Math.random() * 10));
      }, 100);
      return () => clearInterval(interval);
    } else {
      setOffset(parseInt(digit));
    }
  }, [isSpinning, digit]);

  return (
    <div className="h-16 overflow-hidden relative w-8 md:w-10">
      <div 
        className="transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1) flex flex-col items-center"
        style={{ transform: `translateY(-${offset * 4}rem)` }}
      >
        {digits.map((d) => (
          <span key={d} className="h-16 flex items-center justify-center font-serif text-5xl italic text-brand-green tracking-tighter">
            {d}
          </span>
        ))}
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  const [targetPostal, setTargetPostal] = useState(POSTAL_DATA[0]);
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.postal && data.postal.startsWith('28')) {
          const match = POSTAL_DATA.find(p => p.code === data.postal);
          setTargetPostal(match || { code: data.postal, city: data.city || 'Regio' });
        }
      } catch (e) {}
    };

    detectLocation();

    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110"
          src="/assets/hero-showreel.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-brand-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-8 md:px-12">
        <div className="max-w-4xl">
          <h2 className="font-serif text-xs md:text-sm tracking-[0.4em] uppercase mb-8 animate-fade-in-up text-brand-green font-bold">
            A Creative Studio based in Vlaanderen
          </h2>
          <h1 className="font-serif text-5xl md:text-[7vw] leading-[0.95] tracking-tight mb-8 animate-fade-in-up">
            De kwaliteit van <br />
            <span className="italic">Grote Merken.</span><br />
            Nu voor jouw bedrijf.
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 mt-12 animate-fade-in-up">
            <p className="text-lg md:text-xl text-brand-cream/70 max-w-lg font-light leading-relaxed">
              Premium videoproductie, rechtstreeks beschikbaar. Geen productiehuizen. Geen tussenpersonen. Enkel puur vakmanschap.
            </p>
            <div className="flex gap-6">
              <a href="#contact" className="group relative flex items-center gap-4 text-sm tracking-widest uppercase font-bold overflow-hidden">
                <span className="relative z-10">Plan een babbel</span>
                <span className="w-10 h-[1px] bg-brand-green transition-all group-hover:w-16"></span>
              </a>
              <a href="#work" className="group relative flex items-center gap-4 text-sm tracking-widest uppercase font-bold overflow-hidden">
                <span className="relative z-10">Bekijk Werk</span>
                <span className="w-10 h-[1px] bg-brand-cream/30 transition-all group-hover:w-16 group-hover:bg-brand-green"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Odometer */}
      <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-end gap-2 group cursor-default">
        <div className="flex items-center gap-4">
           <div className={`w-2 h-2 rounded-full ${isSpinning ? 'bg-brand-green animate-pulse' : 'bg-brand-green shadow-[0_0_10px_rgba(85,139,110,0.8)]'}`}></div>
           <p className="text-[10px] tracking-[0.4em] uppercase text-brand-cream/40 font-bold">
             {isSpinning ? 'Scanning Area' : 'Serving Region'}
           </p>
        </div>
        
        <div className="flex items-end gap-0">
          {targetPostal.code.split('').map((digit, i) => (
            <DigitRoll key={i} digit={digit} isSpinning={isSpinning} />
          ))}
        </div>
        
        <p className={`text-[10px] tracking-[0.6em] uppercase transition-all duration-1000 ${isSpinning ? 'opacity-0' : 'opacity-60'}`}>
          BE / {targetPostal.city}
        </p>
      </div>
    </div>
  );
};

export default Hero;
