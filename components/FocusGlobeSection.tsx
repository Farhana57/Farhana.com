"use client";

import { useEffect, useRef, useState } from "react";
import BookPageSection from "./BookPageSection";

const focusHighlights = [
  {
    id: "01",
    title: "Full-Stack MERN & Next.js Builds",
    detail:
      "Production apps including zamantradersbd.com, uptotechsyl.com, and drnurjahanmukti.com.",
  },
  {
    id: "02",
    title: "Ostad MERN Batch 13",
    detail:
      "Completed with 91.7% in assignments (Certificate ID: A46899) and clean REST API architecture.",
  },
  {
    id: "03",
    title: "UI, Brand & Visual Polish",
    detail:
      "Responsive interfaces with Tailwind CSS alongside Canva, CapCut, and Inkscape assets.",
  },
];

// Simplified continent land polygons [lat, lon] for dotted globe projection
const landPolygons: [number, number][][] = [
  // Asia & Indian Subcontinent / South-East Asia
  [
    [72, 35], [75, 75], [70, 130], [65, 170], [52, 142], [35, 138],
    [22, 121], [14, 121], [2, 104], [10, 98], [22, 91], [8, 77],
    [19, 72], [25, 62], [12, 44], [30, 35], [41, 29], [55, 37],
  ],
  // Europe
  [
    [70, 20], [60, 5], [43, -9], [36, -6], [44, 3], [45, 14],
    [38, 23], [46, 30], [55, 21], [60, 28],
  ],
  // Africa
  [
    [36, 10], [32, -8], [15, -17], [5, 9], [-6, 12], [-22, 14],
    [-34, 18], [-30, 31], [-12, 40], [11, 51], [12, 43], [22, 37],
    [31, 32],
  ],
  // North America
  [
    [71, -156], [60, -165], [50, -125], [32, -117], [18, -105],
    [15, -85], [25, -80], [35, -75], [45, -66], [58, -64],
    [66, -85], [72, -125],
  ],
  // South America
  [
    [11, -72], [2, -79], [-18, -71], [-38, -73], [-54, -68],
    [-35, -53], [-23, -43], [-5, -35], [5, -52],
  ],
  // Australia
  [
    [-12, 131], [-18, 122], [-32, 115], [-38, 145], [-25, 153],
    [-14, 142],
  ],
];

const round2 = (num: number) => Number(num.toFixed(2));

