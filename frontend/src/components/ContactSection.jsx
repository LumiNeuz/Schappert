import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section 
      id="kontakt" 
      data-testid="contact-section"
      className="py-20 lg:py-32 bg-gradient-to-br from-[#0F4C81] to-[#0a3d68]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div className="text-white space-y-8">
            <div>
              <span className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">
                Kontakt
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Wir sind für Sie da
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Kontaktieren Sie uns für eine unverbindliche Anfrage oder 
                Terminvereinbarung. Wir freuen uns auf Ihren Anruf!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone - Primary CTA */}
              <a 
                href="tel:067532610" 
                data-testid="contact-phone-link"
                className="contact-item bg-white/10 border-white/20 hover:bg-white/20 rounded-xl p-6 flex items-center gap-5 transition-all"
              >
                <div className="w-14 h-14 bg-[#D97706] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Rufen Sie uns an</p>
                  <p className="text-2xl font-bold text-white">06753 2610</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:schappertmanu@web.de" 
                data-testid="contact-email-link"
                className="contact-item bg-white/10 border-white/20 hover:bg-white/20 rounded-xl p-6 flex items-center gap-5 transition-all"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">E-Mail</p>
                  <p className="text-lg font-semibold text-white">schappertmanu@web.de</p>
                </div>
              </a>

              {/* Hours */}
              <div className="contact-item bg-white/10 border-white/20 rounded-xl p-6 flex items-center gap-5">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Termine</p>
                  <p className="text-lg font-semibold text-white">Nach Vereinbarung</p>
                  <p className="text-blue-200 text-sm">Auch Nachtfahrten möglich</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map / Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl h-full min-h-[400px] flex flex-col">
              <h3 className="text-xl font-bold text-[#1C1917] mb-4">
                Standort Meisenheim
              </h3>
              <p className="text-[#57534E] mb-6">
                Wir sind in Meisenheim ansässig und bedienen die gesamte Region. 
                Für Fahrten außerhalb unseres Kerngebiets kontaktieren Sie uns bitte direkt.
              </p>
              
              {/* Simple map placeholder with location info */}
              <div className="flex-1 bg-blue-50 rounded-xl overflow-hidden relative">
                <img 
                  src="https://images.pexels.com/photos/6753481/pexels-photo-6753481.jpeg"
                  alt="Komfortabler Transport in Meisenheim"
                  className="w-full h-full object-cover absolute inset-0"
                  data-testid="contact-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-bold text-lg">Manuel Schappert</p>
                  <p className="text-blue-100">Personenbeförderung</p>
                  <p className="text-sm text-blue-200 mt-2">Meisenheim und Umgebung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
