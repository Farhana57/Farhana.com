"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function ScenicThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      title="Toggle theme"
      className={`group relative h-8 w-16 shrink-0 cursor-pointer overflow-hidden rounded-full border p-0.5 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
        isDark
          ? "border-amber-300/80 shadow-[0_0_12px_rgba(251,191,36,0.35)]"
          : "border-slate-300/90 shadow-[inset_0_1px_4px_rgba(15,23,42,0.16)]"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #dbeafe 0%, #93c5fd 48%, #64748b 100%)",
        }}
      >
        <svg
          viewBox="0 0 64 32"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M26 26 Q34 22 42 25 T64 23 L64 32 L26 32 Z"
            fill="#475569"
            opacity="0.45"
          />
          <path
            d="M44 24 C45 18, 48 16, 50 19 C52 13, 56 14, 57 19 C59 17, 62 18, 64 21 L64 32 L44 32 Z"
            fill="#1e293b"
            opacity="0.7"
          />
          <circle cx="49" cy="10" r="1.2" fill="#ffffff" opacity="0.85" />
          <circle cx="56" cy="8" r="0.9" fill="#ffffff" opacity="0.7" />
        </svg>
      </span>

      <span
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, #060d18 0%, #0f172a 55%, #1e293b 100%)",
        }}
      >
        <svg
          viewBox="0 0 64 32"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <circle cx="12" cy="9" r="1.1" fill="#fde68a" opacity="0.9" />
          <circle cx="20" cy="17" r="0.8" fill="#ffffff" opacity="0.75" />
          <circle cx="27" cy="8" r="1.2" fill="#f59e0b" opacity="0.85" />
          <circle cx="33" cy="14" r="0.7" fill="#ffffff" opacity="0.65" />
          <path
            d="M0 27 Q16 23 34 27 L34 32 L0 32 Z"
            fill="#020617"
            opacity="0.85"
          />
        </svg>
      </span>

      <span
        className={`relative z-10 flex h-6.5 w-6.5 items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isDark
            ? "translate-x-8 bg-gradient-to-br from-slate-200 via-amber-100 to-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.75)]"
            : "translate-x-0 bg-gradient-to-br from-white via-slate-50 to-slate-200 shadow-[0_2px_6px_rgba(15,23,42,0.28)]"
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full transition-colors duration-500 ${
            isDark ? "bg-amber-200/40" : "bg-white/80"
          }`}
        />
      </span>
    </button>
  );
}

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  const handleLinkClick = (href: string) => {
    setActiveHash(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[999] border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-stone-300/90 bg-[#FAF8F5]/95 shadow-[0_6px_24px_rgba(15,23,42,0.1)] dark:border-slate-700/90 dark:bg-[#09131E]/95 dark:shadow-[0_8px_28px_rgba(0,0,0,0.5)]"
          : "border-stone-200/80 bg-[#FAF8F5]/90 dark:border-slate-800/90 dark:bg-[#09131E]/90"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3.5 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={() => handleLinkClick("#hero")}
          className="group inline-flex min-w-0 items-center gap-2 text-sm font-bold tracking-tight text-[#0F2942] transition dark:text-[#F8FAFC] sm:gap-2.5 sm:text-lg"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-amber-400/50 bg-[#08111E] shadow-xs transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
            <img
              src="/fk-badge.png"
              alt="FK Full Stack Developer Badge"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="truncate">
            Farhana Khatun
            <span className="text-[#2563EB] transition-colors dark:text-[#F59E0B]">
              .
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-5">
          <nav className="hidden items-center gap-4 lg:flex xl:gap-5">
            {navLinks.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`group relative py-1 text-sm font-medium transition ${
                    isActive
                      ? "font-semibold text-[#1D4ED8] dark:text-[#FBBF24]"
                      : "text-[#2563EB] hover:text-[#1E40AF] dark:text-slate-300 dark:hover:text-[#FBBF24]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-[#2563EB] transition-all duration-300 dark:bg-[#FBBF24] ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <ScenicThemeToggle isDark={isDark} onToggle={toggleTheme} />

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="relative z-10 inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-stone-300/90 bg-white/80 text-[#2563EB] shadow-2xs transition-all duration-200 hover:border-[#2563EB] hover:text-[#1D4ED8] active:scale-95 dark:border-slate-700 dark:bg-[#0F2942]/90 dark:text-[#FBBF24] dark:hover:border-amber-400/70 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-stone-200/90 bg-[#FAF8F5]/98 shadow-lg backdrop-blur-md dark:border-slate-800/90 dark:bg-[#07101A]/98 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-500/12 font-semibold text-[#1D4ED8] dark:bg-amber-500/15 dark:text-[#FBBF24]"
                      : "text-[#2563EB] hover:bg-blue-500/10 hover:text-[#1E40AF] dark:text-slate-200 dark:hover:bg-amber-500/10 dark:hover:text-[#FBBF24]"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isActive
                          ? "bg-[#2563EB] dark:bg-[#FBBF24]"
                          : "bg-blue-400/70 dark:bg-slate-500"
                      }`}
                    />
                    {item.label}
                  </span>
                  <span className="text-xs opacity-70">→</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}