
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
          {/* Google Calendar Embed Placeholder */}
          <div className="flex-grow flex items-center justify-center border-2 border-dashed border-brand-green/20 rounded-2xl p-12 text-center group transition-all hover:border-brand-green/40">
            <div className="max-w-xs">
              <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-brand-green">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-4">Boek een intake babbel</h3>
              <p className="text-brand-cream/40 mb-8">Selecteer een datum voor een online kennismaking van 30 minuten.</p>
              <button className="bg-brand-green text-brand-cream w-full py-4 rounded-full font-bold tracking-tight hover:bg-brand-green/80 transition-all">
                Agenda Openen
              </button>
            </div>
          </div>
          <p className="text-center text-[10px] tracking-widest uppercase text-brand-cream/30 mt-6">Powered by Google Calendar</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
