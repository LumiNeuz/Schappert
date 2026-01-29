import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export const Impressum = () => {
  return (
    <div 
      data-testid="impressum-page"
      className="min-h-screen bg-stone-50"
    >
      {/* Header */}
      <div className="bg-[#0F4C81] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <Button 
              variant="ghost" 
              data-testid="back-button"
              className="text-white hover:bg-white/10 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Button>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Impressum</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="text-[#57534E] space-y-2">
              <p><strong>Manuel Schappert</strong></p>
              <p>Personenbeförderung</p>
              <p>Untergasse 49</p>
              <p>55590 Meisenheim</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              Kontakt
            </h2>
            <div className="text-[#57534E] space-y-2">
              <p>Telefon: <a href="tel:067532610" className="text-[#0F4C81] hover:underline">06753 2610</a></p>
              <p>E-Mail: <a href="mailto:schappertmanu@web.de" className="text-[#0F4C81] hover:underline">schappertmanu@web.de</a></p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <div className="text-[#57534E] space-y-2">
              <p>Berufsbezeichnung: Personenbeförderungsunternehmen</p>
              <p>Zuständige Aufsichtsbehörde: Kreisverwaltung Bad Kreuznach</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              EU-Streitschlichtung
            </h2>
            <div className="text-[#57534E] space-y-2">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0F4C81] hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <div className="text-[#57534E] space-y-2">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              Haftung für Inhalte
            </h2>
            <div className="text-[#57534E] space-y-4">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
