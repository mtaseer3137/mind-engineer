import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { servicesData } from '../../data/servicesData';
import { Trophy, Users, UserCheck, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection = ({ onSelectService }) => {
  const iconMap = {
    'sports-mind-coaching': Trophy,
    'corporate-training': Users,
    'one-to-one-coaching': UserCheck,
    'addiction-recovery': Shield
  };

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-[#F5F3EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Specialized Consultative Frameworks"
          badgeColor="earth"
          title="Applied Coaching"
          titleHighlight="& Advisory Models"
          subtitle="Explore our consultative models designed for high-stakes athletic competition, corporate communication, private mentorship, and digital wellbeing."
        />

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.id] || Trophy;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl bg-[#FFFFFF] border border-[#879B83]/25 p-7 flex flex-col justify-between shadow-organic hover:shadow-organic-hover transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#879B83]/15 text-[#354B3B] flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-[#8D7252] mb-2 block">
                    {service.badge}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#354B3B] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#5A615A] leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  {/* Framework highlights */}
                  {service.framework && (
                    <div className="p-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/15 mb-4 text-xs font-sans">
                      <p className="font-bold text-[#354B3B] mb-1">{service.framework.name}:</p>
                      <p className="text-[#5A615A] text-[11px]">
                        {service.framework.pillars.map(p => p.name).join(' • ')}
                      </p>
                    </div>
                  )}

                  {service.programs && (
                    <div className="space-y-1.5 mb-4 text-xs font-sans">
                      {service.programs.slice(0, 2).map((prog, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#292D29]">
                          <CheckCircle2 className="w-3 h-3 text-[#879B83] shrink-0" />
                          <span className="truncate">{prog.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#E8E2D5]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#354B3B] hover:text-[#879B83] transition-colors"
                  >
                    <span>Simulation Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
