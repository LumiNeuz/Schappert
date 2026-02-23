import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '491756802704';
  const message = encodeURIComponent('Hallo, ich habe eine Anfrage bezüglich Ihrer Fahrdienstleistungen.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-button"
      className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle className="w-6 h-6" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
