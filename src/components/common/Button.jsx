'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'forest',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  disabled = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F5F3EA] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    forest: "bg-[#354B3B] hover:bg-[#2B3E31] text-[#F5F3EA] shadow-md shadow-[#354B3B]/15 hover:shadow-lg hover:shadow-[#354B3B]/25 focus:ring-[#354B3B]",
    sage: "bg-[#879B83] hover:bg-[#6D8169] text-white shadow-md shadow-[#879B83]/20 hover:shadow-lg focus:ring-[#879B83]",
    beige: "bg-[#E8E2D5] hover:bg-[#DED6C7] text-[#354B3B] border border-[#A78B6A]/30 shadow-sm focus:ring-[#A78B6A]",
    outline: "bg-transparent hover:bg-[#E8E2D5]/50 text-[#354B3B] border border-[#354B3B]/30 hover:border-[#354B3B] focus:ring-[#354B3B]",
    ghost: "bg-transparent hover:bg-[#879B83]/15 text-[#354B3B] focus:ring-[#879B83]",
    earth: "bg-[#A78B6A] hover:bg-[#8D7252] text-white shadow-md focus:ring-[#A78B6A]"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
    xl: "text-lg px-8 py-4 gap-3"
  };

  const classes = `${baseStyles} ${variants[variant] || variants.forest} ${sizes[size] || sizes.md} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
};
