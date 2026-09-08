import React, { useState } from 'react';
import { X, MessageSquare, Mail, Copy, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function ConsultationModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    type: 'Hospitality (Restaurant / Bar / Lounge)',
    notes: ''
  });

  if (!isOpen) return null;

  const buildMessage = () => {
    return `*Grow Consultants - Structuring Inquiry*\n\n` +
      `• *Name:* ${form.name || 'Not provided'}\n` +
      `• *Phone:* ${form.phone || 'Not provided'}\n` +
      `• *Email:* ${form.email || 'Not provided'}\n` +
      `• *Category:* ${form.type}\n` +
      `• *Details:* ${form.notes || 'Inquiry regarding platform funding & advances'}`;
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
    const mailto = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Financial Structuring Inquiry - ' + (form.name || 'Client'))}&body=${encodeURIComponent(msg)}`;
    window.location.href = mailto;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(buildMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="mb-5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400">
              Grow Consultants Advisory
            </span>
            <h3 className="text-xl font-heading font-bold text-white mt-1">
              Connect Directly with Advisory Desk
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Enter your details to initiate an instant discussion on WhatsApp or Email.
            </p>
          </div>

          <form className="space-y-3.5">
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Full Name / Contact Person *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Abhinav Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-brand-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Business / Talent Category
              </label>
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-brand-500"
              >
                <option value="Hospitality (Restaurant / Bar / Lounge)">Hospitality (Restaurant / Bar / Lounge)</option>
                <option value="Performing Artist / Tour / Live Shows">Performing Artist / Comedian / Tour</option>
                <option value="Talent Management / Booking Agency">Talent Management Agency</option>
                <option value="Multi-Outlet Franchise Group">Multi-Outlet Franchise Group</option>
                <option value="Event Venue / Promoter">Event Venue / Promoter</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">
                Brief Note (Optional)
              </label>
              <textarea
                rows={2}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Upcoming event dates, ticket volume, or expansion needs..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-brand-500"
              />
            </div>

            {/* Direct Real Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-glow-sm flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleEmail}
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-400" />
                  <span>Send via Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct routing to Grow Consultants Partner Advisory Desk</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
