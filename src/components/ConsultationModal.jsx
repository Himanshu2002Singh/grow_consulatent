import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { copyText } from '../lib/clipboard';

const CATEGORIES = [
  'Hospitality (Restaurant / Bar / Lounge)',
  'Performing Artist / Tour / Live Shows',
  'Talent Management / Booking Agency',
  'Multi-Outlet Franchise Group',
  'Event Venue / Promoter',
];

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function ConsultationModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const previouslyFocused = useRef(null);
  const [copyState, setCopyState] = useState('idle');
  const [form, setForm] = useState({
    name: '', phone: '', email: '', type: CATEGORIES[0], notes: '',
  });

  // Lock scroll, trap focus, close on Escape, and restore focus on unmount.
  useEffect(() => {
    if (!isOpen) return undefined;

    previouslyFocused.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    dialogRef.current?.querySelector(FOCUSABLE)?.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll(FOCUSABLE);
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const buildMessage = () =>
    [
      '*Grow Consultants — Structuring Inquiry*',
      '',
      `• *Name:* ${form.name || 'Not provided'}`,
      `• *Phone:* ${form.phone || 'Not provided'}`,
      `• *Email:* ${form.email || 'Not provided'}`,
      `• *Category:* ${form.type}`,
      `• *Details:* ${form.notes || 'Inquiry regarding platform funding & advances'}`,
    ].join('\n');

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
    const subject = `Financial Structuring Inquiry — ${form.name || 'Client'}`;
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
    'w-full rounded-sm border border-ivory-400 bg-ivory-50 px-3.5 py-2.5 text-sm text-navy-800 placeholder-stone-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500';

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-navy-950/60 p-4 backdrop-blur-sm"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        className="relative my-8 w-full max-w-lg border border-ivory-400 bg-ivory-100 p-6 shadow-paper-lg sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-sm p-1.5 text-stone-500 transition-colors hover:bg-ivory-200 hover:text-navy-800"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="eyebrow">Grow Consultants Advisory</p>
        <h2 id="consultation-title" className="mt-2 font-serif text-xl font-bold text-navy-800">
          Connect with the advisory desk
        </h2>
        <p className="mt-1.5 text-sm text-stone-500">
          Your details open a pre-filled message on WhatsApp or in your email
          client. Nothing is stored on this website.
        </p>

        <form ref={formRef} onSubmit={handleWhatsApp} className="mt-6 space-y-4">
          <div>
            <label htmlFor="modal-name" className="mb-1.5 block text-xs font-semibold text-navy-800">
              Full Name / Contact Person <span className="text-gold-600">*</span>
            </label>
            <input
              id="modal-name" type="text" required autoComplete="name"
              value={form.name} onChange={update('name')}
              placeholder="e.g. Abhinav Sharma" className={inputClass}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="modal-phone" className="mb-1.5 block text-xs font-semibold text-navy-800">
                Phone / WhatsApp <span className="text-gold-600">*</span>
              </label>
              <input
                id="modal-phone" type="tel" required autoComplete="tel"
                value={form.phone} onChange={update('phone')}
                placeholder="+91 98765 43210" className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="modal-email" className="mb-1.5 block text-xs font-semibold text-navy-800">
                Email Address <span className="text-gold-600">*</span>
              </label>
              <input
                id="modal-email" type="email" required autoComplete="email"
                value={form.email} onChange={update('email')}
                placeholder="name@domain.com" className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="modal-type" className="mb-1.5 block text-xs font-semibold text-navy-800">
              Business / Talent Category
            </label>
            <select id="modal-type" value={form.type} onChange={update('type')} className={inputClass}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="modal-notes" className="mb-1.5 block text-xs font-semibold text-navy-800">
              Brief Note (optional)
            </label>
            <textarea
              id="modal-notes" rows={3} value={form.notes} onChange={update('notes')}
              placeholder="Upcoming event dates, ticket volume, or expansion needs..."
              className={inputClass}
            />
          </div>

          <div className="space-y-3 pt-1">
            <button type="submit" className="btn-primary w-full">
              Chat on WhatsApp
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={handleEmail} className="btn-ghost">
                Send via Email
              </button>
              <button type="button" onClick={handleCopy} className="btn-ghost">
                {copyState === 'copied' ? 'Copied' : copyState === 'failed' ? 'Copy failed' : 'Copy Details'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
