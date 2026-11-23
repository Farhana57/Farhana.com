"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

const LETTER_COLORS = [
  "#FF3366", // Rose Red
  "#FF8A00", // Vivid Orange
  "#FFD60A", // Bright Gold/Yellow
  "#00E676", // Emerald Green
  "#00E5FF", // Electric Cyan
  "#7C4DFF", // Deep Violet
  "#FF4081", // Hot Pink
];

function getHeartPoints(
  count: number,
  scale: number,
  centerX: number,
  centerY: number
) {
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const t = (Math.PI * 2 * i) / count;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
    );
    points.push({
      x: centerX + x * scale,
      y: centerY + y * scale,
    });
  }
  return points;
}

interface WelcomeScreenProps {
  word?: string;
  subtitle?: string;
  durationMs?: number;
}

export default function WelcomeScreen({
  word = "WELCOME TO MY SITE",
  subtitle = "FARHANA KHATUN • FULL-STACK MERN DEVELOPER",
  durationMs = 3400,
}: WelcomeScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const isMobile = window.innerWidth < 640;
      const scale = isMobile ? 9.5 : 14.5;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2 - (isMobile ? 16 : 20);
      const particleCount = isMobile ? 170 : 280;

      const heartTargets = getHeartPoints(
        particleCount,
        scale,
        centerX,
        centerY
      );

      const particles: Particle[] = heartTargets.map((pt, idx) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.max(canvas.width, canvas.height) * 0.65;
        return {
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          targetX: pt.x,
          targetY: pt.y,
          vx: 0,
          vy: 0,
          size: Math.random() * 2.8 + 1.8,
          color: LETTER_COLORS[idx % LETTER_COLORS.length],
          alpha: 0,
        };
      });

      let frame = 0;

      const render = () => {
        frame++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const pulse =
          frame > 75 ? 1 + Math.sin((frame - 75) * 0.08) * 0.035 : 1;

        for (const p of particles) {
          const adjustedTargetX = centerX + (p.targetX - centerX) * pulse;
          const adjustedTargetY = centerY + (p.targetY - centerY) * pulse;

          p.vx = (p.vx + (adjustedTargetX - p.x) * 0.045) * 0.82;
          p.vy = (p.vy + (adjustedTargetY - p.y) * 0.045) * 0.82;
          p.x += p.vx;
          p.y += p.vy;
          p.alpha = Math.min(1, p.alpha + 0.035);

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.restore();
        }

        animationFrameId = requestAnimationFrame(render);
      };

      render();
    };

    setup();

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, durationMs);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, durationMs + 650);

    window.addEventListener("resize", setup);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      window.removeEventListener("resize", setup);
    };
  }, [durationMs]);

  if (!visible) return null;

  const words = word.split(" ");
  const totalChars = word.length;

  const handleSkip = () => {
    setExiting(true);
    window.setTimeout(() => setVisible(false), 350);
  };

  let runningIndex = 0;

  return (
    <div
      aria-hidden={exiting}
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#060D18] px-4 text-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        exiting
          ? "pointer-events-none -translate-y-4 scale-105 opacity-0"
          : "translate-y-0 scale-100 opacity-100"
      }`}
    >
      {/* রঙিন বিন্দু দিয়ে হার্ট অ্যানিমেশন ক্যানভাস */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      {/* Subtle Ambient Glow Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.16),rgba(0,229,255,0.1)_45%,transparent_75%)] blur-2xl sm:h-96 sm:w-96"
      />

      {/* হার্টের ভেতরে রঙিন অক্ষরের লেখা অ্যানিমেশন */}
      <div className="relative z-10 flex max-w-xl flex-col items-center justify-center gap-1.5 px-3 sm:gap-2">
        {words.map((singleWord, wIdx) => (
          <div
            key={`${singleWord}-${wIdx}`}
            className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5"
          >
            {singleWord.split("").map((char, cIdx) => {
              const globalIdx = runningIndex++;
              const color = LETTER_COLORS[globalIdx % LETTER_COLORS.length];
              const delayMs = 650 + globalIdx * 65;

              return (
                <span
                  key={`${char}-${wIdx}-${cIdx}`}
                  className="welcome-letter inline-block select-none font-sans text-xl font-extrabold tracking-wider sm:text-3xl md:text-4xl"
                  style={{
                    color,
                    textShadow: `0 0 18px ${color}88, 0 4px 18px rgba(0,0,0,0.85)`,
                    animationDelay: `${delayMs}ms`,
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      {/* Subtitle */}
      <p
        className="welcome-subtitle relative z-10 mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-200/95 sm:text-xs"
        style={{ animationDelay: `${650 + totalChars * 65 + 150}ms` }}
      >
        {subtitle}
      </p>

      {/* Optional Skip Button */}
      <button
        type="button"
        onClick={handleSkip}
        className="relative z-10 mt-6 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-200 backdrop-blur transition hover:border-amber-400/60 hover:text-amber-300"
      >
        Enter Portfolio →
      </button>

      <style jsx>{`
        @keyframes letterSmoothPop {
          0% {
            opacity: 0;
            transform: translateY(22px) scale(0.75) rotate(-6deg);
            filter: blur(6px);
          }
          65% {
            opacity: 1;
            transform: translateY(-4px) scale(1.06) rotate(1deg);
            filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }

        @keyframes subtitleFadeUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .welcome-letter {
          opacity: 0;
          animation: letterSmoothPop 0.7s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .welcome-subtitle {
          opacity: 0;
          animation: subtitleFadeUp 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
}