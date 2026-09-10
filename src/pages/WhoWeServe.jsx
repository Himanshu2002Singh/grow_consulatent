import React from 'react';
import PageHeader from '../components/PageHeader';
import WhoWeServeSection from '../components/WhoWeServe';
import CallToAction from '../components/CallToAction';

export default function WhoWeServe({ onOpenContact }) {
  return (
    <>
      <PageHeader
        eyebrow="Target Client Profiles"
        title="Who we work with"
        intro="We understand the operational realities of both venue operators and independent performing artists, and structure our engagement accordingly."
      />
      <WhoWeServeSection onOpenContact={onOpenContact} />
      <CallToAction onOpenContact={onOpenContact} />
    </>
  );
}
