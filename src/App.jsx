import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { StatsBar } from './components/home/StatsBar';
import { FeatureStrip } from './components/home/FeatureStrip';
import { AboutSection } from './components/sections/AboutSection';
import { CoursesSection } from './components/sections/CoursesSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { FrameworksSection } from './components/sections/FrameworksSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/common/Footer';
import { DemoNoticeModal } from './components/common/DemoNoticeModal';
import { CourseModal } from './components/common/CourseModal';
import { Info } from 'lucide-react';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [courseModalOpen, setCourseModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenCourseModal = (course) => {
    setSelectedCourse(course);
    setCourseModalOpen(true);
  };

  const handleSelectCourseForInquiry = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EA] text-[#292D29] flex flex-col font-sans selection:bg-[#879B83]/30 selection:text-[#354B3B]">
      
      {/* Top Academic Demonstration Project Banner */}
      <div className="bg-[#354B3B] text-[#F5F3EA] border-b border-[#879B83]/30 py-2 px-4 text-center text-xs sm:text-sm flex items-center justify-center gap-2">
        <Info className="w-4 h-4 text-[#879B83] shrink-0" />
        <span>
          <strong className="text-white">Academic Project:</strong> Recreated for university assignment demonstration. Brand: <strong className="text-[#879B83]">Mind Engineer</strong>.
        </span>
      </div>

      {/* 1. Natural & Organic Responsive Header */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* 2. Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* 2. Stats Bar */}
        <StatsBar />

        {/* 3. Feature Strip (The Mind Engineer Difference) */}
        <FeatureStrip />

        {/* 4. About Section (Editorial Layout) */}
        <AboutSection />

        {/* 5. Courses Section (Interactive Filters & Syllabus Modal) */}
        <CoursesSection onOpenCourseModal={handleOpenCourseModal} />

        {/* 6. Services Section (Sports 4 C's, Corporate, 1-on-1, Wellbeing) */}
        <ServicesSection onSelectService={handleSelectCourseForInquiry} />

        {/* 7. Frameworks Section (The 4 C's Diagram & Academic Stats) */}
        <FrameworksSection />

        {/* 8. Case Studies Section (Simulated Academic Scenarios) */}
        <CaseStudiesSection />

        {/* 9. Contact Section (Demonstration Inquiry Hub) */}
        <ContactSection
          onOpenDemoModal={() => setDemoModalOpen(true)}
          selectedCourse={selectedCourse}
        />
      </main>

      {/* 3. Deep Forest Green Organic Footer */}
      <Footer onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Demonstration Notice Modal */}
      <DemoNoticeModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      {/* Course Detail Syllabus Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={courseModalOpen}
        onClose={() => setCourseModalOpen(false)}
        onSelectCourse={handleSelectCourseForInquiry}
      />
    </div>
  );
}
