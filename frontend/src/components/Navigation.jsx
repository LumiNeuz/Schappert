import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#start', label: 'Start' },
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#warum-wir', label: 'Warum wir' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      data-testid="main-navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            data-testid="logo-link"
            className="flex items-center gap-3"
          >
            <img 
              src="/images/logo.png" 
              alt="Manuel Schappert Personenbeförderung Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-[#0F4C81] text-lg leading-tight">Schappert</p>
              <p className="text-xs text-[#57534E]">Personenbeförderung</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                data-testid={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                className="nav-link text-[#57534E] hover:text-[#0F4C81] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:067532610" data-testid="nav-phone-button">
              <Button 
                className="bg-[#0F4C81] hover:bg-[#0c3b66] text-white rounded-full px-6 py-5 font-semibold flex items-center gap-2 transition-all hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                06753 2610
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-button"
            className="lg:hidden p-2 text-[#0F4C81]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            data-testid="mobile-menu"
            className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t border-stone-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  className="block py-3 text-[#57534E] hover:text-[#0F4C81] font-medium border-b border-stone-100"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:067532610" className="block pt-2">
                <Button 
                  className="w-full bg-[#0F4C81] hover:bg-[#0c3b66] text-white rounded-full py-5 font-semibold flex items-center justify-center gap-2"
                  data-testid="mobile-phone-button"
                >
                  <Phone className="w-4 h-4" />
                  Jetzt anrufen: 06753 2610
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
