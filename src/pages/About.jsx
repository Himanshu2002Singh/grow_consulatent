import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutSection from '../components/AboutSection';
import ApproachSection from '../components/ApproachSection';
import CallToAction from '../components/CallToAction';

export default function About({ onOpenContact }) {
  return (
    <>
      <PageHeader
        eyebrow="About Grow Consultants"
        title="At the intersection of operations and capital"
        intro="A partnership firm specialised in financial structuring, commercial advisory and transaction facilitation for hospitality, F&B, entertainment and live events in India."
        image="/images/team-planning.webp"
        variant="advisory"
      />
      <AboutSection />
      <ApproachSection />
      <CallToAction onOpenContact={onOpenContact} image="/images/event-crowd.webp" />
    </>
  );
}
