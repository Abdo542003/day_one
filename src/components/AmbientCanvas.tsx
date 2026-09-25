import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  color: string;
}

export const AmbientCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Warm romantic palette for light background: soft rose, warm gold, delicate blush
    const colors = [
      'rgba(196, 139, 159, ', // Dusty Rose
      'rgba(184, 112, 130, ', // Rose accent
      'rgba(166, 124, 55, ',  // Muted gold
      'rgba(216, 164, 176, ', // Soft blush
    ];

    const particleCount = Math.min(26, Math.floor(window.innerWidth / 40));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.28 + 0.08,
        targetAlpha: Math.random() * 0.32 + 0.08,
        dx: (Math.random() - 0.5) * 0.22,
        dy: -Math.random() * 0.3 - 0.08, // gently floating upwards
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // Subtle shimmer
        p.alpha += (p.targetAlpha - p.alpha) * 0.015;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.04) {
          p.targetAlpha = Math.random() * 0.3 + 0.06;
        }

        // Wrap around boundaries smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(196, 139, 159, 0.25)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-60"
      aria-hidden="true"
    />
  );
};
