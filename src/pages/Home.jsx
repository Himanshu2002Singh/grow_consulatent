import React from 'react';
import Hero from '../components/Hero';
import PlatformTicker from '../components/PlatformTicker';
import ApproachSection from '../components/ApproachSection';
import ContactSection from '../components/ContactSection';
import CallToAction from '../components/CallToAction';

export default function Home({ onOpenContact }) {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <PlatformTicker />
      <ApproachSection />
      <CallToAction onOpenContact={onOpenContact} image="/images/live-entertainment.webp" />
      <ContactSection />
    </>
  );
}
