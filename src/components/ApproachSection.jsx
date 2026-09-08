import React from 'react';
import { APPROACH_PILLARS } from '../data/content';
import { ShieldCheck, FileKey, CheckSquare, Sparkles } from 'lucide-react';

export default function ApproachSection() {
  const icons = [FileKey, ShieldCheck, CheckSquare];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glow-badge mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Governance & Engagement</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            Our Approach & Principles
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Grow Consultants approaches every client relationship with three non-negotiable operational priorities.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APPROACH_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 relative group hover:border-brand-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-brand-400">
                  <span>Priority 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
