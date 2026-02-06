import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';

export const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#leistungen');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="start" 
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 hero-gradient overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#0F4C81]"></div>
        <div className="absolute bottom-40 right-40 w-64 h-64 rounded-full bg-[#D97706]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0F4C81] px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Ihr Partner in Meisenheim und Umgebung
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-tight">
              Sicher & Zuverlässig{' '}
              <span className="text-gradient">ans Ziel</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#57534E] leading-relaxed max-w-xl">
              Ihr Partner für Krankenfahrten, Rollstuhltransporte und mehr. 
              Wir bringen Sie sicher an Ihr Ziel – mit Herz und Verstand.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-[#57534E]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pünktlich</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Komfortabel</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Barrierefrei</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:067532610" data-testid="hero-phone-cta">
                <Button 
                  className="cta-button bg-[#D97706] hover:bg-[#b45309] text-white rounded-full px-8 py-6 text-lg font-bold shadow-lg transition-all hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Jetzt anrufen
                </Button>
              </a>
              <Button 
                onClick={scrollToServices}
                data-testid="hero-services-cta"
                variant="outline"
                className="bg-white text-[#0F4C81] border-2 border-[#0F4C81] hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-semibold transition-all w-full sm:w-auto"
              >
                Unsere Leistungen
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up stagger-2">
            <div className="image-overlay rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/6646979/pexels-photo-6646979.jpeg"
                alt="Komfortabler Personentransport"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                data-testid="hero-image"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-stone-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#1C1917]">100% Zuverlässig</p>
                  <p className="text-sm text-[#57534E]">Über 10 Jahre Erfahrung</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[#57534E]">
          <span className="text-sm">Mehr entdecken</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