function pointInPolygon(lat: number, lon: number, poly: [number, number][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][1];
    const yi = poly[i][0];
    const xj = poly[j][1];
    const yj = poly[j][0];

    const intersect =
      yi > lat !== yj > lat &&
      lon < ((xj - xi) * (lat - yi)) / (yj - yi + 1e-9) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function isLand(lat: number, lon: number) {
  return landPolygons.some((poly) => pointInPolygon(lat, lon, poly));
}

export default function FocusGlobeSection() {
  // Default focus centered near Sylhet / South Asia
  const [mounted, setMounted] = useState<boolean>(false);
  const [rotLon, setRotLon] = useState<number>(-88);
  const [rotLat, setRotLat] = useState<number>(22);
  const [localTime, setLocalTime] = useState<string>("");
  const isDraggingRef = useRef(false);
  const lastPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const updateClock = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        setLocalTime(formatted.toLowerCase());
      } catch {
        setLocalTime("");
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  const radius = 112;
  const cx = 140;
  const cy = 140;

  // Generate 3D sphere dots projected onto front hemisphere
  const dots: {
    x: number;
    y: number;
    r: number;
    opacity: number;
    land: boolean;
  }[] = [];

  if (mounted) {
    const latSteps = 44;
    for (let i = 0; i <= latSteps; i++) {
      const lat = -75 + (i / latSteps) * 150;
      const latRad = (lat * Math.PI) / 180;
      const ringCircumference = Math.cos(latRad);
      const lonSteps = Math.max(8, Math.round(ringCircumference * 78));

      for (let j = 0; j < lonSteps; j++) {
        const lon = -180 + (j / lonSteps) * 360;
        const lonRad = ((lon + rotLon) * Math.PI) / 180;
        const tiltRad = (rotLat * Math.PI) / 180;

        // 3D coordinates
        const x3 = Math.cos(latRad) * Math.sin(lonRad);
        const y3Raw = Math.sin(latRad);
        const z3Raw = Math.cos(latRad) * Math.cos(lonRad);

        // Apply vertical tilt
        const y3 = y3Raw * Math.cos(tiltRad) - z3Raw * Math.sin(tiltRad);
        const z3 = y3Raw * Math.sin(tiltRad) + z3Raw * Math.cos(tiltRad);

        if (z3 > 0.05) {
          const land = isLand(lat, lon);
          dots.push({
            x: round2(cx + x3 * radius),
            y: round2(cy - y3 * radius),
            r: land ? 1.55 : 0.95,
            opacity: round2(land ? 0.35 + z3 * 0.55 : 0.08 + z3 * 0.12),
            land,
          });
        }
      }
    }
  }

  // Sylhet marker projection (24.89° N, 91.87° E)
  const sylhetLatRad = (24.89 * Math.PI) / 180;
  const sylhetLonRad = ((91.87 + rotLon) * Math.PI) / 180;
  const tiltRad = (rotLat * Math.PI) / 180;

  const sx3 = Math.cos(sylhetLatRad) * Math.sin(sylhetLonRad);
  const sy3Raw = Math.sin(sylhetLatRad);
  const sz3Raw = Math.cos(sylhetLatRad) * Math.cos(sylhetLonRad);

  const sy3 = sy3Raw * Math.cos(tiltRad) - sz3Raw * Math.sin(tiltRad);
  const sz3 = sy3Raw * Math.sin(tiltRad) + sz3Raw * Math.cos(tiltRad);

  const pinX = round2(cx + sx3 * radius);
  const pinY = round2(cy - sy3 * radius);
  const showPin = mounted && sz3 > 0;

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    lastPosRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastPosRef.current.x;
    const dy = e.clientY - lastPosRef.current.y;
    lastPosRef.current = { x: e.clientX, y: e.clientY };

    setRotLon((prev) => prev + dx * 0.45);
    setRotLat((prev) => Math.max(-45, Math.min(45, prev + dy * 0.35)));
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <BookPageSection
      id="focus"
      className="border-t border-stone-200/80 dark:border-slate-800"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12">
        {/* Left Column: Editorial Headline & Highlights */}
        <div className="space-y-6 lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f26f8] dark:text-[#FBBF24]">
            About · Focus
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18181B] dark:text-[#F8FAFC] sm:text-4xl">
            I like building web systems that are{" "}
            <span className="text-[#2012eb] dark:text-[#FBBF24]">
              practical before they are flashy.
            </span>
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-[#52525B] dark:text-slate-300">
            I split my work between clean frontend interfaces, Node.js &amp;
            MongoDB backends, and live domain/hosting setup—turning ideas into
            reliable applications.
          </p>

          <div className="space-y-3.5 pt-2">
            {focusHighlights.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3.5 rounded-xl border border-stone-200/90 bg-white/80 p-3.5 transition hover:border-[#0D9488]/50 dark:border-slate-800 dark:bg-[#0F2942]/70 dark:hover:border-amber-400/40"
              >
                <span className="mt-0.5 font-mono text-xs font-bold text-[#0D9488] dark:text-[#FBBF24]">
                  {item.id}
                </span>
                <p className="text-sm leading-relaxed text-[#52525B] dark:text-slate-300">
                  <strong className="font-semibold text-[#0F2942] dark:text-white">
                    {item.title}:
                  </strong>{" "}
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Dotted Globe + Sylhet Pin & Caption */}
        <div className="flex flex-col items-center lg:col-span-5">
          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            title="Drag to rotate globe"
            className="relative flex h-72 w-72 cursor-grab touch-none items-center justify-center rounded-full active:cursor-grabbing sm:h-80 sm:w-80"
          >
            <svg
              viewBox="0 0 280 280"
              className="h-full w-full select-none overflow-visible"
              aria-label="Interactive dotted world map showing Sylhet, Bangladesh"
            >
              {/* Soft outer sphere aura */}
              <defs>
                <radialGradient id="globeAura" cx="45%" cy="40%" r="55%">
                  <stop
                    offset="0%"
                    stopColor="#F59E0B"
                    stopOpacity="0.14"
                  />
                  <stop
                    offset="70%"
                    stopColor="#0F2942"
                    stopOpacity="0.08"
                  />
                  <stop
                    offset="100%"
                    stopColor="#0F2942"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>

              <circle cx={cx} cy={cy} r={radius + 14} fill="url(#globeAura)" />
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                className="stroke-stone-300/80 dark:stroke-slate-700/80"
                strokeWidth="1"
              />

              {/* Dotted continent & ocean grid */}
              {dots.map((dot, idx) => (
                <circle
                  key={idx}
                  cx={dot.x}
                  cy={dot.y}
                  r={dot.r}
                  fillOpacity={dot.opacity}
                  className={
                    dot.land
                      ? "fill-[#0F2942] dark:fill-slate-200"
                      : "fill-stone-400 dark:fill-slate-600"
                  }
                />
              ))}

              {/* Sylhet Location Pin + Vertical Drop Line */}
              {showPin && (
                <g>
                  <line
                    x1={pinX}
                    y1={pinY}
                    x2={pinX}
                    y2={278}
                    strokeDasharray="2.5 2.5"
                    className="stroke-[#ecb707] dark:stroke-[#F59E0B]"
                    strokeWidth="1.2"
                  />
                  <circle
                    cx={pinX}
                    cy={pinY}
                    r="8"
                    className="fill-[#0D9488]/25 dark:fill-[#F59E0B]/25"
                  />
                  <circle
                    cx={pinX}
                    cy={pinY}
                    r="4"
                    className="fill-[#ecb00b] dark:fill-[#FBBF24]"
                  />
                </g>
              )}
            </svg>
          </div>

          <div className="mt-2 text-center">
            <p className="text-sm font-medium text-[#18181B] dark:text-[#F8FAFC]">
              Based in Sylhet, Bangladesh
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-[#71717A] dark:text-slate-400">
              24.89° N, 91.87° E{localTime ? `, ${localTime} local time` : ""}
            </p>
          </div>
        </div>
      </div>
    </BookPageSection>
  );
}