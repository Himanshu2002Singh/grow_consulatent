import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { ShieldCheck, MapPin, Building, Scale, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040810] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mandate */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                <span className="font-heading font-extrabold text-base text-brand-400">GC</span>
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                GROW <span className="text-brand-400">CONSULTANTS</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Specialised financial structuring, commercial advisory and transaction facilitation for hospitality, F&B and live entertainment in India.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300 block">Institutional Disclaimer:</span>
              <p>
                Grow Consultants acts solely as an independent consultant & facilitator. We do not lend money, do not issue loans, nor act as talent booking managers.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#about" className="hover:text-brand-400 transition-colors">About Firm</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Structuring Services</a></li>
              <li><a href="#who-we-serve" className="hover:text-brand-400 transition-colors">Who We Serve</a></li>
              <li><a href="#how-it-works" className="hover:text-brand-400 transition-colors">How It Works</a></li>
              <li><a href="#why-us" className="hover:text-brand-400 transition-colors">Key Differentiators</a></li>
              <li><a href="#approach" className="hover:text-brand-400 transition-colors">Our Approach</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Office</a></li>
            </ul>
          </div>

          {/* Legal Snapshot */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold text-slate-300 tracking-wider flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-brand-400" />
              <span>Legal Entity Snapshot</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Legal Entity:</span>
                <span className="text-slate-200 font-semibold">{COMPANY_INFO.legalName}</span>
                <p className="text-[11px] text-slate-400">({COMPANY_INFO.legalStatus})</p>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Designated Partners:</span>
                <span className="text-slate-300">
                  {COMPANY_INFO.partners.map(p => p.name).join(' • ')}
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Registered Office:</span>
                <span className="text-slate-300">
                  Plot No. 60, Street No. 2 (Old Plot No. 3), Lalita Park, Laxmi Nagar, Delhi – 110092
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Registered under Indian Partnership Act, 1932.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Strict Exclusivity & Deal Protection</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
