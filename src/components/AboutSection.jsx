import React from 'react';
import { ABOUT_CONTENT, COMPANY_INFO } from '../data/content';
import { Target, CheckCircle2, ShieldCheck, Landmark, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glow-badge">
              <Landmark className="w-3.5 h-3.5" />
              <span>{ABOUT_CONTENT.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              {ABOUT_CONTENT.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              <p className="bg-slate-900/40 p-4 rounded-xl border border-slate-800 text-slate-200">
                {ABOUT_CONTENT.p1}
              </p>
              <p>
                {ABOUT_CONTENT.p2}
              </p>
              <p className="text-slate-400">
                {ABOUT_CONTENT.p3}
              </p>
            </div>

            {/* Guiding Principle Card */}
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-brand-950/60 via-slate-900/80 to-navy-950 border border-brand-500/30 shadow-glow-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-brand-500/20 text-brand-400 flex-shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-brand-400 mb-1">
                    Our Guiding Principle
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-white italic leading-snug">
                    "{ABOUT_CONTENT.principle}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Snapshot */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden border border-slate-800 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
              
              <div className="border-b border-slate-800 pb-5">
                <span className="text-[11px] font-semibold text-brand-400 uppercase tracking-wider">
                  Firm Overview
                </span>
                <h3 className="text-xl font-heading font-bold text-white mt-1">
                  M/s Grow Consultants
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {COMPANY_INFO.legalStatus}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200 block">Independent Advisory Model</span>
                    <span className="text-slate-400">Pure transaction facilitator & consultant; we do not lend capital directly.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200 block">Delhi Registered Headquarters</span>
                    <span className="text-slate-400">Lalita Park, Laxmi Nagar, Delhi – 110092</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200 block">Commercial Deal Protection</span>
                    <span className="text-slate-400">Formal exclusivity & non-circumvention protocols protecting client introductions.</span>
                  </div>
                </div>
              </div>

              {/* Partners badge */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-2">
                  Leadership / Partners
                </span>
                <div className="flex flex-wrap gap-2">
                  {COMPANY_INFO.partners.map((partner, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 font-medium"
                    >
                      {partner.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
