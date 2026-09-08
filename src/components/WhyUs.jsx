import React from 'react';
import { WHY_US_POINTS } from '../data/content';
import { Award, Compass, Eye, DollarSign, Lock, ShieldCheck } from 'lucide-react';

export default function WhyUs() {
  const icons = [Award, Compass, Eye, DollarSign, Lock, ShieldCheck];

  return (
    <section id="why-us" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glow-badge mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Key Differentiators</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            Why Work With Us
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A specialized approach designed specifically around the nuances of hospitality cash flows and entertainment ticketing.
          </p>
        </div>

        {/* 6 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_POINTS.map((point, index) => {
            const Icon = icons[index] || Award;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 sm:p-7 hover:border-brand-500/40 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700 text-brand-400 group-hover:text-brand-300 group-hover:bg-brand-500/10 group-hover:border-brand-500/30 flex items-center justify-center mb-5 transition-all">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
