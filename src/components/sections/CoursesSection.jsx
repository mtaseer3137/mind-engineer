'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { coursesData } from '../../data/coursesData';
import { Clock, MapPin, ArrowRight, BookOpen, Check } from 'lucide-react';

export const CoursesSection = ({ onOpenCourseModal }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Curricula' },
    { id: 'nlp', label: 'NLP Modules' },
    { id: 'body-language', label: 'Body Language' },
    { id: 'mind-science', label: 'Mental Dynamics' },
    { id: 'transformation', label: 'Life Mastery' }
  ];

  const filteredCourses = activeCategory === 'all'
    ? coursesData
    : coursesData.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-24 lg:py-32 relative overflow-hidden bg-[#E8E2D5]/35 border-t border-[#879B83]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Academic Curricula"
          title="Demonstration"
          titleHighlight="Course Programs"
          subtitle="Explore structured modular curricula covering Neuro-Linguistic Programming, micro-expression analysis, and intentional meditative focus."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#F5F3EA] bg-[#354B3B] shadow-sm'
                    : 'text-[#354B3B] bg-[#FFFFFF] hover:bg-[#E8E2D5] border border-[#879B83]/25'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-[#FFFFFF] border border-[#879B83]/25 p-7 flex flex-col justify-between shadow-organic hover:shadow-organic-hover transition-all duration-300"
              >
                <div>
                  {/* Card Header Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-sans font-medium tracking-wider uppercase bg-[#879B83]/15 text-[#354B3B] border border-[#879B83]/30">
                      {course.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-sans text-[#5A615A]">
                      <Clock className="w-3.5 h-3.5 text-[#879B83]" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#354B3B] mb-3 leading-snug">
                    {course.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#5A615A] leading-relaxed mb-6">
                    {course.shortDescription}
                  </p>

                  {/* Modules Preview Pills */}
                  {course.modules && (
                    <div className="space-y-1.5 mb-6 pt-3 border-t border-[#E8E2D5]">
                      {course.modules.slice(0, 3).map((mod, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] font-sans text-[#292D29]">
                          <Check className="w-3 h-3 text-[#879B83] shrink-0" />
                          <span className="truncate">{mod}</span>
                        </div>
                      ))}
                      {course.modules.length > 3 && (
                        <p className="text-[10px] font-sans font-medium text-[#A78B6A] pt-1 pl-5">
                          + {course.modules.length - 3} more modules
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer with Working Learn More / Syllabus Trigger */}
                <div className="pt-4 border-t border-[#E8E2D5] flex items-center justify-between">
                  <span className="text-xs font-sans text-[#5A615A] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#A78B6A]" />
                    {course.mode}
                  </span>

                  <button
                    type="button"
                    onClick={() => onOpenCourseModal(course)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#354B3B] hover:text-[#879B83] transition-colors"
                  >
                    <span>View Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
