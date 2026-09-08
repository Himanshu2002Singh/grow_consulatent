import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformTicker from './components/PlatformTicker';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhoWeServe from './components/WhoWeServe';
import HowItWorks from './components/HowItWorks';
import FundingCalculator from './components/FundingCalculator';
import WhyUs from './components/WhyUs';
import ApproachSection from './components/ApproachSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenContact = () => {
    // Either scroll smoothly to contact or open modal
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#060d19] text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenContact={() => setModalOpen(true)} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero with 3 Key Value Cards */}
        <Hero onOpenContact={() => setModalOpen(true)} />

        {/* 2. Platform Ecosystem Showcase */}
        <PlatformTicker />

        {/* 3. About Firm & Partnership */}
        <AboutSection />

        {/* 4. Core Services & Mandatory Disclaimer */}
        <ServicesSection onOpenContact={() => setModalOpen(true)} />

        {/* 5. Who We Serve (Hospitality vs Artists) */}
        <WhoWeServe onOpenContact={() => setModalOpen(true)} />

        {/* 6. How It Works (6-Step Lifecycle) */}
        <HowItWorks />

        {/* 7. Interactive Facility Assessment Estimator */}
        <FundingCalculator onOpenContact={() => setModalOpen(true)} />

        {/* 8. Why Choose Us (6 Differentiators) */}
        <WhyUs />

        {/* 9. Approach & Governance Principles */}
        <ApproachSection />

        {/* 10. FAQ Accordion */}
        <FAQSection />

        {/* 11. Contact Form & Registered Delhi Office */}
        <ContactSection />
      </main>

      {/* 12. Footer with Full Legal Snapshot */}
      <Footer />

      {/* Quick Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
