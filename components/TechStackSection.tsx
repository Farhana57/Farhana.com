"use client";

import { useEffect, useState } from "react";
import BookPageSection from "./BookPageSection";

type TabKey = "frontend" | "backend" | "devops";
type ColorThemeKey = "amber" | "emerald" | "cyan";

type SkillIconId =
  | "html5"
  | "css3"
  | "tailwind"
  | "javascript"
  | "react"
  | "nextjs"
  | "ui"
  | "mongodb"
  | "nodejs"
  | "expressjs"
  | "api"
  | "mongoose"
  | "git"
  | "vercel"
  | "netlify"
  | "cpanel"
  | "atlas"
  | "postman"
  | "vscode"
  | "canvaCapcut";

interface NodeSkill {
  id: SkillIconId;
  name: string;
  description: string;
  slot:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "midLeftTop"
    | "midLeftBottom"
    | "midRightTop"
    | "midRightBottom"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight";
}

interface TabConfig {
  key: TabKey;
  label: string;
  centerTitle: string;
  skills: NodeSkill[];
}

interface ThemePalette {
  key: ColorThemeKey;
  name: string;
  swatchClass: string;
  activeTabClass: string;
  boxClass: string;
  glowBgClass: string;
  lineStrokeClass: string;
  centerTextClass: string;
}

const TAB_ORDER: TabKey[] = ["frontend", "backend", "devops"];
const THEME_ORDER: ColorThemeKey[] = ["amber", "emerald", "cyan"];

// প্রতিটি টেকনোলজির নিজস্ব আসল ব্র্যান্ড কালার (লাইট ও ডার্ক মোডে স্পষ্ট ভিজিবিলিটিসহ)
const REAL_BRAND_ICON_COLORS: Record<SkillIconId, string> = {
  html5: "text-[#E34F26] dark:text-[#FF6B3D]",
  css3: "text-[#1572B6] dark:text-[#38BDF8]",
  tailwind: "text-[#06B6D4] dark:text-[#38BDF8]",
  javascript: "text-[#D97706] dark:text-[#F7DF1E]",
  react: "text-[#0891B2] dark:text-[#61DAFB]",
  nextjs: "text-[#0F172A] dark:text-[#FFFFFF]",
  ui: "text-[#7C3AED] dark:text-[#C084FC]",
  mongodb: "text-[#10AA50] dark:text-[#47A248]",
  nodejs: "text-[#339933] dark:text-[#68D368]",
  expressjs: "text-[#1F2937] dark:text-[#E5E7EB]",
  api: "text-[#2563EB] dark:text-[#60A5FA]",
  mongoose: "text-[#880000] dark:text-[#F87171]",
  git: "text-[#F05032] dark:text-[#FF6F54]",
  vercel: "text-[#111827] dark:text-[#FFFFFF]",
  netlify: "text-[#00AD9F] dark:text-[#2DD4BF]",
  cpanel: "text-[#FF6C2C] dark:text-[#FF8A54]",
  atlas: "text-[#00684A] dark:text-[#34D399]",
  postman: "text-[#FF6C37] dark:text-[#FF8559]",
  vscode: "text-[#007ACC] dark:text-[#38BDF8]",
  canvaCapcut: "text-[#00C4CC] dark:text-[#22D3EE]",
};

