'use client';

import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { Logo } from './Logo';
import { ArrowUp, Mail, Phone, MapPin, MessageCircle, Youtube, Linkedin, Instagram, Facebook, Info, Heart } from 'lucide-react';

export const Footer = ({ onOpenDemoModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const programs = [
    { name: "Diploma in NLP (Academic Module)", href: "#courses" },
    { name: "NLP Practitioner Curriculum", href: "#courses" },
    { name: "NLP Master Practitioner Model", href: "#courses" },
    { name: "Body Language & Micro-Expressions Lab", href: "#courses" },
    { name: "Silva Mental Dynamics Model", href: "#courses" },
    { name: "Master Your Life 2.0 (Flagship Model)", href: "#courses" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Methodology", href: "#about" },
    { name: "Academic Courses", href: "#courses" },
    { name: "Coaching Services", href: "#services" },
    { name: "The 4 C's Framework", href: "#achievements" },
    { name: "Demo Case Studies", href: "#testimonials" },
    { name: "Inquiry Hub", href: "#contact" }
  ];

  return (
    <footer className="relative bg-[#354B3B] text-[#F5F3EA] pt-20 pb-12 overflow-hidden border-t border-[#879B83]/30">
      {/* Subtle organic decorative background leaf accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#879B83]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#879B83]/20">
          
          {/* Col 1: Brand & Academic Statement (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <Logo size="lg" showTagline={true} lightMode={true} />
              </div>

              <p className="font-sans text-sm text-[#E8E2D5] leading-relaxed max-w-sm mb-6">
                An academic demonstration project recreating modern cognitive performance, sports psychology, and Neuro-Linguistic Programming curricula in a serene, organic aesthetic.
              </p>

              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#26362A] border border-[#879B83]/30 max-w-sm mb-6">
                <Info className="w-5 h-5 text-[#879B83] shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-[#E8E2D5] leading-snug">
                  <strong className="text-white">Academic Project Notice:</strong> All curricula, metrics, and profiles are demonstration models created for university assignment review.
                </p>
              </div>
            </div>

            {/* Social Media Demo Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="w-10 h-10 rounded-xl bg-[#26362A] border border-[#879B83]/30 flex items-center justify-center text-[#E8E2D5] hover:text-[#879B83] hover:border-[#879B83] transition-colors"
                aria-label="YouTube (Demo)"
              >
                <Youtube className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="w-10 h-10 rounded-xl bg-[#26362A] border border-[#879B83]/30 flex items-center justify-center text-[#E8E2D5] hover:text-[#879B83] hover:border-[#879B83] transition-colors"
                aria-label="LinkedIn (Demo)"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="w-10 h-10 rounded-xl bg-[#26362A] border border-[#879B83]/30 flex items-center justify-center text-[#E8E2D5] hover:text-[#879B83] hover:border-[#879B83] transition-colors"
                aria-label="Instagram (Demo)"
              >
                <Instagram className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="w-10 h-10 rounded-xl bg-[#26362A] border border-[#879B83]/30 flex items-center justify-center text-[#E8E2D5] hover:text-[#879B83] hover:border-[#879B83] transition-colors"
                aria-label="Facebook (Demo)"
              >
                <Facebook className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="w-10 h-10 rounded-xl bg-[#879B83]/20 border border-[#879B83]/40 flex items-center justify-center text-[#879B83] hover:bg-[#879B83] hover:text-[#354B3B] transition-colors"
                aria-label="WhatsApp (Demo)"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Academic Programs (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold text-white mb-5">
              Academic Curricula
            </h4>
            <ul className="space-y-3 font-sans">
              {programs.map((prog) => (
                <li key={prog.name}>
                  <a
                    href={prog.href}
                    className="text-xs sm:text-sm text-[#E8E2D5] hover:text-white transition-colors inline-block"
                  >
                    {prog.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 font-sans">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-[#E8E2D5] hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Demonstration Contact Information (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold text-white mb-5">
              Demo Contact
            </h4>
            <div className="space-y-4 font-sans text-xs sm:text-sm text-[#E8E2D5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#879B83] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Lahore, Pakistan</p>
                  <p className="text-[11px] text-[#A78B6A]">(Demo Location)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#879B83]/20">
                <Mail className="w-4 h-4 text-[#879B83] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#A78B6A]">Email Placeholder</p>
                  <p className="text-xs font-semibold text-white">{siteConfig.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#879B83] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-[#A78B6A]">Phone Placeholder</p>
                  <p className="text-xs font-semibold text-white">{siteConfig.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#879B83] shrink-0 mt-0.5" />
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="text-xs text-[#879B83] hover:underline text-left font-semibold"
                >
                  WhatsApp: Demo contact only
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#E8E2D5]">
          <p>
            &copy; {new Date().getFullYear()} Mind Engineer. Academic Demonstration Project — University Assignment.
          </p>

          <div className="flex items-center gap-6">
            <button type="button" onClick={onOpenDemoModal} className="hover:text-white transition-colors">
              Academic Disclaimer
            </button>
            <button type="button" onClick={onOpenDemoModal} className="hover:text-white transition-colors">
              Project Scope
            </button>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-[#26362A] border border-[#879B83]/30 flex items-center justify-center text-[#E8E2D5] hover:text-white hover:bg-[#879B83] transition-colors"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
