import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      data-testid="footer"
      className="bg-[#1C1917] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Manuel Schappert Personenbeförderung Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="font-bold text-lg leading-tight">Manuel Schappert</p>
                <p className="text-sm text-gray-400">Personenbeförderung</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Ihr zuverlässiger Partner für Personentransporte in Meisenheim und Umgebung. 
              Sicher, pünktlich und komfortabel – das ist unser Versprechen.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:067532610" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                06753 2610
              </a>
              <a href="mailto:info@ms-fahrdienst.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@ms-fahrdienst.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#start" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Start
                </a>
              </li>
              <li>
                <a href="#leistungen" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#warum-wir" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Warum wir
                </a>
              </li>
              <li>
                <a href="#kontakt" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Leistungen</h4>
            <ul className="space-y-3">
              <li>
                <a href="#leistungen" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Krankenfahrten
                </a>
              </li>
              <li>
                <a href="#leistungen" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Rollstuhlfahrten
                </a>
              </li>
              <li>
                <a href="#leistungen" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Dialysefahrten
                </a>
              </li>
              <li>
                <a href="#leistungen" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Schülerfahrten
                </a>
              </li>
              <li>
                <a href="#leistungen" className="footer-link text-gray-400 hover:text-white transition-colors">
                  Kurierfahrten
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 pb-24 lg:pb-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} Manuel Schappert Personenbeförderung. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
  href="/impressum/"
  data-testid="footer-impressum-link"
  className="hover:text-white transition-colors"
>
  Impressum
</a>

<a
  href="/datenschutz/"
  data-testid="footer-datenschutz-link"
  className="hover:text-white transition-colors"
>
  Datenschutz
</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
