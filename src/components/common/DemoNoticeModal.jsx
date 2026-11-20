'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const DemoNoticeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg rounded-2xl bg-[#FFFFFF] border border-[#879B83]/30 p-6 sm:p-8 shadow-2xl text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-[#5A615A] hover:text-[#354B3B] hover:bg-[#F5F3EA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-medium bg-[#879B83]/15 text-[#354B3B] border border-[#879B83]/30 mb-4">
            <Info className="w-3.5 h-3.5 text-[#879B83]" />
            <span>Academic Demonstration Project</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#354B3B] mb-2">
            Demonstration Mode Notice
          </h3>

          <p className="font-sans text-sm text-[#5A615A] leading-relaxed mb-6">
            This website is an academic demonstration project created for university assignment purposes. All external phone links, WhatsApp numbers, and personal details have been replaced with demonstration placeholders.
          </p>

          <div className="space-y-3.5 rounded-xl bg-[#F5F3EA] border border-[#879B83]/20 p-4 mb-6 text-sm font-sans">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#879B83]/20 flex items-center justify-center text-[#354B3B] shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#5A615A]">WhatsApp Contact</p>
                <p className="font-medium text-[#292D29]">Demo contact only (Direct Links Disabled)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#354B3B]/10 flex items-center justify-center text-[#354B3B] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#5A615A]">Phone Placeholder</p>
                <p className="font-medium text-[#292D29]">+92 XXX XXXXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#A78B6A]/20 flex items-center justify-center text-[#8D7252] shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#5A615A]">Email Placeholder</p>
                <p className="font-medium text-[#292D29]">hello@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#879B83]/20 flex items-center justify-center text-[#354B3B] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#5A615A]">Location</p>
                <p className="font-medium text-[#292D29]">Lahore, Pakistan (Demo Location)</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-sans font-medium text-[#F5F3EA] bg-[#354B3B] hover:bg-[#2B3E31] transition-colors shadow-md"
            >
              Understood
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