const COLOR_PALETTES: Record<ColorThemeKey, ThemePalette> = {
  amber: {
    key: "amber",
    name: "Amber Gold",
    swatchClass: "bg-[#F59E0B]",
    activeTabClass:
      "border-[#D97706] bg-[#F59E0B]/15 text-[#B45309] shadow-sm dark:border-[#F59E0B] dark:bg-[#F59E0B]/15 dark:text-[#FBBF24] dark:shadow-[0_0_16px_rgba(245,158,11,0.28)]",
    boxClass:
      "bg-gradient-to-br from-[#FFFBEB] via-[#F8FAFC] to-[#FEF3C7]/60 border-amber-300/80 shadow-[0_12px_30px_rgba(217,119,6,0.12)] dark:from-[#0F2942] dark:via-[#0A192A] dark:to-[#08111E] dark:border-amber-400/25 dark:shadow-[0_16px_38px_rgba(0,0,0,0.5)]",
    glowBgClass:
      "bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_72%)]",
    lineStrokeClass: "text-amber-600/75 dark:text-[#FBBF24]/75",
    centerTextClass:
      "text-amber-950 drop-shadow-[0_0_10px_rgba(217,119,6,0.18)] dark:text-amber-200 dark:drop-shadow-[0_0_14px_rgba(251,191,36,0.35)]",
  },
  emerald: {
    key: "emerald",
    name: "Emerald Mint",
    swatchClass: "bg-[#10B981]",
    activeTabClass:
      "border-[#0D9488] bg-[#10B981]/15 text-[#0F766E] shadow-sm dark:border-[#10B981] dark:bg-[#10B981]/15 dark:text-[#34D399] dark:shadow-[0_0_16px_rgba(16,185,129,0.28)]",
    boxClass:
      "bg-gradient-to-br from-[#ECFDF5] via-[#F8FAFC] to-[#D1FAE5]/65 border-emerald-300/80 shadow-[0_12px_30px_rgba(13,148,136,0.12)] dark:from-[#0C2A2E] dark:via-[#081C22] dark:to-[#071419] dark:border-emerald-400/25 dark:shadow-[0_16px_38px_rgba(0,0,0,0.5)]",
    glowBgClass:
      "bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.13),transparent_72%)]",
    lineStrokeClass: "text-teal-600/75 dark:text-[#34D399]/75",
    centerTextClass:
      "text-emerald-950 drop-shadow-[0_0_10px_rgba(13,148,136,0.18)] dark:text-emerald-200 dark:drop-shadow-[0_0_14px_rgba(52,211,153,0.35)]",
  },
  cyan: {
    key: "cyan",
    name: "Cyber Cyan",
    swatchClass: "bg-[#06B6D4]",
    activeTabClass:
      "border-[#0284C7] bg-[#06B6D4]/15 text-[#0369A1] shadow-sm dark:border-[#06B6D4] dark:bg-[#06B6D4]/15 dark:text-[#22D3EE] dark:shadow-[0_0_16px_rgba(34,211,238,0.28)]",
    boxClass:
      "bg-gradient-to-br from-[#F0F9FF] via-[#F8FAFC] to-[#E0F2FE]/75 border-sky-300/80 shadow-[0_12px_30px_rgba(2,132,199,0.12)] dark:from-[#0C243D] dark:via-[#08172B] dark:to-[#071120] dark:border-sky-400/25 dark:shadow-[0_16px_38px_rgba(0,0,0,0.5)]",
    glowBgClass:
      "bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.13),transparent_72%)]",
    lineStrokeClass: "text-sky-600/75 dark:text-[#22D3EE]/75",
    centerTextClass:
      "text-sky-950 drop-shadow-[0_0_10px_rgba(2,132,199,0.18)] dark:text-cyan-200 dark:drop-shadow-[0_0_14px_rgba(34,211,238,0.35)]",
  },
};

