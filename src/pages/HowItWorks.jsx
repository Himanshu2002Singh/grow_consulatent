import React from 'react';
import PageHeader from '../components/PageHeader';
import HowItWorksSection from '../components/HowItWorks';
import FundingCalculator from '../components/FundingCalculator';
import CallToAction from '../components/CallToAction';

export default function HowItWorks({ onOpenContact }) {
  return (
    <>
      <PageHeader
        eyebrow="Process & Execution"
        title="How we work"
        intro="A structured, transparent six-step lifecycle from initial discussion to commercial closing and capital disbursement."
        image="/images/how-stage.webp"
        variant="entertainment"
      />
      <HowItWorksSection />
      <FundingCalculator onOpenContact={onOpenContact} />
      <CallToAction onOpenContact={onOpenContact} image="/images/concert-crowd.webp" />
    </>
  );
}
