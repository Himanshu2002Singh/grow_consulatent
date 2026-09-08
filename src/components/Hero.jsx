import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Building2, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';
import { VALUE_BOXES } from '../data/content';

export default function Hero({ onOpenContact }) {
  const valueIcons = {
    funding: TrendingUp,
    protection: Shield,
    sector: Building2
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[250px] h-[250px] bg-sky-400/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-brand-500/30 bg-brand-500/10 text-brand-300 mb-6 backdrop-blur-md animate-fade-in shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-400" />
            <span>GROW CONSULTANTS • COMMERCIAL ADVISORY & STRUCTURING</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Specialised Financial Structuring for{' '}
            <span className="text-gradient-brand">Hospitality, F&B & Entertainment</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-8">
            We help restaurants, bars, lounges, multi-outlet groups and performing artists unlock structured capital — especially advances and revenue-discounting facilities linked to leading ticketing platforms.
          </p>

          {/* Short Intro Strip */}
          <div className="inline-block bg-slate-900/80 border border-slate-800 rounded-2xl px-5 py-3.5 mb-10 max-w-2xl backdrop-blur-md shadow-inner">
            <p className="text-xs sm:text-sm text-slate-300 text-center flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>Specialised financial advisory & transaction facilitation for high-footfall businesses & live events across India.</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 hover:from-brand-500 hover:to-brand-400 shadow-glow-md hover:shadow-glow-lg transition-all active:scale-95 group"
            >
              <span>Talk to Us</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all active:scale-95"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Three Key Value Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {VALUE_BOXES.map((box, index) => {
            const Icon = valueIcons[box.id] || TrendingUp;
            return (
              <div
                key={box.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl group-hover:bg-brand-500/15 transition-all" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 text-brand-400 group-hover:text-brand-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-2 leading-snug">
                      {box.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {box.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
