import React from 'react';
import { SERVICES, MANDATORY_DISCLAIMER } from '../data/content';
import { Banknote, FileCheck, ShieldAlert, LineChart, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const serviceIcons = [Banknote, FileCheck, ShieldAlert, LineChart];

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-950/60 relative border-t border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glow-badge mb-3">
            <span>Core Advisory Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            Specialised Financial Structuring & Commercial Support
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We provide specialised consultancy and facilitation services focused on funding opportunities available through third-party ticketing and distribution platforms, along with related commercial structuring support.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[index] || Banknote;
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-brand-500/50 hover:bg-slate-900/90 transition-all duration-300 shadow-xl"
              >
                {/* Number Watermark */}
                <div className="absolute top-4 right-6 text-4xl sm:text-5xl font-heading font-black text-slate-800/40 group-hover:text-brand-500/15 transition-colors pointer-events-none">
                  {service.num}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    <span>Discuss requirement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Clarification Box (Must appear on Services page) */}
        <div className="rounded-2xl bg-amber-500/5 border border-amber-500/30 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/20 text-amber-400 flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-heading font-bold text-amber-300 uppercase tracking-wider mb-2">
                {MANDATORY_DISCLAIMER.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {MANDATORY_DISCLAIMER.text}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
