'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { featurePillars } from '../../data/credentialsData';
import { Cpu, Trophy, Award, Compass, TrendingUp, Globe, CheckCircle2 } from 'lucide-react';

export const FeatureStrip = () => {
  const iconMap = {
    Cpu: Cpu,
    Trophy: Trophy,
    Award: Award,
    Compass: Compass,
    TrendingUp: TrendingUp,
    Globe: Globe
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-[#E8E2D5]/50 border-y border-[#879B83]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="The Mind Engineer Difference"
          title="Engineered for"
          titleHighlight="Holistic Growth"
          subtitle="Moving beyond superficial hype. We merge methodical analytical rigor with reflective personal development frameworks to cultivate enduring self-mastery."
        />

        {/* 6 Organic Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featurePillars.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Award;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-7 bg-[#FFFFFF] border border-[#879B83]/25 hover:border-[#879B83]/60 transition-all duration-300 shadow-organic hover:shadow-organic-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#879B83]/15 text-[#354B3B] flex items-center justify-center mb-5 group-hover:bg-[#354B3B] group-hover:text-[#F5F3EA] transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#354B3B] mb-3 tracking-tight group-hover:text-[#2B3E31] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="font-sans text-sm text-[#5A615A] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#879B83]/15 flex items-center gap-2 text-xs font-sans font-medium text-[#8D7252]">
                  <CheckCircle2 className="w-4 h-4 text-[#879B83]" />
                  <span>Educational Model</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
