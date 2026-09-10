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
      />
      <WhyUsSection />
      <FAQSection />
      <CallToAction onOpenContact={onOpenContact} />
    </>
  );
}
