import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, Compass, Leaf, Heart } from 'lucide-react';
import { Button } from '../common/Button';

export const HeroSection = ({ onOpenDemoModal }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#F5F3EA]">
      {/* Subtle Organic Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8E2D5]/60 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#879B83]/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Delicate organic background SVG pattern */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{
        backgroundImage: `radial-gradient(#354B3B 1px, transparent 1px)`,
        backgroundSize: '28px 28px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Academic Demonstration Project Badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E8E2D5] border border-[#A78B6A]/30 text-xs font-sans font-medium text-[#8D7252] shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A78B6A]" />
            <span>Academic Demonstration Project — Cognitive Coaching & Holistic Mindset</span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#354B3B] leading-[1.12] mb-6"
            >
              Unlock Your Mind.{' '}
              <span className="block italic font-normal text-[#879B83]">
                Transform Your Life.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-base sm:text-lg lg:text-xl text-[#5A615A] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              A thoughtful synthesis of <span className="text-[#354B3B] font-medium">engineering precision</span>, <span className="text-[#354B3B] font-medium">sports psychology</span>, and <span className="text-[#354B3B] font-medium">mind sciences</span>. Designed to foster sustainable focus, emotional composure, and authentic personal reinvention.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Button
                variant="forest"
                size="lg"
                href="#courses"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Explore Our Programs
              </Button>

              <Button
                variant="beige"
                size="lg"
                href="#about"
                className="w-full sm:w-auto"
              >
                Learn About Us
              </Button>

              <button
                type="button"
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-sans font-medium text-[#354B3B] bg-[#879B83]/15 hover:bg-[#879B83]/25 border border-[#879B83]/30 transition-all duration-200"
                title="WhatsApp (Demo Mode)"
              >
                <MessageCircle className="w-4 h-4 text-[#6D8169]" />
                <span>WhatsApp (Demo)</span>
              </button>
            </motion.div>

            {/* Organic Feature Trust Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-sans text-[#5A615A] pt-4 border-t border-[#879B83]/20"
            >
              <span className="flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#879B83]" />
                Evidence-Informed Frameworks
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#A78B6A]" />
                Sports Psychology & Resilience
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#6D8169]" />
                Holistic Personal Transformation
              </span>
            </motion.div>
          </div>

          {/* Right Column: Organic Visual Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Organic Border Frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-[#879B83]/30 via-[#E8E2D5] to-[#A78B6A]/20 shadow-organic-lg">
                
                {/* Main Serene Card */}
                <div className="rounded-[22px] bg-[#FFFFFF] p-6 sm:p-8 border border-[#879B83]/25 shadow-sm">
                  
                  {/* Organic Botanical Header */}
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#E8E2D5]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E8E2D5] text-[#354B3B] flex items-center justify-center p-2">
                        <Leaf className="w-5 h-5 text-[#354B3B]" />
                      </div>
                      <div>
                        <h2 className="font-serif text-lg font-bold text-[#354B3B]">Mind Engineer</h2>
                        <p className="text-xs font-sans text-[#5A615A]">Cognitive Growth & Wellbeing</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-sans font-medium tracking-wider uppercase bg-[#879B83]/15 text-[#354B3B] border border-[#879B83]/30">
                      Academic Demo
                    </span>
                  </div>

                  {/* Serene Graphic / Illustration Component */}
                  <div className="relative mb-6 rounded-2xl bg-gradient-to-b from-[#F5F3EA] to-[#E8E2D5]/70 p-6 border border-[#879B83]/20 flex flex-col items-center text-center">
                    {/* Concentric Mindful Circles & Sprout Motif */}
                    <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-[#879B83]/30 animate-pulse" />
                      <div className="absolute inset-3 rounded-full border border-[#A78B6A]/30" />
                      <div className="absolute inset-6 rounded-full bg-[#879B83]/20 flex items-center justify-center">
                        <Leaf className="w-7 h-7 text-[#354B3B]" />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#354B3B] mb-1">
                      Cultivating Mental Clarity
                    </h3>
                    <p className="font-sans text-xs text-[#5A615A] max-w-xs leading-relaxed">
                      Integrating conscious habit engineering with reflective mindfulness for harmonious living.
                    </p>
                  </div>

                  {/* 3 Core Organic Discipline Highlights */}
                  <div className="space-y-2.5">
                    {[
                      { title: "Neuro-Linguistic Patterns", desc: "Mindful language & thought realignment", badge: "Linguistics" },
                      { title: "Sports Psychology (4 C's)", desc: "Confidence, Control, Commitment, Challenge", badge: "Athletics" },
                      { title: "Non-Verbal Awareness", desc: "Understanding subtle micro-expressions", badge: "Behavior" }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/15 hover:border-[#879B83]/40 transition-colors"
                      >
                        <div>
                          <p className="font-sans text-xs sm:text-sm font-semibold text-[#354B3B]">{item.title}</p>
                          <p className="font-sans text-[11px] text-[#5A615A]">{item.desc}</p>
                        </div>
                        <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-[#E8E2D5] text-[#8D7252]">
                          {item.badge}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mindset Quote Ribbon */}
                  <div className="mt-5 p-3.5 rounded-xl bg-[#E8E2D5]/60 border border-[#A78B6A]/20 text-xs font-sans text-[#354B3B] leading-relaxed">
                    <p className="italic font-serif">
                      "True strength of mind is the quiet foundation upon which all enduring human achievement is built."
                    </p>
                  </div>

                </div>
              </div>

              {/* Decorative Earthy Leaf Accents */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#879B83]/20 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#A78B6A]/20 rounded-full blur-xl pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
