import React from 'react';
import { Shield, Clock, Car, Users, ThumbsUp, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sicherheit an erster Stelle',
    description: 'Regelmäßig gewartete Fahrzeuge und geschulte Fahrer für Ihre Sicherheit.'
  },
  {
    icon: Clock,
    title: 'Absolute Pünktlichkeit',
    description: 'Wir wissen, wie wichtig Termine sind. Verlassen Sie sich auf uns.'
  },
  {
    icon: Car,
    title: 'Komfortable Fahrzeuge',
    description: 'Moderne, saubere und gepflegte Fahrzeuge für eine angenehme Fahrt.'
  },
  {
    icon: Users,
    title: 'Erfahrenes Team',
    description: 'Freundliche und erfahrene Fahrer, die auf Ihre Bedürfnisse eingehen.'
  },
  {
    icon: ThumbsUp,
    title: 'Barrierefreie Transporte',
    description: 'Spezialfahrzeuge für Rollstuhlfahrer und mobilitätseingeschränkte Personen.'
  },
  {
    icon: Headphones,
    title: 'Persönliche Betreuung',
    description: 'Individuelle Terminvereinbarung und persönlicher Ansprechpartner.'
  }
];

export const WhyUsSection = () => {
  return (
    <section 
      id="warum-wir" 
      data-testid="why-us-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">
            Warum wir
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-4 mb-6">
            Das macht uns{' '}
            <span className="text-gradient">besonders</span>
          </h2>
          <p className="text-lg text-[#57534E] leading-relaxed">
            Vertrauen Sie auf unsere Erfahrung und unser Engagement für 
            Ihre sichere und komfortable Beförderung.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-testid={`feature-card-${index}`}
              className="flex gap-5 p-6 bg-blue-50/50 rounded-xl border border-blue-100 hover:bg-blue-50 transition-all group"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#0F4C81] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-[#1C1917] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#57534E] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-16 border-t border-stone-200">
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-[#0F4C81]">40+</p>
            <p className="text-[#57534E] mt-2">Jahre Erfahrung</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-[#0F4C81]">1000+</p>
            <p className="text-[#57534E] mt-2">Zufriedene Kunden</p>
          </div>
          <div className="text-center">
            <p className="text-4xl lg:text-5xl font-bold text-[#0F4C81]">100%</p>
            <p className="text-[#57534E] mt-2">Zuverlässigkeit</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
