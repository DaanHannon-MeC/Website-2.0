import React from 'react';

const Landing28xx: React.FC = () => {
  return (
    <div className="relative bg-brand-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            src="/assets/hero-showreel.mp4"
          />
          <div className="absolute inset-0 bg-brand-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-8 md:px-12 text-center max-w-4xl">
          {/* 2800 Graphic */}
          <div className="mb-8 flex justify-center">
            <img src="/assets/2800-graphic.svg" alt="2800" className="w-64 md:w-96 opacity-90" />
          </div>

          <div className="inline-block bg-brand-green px-6 py-2 rounded-full mb-8">
            <span className="text-brand-black font-bold tracking-widest uppercase text-sm">
              28% Korting voor 28XX Regio
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Premium Video & Foto<br />
            <span className="italic text-brand-green">Speciaal voor Jouw Regio</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-cream/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            10 jaar expertise met grote merken zoals Deloitte, Technopolis en Stad Mechelen. Nu rechtstreeks beschikbaar voor bedrijven in de 28XX regio - zonder tussenpersonen.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#calendar"
              className="group px-8 py-4 bg-brand-green text-brand-black font-bold text-lg rounded-sm hover:bg-brand-green/90 transition-all flex items-center gap-4"
            >
              Claim je 28% Korting
              <span className="w-6 h-[2px] bg-brand-black transition-all group-hover:w-10"></span>
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-brand-green text-brand-green font-bold text-lg rounded-sm hover:bg-brand-green hover:text-brand-black transition-all"
            >
              Bekijk Services
            </a>
          </div>

          <p className="text-sm text-brand-cream/40 mt-8">
            ⏰ Actie geldig voor Q1 2026 | 📍 Alleen voor postcodes 28XX
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-brand-cream text-brand-black">
        <div className="container mx-auto px-8 md:px-12">
          <h2 className="font-serif text-4xl md:text-6xl italic text-center mb-16">
            Wat Ik Voor Je <span className="text-brand-green">Kan Doen</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <div className="text-brand-green text-4xl mb-4">🎥</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Videoproductie</h3>
              <p className="text-brand-black/70 leading-relaxed">
                Van bedrijfsvideo's tot commerciële content en testimonials. Elk project krijgt dezelfde high-end kwaliteit die grote merken verwachten.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-lg">
              <div className="text-brand-green text-4xl mb-4">📸</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Fotografie</h3>
              <p className="text-brand-black/70 leading-relaxed">
                Professionele bedrijfsfotografie, productfoto's en portfolio shoots. Beelden die je merk naar een hoger niveau tillen.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-lg">
              <div className="text-brand-green text-4xl mb-4">💡</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Marketing Support</h3>
              <p className="text-brand-black/70 leading-relaxed">
                Van strategie tot executie. Ik help je content creëren die écht impact maakt op je doelgroep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section id="calendar" className="py-32 bg-brand-black">
        <div className="container mx-auto px-8 md:px-12 text-center">
          <h2 className="font-serif text-4xl md:text-6xl italic mb-8">
            Klaar Om Te <span className="text-brand-green">Starten?</span>
          </h2>
          <p className="text-xl text-brand-cream/70 mb-16 max-w-2xl mx-auto">
            Kies hieronder wat het beste bij jou past
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Quick Call */}
            <div className="bg-brand-cream text-brand-black p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-bold mb-4">🗓️ Kennismakingsgesprek</h3>
              <p className="mb-6 text-brand-black/70">
                30 minuten om elkaar te leren kennen en te zien of we een match zijn.
              </p>
              <a
                href="https://calendar.app.google/brhH4yug1Upcvn5dA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-brand-green text-brand-black font-bold rounded-sm hover:bg-brand-green/90 transition-all"
              >
                Plan een Babbel
              </a>
            </div>

            {/* Direct Booking */}
            <div className="bg-brand-green text-brand-black p-8 rounded-sm">
              <h3 className="font-serif text-2xl font-bold mb-4">🎬 Direct een Shoot Boeken</h3>
              <p className="mb-6 text-brand-black/80">
                Weet je al wat je wil? Boek direct een draaidag en claim je 28% korting.
              </p>
              <a
                href="https://calendar.app.google/XKjMXfBMbewQ5MKc6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-brand-black text-brand-cream font-bold rounded-sm hover:bg-brand-black/90 transition-all"
              >
                Boek een Draaidag
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-brand-cream text-brand-black">
        <div className="container mx-auto px-8 md:px-12 text-center">
          <p className="text-sm tracking-widest uppercase text-brand-black/50 mb-8">Vertrouwd door</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <img src="/assets/logos/NIO_logo.svg.png" alt="NIO" className="h-8 grayscale" />
            <img src="/assets/logos/mechelen.png" alt="Stad Mechelen" className="h-8 grayscale" />
            <img src="/assets/logos/Agentschap inburgering.jpeg" alt="Agentschap Inburgering" className="h-8 grayscale" />
            <img src="/assets/logos/Albert_Heijn_Logo.svg.png" alt="Albert Heijn" className="h-8 grayscale" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing28xx;
