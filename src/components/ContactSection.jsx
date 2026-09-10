import React, { useRef, useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { copyText } from '../lib/clipboard';

const FIELDS = [
  { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'e.g. Abhinav Sharma', autoComplete: 'name' },
  { name: 'entityName', label: 'Entity / Venue / Artist Name', type: 'text', required: true, placeholder: 'e.g. Romeo Lane / Artist Alias', autoComplete: 'organization' },
  { name: 'email', label: 'Official Email', type: 'email', required: true, placeholder: 'you@company.com', autoComplete: 'email' },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, placeholder: '+91 98765 43210', autoComplete: 'tel' },
];

const CATEGORIES = [
  'Hospitality Operator (Restaurant / Bar / Lounge)',
  'Multi-Outlet / Franchise Hospitality Chain',
  'Performing Artist / Musician / Comedian',
  'Talent Management / Booking Agency',
  'Event Venue / Festival Promoter',
];

const VOLUMES = ['Under ₹10 Lakhs', '₹10L – ₹25L', '₹25L – ₹75L', '₹75L – ₹1.5 Cr', '₹1.5 Cr+'];

export default function ContactSection() {
  const formRef = useRef(null);
  const [copyState, setCopyState] = useState('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', entityName: '',
    category: CATEGORIES[0], monthlyGross: VOLUMES[2], message: '',
  });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const buildMessage = () =>
    [
      '*Grow Consultants — Financial Structuring Assessment*',
      '',
      `• *Name:* ${formData.name || 'Not specified'}`,
      `• *Entity / Venue / Artist:* ${formData.entityName || 'Not specified'}`,
      `• *Email:* ${formData.email || 'Not specified'}`,
      `• *Phone:* ${formData.phone || 'Not specified'}`,
      `• *Category:* ${formData.category}`,
      `• *Monthly Volume:* ${formData.monthlyGross}`,
      `• *Requirement:* ${formData.message || 'General platform facility structuring'}`,
    ].join('\n');

  // Submitting the form is the WhatsApp path, so the browser runs its own
  // validation and Enter-to-submit works.
  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(buildMessage())}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleEmail = () => {
    if (!formRef.current?.reportValidity()) return;
    const subject = `Structuring Inquiry: ${formData.entityName || formData.name || 'Client'}`;
    window.location.href =
      `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(buildMessage())}`;
  };

  const handleCopy = async () => {
    const ok = await copyText(buildMessage());
    setCopyState(ok ? 'copied' : 'failed');
    setTimeout(() => setCopyState('idle'), 2500);
  };

  const inputClass =
    'w-full rounded-sm border border-ivory-400 bg-ivory-50 px-4 py-2.5 text-sm text-navy-800 placeholder-stone-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500';

  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-8 lg:col-span-5">
          <div>
            <h2 className="eyebrow">Registered Headquarters</h2>
            <p className="mt-3 font-serif text-xl font-bold text-navy-800">
              {COMPANY_INFO.legalName}
            </p>
            <p className="mt-1 text-xs text-stone-500">{COMPANY_INFO.legalStatus}</p>
          </div>

          <address className="space-y-0.5 border-l-2 border-gold-300 pl-5 text-sm not-italic leading-relaxed text-stone-500">
            <p>{COMPANY_INFO.registeredOffice.addressLine1}</p>
            <p>{COMPANY_INFO.registeredOffice.area}</p>
            <p>{COMPANY_INFO.registeredOffice.landmark}</p>
            <p className="font-semibold text-navy-800">
              {COMPANY_INFO.registeredOffice.cityStateZip}
            </p>
          </address>

          <dl className="divide-y divide-ivory-400 border-y border-ivory-400 text-sm">
            <div className="py-4">
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-navy-800 underline-offset-4 hover:text-gold-600 hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </dd>
            </div>
            <div className="py-4">
              <dt className="eyebrow">WhatsApp Desk</dt>
              <dd className="mt-1.5">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-800 underline-offset-4 hover:text-gold-600 hover:underline"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          <form ref={formRef} onSubmit={handleWhatsApp} className="card space-y-5">
            <div className="border-b border-ivory-300 pb-4">
              <h2 className="font-serif text-xl font-bold text-navy-800">
                Request a structuring assessment
              </h2>
              <p className="mt-1.5 text-sm text-stone-500">
                Your details open a pre-filled message on WhatsApp or in your
                email client. Nothing is stored on this website.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={`contact-${field.name}`}
                    className="mb-1.5 block text-xs font-semibold text-navy-800"
                  >
                    {field.label} {field.required && <span className="text-gold-600">*</span>}
                  </label>
                  <input
                    id={`contact-${field.name}`}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-category" className="mb-1.5 block text-xs font-semibold text-navy-800">
                  Client Category
                </label>
                <select
                  id="contact-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contact-volume" className="mb-1.5 block text-xs font-semibold text-navy-800">
                  Monthly Gross / Ticket Run Rate
                </label>
                <select
                  id="contact-volume"
                  name="monthlyGross"
                  value={formData.monthlyGross}
                  onChange={handleChange}
                  className={inputClass}
                >
                  {VOLUMES.map((v) => <option key={v} value={v}>{v} / mo</option>)}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold text-navy-800">
                Opportunity Details &amp; Platform Goals
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your upcoming tour, venue expansion, or existing platform arrangements..."
                className={inputClass}
              />
            </div>

            <div className="space-y-3 pt-1">
              <button type="submit" className="btn-primary w-full">
                Send Inquiry on WhatsApp
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={handleEmail} className="btn-ghost">
                  Send via Email
                </button>
                <button type="button" onClick={handleCopy} className="btn-ghost">
                  {copyState === 'copied' ? 'Copied' : copyState === 'failed' ? 'Copy failed' : 'Copy Details'}
                </button>
              </div>
              <p aria-live="polite" className="sr-only">
                {copyState === 'copied' ? 'Enquiry details copied to clipboard' : ''}
                {copyState === 'failed' ? 'Could not copy to clipboard' : ''}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
