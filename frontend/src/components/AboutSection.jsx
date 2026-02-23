import React from 'react';
import { MapPin, Clock, Heart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section 
      id="ueber-uns" 
      data-testid="about-section"
      className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-stone-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="image-overlay rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/about-driver.jpg"
                alt="Freundlicher Fahrer - Manuel Schappert Personenbeförderung"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                data-testid="about-image"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-[#0F4C81] rounded-2xl opacity-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">
                Über uns
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-4 mb-6">
                Ihr Partner für{' '}
                <span className="text-gradient">sichere Fahrten</span>
              </h2>
            </div>

            <p className="text-lg text-[#57534E] leading-relaxed">
              <strong>Manuel Schappert Personenbeförderung</strong> ist Ihr zuverlässiger Partner 
              für alle Arten von Personentransporten in Meisenheim und der gesamten Region. 
              Mit jahrelanger Erfahrung und einem engagierten Team sorgen wir dafür, dass Sie 
              sicher und komfortabel ans Ziel kommen.
            </p>

            <p className="text-lg text-[#57534E] leading-relaxed">
              Unsere Philosophie ist einfach: Wir behandeln jeden Fahrgast so, wie wir selbst 
              behandelt werden möchten – mit Respekt, Geduld und einem offenen Ohr für Ihre Bedürfnisse.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-[#0F4C81]" />
                </div>
                <h3 className="font-bold text-[#1C1917] mb-1">Pünktlichkeit</h3>
                <p className="text-sm text-[#57534E]">Immer zur vereinbarten Zeit</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#0F4C81]" />
                </div>
                <h3 className="font-bold text-[#1C1917] mb-1">Freundlichkeit</h3>
                <p className="text-sm text-[#57534E]">Herzlich und respektvoll</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#0F4C81]" />
                </div>
                <h3 className="font-bold text-[#1C1917] mb-1">Regional</h3>
                <p className="text-sm text-[#57534E]">Meisenheim & Umgebung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
