import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ConsultationModal from './components/ConsultationModal';

import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import WhoWeServe from './pages/WhoWeServe';
import HowItWorks from './pages/HowItWorks';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openContact = () => setModalOpen(true);

  return (
    <div className="flex min-h-screen flex-col bg-ivory-100 text-navy-800">
      <ScrollToTop />
      <Navbar onOpenContact={openContact} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenContact={openContact} />} />
          <Route path="/about" element={<About onOpenContact={openContact} />} />
          <Route path="/what-we-do" element={<WhatWeDo onOpenContact={openContact} />} />
          <Route path="/who-we-serve" element={<WhoWeServe onOpenContact={openContact} />} />
          <Route path="/how-it-works" element={<HowItWorks onOpenContact={openContact} />} />
          <Route path="/why-us" element={<WhyUs onOpenContact={openContact} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
