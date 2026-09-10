import React from 'react';
import PageHeader from '../components/PageHeader';
import ServicesSection from '../components/ServicesSection';
import PlatformTicker from '../components/PlatformTicker';
import CallToAction from '../components/CallToAction';

export default function WhatWeDo({ onOpenContact }) {
  return (
    <>
      <PageHeader
        eyebrow="Core Advisory Services"
        title="What we do"
        intro="Specialised consultancy and facilitation focused on funding opportunities available through third-party ticketing and distribution platforms, along with related commercial structuring support."
      />
      <ServicesSection onOpenContact={onOpenContact} />
      <PlatformTicker />
      <CallToAction onOpenContact={onOpenContact} />
    </>
  );
}
