import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { LetterExperience } from './components/LetterExperience';
import { AmbientCanvas } from './components/AmbientCanvas';
import { AudioPlayer } from './components/AudioPlayer';
import { romanticAudio } from './utils/audioEngine';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Attempt immediate autoplay as soon as the site opens
    romanticAudio.start().catch(() => {});

    // Browser autoplay policy fallback: if blocked initially,
    // start instantly upon the very first touch, click, or scroll anywhere on screen
    const handleFirstInteraction = () => {
      if (!romanticAudio.getIsPlaying()) {
        romanticAudio.start().catch(() => {});
      }
      removeListeners();
    };

    const events = ['click', 'touchstart', 'pointerdown', 'scroll', 'keydown'];
    const removeListeners = () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleFirstInteraction);
      });
    };

    events.forEach((evt) => {
      window.addEventListener(evt, handleFirstInteraction, { passive: true, once: true });
    });

    return () => {
      removeListeners();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#2A1810] selection:bg-[#F2DFE4] selection:text-[#6E2034] overflow-x-hidden">
      {/* Delicate Film Grain / Paper Texture */}
      <div className="film-grain" />

      {/* Subtle Warm Cinematic Vignette */}
      <div className="cinematic-vignette" />

      {/* Ambient Warm Golden/Blush Dust Particles */}
      <AmbientCanvas />

      {/* Elegant Corner Audio Control (♫) */}
      <AudioPlayer />

      {/* Main Flow: Hero with Romantic Photo, followed by the Letter Journey */}
      <main className="relative z-20">
        <HeroSection
          hasStarted={hasStarted}
          onStartReading={() => setHasStarted(true)}
        />

        {/* The Seamless Letter Experience */}
        <LetterExperience />
      </main>
    </div>
  );
}
