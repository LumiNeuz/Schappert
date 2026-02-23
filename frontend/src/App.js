import React from 'react';
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactForm from './components/ContactForm';
import ReviewsSection from './components/ReviewsSection';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ReviewsSection />
        <AboutSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
