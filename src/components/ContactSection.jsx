import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, CheckCircle2, Clock, Sparkles, Building, Landmark, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    entityName: '',
    category: 'Hospitality Operator (Restaurant / Bar / Lounge)',
    monthlyGross: '₹20L – ₹50L',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildMessage = () => {
    return `*Grow Consultants - Financial Structuring Assessment*\n\n` +
      `• *Name:* ${formData.name || 'Not specified'}\n` +
      `• *Entity / Venue / Artist:* ${formData.entityName || 'Not specified'}\n` +
      `• *Email:* ${formData.email || 'Not specified'}\n` +
      `• *Phone:* ${formData.phone || 'Not specified'}\n` +
      `• *Category:* ${formData.category}\n` +
      `• *Monthly Volume:* ${formData.monthlyGross}\n` +
      `• *Requirement:* ${formData.message || 'General Platform Facility Structuring'}`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const msg = buildMessage();
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const msg = buildMessage();
    const mailto = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Structuring Inquiry: ' + (formData.entityName || formData.name || 'Client'))}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailto;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-950 relative border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glow-badge mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Commercial Advisory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            Get in Touch with Grow Consultants
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Ready to explore structured funding options through ticketing platforms or discuss a specific opportunity? Connect directly with our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Registered Office & Commercial Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800 shadow-2xl">
              <div>
                <span className="text-[11px] font-bold text-brand-400 uppercase tracking-widest block mb-1">
                  Registered Headquarters
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  {COMPANY_INFO.legalName}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {COMPANY_INFO.legalStatus}
                </p>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-slate-300 space-y-0.5">
                  <span className="font-semibold text-white block">Registered Office</span>
                  <p>{COMPANY_INFO.registeredOffice.addressLine1}</p>
                  <p>{COMPANY_INFO.registeredOffice.area}</p>
                  <p className="text-slate-400">{COMPANY_INFO.registeredOffice.landmark}</p>
                  <p className="font-semibold text-brand-300">{COMPANY_INFO.registeredOffice.cityStateZip}</p>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:border-brand-500/40 hover:bg-slate-900 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <div className="flex-grow">
                    <span className="text-slate-400 text-[11px] block">Official Email:</span>
                    <span className="text-white group-hover:text-brand-400 transition-colors font-medium">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brand-400" />
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:border-emerald-500/40 hover:bg-slate-900 transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div className="flex-grow">
                    <span className="text-slate-400 text-[11px] block">Direct WhatsApp Desk:</span>
                    <span className="text-white group-hover:text-emerald-400 transition-colors font-medium">
                      {COMPANY_INFO.phoneDisplay}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400" />
                </a>
              </div>

              {/* Key Assurances */}
              <div className="pt-4 border-t border-slate-800 text-xs space-y-2 text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Confidentiality & Non-Circumvention Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Success-Based Facilitation Mandate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct Partner-Level Handling</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Real Action Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
              <form className="space-y-4">
                <div className="border-b border-slate-800 pb-4 mb-4">
                  <h3 className="text-lg font-heading font-bold text-white">
                    Request Financial Structuring Assessment
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill in your details below to directly launch a pre-formatted inquiry on WhatsApp or Email.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Abhinav Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Entity / Venue / Artist Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="entityName"
                      value={formData.entityName}
                      onChange={handleChange}
                      placeholder="e.g. Romeo Lane / Artist Alias"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Client Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                    >
                      <option value="Hospitality Operator (Restaurant / Bar / Lounge)">Hospitality (Restaurant / Bar / Lounge)</option>
                      <option value="Multi-Outlet / Franchise Hospitality Chain">Multi-Outlet / Franchise Chain</option>
                      <option value="Performing Artist / Musician / Comedian">Performing Artist / Comedian / Musician</option>
                      <option value="Talent Management / Booking Agency">Talent Management Agency</option>
                      <option value="Event Venue / Festival Promoter">Event Venue / Festival Promoter</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Monthly Gross / Ticket Run Rate
                    </label>
                    <select
                      name="monthlyGross"
                      value={formData.monthlyGross}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-500"
                    >
                      <option value="Under ₹10 Lakhs">Under ₹10 Lakhs / mo</option>
                      <option value="₹10L – ₹25L">₹10L – ₹25L / mo</option>
                      <option value="₹25L – ₹75L">₹25L – ₹75L / mo</option>
                      <option value="₹75L – ₹1.5 Cr">₹75L – ₹1.5 Cr / mo</option>
                      <option value="₹1.5 Cr+">₹1.5 Crore+ / mo</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Opportunity Details & Platform Goals
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your upcoming tour, venue expansion, or existing platform arrangements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-2 space-y-3">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-md flex items-center justify-center gap-2 transition-all active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Inquiry on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleEmail}
                      className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 transition-all"
                    >
                      <Mail className="w-4 h-4 text-brand-400" />
                      <span>Send via Email</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2 transition-all"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-slate-400" />
                          <span>Copy Form Data</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 text-center pt-1">
                  Clicking will open WhatsApp or your email client directly with this structured inquiry.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
