import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    // Enable Google Analytics tracking
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted'
      });
    }
    closeBanner();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    // Disable Google Analytics tracking
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
    closeBanner();
  };

  const closeBanner = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-500 ${isExiting ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-brand-black/95 backdrop-blur-lg border border-brand-green/20 rounded-2xl shadow-2xl overflow-hidden">
          {/* Film strip decoration */}
          <div className="h-2 bg-gradient-to-r from-brand-green via-brand-cream to-brand-green opacity-20"></div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Clapperboard Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="6" width="20" height="14" rx="2" />
                    <path d="M2 6L6 2M10 6L14 2M18 6L22 2" />
                    <path d="M7 10H17M7 14H12" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="font-serif text-2xl md:text-3xl mb-2 text-brand-cream">
                  🎬 <span className="italic">Lights, Camera...</span> <span className="text-brand-green">Cookies!</span>
                </h3>
                <p className="text-brand-cream/70 leading-relaxed mb-4">
                  Net als een goede B-roll, gebruiken we cookies om jouw ervaring te verfijnen. We tracken alleen analytics om onze "final cut" te verbeteren. Geen drama, geen verborgen takes—enkel transparantie zoals een echte filmmaker betaamt.
                </p>
                <p className="text-xs text-brand-cream/40">
                  Wij respecteren de GDPR-regels. Jouw data wordt niet gedeeld met derden.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <button
                  onClick={handleAccept}
                  className="group relative px-6 py-3 bg-brand-green text-brand-black font-bold rounded-lg hover:bg-brand-green/90 transition-all transform hover:scale-105 whitespace-nowrap overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    ✓ Action! Accept
                  </span>
                  <div className="absolute inset-0 bg-brand-cream/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>

                <button
                  onClick={handleDecline}
                  className="px-6 py-3 border-2 border-brand-cream/20 text-brand-cream font-bold rounded-lg hover:border-brand-cream/40 hover:bg-brand-cream/5 transition-all whitespace-nowrap"
                >
                  ✗ Cut! Decline
                </button>
              </div>
            </div>
          </div>

          {/* Film strip decoration bottom */}
          <div className="h-2 bg-gradient-to-r from-brand-cream via-brand-green to-brand-cream opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
