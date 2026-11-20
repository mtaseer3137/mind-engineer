'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { clientTestimonials, mindsetQuotes } from '../../data/testimonialsData';
import { Quote, Star, Award, CheckCircle2 } from 'lucide-react';

export const CaseStudiesSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'athletes', label: 'Athletic Scenarios' },
    { id: 'executives', label: 'Executive Leadership' },
    { id: 'professionals', label: 'Professionals' },
    { id: 'life-coaching', label: 'Personal Growth' }
  ];

  const filtered = activeTab === 'all'
    ? clientTestimonials
    : clientTestimonials.filter(t => t.category === activeTab);

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden bg-[#F5F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Demonstration Case Studies"
          badgeColor="earth"
          title="Simulated Case Studies"
          titleHighlight="& Mindset Quotes"
          subtitle="Educational demonstration scenarios illustrating how cognitive conditioning and the 4 C's framework translate into observable performance breakthroughs."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all ${
                  isActive
                    ? 'text-[#F5F3EA] bg-[#354B3B] shadow-sm'
                    : 'text-[#354B3B] bg-[#FFFFFF] hover:bg-[#E8E2D5] border border-[#879B83]/25'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#879B83]/25 p-7 flex flex-col justify-between shadow-organic hover:shadow-organic-hover transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-sans font-medium tracking-wider uppercase bg-[#879B83]/15 text-[#354B3B] border border-[#879B83]/30">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-[#879B83]/30 mb-3" />

                <p className="font-serif italic text-sm sm:text-base text-[#292D29] leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D5] flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#354B3B]">{item.name}</h4>
                  <p className="font-sans text-xs text-[#5A615A]">{item.role} • {item.affiliation}</p>
                </div>
                <span className="text-[10px] font-sans text-[#8D7252] bg-[#E8E2D5] px-2 py-0.5 rounded">
                  Demo
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sports Mindset Classic Reference Quotes */}
        <div className="rounded-3xl bg-[#E8E2D5]/70 border border-[#A78B6A]/30 p-8 lg:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#8D7252] block mb-1">
              Academic Sports Psychology Reference
            </span>
            <h4 className="font-serif text-2xl font-bold text-[#354B3B]">
              Reflections on Mental Strength
            </h4>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mindsetQuotes.slice(0, 2).map((q, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#879B83]/20 shadow-sm">
                <Quote className="w-6 h-6 text-[#A78B6A]/40 mb-2" />
                <p className="font-serif italic text-sm sm:text-base text-[#354B3B] leading-relaxed mb-4">
                  "{q.quote}"
                </p>
                <p className="font-sans font-bold text-xs text-[#292D29]">{q.author}</p>
                <p className="font-sans text-[11px] text-[#5A615A]">{q.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
