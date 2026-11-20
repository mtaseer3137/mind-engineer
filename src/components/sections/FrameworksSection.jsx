'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { statsData } from '../../data/credentialsData';
import { ShieldCheck, Target, Zap, Flame, Award, BookOpen, Compass } from 'lucide-react';

export const FrameworksSection = () => {
  const fourCs = [
    {
      title: "Confidence",
      tagline: "Unshakable Self-Belief",
      desc: "Trusting preparation and internal capability regardless of external scoreboard tension or momentary deficits.",
      icon: Award
    },
    {
      title: "Control",
      tagline: "Emotional Regulation",
      desc: "Commanding physiological arousal, breathwork, heart rate, and emotional equilibrium in critical moments.",
      icon: Target
    },
    {
      title: "Commitment",
      tagline: "Relentless Discipline",
      desc: "Unyielding dedication to deliberate daily practice, nutrition, and systematic long-term athletic milestones.",
      icon: Flame
    },
    {
      title: "Challenge",
      tagline: "Reframing High Stakes",
      desc: "Viewing intense pressure not as a psychological threat, but as an opportunity to demonstrate excellence.",
      icon: Zap
    }
  ];

  return (
    <section id="achievements" className="py-24 lg:py-32 relative overflow-hidden bg-[#E8E2D5]/40 border-t border-[#879B83]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Conceptual Frameworks"
          badgeColor="sage"
          title="The 4 C's of"
          titleHighlight="Peak Performance"
          subtitle="Our core sports psychology framework modeled to condition mental composure and competitive fortitude in high-pressure athletic and corporate scenarios."
        />

        {/* The 4 C's Visual Diagram Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {fourCs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative rounded-3xl bg-[#FFFFFF] border border-[#879B83]/30 p-7 flex flex-col justify-between shadow-organic hover:shadow-organic-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8E2D5] text-[#354B3B] flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#A78B6A]/50">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#354B3B] mb-1">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs font-semibold text-[#8D7252] uppercase tracking-wider mb-3">
                    {item.tagline}
                  </p>

                  <p className="font-sans text-xs sm:text-sm text-[#5A615A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E8E2D5] flex items-center gap-1.5 text-[11px] font-sans font-medium text-[#354B3B]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#879B83]" />
                  <span>Conditioning Pillar</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Project Statistics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#FFFFFF] border border-[#879B83]/30 p-8 lg:p-10 shadow-organic"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="font-serif text-2xl font-bold text-[#354B3B] mb-2">
              Academic Demonstration Metrics
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#5A615A]">
              Illustrating the reach of simulated cognitive linguistics and sports psychology models across educational case studies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#879B83]/20">
            {statsData.slice(0, 4).map((s, i) => (
              <div key={s.id} className={i > 0 ? "pt-4 md:pt-0 md:pl-4" : ""}>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#354B3B] mb-1">
                  {s.value}
                </p>
                <p className="font-sans text-xs sm:text-sm font-semibold text-[#292D29]">
                  {s.label}
                </p>
                <p className="font-sans text-[11px] text-[#5A615A] mt-1">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
