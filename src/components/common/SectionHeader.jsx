import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  badgeColor = 'sage', // 'sage' | 'earth'
  className = ''
}) => {
  const alignClass = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end'
  }[align];

  const badgeStyles = {
    sage: 'bg-[#879B83]/15 text-[#354B3B] border-[#879B83]/30',
    earth: 'bg-[#A78B6A]/15 text-[#8D7252] border-[#A78B6A]/30'
  }[badgeColor] || 'bg-[#879B83]/15 text-[#354B3B] border-[#879B83]/30';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 lg:mb-16 ${alignClass} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium tracking-wider uppercase border mb-4 ${badgeStyles}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#879B83]" />
          <span>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#354B3B] leading-tight mb-4"
      >
        {title}{' '}
        {titleHighlight && (
          <span className="font-serif italic font-normal text-[#879B83]">{titleHighlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-base sm:text-lg text-[#5A615A] leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
