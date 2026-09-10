import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactSection from '../components/ContactSection';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Direct Commercial Advisory"
        title="Contact"
        intro="Ready to explore structured funding options through ticketing platforms, or discuss a specific opportunity? Get in touch with Grow Consultants."
      />
      <ContactSection />
    </>
  );
}
