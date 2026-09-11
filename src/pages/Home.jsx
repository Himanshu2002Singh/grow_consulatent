import React from 'react';
import Hero from '../components/Hero';
import PlatformTicker from '../components/PlatformTicker';
import CallToAction from '../components/CallToAction';

export default function Home({ onOpenContact }) {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <PlatformTicker />
      <CallToAction onOpenContact={onOpenContact} image="/images/live-entertainment.webp" />
    </>
  );
}
