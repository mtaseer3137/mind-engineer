import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Services', href: '#services' },
    { name: 'Frameworks', href: '#achievements' },
    { name: 'Case Studies', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F5F3EA]/95 backdrop-blur-md py-3.5 shadow-sm border-b border-[#879B83]/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mind Engineer Organic Brand Logo */}
            <a href="#home" className="group focus:outline-none">
              <Logo size="md" showTagline={true} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#E8E2D5]/70 border border-[#879B83]/25 shadow-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs xl:text-sm font-sans font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'text-[#354B3B] font-semibold'
                        : 'text-[#5A615A] hover:text-[#354B3B]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeOrganicNavPill"
                        className="absolute inset-0 rounded-full bg-[#FFFFFF] border border-[#879B83]/30 shadow-sm"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* WhatsApp Demo Button */}
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="hidden xl:inline-flex items-center gap-2 text-xs font-sans font-medium px-3.5 py-2 rounded-xl text-[#354B3B] bg-[#879B83]/20 hover:bg-[#879B83]/30 border border-[#879B83]/30 transition-all duration-200"
                title="WhatsApp (Demo Mode)"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#6D8169]" />
                <span>WhatsApp (Demo)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium px-4 py-2.5 rounded-xl text-[#F5F3EA] bg-[#354B3B] hover:bg-[#2B3E31] shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <span>Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-[#E8E2D5] border border-[#879B83]/30 text-[#354B3B] hover:bg-[#DED6C7] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#292D29]/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#F5F3EA] border-l border-[#879B83]/30 p-6 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#879B83]/20">
                  <Logo size="sm" showTagline={false} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-[#5A615A] hover:text-[#354B3B] hover:bg-[#E8E2D5]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-xl text-base font-sans font-medium transition-colors ${
                          isActive
                            ? 'bg-[#E8E2D5] text-[#354B3B] font-semibold border border-[#879B83]/30'
                            : 'text-[#5A615A] hover:text-[#354B3B] hover:bg-[#E8E2D5]/50'
                        }`}
                      >
                        {link.name}
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-[#879B83]/20">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-sans font-medium text-[#354B3B] bg-[#879B83]/20 hover:bg-[#879B83]/30 border border-[#879B83]/30 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#6D8169]" />
                  <span>WhatsApp: Demo contact only</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-sans font-medium text-[#F5F3EA] bg-[#354B3B] hover:bg-[#2B3E31] transition-colors shadow-sm"
                >
                  <span>Inquiry Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
