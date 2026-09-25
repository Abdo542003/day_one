import React, { useEffect, useState, useRef } from 'react';
import { romanticAudio } from '../utils/audioEngine';
import { Volume2, VolumeX, Music, Upload, Check } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [isOpen, setIsOpen] = useState(false);
  const [customFileLoaded, setCustomFileLoaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = romanticAudio.subscribe((playing, vol) => {
      setIsPlaying(playing);
      setVolume(vol);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    romanticAudio.toggle();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    romanticAudio.setVolume(newVol);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      romanticAudio.loadUserFile(e.target.files[0]);
      setCustomFileLoaded(true);
      setTimeout(() => setCustomFileLoaded(false), 3000);
    }
  };

  return (
    <div className="fixed top-5 left-5 z-50 font-cairo" ref={popoverRef}>
      {/* Minimal Icon Button - Light Theme */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}
        className={`relative group flex items-center justify-center w-11 h-11 rounded-full transition-all duration-500 backdrop-blur-md border ${
          isPlaying
            ? 'bg-[#FFFDF9]/95 border-[#C48B9F]/60 text-[#6E2034] shadow-[0_4px_20px_rgba(196,139,159,0.35)] ring-2 ring-[#C48B9F]/20'
            : 'bg-[#FFFDF9]/85 border-[#EADBCC] text-[#4A2E2B] hover:text-[#2A1810] shadow-[0_4px_15px_rgba(42,24,16,0.06)]'
        }`}
      >
        <span
          className={`text-lg transition-transform duration-300 font-serif ${
            isPlaying ? 'scale-110 text-[#6E2034]' : 'scale-95 text-[#4A2E2B]'
          }`}
        >
          ♫
        </span>

        {/* Subtle breathing ripple when playing */}
        {isPlaying && (
          <span
            className="absolute inset-0 rounded-full border border-[#C48B9F]/40 animate-ping pointer-events-none opacity-40"
            style={{ animationDuration: '3s' }}
          />
        )}
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div
          dir="rtl"
          className="absolute top-14 left-0 w-64 p-4 rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-xl border border-[#EADBCC] shadow-[0_12px_36px_rgba(42,24,16,0.12)] text-xs text-[#2A1810] animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#F4ECE1]">
            <div className="flex items-center gap-2">
              <Music className="w-3.5 h-3.5 text-[#6E2034]" />
              <span className="font-semibold text-[#2A1810]">الموسيقى الرومانسية</span>
            </div>
            <button
              onClick={handleTogglePlay}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#F9EFF2] hover:bg-[#F2DFE4] text-[#6E2034] border border-[#C48B9F]/30 transition-colors"
            >
              {isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
            </button>
          </div>

          {/* Volume Control */}
          <div className="pt-3 pb-2 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-[#4A2E2B]">
              <span className="flex items-center gap-1.5 font-medium">
                {volume === 0 ? (
                  <VolumeX className="w-3.5 h-3.5 text-[#C48B9F]" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-[#6E2034]" />
                )}
                مستوى الصوت
              </span>
              <span className="font-bold">{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1.5 bg-[#F4ECE1] rounded-lg appearance-none cursor-pointer accent-[#6E2034]"
            />
          </div>

          {/* Custom audio file prompt */}
          <div className="pt-2 border-t border-[#F4ECE1] mt-1">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full flex items-center justify-center gap-2 py-1.5 px-2 rounded-lg bg-[#FAF7F2] hover:bg-[#F4ECE1] border border-[#EADBCC] text-[11px] font-medium text-[#4A2E2B] transition-colors"
            >
              {customFileLoaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">تم تحميل الأغنية بنجاح</span>
                </>
              ) : (
                <>
                  <Upload className="w-3.5 h-3.5 text-[#6E2034]" />
                  <span>اختيار ملف أغنية من جهازك</span>
                </>
              )}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="audio/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>
      )}
    </div>
  );
};
