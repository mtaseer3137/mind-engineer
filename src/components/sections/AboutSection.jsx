'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { certificationsData } from '../../data/credentialsData';
import { Sparkles, CheckCircle, ArrowRight, Brain, Target, Compass, BookOpen } from 'lucide-react';
import { Button } from '../common/Button';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden bg-[#F5F3EA]">
      {/* Subtle organic backdrop shapes */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E8E2D5]/70 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#879B83]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Editorial Methodology"
          badgeColor="earth"
          title="Engineering the"
          titleHighlight="Architecture of the Mind"
          subtitle="How an analytical engineering mindset translates into repeatable, systematic frameworks for personal resilience, emotional mastery, and cognitive clarity."
        />

        {/* Editorial Story Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-medium bg-[#879B83]/15 text-[#354B3B] border border-[#879B83]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#879B83]" />
              <span>A Structured Approach to Self-Mastery</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#354B3B] leading-snug">
              Moving from Transient Emotion to <span className="font-serif italic font-normal text-[#879B83]">Systemic Resilience</span>
            </h3>

            <p className="font-sans text-base sm:text-lg text-[#5A615A] leading-relaxed">
              Most conventional self-help focuses on temporary emotional spikes. In contrast, the <strong className="text-[#354B3B] font-medium">Mind Engineer</strong> paradigm views thought patterns, subconscious habits, and emotional responses as internal operational systems that can be mapped, debugged, and optimized.
            </p>

            <p className="font-sans text-sm sm:text-base text-[#5A615A] leading-relaxed">
              By synthesizing <strong className="text-[#354B3B] font-medium">Neuro-Linguistic Programming (NLP)</strong>, the <strong className="text-[#354B3B] font-medium">4 C's of sports psychology</strong>, and <strong className="text-[#354B3B] font-medium">non-verbal behavioral analysis</strong>, we provide students, leaders, and athletes with practical blueprints to dissolve anxiety and achieve sustainable mental composure.
            </p>

            {/* 2 Highlight Editorial Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#879B83]/25 shadow-organic">
                <div className="w-9 h-9 rounded-xl bg-[#879B83]/15 text-[#354B3B] flex items-center justify-center mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-[#354B3B] text-base mb-1">Analytical Precision</h4>
                <p className="font-sans text-xs text-[#5A615A] leading-relaxed">
                  Breaking down cognitive hurdles into manageable feedback loops.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#879B83]/25 shadow-organic">
                <div className="w-9 h-9 rounded-xl bg-[#A78B6A]/20 text-[#8D7252] flex items-center justify-center mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-[#354B3B] text-base mb-1">Applied Sports Mindset</h4>
                <p className="font-sans text-xs text-[#5A615A] leading-relaxed">
                  Pressure testing composure and execution using the 4 C's system.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button variant="forest" href="#courses" icon={ArrowRight}>
                Explore Curricula Details
              </Button>
            </div>
          </motion.div>

          {/* Right: Academic Frameworks Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#879B83]/30 p-6 sm:p-8 shadow-organic-lg">
              <div className="flex items-center gap-3 pb-5 mb-6 border-b border-[#E8E2D5]">
                <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] text-[#354B3B] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#354B3B]">Educational Methodologies</h4>
                  <p className="font-sans text-xs text-[#5A615A]">Cognitive Science Blueprint</p>
                </div>
              </div>

              <div className="space-y-4">
                {certificationsData.slice(0, 5).map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/15"
                  >
                    <CheckCircle className="w-5 h-5 text-[#879B83] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-xs sm:text-sm font-semibold text-[#354B3B]">{item.title}</p>
                      <p className="font-sans text-[11px] text-[#5A615A] mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#E8E2D5]/50 border border-[#A78B6A]/20 text-xs font-sans text-[#5A615A]">
                <span className="font-bold text-[#354B3B] block mb-0.5">Academic Project Note</span>
                Curricula are designed for educational demonstration and simulated case study modeling.
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
