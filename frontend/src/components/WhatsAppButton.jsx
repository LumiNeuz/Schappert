import React from 'react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/491756802704"
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-button"
      className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] p-3 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      aria-label="WhatsApp kontaktieren"
    >
      <img 
        src="https://customer-assets.emergentagent.com/job_fahrdienst-schappert/artifacts/57dn8u5h_Digital_Glyph_White.png" 
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;
