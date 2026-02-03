
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProofSection from './components/ProofSection';
import AboutSubject from './components/AboutSubject';
import Portfolio from './components/Portfolio';
import ValueProp from './components/ValueProp';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-cream bg-brand-black">
      <Header isScrolled={isScrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about-subject">
          <AboutSubject />
        </section>

        <section id="proof">
          <ProofSection />
        </section>

        <section id="work" className="bg-brand-black">
          <div className="container mx-auto px-8 md:px-12 pt-32 pb-0">
             <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
                <h2 className="font-serif text-6xl md:text-[8vw] italic leading-none tracking-tighter">Selected <span className="text-brand-green">Works</span></h2>
                <p className="text-brand-cream/40 tracking-widest uppercase text-xs font-bold">Scroll to explore</p>
             </div>
          </div>
          <Portfolio />
        </section>

        <section id="values" className="bg-brand-black py-40 border-y border-brand-cream/5">
          <ValueProp />
        </section>

        <section id="process" className="bg-brand-cream text-brand-black py-40">
          <Process />
        </section>

        <section id="contact" className="bg-brand-black py-40">
          <Contact />
        </section>
      </main>

      <Footer />
      <CookieBanner />
      <Analytics />
    </div>
  );
};

export default App;