const tabsData: Record<TabKey, TabConfig> = {
  frontend: {
    key: "frontend",
    label: "FRONTEND",
    centerTitle: "Frontend",
    skills: [
      {
        id: "tailwind",
        name: "Tailwind CSS",
        description: "Modern responsive UI styling",
        slot: "topLeft",
      },
      {
        id: "ui",
        name: "UI / Responsive",
        description: "Adaptive layouts & user experience",
        slot: "topCenter",
      },
      {
        id: "react",
        name: "React",
        description: "Component-driven interactive interfaces",
        slot: "topRight",
      },
      {
        id: "javascript",
        name: "JavaScript",
        description: "Dynamic client-side logic & ES6+",
        slot: "midLeftTop",
      },
      {
        id: "nextjs",
        name: "Next.js",
        description: "Full-stack React framework & routing",
        slot: "midLeftBottom",
      },
      {
        id: "html5",
        name: "HTML5",
        description: "Semantic & accessible web structure",
        slot: "bottomLeft",
      },
      {
        id: "css3",
        name: "CSS3",
        description: "Layouts, transitions & visual styling",
        slot: "midRightTop",
      },
      {
        id: "api",
        name: "REST / Client API",
        description: "API integration & async data fetching",
        slot: "midRightBottom",
      },
      {
        id: "canvaCapcut",
        name: "Canva & CapCut",
        description: "প্রজেক্ট ব্র্যান্ডিং, গ্রাফিক্স ও ডেমো ভিডিও এডিটিং",
        slot: "bottomRight",
      },
    ],
  },
  backend: {
    key: "backend",
    label: "BACKEND",
    centerTitle: "Backend",
    skills: [
      {
        id: "expressjs",
        name: "Express.js",
        description: "Backend routing & middleware architecture",
        slot: "topLeft",
      },
      {
        id: "nodejs",
        name: "Node.js",
        description: "Server-side JavaScript runtime",
        slot: "topCenter",
      },
      {
        id: "api",
        name: "REST APIs",
        description: "Scalable endpoints & JSON services",
        slot: "topRight",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        description: "NoSQL document database",
        slot: "midLeftTop",
      },
      {
        id: "mongoose",
        name: "Mongoose",
        description: "Schema modeling & ODM queries",
        slot: "midLeftBottom",
      },
      {
        id: "postman",
        name: "Postman",
        description: "REST API টেস্টিং, রিকোয়েস্ট ও রেসপন্স যাচাই",
        slot: "midRightTop",
      },
      {
        id: "atlas",
        name: "MongoDB Atlas",
        description: "ক্লাউড ডাটাবেস হোস্টিং ও কানেকশন ম্যানেজমেন্ট",
        slot: "midRightBottom",
      },
    ],
  },
  devops: {
    key: "devops",
    label: "DEVOPS & TOOLS",
    centerTitle: "DevOps & Tools",
    skills: [
      {
        id: "git",
        name: "Git & GitHub",
        description: "ভার্সন কন্ট্রোল, ব্রাঞ্চিং ও কোড রিপোজিটরি ম্যানেজমেন্ট",
        slot: "topLeft",
      },
      {
        id: "vercel",
        name: "Vercel",
        description: "Next.js ও React প্রজেক্টের দ্রুত লাইভ ডিপ্লয়মেন্ট ও প্রিভিউ",
        slot: "topCenter",
      },
      {
        id: "netlify",
        name: "Netlify",
        description: "ফ্রন্টএন্ড ও স্ট্যাটিক/ওয়েব অ্যাপ হোস্টিং ও ডিপ্লয়মেন্ট",
        slot: "topRight",
      },
      {
        id: "cpanel",
        name: "cPanel & Namecheap",
        description: "ডোমেইন DNS ম্যানেজমেন্ট, SSL ও ওয়েব হোস্টিং ডিপ্লয়মেন্ট",
        slot: "midLeftTop",
      },
      {
        id: "atlas",
        name: "MongoDB Atlas",
        description: "ক্লাউড ডাটাবেস হোস্টিং ও কানেকশন ম্যানেজমেন্ট",
        slot: "midLeftBottom",
      },
      {
        id: "postman",
        name: "Postman",
        description: "REST API টেস্টিং, রিকোয়েস্ট ও রেসপন্স যাচাই",
        slot: "midRightTop",
      },
      {
        id: "vscode",
        name: "VS Code",
        description: "মূল কোড এডিটর ও ডেভেলপমেন্ট ওয়ার্কস্পেস",
        slot: "midRightBottom",
      },
      {
        id: "canvaCapcut",
        name: "Canva & CapCut",
        description: "প্রজেক্ট ব্র্যান্ডিং, গ্রাফিক্স ও ডেমো ভিডিও এডিটিং",
        slot: "bottomCenter",
      },
    ],
  },
};

