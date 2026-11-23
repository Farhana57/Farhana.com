"use client";

import { useEffect, useRef, useState } from "react";

interface BubbleConfig {
  color: string;
  baseSize: number;
  zoomSize: number;
  followSpeed: number;
  gap: number;
}

// ১০টি রঙিন বল: ছোট থেকে বড় সাইজে এবং একে অপরের সাথে লেগে থাকা ট্রেইল
const BUBBLES: BubbleConfig[] = [
  { color: "#FF3B30", baseSize: 7, zoomSize: 13, followSpeed: 0.34, gap: 6 },
  { color: "#FF7A00", baseSize: 9, zoomSize: 15, followSpeed: 0.31, gap: 7 },
  { color: "#FFB300", baseSize: 11, zoomSize: 17, followSpeed: 0.28, gap: 8 },
  { color: "#A3E635", baseSize: 13, zoomSize: 19, followSpeed: 0.25, gap: 9 },
  { color: "#00DC69", baseSize: 15, zoomSize: 22, followSpeed: 0.23, gap: 10 },
  { color: "#00D4FF", baseSize: 17, zoomSize: 25, followSpeed: 0.21, gap: 11 },
  { color: "#3B82F6", baseSize: 19, zoomSize: 28, followSpeed: 0.19, gap: 12 },
  { color: "#6366F1", baseSize: 21, zoomSize: 31, followSpeed: 0.17, gap: 13 },
  { color: "#8A3FFC", baseSize: 23, zoomSize: 34, followSpeed: 0.15, gap: 14 },
  { color: "#FF2D75", baseSize: 25, zoomSize: 36, followSpeed: 0.13, gap: 15 },
];

export default function RainbowCursor() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [enabled, setEnabled] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;
    if (isTouchDevice) return;

    setEnabled(true);

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;

    let mouseX = startX;
    let mouseY = startY;
    let rafId = 0;

    // প্রতিটি বলের বর্তমান পজিশন
    const positions = BUBBLES.map((_, idx) => ({
      x: startX + idx * 4,
      y: startY + idx * 4,
    }));

    const zoomSelector =
      'a, button, [role="button"], input, textarea, select, [data-cursor-zoom="true"], .cursor-pointer';

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      setIsZoomed(Boolean(target?.closest(zoomSelector)));
    };

    const onMouseLeave = () => {
      if (containerRef.current) containerRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      if (containerRef.current) containerRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const animate = () => {
      for (let idx = 0; idx < BUBBLES.length; idx++) {
        const bubble = BUBBLES[idx];

        // প্রথম বল সরাসরি কার্সর ফলো করবে, বাকি বলগুলো ঠিক আগের বলের কাছাকাছি থাকবে
        const leaderX = idx === 0 ? mouseX : positions[idx - 1].x;
        const leaderY = idx === 0 ? mouseY : positions[idx - 1].y;

        const dx = leaderX - positions[idx].x;
        const dy = leaderY - positions[idx].y;
        const dist = Math.hypot(dx, dy) || 1;

        // বলগুলোর মাঝখানের দূরত্ব সীমিত রেখে একটার সাথে আরেকটা লেগে থাকার মতো ট্রেইল তৈরি
        const targetX = leaderX - (dx / dist) * (bubble.gap * 0.45);
        const targetY = leaderY - (dy / dist) * (bubble.gap * 0.45);

        positions[idx].x += (targetX - positions[idx].x) * bubble.followSpeed;
        positions[idx].y += (targetY - positions[idx].y) * bubble.followSpeed;

        const el = bubbleRefs.current[idx];
        if (el) {
          el.style.transform = `translate3d(${positions[idx].x}px, ${positions[idx].y}px, 0) translate(-50%, -50%)`;
        }
      }

      rafId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden transition-opacity duration-200"
    >
      {BUBBLES.map((bubble, idx) => {
        const size = isZoomed ? bubble.zoomSize : bubble.baseSize;

        return (
          <div
            key={`${bubble.color}-${idx}`}
            ref={(el) => {
              bubbleRefs.current[idx] = el;
            }}
            className="pointer-events-none fixed top-0 left-0 rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              zIndex: BUBBLES.length - idx,
              background: `radial-gradient(circle at 30% 30%, #ffffffaa 0%, ${bubble.color} 48%, ${bubble.color}cc 100%)`,
              border: "1px solid rgba(255, 255, 255, 0.55)",
              boxShadow: isZoomed
                ? `0 0 14px ${bubble.color}bb`
                : `0 0 8px ${bubble.color}77`,
              opacity: isZoomed ? 0.96 : 0.88,
              transition:
                "width 220ms cubic-bezier(0.22, 1, 0.36, 1), height 220ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 220ms ease, opacity 200ms ease",
            }}
          />
        );
      })}
    </div>
  );
}