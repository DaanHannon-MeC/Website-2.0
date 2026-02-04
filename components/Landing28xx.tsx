import React from 'react';
import { PROJECTS, POSTAL_DATA } from '../constants';
import Portfolio from './Portfolio';

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
            Zit je te kijken naar wat<br />
            <span className="italic text-brand-green">je concurrent op Instagram post?</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-cream/80 mb-8">
            Video zoals Telenet en Primus het krijgen,<br />
            maar dan voor bedrijven in 2800.<br />
            <span className="text-brand-green font-bold">Agency kwaliteit, KMO prijzen.</span>
          </p>

          <div className="inline-block bg-brand-green/10 border border-brand-green/30 px-6 py-4 rounded-sm mb-8">
            <p className="text-brand-cream">
              <span className="text-brand-green font-bold">Voorbeeld:</span>
              {' '}Standaard bedrijfsvideo{' '}
              <span className="line-through text-brand-cream/50">€2.100</span>
              {' '}→{' '}
              <span className="text-brand-green font-bold text-xl">€1.500</span>
              {' '}<span className="text-brand-cream/70">(bespaar €600)</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
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

      {/* Problem-Solution Grid */}
      <section className="py-32 bg-brand-black">
        <div className="container mx-auto px-8 md:px-12">
          <div className="text-center mb-20">
            <p className="text-brand-green uppercase tracking-wider mb-4">Voor perfectionisten die vastzitten</p>
            <h2 className="font-serif text-4xl md:text-6xl italic">
              Drie problemen die ik <span className="text-brand-green">snap</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Problem 1 */}
            <div>
              <div className="text-6xl font-serif text-brand-green/30 mb-4">01</div>
              <h3 className="font-serif text-2xl mb-4">
                "Good enough" is niet goed genoeg
              </h3>
              <p className="text-brand-cream/70 mb-4">
                Je standards zijn te hoog om te settlen voor content die je zelf maakt.
                Dus doe je... niks. En ondertussen ziet je concurrent er professioneler uit.
              </p>
              <p className="text-brand-green font-bold">
                → Agency quality at KMO pricing
              </p>
            </div>

            {/* Problem 2 */}
            <div>
              <div className="text-6xl font-serif text-brand-green/30 mb-4">02</div>
              <h3 className="font-serif text-2xl mb-4">
                Je product is beter, maar zij zien er beter uit
              </h3>
              <p className="text-brand-cream/70 mb-4">
                Het verschil tussen jou en je concurrent? Niet je werk.
                Maar wel hoe jullie eruit zien online. Visual credibility gap.
              </p>
              <p className="text-brand-green font-bold">
                → Close the credibility gap
              </p>
            </div>

            {/* Problem 3 */}
            <div>
              <div className="text-6xl font-serif text-brand-green/30 mb-4">03</div>
              <h3 className="font-serif text-2xl mb-4">
                Geen tijd, geen expertise voor content
              </h3>
              <p className="text-brand-cream/70 mb-4">
                Je bent goed in wat je doet. Marketing content?
                Daar heb je geen tijd voor. En als je eerlijk bent: ook geen zin in.
              </p>
              <p className="text-brand-green font-bold">
                → Full-service, concept to delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="bewijs" className="py-32 bg-brand-black">
        <div className="container mx-auto px-8 md:px-12">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <p className="text-brand-green/50 uppercase tracking-wider mb-4">Portfolio · 10 jaar filmen</p>
            <h2 className="font-serif text-4xl md:text-6xl italic mb-6 text-brand-cream">
              Dit niveau, maar dan<br/>
              <span className="text-brand-green">voor jouw bedrijf</span>
            </h2>
            <p className="text-brand-cream/70 text-lg">
              Na 10 jaar filmen voor Telenet, Primus, Stad Mechelen—nu beschikbaar
              voor lokale bedrijven. Zelfde kwaliteit, zonder agency markup.
            </p>
          </div>

          {/* Portfolio Component */}
          <Portfolio />

          <div className="text-center mt-16">
            <a
              href="/#work"
              className="inline-flex items-center gap-2 text-brand-cream hover:text-brand-green font-bold transition-colors"
            >
              Volledig portfolio bekijken
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Local/Regional Section */}
      <section className="py-32 bg-brand-black">
        <div className="container mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <p className="text-brand-green uppercase tracking-wider mb-6">
                Lokaal · Direct · Geen Reiskosten
              </p>
              <h2 className="font-serif text-4xl md:text-6xl italic mb-8">
                Gevestigd in <span className="text-brand-green">Hazewinkel</span>
              </h2>
              <p className="text-brand-cream/80 text-lg mb-6">
                10 jaar heb ik gefilmd voor agencies. Nu werk ik lokaal,
                rechtstreeks met bedrijven in de buurt. 28% korting voor de
                28XX regio omdat je in mijn thuisbasis zit.
              </p>
              <p className="text-brand-cream/70 mb-8">
                Geen reiskosten. Snellere turnaround. Bereikbaar voor last-minute shoots.
                En ik ken de lokale economie—van Willebroek tot Boom, van Puurs tot Mechelen centrum.
              </p>

              {/* Postal Codes Grid */}
              <div className="bg-brand-green/5 border border-brand-green/20 rounded-sm p-6">
                <p className="text-brand-green text-xs uppercase mb-4 tracking-wider">✓ Postcodes In Actie</p>
                <div className="flex flex-wrap gap-2">
                  {POSTAL_DATA.map(postal => (
                    <span
                      key={postal.code}
                      className="px-3 py-1 bg-brand-cream/5 text-brand-cream/70 text-xs rounded-sm"
                    >
                      {postal.code} {postal.city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Savings Calculator */}
            <div className="relative">
              <div className="bg-brand-cream rounded-sm p-10 shadow-2xl">
                <h3 className="font-serif text-3xl text-brand-black mb-6">
                  Wat 28% korting<br/>
                  <span className="text-brand-green italic">echt betekent</span>
                </h3>
                <div className="space-y-4 text-brand-black/80">
                  <div className="flex justify-between items-center pb-4 border-b border-brand-black/10">
                    <span>Standaard Bedrijfsvideo</span>
                    <div className="text-right">
                      <div className="line-through text-brand-black/40 text-sm">€2.100</div>
                      <div className="text-brand-green font-bold text-xl">€1.500*</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-brand-black/10">
                    <span>Video + Foto Combo</span>
                    <div className="text-right">
                      <div className="line-through text-brand-black/40 text-sm">€3.200</div>
                      <div className="text-brand-green font-bold text-xl">€2.304*</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-brand-black/10">
                    <span>Premium Project</span>
                    <div className="text-right">
                      <div className="line-through text-brand-black/40 text-sm">€6.000</div>
                      <div className="text-brand-green font-bold text-xl">€4.300*</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-brand-black/60">Gemiddelde besparing</span>
                    <span className="text-brand-green font-bold">€600 - €1.700</span>
                  </div>
                  <div className="pt-4 border-t border-brand-black/10">
                    <p className="text-xs text-brand-black/50 italic">
                      * Afhankelijk van gewenste output en eindvereisten
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - with 28% pricing */}
      <section id="services" className="py-32 bg-brand-cream text-brand-black">
        <div className="container mx-auto px-8 md:px-12">
          <h2 className="font-serif text-4xl md:text-6xl italic text-center mb-16">
            Wat Ik Voor Je <span className="text-brand-green">Kan Doen</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <div className="text-brand-green text-4xl mb-4">🎥</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Videoproductie</h3>
              <p className="text-brand-black/70 leading-relaxed mb-4">
                Van bedrijfsvideo's tot commerciële content en testimonials. Elk project krijgt dezelfde high-end kwaliteit die grote merken verwachten.
              </p>
              <p className="text-brand-green font-bold">Vanaf €1.500 (28% korting)</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-lg">
              <div className="text-brand-green text-4xl mb-4">📸</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Fotografie</h3>
              <p className="text-brand-black/70 leading-relaxed mb-4">
                Professionele bedrijfsfotografie, productfoto's en portfolio shoots. Beelden die je merk naar een hoger niveau tillen.
              </p>
              <p className="text-brand-green font-bold">Combos vanaf €960</p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-lg">
              <div className="text-brand-green text-4xl mb-4">💡</div>
              <h3 className="font-serif text-2xl font-bold mb-4">Marketing Support</h3>
              <p className="text-brand-black/70 leading-relaxed mb-4">
                Van strategie tot executie. Ik help je content creëren die écht impact maakt op je doelgroep.
              </p>
              <p className="text-brand-green font-bold">Full-service pakket €4.300</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section id="calendar" className="py-32 bg-brand-black">
        <div className="container mx-auto px-8 md:px-12 text-center">
          {/* Risk Reversal */}
          <div className="mb-16">
            <p className="text-brand-green uppercase tracking-wider mb-6">
              Vrijblijvend · Geen Verplichtingen
            </p>
            <h2 className="font-serif text-4xl md:text-6xl italic mb-8">
              Klaar om je <span className="text-brand-green">verhaal</span> te vertellen?
            </h2>
            <p className="text-xl text-brand-cream/70 mb-4 max-w-2xl mx-auto">
              30 minuten kennismaken. Ik vertel je eerlijk of ik de juiste fit ben.
              En jij beslist of we verder gaan.
            </p>
            <p className="text-brand-cream/50 italic">
              Geen sales pitch. Gewoon een eerlijk gesprek over wat je nodig hebt.
            </p>
          </div>

          {/* Updated CTA cards with bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Kennismakingsgesprek - Enhanced */}
            <div className="bg-brand-cream text-brand-black p-8 rounded-sm text-left">
              <div className="inline-block px-4 py-1 bg-brand-green/20 rounded-full text-xs uppercase font-bold text-brand-green mb-4">
                Aanbevolen
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">
                🗓️ Kennismakingsgesprek
              </h3>
              <p className="mb-6 text-brand-black/70">
                30 minuten om elkaar te leren kennen. Ik leg uit hoe ik werk,
                jij vertelt wat je nodig hebt. Vrijblijvend. Geen druk.
              </p>
              <ul className="text-sm text-brand-black/60 mb-6 space-y-2">
                <li>✓ Bespreek je project</li>
                <li>✓ Krijg een eerlijke mening</li>
                <li>✓ Indicatieve offerte op maat</li>
              </ul>
              <a
                href="https://calendar.app.google/XKjMXfBMbewQ5MKc6"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-brand-green text-brand-black font-bold rounded-sm hover:bg-brand-green/90 transition-all"
              >
                Plan een Babbel →
              </a>
            </div>

            {/* Direct Booking - Enhanced */}
            <div className="bg-brand-green text-brand-black p-8 rounded-sm text-left">
              <h3 className="font-serif text-3xl font-bold mb-4">
                🎬 Direct een Shoot Boeken
              </h3>
              <p className="mb-6 text-brand-black/80">
                Weet je al wat je wil? Boek direct een draaidag en claim je 28% korting.
              </p>
              <ul className="text-sm text-brand-black/70 mb-6 space-y-2">
                <li>✓ Kies je draaidag</li>
                <li>✓ 28% korting toegepast</li>
                <li>✓ Direct aan de slag</li>
              </ul>
              <a
                href="https://calendar.app.google/brhH4yug1Upcvn5dA"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-brand-black text-brand-cream font-bold rounded-sm hover:bg-brand-black/90 transition-all"
              >
                Boek een Draaidag →
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
