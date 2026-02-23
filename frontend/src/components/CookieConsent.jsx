import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '../components/ui/button';

const CONSENT_KEY = 'cookie_consent';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    } else if (consent === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Only load if not already loaded
    if (window.gtag) return;
    
    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EZKLQRD470';
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-EZKLQRD470', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  };

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadGoogleAnalytics();
    setShowBanner(false);
  };

  const acceptEssential = () => {
    localStorage.setItem(CONSENT_KEY, 'essential');
    setShowBanner(false);
  };

  const declineAll = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      data-testid="cookie-consent-banner"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-stone-200 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Text */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#1C1917] mb-2">
              Cookie-Einstellungen
            </h3>
            <p className="text-[#57534E] text-sm leading-relaxed">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
              Dazu gehören notwendige Cookies für den Betrieb der Website sowie optionale Analyse-Cookies 
              (Google Analytics), die uns helfen, unsere Website zu verbessern.
              {' '}
              <a href="/datenschutz" className="text-[#0F4C81] hover:underline">
                Mehr erfahren
              </a>
            </p>
            
            {showDetails && (
              <div className="mt-4 p-4 bg-stone-50 rounded-lg text-sm">
                <div className="mb-3">
                  <p className="font-semibold text-[#1C1917]">Notwendige Cookies</p>
                  <p className="text-[#57534E]">
                    Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#1C1917]">Analyse-Cookies (Google Analytics)</p>
                  <p className="text-[#57534E]">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. 
                    Die Daten werden anonymisiert erfasst.
                  </p>
                </div>
              </div>
            )}
            
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="text-[#0F4C81] text-sm mt-2 hover:underline"
            >
              {showDetails ? 'Details ausblenden' : 'Details anzeigen'}
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
            <Button
              onClick={declineAll}
              variant="outline"
              className="border-stone-300 text-[#57534E] hover:bg-stone-50"
              data-testid="cookie-decline-btn"
            >
              Ablehnen
            </Button>
            <Button
              onClick={acceptEssential}
              variant="outline"
              className="border-[#0F4C81] text-[#0F4C81] hover:bg-blue-50"
              data-testid="cookie-essential-btn"
            >
              Nur notwendige
            </Button>
            <Button
              onClick={acceptAll}
              className="bg-[#0F4C81] hover:bg-[#0c3b66] text-white"
              data-testid="cookie-accept-btn"
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
