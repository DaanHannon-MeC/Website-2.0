
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="sticky top-32">
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            Klaar voor de <br />
            <span className="text-brand-green italic">volgende stap?</span>
          </h2>
          <p className="text-2xl font-light text-brand-cream/60 leading-relaxed mb-12">
            Laten we kijken hoe we jouw merk cinematic kunnen maken. Kies een moment dat past in onze agenda voor een vrijblijvend intake gesprek.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-green/20 flex items-center justify-center rounded-lg text-brand-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm tracking-widest uppercase text-brand-cream/40 font-bold mb-1">Locatie</h4>
                <p className="text-lg">Centrum Vlaanderen, België</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-brand-green/20 flex items-center justify-center rounded-lg text-brand-green">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm tracking-widest uppercase text-brand-cream/40 font-bold mb-1">E-mail</h4>
                <p className="text-lg">hello@zegetis.be</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-cream/5 rounded-3xl p-4 md:p-8 border border-brand-green/10 backdrop-blur-sm min-h-[600px] flex flex-col">
          <h3 className="text-2xl font-serif mb-6 text-center">Kies je optie</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Kennismakingsgesprek */}
            <a
              href="https://calendar.app.google/brhH4yug1Upcvn5dA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cream/10 border border-brand-green/20 rounded-xl p-6 text-center hover:border-brand-green/40 hover:bg-brand-cream/15 transition-all group"
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-green">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Kennismakingsgesprek</h4>
              <p className="text-sm text-brand-cream/60 mb-4">30 minuten om elkaar te leren kennen</p>
              <span className="text-brand-green font-bold text-sm">Plan een Babbel →</span>
            </a>

            {/* Direct Booking */}
            <a
              href="https://calendar.app.google/XKjMXfBMbewQ5MKc6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green/10 border border-brand-green/40 rounded-xl p-6 text-center hover:border-brand-green hover:bg-brand-green/15 transition-all group"
            >
              <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-green">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2">Direct een Shoot Boeken</h4>
              <p className="text-sm text-brand-cream/60 mb-4">Klaar om te beginnen? Boek meteen</p>
              <span className="text-brand-green font-bold text-sm">Boek een Draaidag →</span>
            </a>
          </div>

          <p className="text-center text-[10px] tracking-widest uppercase text-brand-cream/30">Powered by Google Calendar</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
