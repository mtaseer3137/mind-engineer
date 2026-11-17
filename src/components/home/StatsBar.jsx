import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/credentialsData';
import { Award, Users, Trophy, Briefcase, BookOpen } from 'lucide-react';

export const StatsBar = () => {
  const iconMap = {
    frameworks: Award,
    coachees: Users,
    'sports-models': Trophy,
    leadership: Briefcase,
    curricula: BookOpen
  };

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 mb-16 lg:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#FFFFFF] border border-[#879B83]/30 p-6 sm:p-8 lg:p-10 shadow-organic-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#879B83]/20">
            {statsData.map((stat, idx) => {
              const Icon = iconMap[stat.id] || Award;
              return (
                <div
                  key={stat.id}
                  className={`flex flex-col items-center md:items-start text-center md:text-left ${
                    idx > 0 ? 'pt-6 md:pt-0 md:pl-6 lg:pl-8' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#879B83]/20 flex items-center justify-center text-[#354B3B]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#354B3B] tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <h3 className="font-sans text-sm font-bold text-[#292D29] mb-1 tracking-tight">
                    {stat.label}
                  </h3>
                  <p className="font-sans text-xs text-[#5A615A] leading-snug">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
