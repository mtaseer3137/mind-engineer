'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, MapPin, CheckCircle, Award, BookOpen, ArrowRight } from 'lucide-react';

export const CourseModal = ({ course, isOpen, onClose, onSelectCourse }) => {
  if (!isOpen || !course) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FFFFFF] border border-[#879B83]/30 p-6 sm:p-8 lg:p-10 shadow-2xl text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-[#5A615A] hover:text-[#354B3B] hover:bg-[#F5F3EA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-[#879B83]/15 text-[#354B3B] border border-[#879B83]/30">
              {course.badge}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#5A615A]">
              <Clock className="w-3.5 h-3.5 text-[#879B83]" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#5A615A]">
              <MapPin className="w-3.5 h-3.5 text-[#A78B6A]" />
              {course.mode}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#354B3B] mb-3">
            {course.title}
          </h3>

          <p className="font-sans text-sm sm:text-base text-[#5A615A] leading-relaxed mb-6">
            {course.fullDescription || course.shortDescription}
          </p>

          {/* Syllabus Modules */}
          {course.modules && course.modules.length > 0 && (
            <div className="mb-6">
              <h4 className="font-serif text-lg font-bold text-[#354B3B] mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#879B83]" />
                <span>Curriculum Modules</span>
              </h4>
              <div className="space-y-2.5 bg-[#F5F3EA] rounded-2xl p-4 sm:p-5 border border-[#879B83]/20">
                {course.modules.map((module, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292D29]">
                    <CheckCircle className="w-4 h-4 text-[#879B83] shrink-0 mt-0.5" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certification / Audience note */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-xs font-sans">
            <div className="p-3.5 rounded-xl bg-[#E8E2D5]/50 border border-[#A78B6A]/20">
              <span className="font-bold text-[#354B3B] block mb-1">Target Audience</span>
              <span className="text-[#5A615A]">{course.audience}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#E8E2D5]/50 border border-[#A78B6A]/20">
              <span className="font-bold text-[#354B3B] block mb-1 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-[#A78B6A]" />
                <span>Academic Certificate</span>
              </span>
              <span className="text-[#5A615A]">{course.certification}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#879B83]/20">
            <span className="text-xs text-[#5A615A]">
              Academic Demonstration Module • Non-Commercial
            </span>
            <button
              onClick={() => {
                onClose();
                if (onSelectCourse) onSelectCourse(course);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-sans font-medium text-[#F5F3EA] bg-[#354B3B] hover:bg-[#2B3E31] transition-colors shadow-md"
            >
              <span>Inquire About This Module</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
