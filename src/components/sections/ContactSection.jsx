'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { siteConfig } from '../../data/siteConfig';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, Send, Info, Loader2, AlertCircle } from 'lucide-react';

export const ContactSection = ({ onOpenDemoModal, selectedCourse }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: selectedCourse ? selectedCourse.title : 'Academic Certification (NLP / Silva / Body Language)',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[#E8E2D5]/40 border-t border-[#879B83]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Get In Touch"
          badgeColor="sage"
          title="Connect with"
          titleHighlight="Mind Engineer"
          subtitle="Have questions about our cognitive curricula, performance coaching, or corporate programs? Send us an inquiry and our team will get back to you."
        />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#879B83]/30 p-7 sm:p-8 shadow-organic">
              <h3 className="font-serif text-2xl font-bold text-[#354B3B] mb-2">
                Contact Information
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5A615A] leading-relaxed mb-6">
                Reach out through any of the channels below or submit the inquiry form.
              </p>

              <div className="space-y-4">
                {/* WhatsApp Demo Notice Button */}
                <div className="p-4 rounded-2xl bg-[#F5F3EA] border border-[#879B83]/25 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-sans font-semibold text-[#8D7252] uppercase tracking-wider">
                      Messaging Channel
                    </p>
                    <p className="font-sans font-bold text-sm text-[#354B3B]">
                      WhatsApp: Demo contact only
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans font-medium text-[#F5F3EA] bg-[#354B3B] hover:bg-[#2B3E31] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </button>
                </div>

                {/* Email Placeholder */}
                <div className="p-4 rounded-2xl bg-[#F5F3EA] border border-[#879B83]/25 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#879B83]/15 text-[#354B3B] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-semibold text-[#8D7252] uppercase tracking-wider">
                      Demonstration Email
                    </p>
                    <p className="font-sans font-bold text-sm text-[#354B3B]">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>

                {/* Phone Placeholder */}
                <div className="p-4 rounded-2xl bg-[#F5F3EA] border border-[#879B83]/25 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#879B83]/15 text-[#354B3B] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-semibold text-[#8D7252] uppercase tracking-wider">
                      Phone Placeholder
                    </p>
                    <p className="font-sans font-bold text-sm text-[#354B3B]">
                      {siteConfig.phone}
                    </p>
                  </div>
                </div>

                {/* Location Placeholder */}
                <div className="p-4 rounded-2xl bg-[#F5F3EA] border border-[#879B83]/25 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#A78B6A]/20 text-[#8D7252] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-sans font-semibold text-[#8D7252] uppercase tracking-wider">
                      Project Location
                    </p>
                    <p className="font-sans font-bold text-sm text-[#354B3B]">
                      Lahore, Pakistan (Demo Location)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E8E2D5] flex items-start gap-2.5 text-xs font-sans text-[#5A615A]">
                <Info className="w-4 h-4 text-[#879B83] shrink-0 mt-0.5" />
                <span>
                  External phone and WhatsApp direct links are intentionally disabled in accordance with academic assignment guidelines.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#879B83]/30 p-7 sm:p-9 shadow-organic-lg">
              <h3 className="font-serif text-2xl font-bold text-[#354B3B] mb-2">
                Inquiry Form
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#5A615A] mb-8">
                Fill out your details below and our team will get back to you with program schedules and consultation availability.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-[#F5F3EA] border border-[#879B83]/30 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#879B83]/20 text-[#354B3B] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#354B3B] mb-2">
                    Inquiry Received
                  </h4>
                  <p className="font-sans text-sm text-[#5A615A] leading-relaxed max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-[#354B3B]">{formData.name}</strong>. Your message regarding <em className="text-[#354B3B]">{formData.interest}</em> has been sent successfully. We will be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        interest: 'Academic Certification (NLP / Silva / Body Language)',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-sans font-medium text-[#F5F3EA] bg-[#354B3B] hover:bg-[#2B3E31] transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-sans font-semibold text-[#354B3B] uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/30 text-[#292D29] placeholder-[#879B83] text-sm focus:outline-none focus:border-[#354B3B] transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-[#354B3B] uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/30 text-[#292D29] placeholder-[#879B83] text-sm focus:outline-none focus:border-[#354B3B] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-semibold text-[#354B3B] uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="+92 XXX XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/30 text-[#292D29] placeholder-[#879B83] text-sm focus:outline-none focus:border-[#354B3B] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-[#354B3B] uppercase tracking-wider mb-1.5">
                      Curriculum / Service of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/30 text-[#292D29] text-sm focus:outline-none focus:border-[#354B3B] transition-colors"
                    >
                      <option>Academic Certification (NLP / Silva / Body Language)</option>
                      <option>Sports Psychology Performance Modeling (The 4 C's)</option>
                      <option>Executive One-to-One Performance Coaching</option>
                      <option>Corporate Team Culture & Communication Modules</option>
                      <option>Digital Wellbeing & Habit Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-semibold text-[#354B3B] uppercase tracking-wider mb-1.5">
                      Your Objectives / Inquiry Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your goals, questions, or specific focus areas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F5F3EA] border border-[#879B83]/30 text-[#292D29] placeholder-[#879B83] text-sm focus:outline-none focus:border-[#354B3B] transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-sans font-medium text-[#F5F3EA] bg-[#354B3B] hover:bg-[#2B3E31] transition-all shadow-md shadow-[#354B3B]/15 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