function SkillSvgIcon({ id }: { id: SkillIconId }) {
  const sizeClass = "h-11 w-11 sm:h-12 sm:w-12";

  switch (id) {
    case "html5":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} fill="currentColor">
          <path d="M4 3h16l-1.5 15.5L12 21l-6.5-2.5L4 3zm4.2 5.2.2 2.4h6.9l-.2 2.2H9.6l.2 2.3 2.2.7 2.2-.7.2-1.7h2.3l-.4 3.5L12 18.2l-4.3-1.2-.5-8.8z" />
        </svg>
      );
    case "css3":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 10a4.5 4.5 0 1 1 2.2 7.8" />
          <path d="M17 14a4.5 4.5 0 1 1-2.2-7.8" />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} fill="currentColor">
          <path d="M12 7.5c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.68.17 1.17.67 1.71 1.22.88.89 1.9 1.93 4.14 1.93 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.68-.17-1.17-.67-1.71-1.22-.88-.89-1.9-1.93-4.14-1.93zm-4.5 6c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.68.17 1.17.67 1.71 1.22.88.89 1.9 1.93 4.14 1.93 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.68-.17-1.17-.67-1.71-1.22-.88-.89-1.9-1.93-4.14-1.93z" />
        </svg>
      );
    case "javascript":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} fill="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="2.5" />
          <path
            d="M10.5 10.5v5a1.8 1.8 0 0 1-3.1 1.2M16.5 11a1.8 1.8 0 0 0-1.8-.9h-.4a1.3 1.3 0 0 0 0 2.6h1.3a1.4 1.4 0 0 1 0 2.8h-.5a1.8 1.8 0 0 1-1.5-.8"
            fill="none"
            stroke="currentColor"
            className="text-white dark:text-[#0F172A]"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );
    case "react":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9.5" ry="4" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="4"
            transform="rotate(120 12 12)"
          />
        </svg>
      );
    case "nextjs":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M8.5 15.5V8.5l8 8" />
          <path d="M15.5 8.5v4.5" />
        </svg>
      );
    case "ui":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 17V7l5 5 5-5v10" />
          <path d="M19 7v10" />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} fill="currentColor">
          <path d="M12.2 2.5c.3 3.4 4.3 6.2 4.3 10.6 0 3.7-2.2 6.4-4.2 7.9l-.3.5-.3-.5c-2-1.5-4.2-4.2-4.2-7.9 0-4.4 4-7.2 4.4-10.6h.3z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2.5 20.5 7.4v9.2L12 21.5l-8.5-4.9V7.4L12 2.5z" />
          <path d="M9.5 14.5v-5l5 5v-5" />
        </svg>
      );
    case "expressjs":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} fill="currentColor">
          <path d="M12 3c2.5 2.5 2.2 5.2.6 7.1 2.2-.4 4.2 1.2 4.2 3.6 0 3.4-2.6 6.3-5.8 7.3-2.9.9-5.7-.9-6.2-3.8-.5-3 1.7-5.8 3.6-7.7 1.3-1.3 2.1-3.4 3.6-6.5z" />
        </svg>
      );
    case "api":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="M13 6.5 8.5 12.5h5L11 17.5" />
        </svg>
      );
    case "mongoose":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="6" rx="7" ry="2.8" />
          <path d="M5 6v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" />
          <path d="M5 12v6c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-6" />
        </svg>
      );
    case "git":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="7" cy="6" r="2.2" />
          <circle cx="7" cy="18" r="2.2" />
          <circle cx="17" cy="10" r="2.2" />
          <path d="M7 8.2v7.6" />
          <path d="M9.2 6.8l5.8 2.4" />
          <path d="M17 12.2V14a4 4 0 0 1-4 4H9.2" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className={sizeClass} fill="currentColor">
          <path d="M12 4.5 21 19.5H3L12 4.5z" />
        </svg>
      );
    case "netlify":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v18" />
          <path d="M4.5 12h15" />
          <path d="m6.5 6.5 11 11" />
          <path d="m17.5 6.5-11 11" />
        </svg>
      );
    case "cpanel":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3.5v2.5M12 18v2.5M3.5 12H6M18 12h2.5" />
        </svg>
      );
    case "atlas":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17" />
          <path d="M12 3.5a13 13 0 0 0 0 17" />
          <path d="M12 3.5a13 13 0 0 1 0 17" />
        </svg>
      );
    case "postman":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="m14.8 9.2-5.6 5.6" />
          <path d="M11 8.5 15.5 13" />
        </svg>
      );
    case "vscode":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m16 4 4 2v12l-4 2L7 12l9-8z" />
          <path d="m16 4-9 8 9 8" />
        </svg>
      );
    case "canvaCapcut":
      return (
        <svg
          viewBox="0 0 24 24"
          className={sizeClass}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M12 8.5 16 15.5H8l4-7z" />
        </svg>
      );
  }
}

