import React from 'react';

export const Logo = ({ size = 'md', showTagline = true, lightMode = false, className = '' }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Organic Botanical / Mind Geometric Icon */}
      <div className={`relative ${iconSizes[size] || iconSizes.md} rounded-xl ${lightMode ? 'bg-[#354B3B] text-[#F5F3EA]' : 'bg-[#E8E2D5] text-[#354B3B]'} border border-[#879B83]/40 flex items-center justify-center p-1.5 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Sprouting leaf & neural node synergy representing organic mental growth */}
          <path d="M12 2a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9A9 9 0 0 1 3 11a9 9 0 0 1 9-9z" strokeDasharray="1 2" strokeOpacity="0.4" />
          <path d="M12 22V12" />
          <path d="M12 12c-2.5-3-6-3.5-7-2 0 4 3 6.5 7 6" />
          <path d="M12 12c2.5-3 6-3.5 7-2 0 4-3 6.5-7 6" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <span className={`font-serif font-bold tracking-tight leading-none ${lightMode ? 'text-[#F5F3EA]' : 'text-[#354B3B]'} ${textSizes[size] || textSizes.md}`}>
          MIND <span className="font-light italic text-[#879B83]">ENGINEER</span>
        </span>
        {showTagline && (
          <span className={`text-[10px] tracking-widest uppercase font-sans font-medium mt-1 ${lightMode ? 'text-[#879B83]' : 'text-[#A78B6A]'}`}>
            Unlock Your Mind
          </span>
        )}
      </div>
    </div>
  );
};
