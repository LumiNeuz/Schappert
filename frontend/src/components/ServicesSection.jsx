import React from 'react';
import { 
  Stethoscope, 
  Accessibility, 
  Activity, 
  HeartHandshake, 
  GraduationCap, 
  Package,
  Moon,
  Phone
} from 'lucide-react';

const services = [
  {
    id: 'krankenfahrten',
    icon: Stethoscope,
    title: 'Krankenfahrten',
    description: 'Zuverlässige Fahrten zu Arztterminen, Kliniken und Rehabilitationseinrichtungen in Meisenheim und Umgebung.',
    seo: 'Krankenfahrten in Meisenheim – pünktlich und sicher zu Ihrem Arzttermin.'
  },
  {
    id: 'rollstuhlfahrten',
    icon: Accessibility,
    title: 'Rollstuhlfahrten',
    description: 'Barrierefreie Transporte mit speziell ausgestatteten Fahrzeugen für einen sicheren und komfortablen Rollstuhltransport.',
    seo: 'Rollstuhlfahrten zuverlässig organisiert – barrierefreier Transport in der Region.'
  },
  {
    id: 'dialysefahrten',
    icon: Activity,
    title: 'Dialysefahrten',
    description: 'Regelmäßige und pünktliche Fahrten zur Dialyse und zurück. Wir verstehen, wie wichtig Zuverlässigkeit für Sie ist.',
    seo: 'Dialysefahrten Meisenheim – regelmäßig und termingerecht zur Behandlung.'
  },
  {
    id: 'chemofahrten',
    icon: HeartHandshake,
    title: 'Chemo- & Strahlenfahrten',
    description: 'Einfühlsame Begleitung während Ihrer Therapie. Wir sind für Sie da – mit Verständnis und Fürsorge.',
    seo: 'Chemofahrten und Strahlentherapie-Transporte – vertrauensvolle Begleitung.'
  },
  {
    id: 'schuelerfahrten',
    icon: GraduationCap,
    title: 'Schülerfahrten',
    description: 'Sicherer und zuverlässiger Schulweg für Ihr Kind. Eltern vertrauen uns ihre Kinder an.',
    seo: 'Schülerfahrten Meisenheim – sichere Beförderung zur Schule.'
  },
  {
    id: 'kurierfahrten',
    icon: Package,
    title: 'Kurierfahrten',
    description: 'Schnelle und zuverlässige Lieferungen in der Region. Für eilige Sendungen und wichtige Dokumente.',
    seo: 'Kurierfahrten – schnelle und sichere Lieferungen.'
  },
  {
    id: 'nachtfahrten',
    icon: Moon,
    title: 'Nachtfahrten',
    description: 'Auch außerhalb der regulären Zeiten sind wir für Sie da. Nachtfahrten auf Vorbestellung möglich.',
    seo: 'Nachtfahrten auf Vorbestellung – auch nachts sicher unterwegs.'
  }
];

export const ServicesSection = () => {
  return (
    <section 
      id="leistungen" 
      data-testid="services-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">
            Unsere Leistungen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-4 mb-6">
            Für jeden Bedarf die{' '}
            <span className="text-gradient">richtige Lösung</span>
          </h2>
          <p className="text-lg text-[#57534E] leading-relaxed">
            Von Krankenfahrten bis Schülertransporte – wir bieten zuverlässige 
            Personenbeförderung für alle Ihre Bedürfnisse.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              data-testid={`service-card-${service.id}`}
              className="service-card bg-white rounded-2xl p-8 border border-stone-100 hover:border-blue-100 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="icon-wrapper w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#0F4C81]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1C1917] mb-3">
                {service.title}
              </h3>
              <p className="text-[#57534E] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* SEO Text (smaller, for SEO purposes) */}
              <p className="text-sm text-[#78716C] italic">
                {service.seo}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#57534E] mb-6">
            Haben Sie Fragen zu unseren Leistungen?
          </p>
          <a 
            href="tel:067532610" 
            data-testid="services-phone-cta"
            className="inline-flex items-center gap-3 bg-[#0F4C81] hover:bg-[#0c3b66] text-white rounded-full px-8 py-4 font-semibold transition-all hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Rufen Sie uns an: 06753 2610
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
