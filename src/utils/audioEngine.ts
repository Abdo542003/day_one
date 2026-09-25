/**
 * Romantic Audio Engine
 * Supports:
 * 1. Dedicated audio file (`/music.mp3` or user-selected file)
 * 2. Emotional procedural ambient piano & warm velvet strings synthesizer fallback
 *    so music plays reliably without silence even before a local file is provided.
 */

class RomanticAudioEngine {
  private audioEl: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private isSynthesizing = false;
  private synthGain: GainNode | null = null;
  private synthInterval: any = null;
  private isPlaying = false;
  private volume = 0.85;
  private usingFile = false;
  private listeners: Set<(playing: boolean, vol: number) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initAudioElement('/music.mp3');
    }
  }

  private initAudioElement(src: string) {
    if (this.audioEl) {
      this.audioEl.pause();
    }
    this.audioEl = new Audio(src);
    this.audioEl.loop = true;
    this.audioEl.preload = 'auto';
    this.audioEl.volume = this.volume;

    // Listen for ended event just in case loop attribute has browser quirks
    this.audioEl.addEventListener('ended', () => {
      if (this.isPlaying && this.audioEl) {
        this.audioEl.currentTime = 0;
        this.audioEl.play().catch(() => {});
      }
    });
  }

  public subscribe(cb: (playing: boolean, vol: number) => void) {
    this.listeners.add(cb);
    cb(this.isPlaying, this.volume);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying, this.volume));
  }

  public async start(): Promise<void> {
    if (this.isPlaying) return;

    if (!this.audioEl) {
      this.initAudioElement('/music.mp3');
    }

    try {
      if (this.audioEl) {
        this.audioEl.volume = this.volume;
        await this.audioEl.play();
        this.usingFile = true;
        this.isPlaying = true;
        this.notify();
        return;
      }
    } catch (err) {
      console.warn('Audio element play failed (browser autoplay restriction or load error):', err);
      // Do not mark isPlaying = true if it was blocked by browser policy,
      // so the subsequent first user gesture can start the song immediately.
      return;
    }
  }

  public loadUserFile(file: File) {
    if (this.isSynthesizing) {
      this.stopProcedural();
    }
    const url = URL.createObjectURL(file);
    this.initAudioElement(url);
    this.usingFile = true;
    if (this.audioEl) {
      this.audioEl.play().catch(() => {});
    }
    this.isPlaying = true;
    this.notify();
  }

  public toggle(): void {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.start();
    }
  }

  public pause(): void {
    if (this.usingFile && this.audioEl) {
      this.audioEl.pause();
    }
    if (this.isSynthesizing) {
      this.stopProcedural();
    }
    this.isPlaying = false;
    this.notify();
  }

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.usingFile && this.audioEl) {
      this.audioEl.volume = this.volume;
    }
    if (this.synthGain && this.ctx) {
      this.synthGain.gain.setValueAtTime(this.volume * 0.15, this.ctx.currentTime);
    }
    this.notify();
  }

  public getVolume(): number {
    return this.volume;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private fadeInAudio(el: HTMLAudioElement) {
    let current = 0;
    const target = this.volume;
    const step = target / 30;
    const timer = setInterval(() => {
      current = Math.min(target, current + step);
      el.volume = current;
      if (current >= target) {
        clearInterval(timer);
      }
    }, 100);
  }

  /**
   * Procedural delicate romantic soundscape:
   * Warm velvet chords (Eb minor / Bb minor / Ab minor / Gb major)
   * with soft ambient reverb resonance.
   */
  private startProceduralRomanticMusic() {
    if (this.isSynthesizing) return;
    this.isSynthesizing = true;

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.synthGain = this.ctx.createGain();
      // Gentle fade in
      this.synthGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.synthGain.gain.linearRampToValueAtTime(this.volume * 0.14, this.ctx.currentTime + 3);

      // Low pass filter for soft, warm, vintage felt-piano & warm tape feel
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(750, this.ctx.currentTime);
      filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      this.synthGain.connect(filter);
      filter.connect(this.ctx.destination);

      // Bittersweet chord progression frequencies (Hz)
      const chordProgression = [
        // Chord 1: Db Maj9 (Warm & intimate)
        [138.59, 174.61, 207.65, 261.63, 329.63],
        // Chord 2: Ab Maj / C (Emotional depth)
        [130.81, 164.81, 207.65, 261.63, 311.13],
        // Chord 3: Bb min7 (Tender confession)
        [116.54, 138.59, 174.61, 233.08, 277.18],
        // Chord 4: Gb Maj7 (Hopeful light)
        [92.5, 138.59, 185.0, 220.0, 277.18],
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!this.isSynthesizing || !this.ctx || !this.synthGain) return;
        const notes = chordProgression[chordIndex % chordProgression.length];
        chordIndex++;

        notes.forEach((freq, idx) => {
          setTimeout(() => {
            if (!this.isSynthesizing || !this.ctx || !this.synthGain) return;
            this.playWarmTone(freq, 4.5);
          }, idx * 420);
        });
      };

      playChord();
      this.synthInterval = setInterval(playChord, 5200);
    } catch {
      // Audio context might fail on restricted environments
    }
  }

  private playWarmTone(freq: number, duration: number) {
    if (!this.ctx || !this.synthGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Triangle for warm acoustic roundness
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle vibrato
      const vibrato = this.ctx.createOscillator();
      const vibratoGain = this.ctx.createGain();
      vibrato.frequency.value = 3.5;
      vibratoGain.gain.value = freq * 0.003;
      vibrato.connect(osc.frequency);
      vibrato.start(now);
      vibrato.stop(now + duration);

      // Gentle envelope: soft attack, singing sustain, gentle release
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.35, now + 0.35);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(noteGain);
      noteGain.connect(this.synthGain);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch {}
  }

  private stopProcedural() {
    this.isSynthesizing = false;
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    if (this.synthGain && this.ctx) {
      try {
        this.synthGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1);
        setTimeout(() => {
          if (this.ctx && this.ctx.state !== 'closed') {
            this.ctx.close().catch(() => {});
          }
        }, 1100);
      } catch {}
    }
  }
}

export const romanticAudio = new RomanticAudioEngine();
