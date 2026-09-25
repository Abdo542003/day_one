import React, { useState } from 'react';
import { romanticAudio } from '../utils/audioEngine';
import { LETTER_TITLE, LETTER_SUBTITLE } from '../data/letterData';

interface HeroScreenProps {
  onStart: () => void;
}

export const HeroScreen: React.FC<HeroScreenProps> = ({ onStart }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleStart = async () => {
    setIsOpening(true);
    // Start background music smoothly
    await romanticAudio.start();
    // Allow smooth fade out of hero and transition into letter
    setTimeout(() => {
      onStart();
    }, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#120B0D] transition-opacity duration-1000 ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Tiny warm light slowly breathing in the center */}
      <div className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full bg-[#6E263D]/25 blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute w-[120px] sm:w-[180px] h-[120px] sm:h-[180px] rounded-full bg-[#C9A66B]/15 blur-[60px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center space-y-8 animate-in fade-in duration-1000">
        
        {/* Subtle decorative crest */}
        <div className="flex items-center justify-center gap-3 text-[#C9A66B]/50 text-xs tracking-widest font-cairo">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C9A66B]/40" />
          <span className="font-serif text-sm">✦</span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C9A66B]/40" />
        </div>

        {/* Title */}
        <h1 className="font-ruqaa text-4xl sm:text-5xl md:text-6xl text-[#FFF4E6] tracking-wide leading-tight gold-glow">
          {LETTER_TITLE}
        </h1>

        {/* Subtitle */}
        <p className="font-amiri text-xl sm:text-2xl text-[#D9A0A8]/80 font-normal italic tracking-wide">
          &ldquo;{LETTER_SUBTITLE}&rdquo;
        </p>

        {/* Minimal Elegant Button */}
        <div className="pt-6">
          <button
            type="button"
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center px-9 py-3.5 rounded-full text-base font-tajawal font-medium text-[#FFF4E6] bg-[#3A101D]/70 hover:bg-[#541629] border border-[#C9A66B]/30 hover:border-[#C9A66B]/70 shadow-[0_0_25px_rgba(201,166,107,0.15)] hover:shadow-[0_0_35px_rgba(201,166,107,0.35)] transition-all duration-500 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              ابدئي ❤️
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6E263D]/0 via-[#C9A66B]/10 to-[#6E263D]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </button>
        </div>

        {/* Quiet prompt */}
        <p className="text-xs text-[#FFF4E6]/30 font-cairo tracking-wide pt-4">
          افتحي الصوت واقرأي بهدوء
        </p>
      </div>
    </div>
  );
};
