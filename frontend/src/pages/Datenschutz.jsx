import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export const Datenschutz = () => {
  return (
    <div 
      data-testid="datenschutz-page"
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-10">
          
          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-lg font-semibold text-[#1C1917] mb-2">Allgemeine Hinweise</h3>
            <p className="text-[#57534E] leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
              Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              2. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-lg font-semibold text-[#1C1917] mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <div className="text-[#57534E] leading-relaxed space-y-4">
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p><strong>Mietwagen Manuel Schappert</strong></p>
                <p>Lindenallee 41a, 55590 Meisenheim</p>
                <p>Telefon: 06753 2610</p>
                <p>E-Mail: info@ms-fahrdienst.com</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              3. Wie erfassen wir Ihre Daten?
            </h2>
            <div className="text-[#57534E] leading-relaxed space-y-4">
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z.B. um Daten handeln, die Sie per Telefon oder E-Mail 
                an uns übermitteln.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der 
                Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
                (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die 
                Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              4. Wofür nutzen wir Ihre Daten?
            </h2>
            <p className="text-[#57534E] leading-relaxed">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
              zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens 
              verwendet werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              5. Cookies und Google Analytics
            </h2>
            <div className="text-[#57534E] leading-relaxed space-y-4">
              <h3 className="text-lg font-semibold text-[#1C1917]">Cookies</h3>
              <p>
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die auf Ihrem 
                Endgerät gespeichert werden. Einige Cookies sind technisch notwendig für den 
                Betrieb der Website, andere helfen uns, die Website zu verbessern.
              </p>
              <p>
                Beim ersten Besuch unserer Website werden Sie gefragt, welche Cookies Sie 
                akzeptieren möchten. Sie können Ihre Einwilligung jederzeit widerrufen, 
                indem Sie die Cookies in Ihrem Browser löschen.
              </p>
              
              <h3 className="text-lg font-semibold text-[#1C1917] mt-6">Google Analytics</h3>
              <p>
                Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland 
                Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website 
                durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre 
                Benutzung dieser Website werden in der Regel an einen Server von Google in den 
                USA übertragen und dort gespeichert.
              </p>
              <p>
                Wir haben die IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von 
                Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen 
                Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der 
                Übermittlung in die USA gekürzt.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Die Nutzung von Google Analytics erfolgt auf 
                Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre 
                Einwilligung jederzeit widerrufen.
              </p>
              <p>
                <strong>Widerspruch:</strong> Sie können die Speicherung der Cookies durch eine 
                entsprechende Einstellung Ihrer Browser-Software verhindern. Sie können darüber 
                hinaus die Erfassung der durch das Cookie erzeugten Daten durch Google Analytics 
                verhindern, indem Sie das Browser-Add-on zur Deaktivierung von Google Analytics 
                herunterladen: {' '}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0F4C81] hover:underline"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              6. Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h2>
            <div className="text-[#57534E] leading-relaxed space-y-4">
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger 
                und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
                außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. 
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese 
                Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
              <p>
                Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der 
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen 
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit 
                an uns wenden.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              6. Hosting
            </h2>
            <p className="text-[#57534E] leading-relaxed">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser 
              Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei 
              kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
              Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über 
              eine Website generiert werden, handeln.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              7. SSL-Verschlüsselung
            </h2>
            <p className="text-[#57534E] leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
              vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als 
              Seitenbetreiber senden, eine SSL-Verschlüsselung. Eine verschlüsselte 
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von 
              "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1C1917] mb-4">
              8. Kontaktaufnahme
            </h2>
            <div className="text-[#57534E] leading-relaxed space-y-4">
              <p>
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, wird Ihre Anfrage inklusive 
                aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke 
                der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>
              <p>
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b 
                DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder 
                zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen 
                Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der 
                effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) 
                oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
            </div>
          </section>

          <section>
            <p className="text-sm text-[#78716C] italic">
              Stand: Dezember 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
