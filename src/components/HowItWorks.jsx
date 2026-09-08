import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { GitFork, CheckCircle, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-slate-950/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glow-badge mb-3">
            <GitFork className="w-3.5 h-3.5" />
            <span>Process & Execution</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            How We Work
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A structured, transparent 6-step lifecycle from initial discovery to commercial closing and capital disbursement.
          </p>
        </div>

        {/* 6 Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((item) => (
            <div
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`rounded-2xl p-6 sm:p-7 cursor-pointer transition-all duration-300 relative border ${
                activeStep === item.step
                  ? 'bg-slate-900 border-brand-500 shadow-glow-sm -translate-y-1'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
              }`}
            >
              {/* Step indicator header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center font-heading font-bold text-sm ${
                  activeStep === item.step
                    ? 'bg-brand-500 text-white shadow-glow-sm'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  0{item.step}
                </span>

                {item.step === 5 && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Success Fee Due
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fee Highlight Strip */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/80 to-slate-900/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-heading font-bold text-emerald-300">
                100% Success-Based Fee Alignment
              </h4>
              <p className="text-xs text-slate-400">
                Grow Consultants stays involved until transaction completion. Our success fee is payable strictly upon actual receipt of funds by the client.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
