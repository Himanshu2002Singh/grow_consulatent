import React, { useState } from 'react';
import { CLIENT_CATEGORIES } from '../data/content';
import { Utensils, Mic2, Users2, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export default function WhoWeServe({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('hospitality');

  const selectedCategory = CLIENT_CATEGORIES.find(c => c.id === activeTab) || CLIENT_CATEGORIES[0];

  return (
    <section id="who-we-serve" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="glow-badge mb-3">
            <Users2 className="w-3.5 h-3.5" />
            <span>Target Client Profiles</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            Who We Work With
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We understand the operational realities of both venue operators and independent performing artists, structuring tailored engagements for each.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <button
              onClick={() => setActiveTab('hospitality')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'hospitality'
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Hospitality & Operators</span>
            </button>
            <button
              onClick={() => setActiveTab('artists')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'artists'
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-glow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mic2 className="w-4 h-4" />
              <span>Performing Artists & Talent</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-brand-400 tracking-wider">
                  {selectedCategory.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1 mb-4">
                  {selectedCategory.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {selectedCategory.description}
                </p>
              </div>

              {/* Bullets */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                  Typical Engagement Profiles:
                </span>
                {selectedCategory.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Platform Funding Facility Use */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                <Zap className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Facility Application:</strong>
                  {selectedCategory.platformUse}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-brand-600 hover:bg-brand-500 shadow-glow-sm transition-all"
                >
                  <span>Explore Financing for {activeTab === 'hospitality' ? 'Your Venue' : 'Your Live Tour'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Graphic Representation */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-[#071324] rounded-2xl p-6 border border-slate-800 relative">
              <div className="text-center pb-4 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 mx-auto flex items-center justify-center mb-3">
                  {activeTab === 'hospitality' ? <Utensils className="w-8 h-8" /> : <Mic2 className="w-8 h-8" />}
                </div>
                <h4 className="font-heading font-bold text-white text-base">
                  {activeTab === 'hospitality' ? 'F&B & Hospitality Venues' : 'Live Talent & Management'}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {activeTab === 'hospitality' ? 'High-Footfall Monetisation' : 'Tour Advance Structuring'}
                </p>
              </div>

              <div className="py-4 space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Target Facility:</span>
                  <span className="font-semibold text-white">{activeTab === 'hospitality' ? 'Revenue Discounting' : 'Ticket Advance'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Platform Focus:</span>
                  <span className="font-semibold text-brand-400">{activeTab === 'hospitality' ? 'Zomato, Swiggy, MagicPin' : 'BookMyShow, Skillbox'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Facilitation Fee:</span>
                  <span className="font-semibold text-emerald-400">Success-Based Only</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Management Rights:</span>
                  <span className="font-semibold text-white">100% Client Retained</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
