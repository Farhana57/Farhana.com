"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isGoldInLight: boolean;
}

export default function SpiderWebBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 185,
    };

    // মাঝামাঝি ব্যালেন্সড ঘনত্ব ও সংযোগের দূরত্ব
    const getParticleCount = (w: number) =>
      w < 640 ? 80 : w < 1024 ? 130 : 185;

    const maxLinkDistance = 148;

    const createParticles = (w: number, h: number): Particle[] => {
      const count = getParticleCount(w);
      return Array.from({ length: count }, (_, idx) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        radius: Math.random() * 1.4 + 1.65,
        isGoldInLight: idx % 3 === 0,
      }));
    };

    let particles: Particle[] = createParticles(width, height);

    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = createParticles(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const dark = isDarkMode();
      const darkDotColor = "rgba(251, 191, 36, 0.68)";
      const darkLineBaseColor = "251, 191, 36";
      const darkCursorLineColor = "245, 158, 11";

      // Light mode palette: Blue + Gold
      const lightBlueRgb = "37, 99, 235";
      const lightGoldRgb = "217, 119, 6";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        // Cursor movement interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.45;
            p.y -= (dy / dist) * force * 1.45;
          }
        }

        const lightDotRgb = p.isGoldInLight ? lightGoldRgb : lightBlueRgb;
        const dotColor = dark
          ? darkDotColor
          : `rgba(${lightDotRgb}, ${p.isGoldInLight ? "0.62" : "0.56"})`;

        // Draw node dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        // Connect nearby particles like a spider web
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxLinkDistance) {
            const alpha = (1 - dist / maxLinkDistance) * (dark ? 0.27 : 0.21);
            const lineRgb = dark
              ? darkLineBaseColor
              : p.isGoldInLight || q.isGoldInLight
                ? lightGoldRgb
                : lightBlueRgb;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineRgb}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.88;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Connect to cursor when nearby
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const alpha = (1 - dist / mouse.radius) * (dark ? 0.44 : 0.33);
            const cursorRgb = dark
              ? darkCursorLineColor
              : p.isGoldInLight
                ? lightGoldRgb
                : lightBlueRgb;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(${cursorRgb}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}