function BorderlessSkillIcon({
  skill,
  colorClass,
  isHovered,
  onHover,
}: {
  skill: NodeSkill;
  colorClass: string;
  isHovered: boolean;
  onHover: (id: SkillIconId | null) => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(skill.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(skill.id)}
      onBlur={() => onHover(null)}
      aria-label={skill.name}
      className={`animate-node-shift group relative flex items-center justify-center rounded-xl p-1.5 transition-all duration-200 focus:outline-none ${colorClass} ${
        isHovered ? "scale-110 -translate-y-0.5" : "hover:scale-105"
      }`}
    >
      <SkillSvgIcon id={skill.id} />
    </button>
  );
}

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("frontend");
  const [colorTheme, setColorTheme] = useState<ColorThemeKey>("amber");
  const [autoCycle, setAutoCycle] = useState<boolean>(true);
  const [hoveredSkill, setHoveredSkill] = useState<SkillIconId | null>(null);
  const [pauseUntil, setPauseUntil] = useState<number>(0);

  useEffect(() => {
    if (!autoCycle) return;

    const timer = setInterval(() => {
      if (Date.now() < pauseUntil) return;

      setActiveTab((prev) => {
        const nextIdx = (TAB_ORDER.indexOf(prev) + 1) % TAB_ORDER.length;
        return TAB_ORDER[nextIdx];
      });
    }, 3600);

    return () => clearInterval(timer);
  }, [autoCycle, pauseUntil]);

  const handleTabClick = (key: TabKey) => {
    setActiveTab(key);
    setPauseUntil(Date.now() + 6000);
  };

  const handleCycleColorTheme = () => {
    setColorTheme((prev) => {
      const nextIdx = (THEME_ORDER.indexOf(prev) + 1) % THEME_ORDER.length;
      return THEME_ORDER[nextIdx];
    });
  };

  const current = tabsData[activeTab];
  const palette = COLOR_PALETTES[colorTheme];

  const bySlot = (slot: NodeSkill["slot"]) =>
    current.skills.find((s) => s.slot === slot);

  const topLeft = bySlot("topLeft");
  const topCenter = bySlot("topCenter");
  const topRight = bySlot("topRight");
  const midLeftTop = bySlot("midLeftTop");
  const midLeftBottom = bySlot("midLeftBottom");
  const midRightTop = bySlot("midRightTop");
  const midRightBottom = bySlot("midRightBottom");
  const bottomLeft = bySlot("bottomLeft");
  const bottomCenter = bySlot("bottomCenter");
  const bottomRight = bySlot("bottomRight");

  const activeSkillObj = hoveredSkill
    ? current.skills.find((s) => s.id === hoveredSkill)
    : null;

  return (
    <BookPageSection
      id="skills"
      className="border-t border-stone-200/80 dark:border-slate-800"
    >
      <style jsx global>{`
        @keyframes nodeShiftIn {
          0% {
            opacity: 0;
            transform: scale(0.88) translateY(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-node-shift {
          animation: nodeShiftIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <div className="space-y-8">
        {/* Top Row: Heading + Right Category Tabs + Color Change Button */}
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#1334f1] dark:text-slate-400">
              MY ARSENAL
            </p>
            <h2 className="mt-0.5 text-3xl font-bold tracking-tight text-[#18181B] dark:text-white sm:text-4xl">
              Skills{" "}
              <span className="font-serif italic font-normal text-[#0b1ae7] dark:text-amber-500">
                &amp;
              </span>{" "}
              Tech
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {TAB_ORDER.map((key) => {
              const tab = tabsData[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleTabClick(key)}
                  className={`px-3.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.18em] transition-all duration-200 ${
                    isActive
                      ? `border ${palette.activeTabClass}`
                      : "border border-transparent text-[#52525B] hover:text-[#18181B] dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}

            {/* Color Change Button */}
            <button
              type="button"
              onClick={handleCycleColorTheme}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white px-3 py-1.5 font-mono text-[11px] font-semibold text-[#18181B] shadow-sm transition-all duration-200 hover:border-[#0D9488] active:scale-95 dark:border-slate-700/90 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-white/40 dark:hover:text-white"
              title="Click to change diagram color theme"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${palette.swatchClass}`}
              />
              <span>COLOR: {palette.name.toUpperCase()}</span>
            </button>

            {/* Auto Cycle Toggle */}
            <button
              type="button"
              onClick={() => setAutoCycle((prev) => !prev)}
              className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 font-mono text-[11px] font-semibold text-[#52525B] transition-colors hover:text-[#18181B] dark:border-slate-700/90 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:text-white"
            >
              {autoCycle ? "AUTO: ON" : "AUTO: OFF"}
            </button>
          </div>
        </div>

        {/* Diagram Box */}
        <div
          key={`${activeTab}-${colorTheme}`}
          className={`relative mx-auto max-w-5xl rounded-2xl border px-4 py-10 transition-all duration-300 sm:px-8 sm:py-12 ${palette.boxClass}`}
        >
          <div
            className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${palette.glowBgClass}`}
          />

          {/* Top Row Icons */}
          <div className="relative z-10 grid grid-cols-3 items-center justify-items-center">
            <div className="flex h-14 items-center justify-center">
              {topLeft && (
                <BorderlessSkillIcon
                  skill={topLeft}
                  colorClass={REAL_BRAND_ICON_COLORS[topLeft.id]}
                  isHovered={hoveredSkill === topLeft.id}
                  onHover={setHoveredSkill}
                />
              )}
            </div>
            <div className="flex h-14 items-center justify-center">
              {topCenter && (
                <BorderlessSkillIcon
                  skill={topCenter}
                  colorClass={REAL_BRAND_ICON_COLORS[topCenter.id]}
                  isHovered={hoveredSkill === topCenter.id}
                  onHover={setHoveredSkill}
                />
              )}
            </div>
            <div className="flex h-14 items-center justify-center">
              {topRight && (
                <BorderlessSkillIcon
                  skill={topRight}
                  colorClass={REAL_BRAND_ICON_COLORS[topRight.id]}
                  isHovered={hoveredSkill === topRight.id}
                  onHover={setHoveredSkill}
                />
              )}
            </div>
          </div>

          {/* Top 90-Degree Connector Lines */}
          <svg
            viewBox="0 0 1000 90"
            className={`animate-node-shift relative z-0 mx-auto h-16 w-full sm:h-20 ${palette.lineStrokeClass}`}
            aria-hidden="true"
          >
            <defs>
              <filter
                id="techLineGlow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="2.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g
              filter="url(#techLineGlow)"
              stroke="currentColor"
              strokeWidth="1.7"
              fill="none"
            >
              {topLeft && <path d="M 166 2 L 166 48 L 430 48" />}
              {topCenter && <line x1="500" y1="2" x2="500" y2="90" />}
              {topRight && <path d="M 834 2 L 834 48 L 570 48" />}
            </g>
          </svg>

          {/* Middle Row */}
          <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-0">
            {/* Left Side */}
            <div className="flex items-center justify-center gap-5 md:col-span-4 md:justify-end md:gap-0">
              <div className="flex flex-col items-end gap-7">
                <div className="flex h-12 items-center">
                  {midLeftTop && (
                    <BorderlessSkillIcon
                      skill={midLeftTop}
                      colorClass={REAL_BRAND_ICON_COLORS[midLeftTop.id]}
                      isHovered={hoveredSkill === midLeftTop.id}
                      onHover={setHoveredSkill}
                    />
                  )}
                </div>
                <div className="flex h-12 items-center">
                  {midLeftBottom && (
                    <BorderlessSkillIcon
                      skill={midLeftBottom}
                      colorClass={REAL_BRAND_ICON_COLORS[midLeftBottom.id]}
                      isHovered={hoveredSkill === midLeftBottom.id}
                      onHover={setHoveredSkill}
                    />
                  )}
                </div>
              </div>

              <svg
                viewBox="0 0 140 90"
                className={`animate-node-shift hidden h-20 w-24 md:block lg:w-32 ${palette.lineStrokeClass}`}
                aria-hidden="true"
              >
                <g stroke="currentColor" strokeWidth="1.7" fill="none">
                  {midLeftTop && <line x1="0" y1="20" x2="140" y2="20" />}
                  {midLeftBottom && <line x1="0" y1="70" x2="140" y2="70" />}
                </g>
              </svg>
            </div>

            {/* Center Label */}
            <div className="flex items-center justify-center md:col-span-4">
              <span
                className={`animate-node-shift font-serif text-xl font-medium tracking-wide transition-colors duration-300 sm:text-2xl ${palette.centerTextClass}`}
              >
                {current.centerTitle}
              </span>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center gap-5 md:col-span-4 md:justify-start md:gap-0">
              <svg
                viewBox="0 0 140 90"
                className={`animate-node-shift hidden h-20 w-24 md:block lg:w-32 ${palette.lineStrokeClass}`}
                aria-hidden="true"
              >
                <g stroke="currentColor" strokeWidth="1.7" fill="none">
                  {midRightTop && <line x1="0" y1="20" x2="140" y2="20" />}
                  {midRightBottom && <line x1="0" y1="70" x2="140" y2="70" />}
                </g>
              </svg>

              <div className="flex flex-col items-start gap-7">
                <div className="flex h-12 items-center">
                  {midRightTop && (
                    <BorderlessSkillIcon
                      skill={midRightTop}
                      colorClass={REAL_BRAND_ICON_COLORS[midRightTop.id]}
                      isHovered={hoveredSkill === midRightTop.id}
                      onHover={setHoveredSkill}
                    />
                  )}
                </div>
                <div className="flex h-12 items-center">
                  {midRightBottom && (
                    <BorderlessSkillIcon
                      skill={midRightBottom}
                      colorClass={REAL_BRAND_ICON_COLORS[midRightBottom.id]}
                      isHovered={hoveredSkill === midRightBottom.id}
                      onHover={setHoveredSkill}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 90-Degree Connector Lines */}
          <svg
            viewBox="0 0 1000 90"
            className={`animate-node-shift relative z-0 mx-auto h-16 w-full sm:h-20 ${palette.lineStrokeClass}`}
            aria-hidden="true"
          >
            <g stroke="currentColor" strokeWidth="1.7" fill="none">
              {bottomLeft && <path d="M 240 88 L 240 42 L 430 42" />}
              {bottomCenter && <line x1="500" y1="0" x2="500" y2="88" />}
              {!bottomCenter && (bottomLeft || bottomRight) && (
                <>
                  <line x1="472" y1="0" x2="472" y2="88" />
                  <line x1="528" y1="0" x2="528" y2="88" />
                </>
              )}
              {bottomRight && <path d="M 760 88 L 760 42 L 570 42" />}
            </g>
          </svg>

          {/* Bottom Row Icons */}
          <div className="relative z-10 grid grid-cols-3 items-center justify-items-center">
            <div className="flex h-14 items-center justify-center">
              {bottomLeft && (
                <BorderlessSkillIcon
                  skill={bottomLeft}
                  colorClass={REAL_BRAND_ICON_COLORS[bottomLeft.id]}
                  isHovered={hoveredSkill === bottomLeft.id}
                  onHover={setHoveredSkill}
                />
              )}
            </div>
            <div className="flex h-14 items-center justify-center">
              {bottomCenter && (
                <BorderlessSkillIcon
                  skill={bottomCenter}
                  colorClass={REAL_BRAND_ICON_COLORS[bottomCenter.id]}
                  isHovered={hoveredSkill === bottomCenter.id}
                  onHover={setHoveredSkill}
                />
              )}
            </div>
            <div className="flex h-14 items-center justify-center">
              {bottomRight && (
                <BorderlessSkillIcon
                  skill={bottomRight}
                  colorClass={REAL_BRAND_ICON_COLORS[bottomRight.id]}
                  isHovered={hoveredSkill === bottomRight.id}
                  onHover={setHoveredSkill}
                />
              )}
            </div>
          </div>

          {/* Active Hover Info Strip */}
          <div className="relative z-10 mt-6 flex min-h-7 items-center justify-center text-center">
            {activeSkillObj ? (
              <p className="font-mono text-xs text-stone-700 dark:text-slate-300">
                <span className="font-semibold text-stone-900 dark:text-white">
                  {activeSkillObj.name}
                </span>{" "}
                — {activeSkillObj.description}
              </p>
            ) : (
              <p className="font-mono text-[11px] text-stone-500 dark:text-slate-400">
                Hover or tap any icon to see details • Card theme:{" "}
                <span className="font-semibold">{palette.name}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </BookPageSection>
  );
}