import React from 'react';
import { Phone } from 'lucide-react';

export const MobileStickyCTA = () => {
  return (
    <div 
      data-testid="mobile-sticky-cta"
      className="sticky-cta lg:hidden py-4 px-4"
    >
      <a 
        href="tel:067532610" 
        data-testid="sticky-phone-button"
        className="flex items-center justify-center gap-3 bg-[#D97706] hover:bg-[#b45309] text-white rounded-full py-4 font-bold text-lg shadow-lg transition-all w-full"
      >
        <Phone className="w-5 h-5" />
        Jetzt anrufen: 06753 2610
      </a>
    </div>
  );
};

export default MobileStickyCTA;
