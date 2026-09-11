import React from 'react';
import PageHeader from '../components/PageHeader';
import WhyUsSection from '../components/WhyUs';
import FAQSection from '../components/FAQSection';
import CallToAction from '../components/CallToAction';

export default function WhyUs({ onOpenContact }) {
  return (
    <>
      <PageHeader
        eyebrow="Key Differentiators"
        title="Why work with us"
        intro="A specialised approach designed around the cash-flow realities of hospitality operations and entertainment ticketing."
        image="/images/why-live.webp"
        variant="entertainment"
      />
      <WhyUsSection />
      <FAQSection />
      <CallToAction onOpenContact={onOpenContact} image="/images/why-outcomes.webp" />
    </>
  );
}
