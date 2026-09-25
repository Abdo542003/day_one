import React, { useState } from 'react';
import { romanticAudio } from '../utils/audioEngine';
import { LETTER_TITLE, LETTER_SUBTITLE } from '../data/letterData';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onStartReading: () => void;
  hasStarted: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartReading, hasStarted }) => {
  const [isPlayingTriggered, setIsPlayingTriggered] = useState(false);

  const handleStart = async () => {
    setIsPlayingTriggered(true);
    await romanticAudio.start();
    onStartReading();

    // Smooth scroll down to Chapter 1
    const chapter1 = document.getElementById('ch-01');
    if (chapter1) {
      chapter1.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-16 pb-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFDF9] to-[#FAF7F2] text-center overflow-hidden">
      {/* Soft warm blush ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[550px] h-[340px] sm:h-[550px] rounded-full bg-[#F2DFE4]/50 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[240px] sm:w-[380px] h-[240px] sm:h-[380px] rounded-full bg-[#F4ECE1]/60 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto w-full space-y-8 animate-in fade-in duration-1000">
        
        {/* Subtle decorative crest */}
        <div className="flex items-center justify-center gap-3 text-[#A67C37]/80 text-xs tracking-widest font-cairo">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#A67C37]/40" />
          <span className="font-serif text-sm">✦</span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#A67C37]/40" />
        </div>

        {/* Romantic Hero Image Card - Soft, Elegant, Seamlessly Embedded */}
        <div className="relative mx-auto max-w-[340px] sm:max-w-[420px] group">
          <div className="relative rounded-3xl overflow-hidden p-2 bg-[#FFFDF9] border border-[#EADBCC] shadow-[0_15px_40px_rgba(74,46,43,0.08)] transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(110,32,52,0.12)]">
            <div className="overflow-hidden rounded-2xl relative aspect-[4/3]">
              <img
                src="/src/assets/images/romantic_hero_moment_1790326741581.jpg"
                alt="لحظة رومانسية هادئة ودافئة"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              {/* Soft warm gradient overlay on the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1810]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          {/* Subtle warm halo */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-[#C48B9F]/15 to-[#A67C37]/10 -z-10 blur-xl opacity-70" />
        </div>

        {/* Title */}
        <div className="space-y-3 pt-2">
          <h1 className="font-ruqaa text-4xl sm:text-5xl md:text-6xl text-[#2A1810] tracking-wide leading-tight">
            {LETTER_TITLE}
          </h1>

          {/* Subtitle */}
          <p className="font-amiri text-xl sm:text-2xl text-[#6B3E49] font-normal italic tracking-wide">
            &ldquo;{LETTER_SUBTITLE}&rdquo;
          </p>
        </div>

        {/* Elegant Start Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleStart}
            className="group relative inline-flex items-center justify-center px-10 py-3.5 rounded-full text-base font-tajawal font-medium text-[#FFFDF9] bg-[#6E2034] hover:bg-[#541629] border border-[#C48B9F]/40 shadow-[0_6px_25px_rgba(110,32,52,0.25)] hover:shadow-[0_8px_30px_rgba(110,32,52,0.38)] transition-all duration-500 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              ابدئي ❤️
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C48B9F]/0 via-[#FFFDF9]/20 to-[#C48B9F]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </button>
        </div>

        {/* Gentle reading note */}
        <p className="text-xs text-[#4A2E2B]/60 font-cairo tracking-wide pt-1">
          افتحي الصوت واقرأي بهدوء على مهلك
        </p>

        {/* Scroll indicator */}
        <div className="pt-6 flex justify-center text-[#A67C37]/50 animate-bounce duration-1000">
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};
