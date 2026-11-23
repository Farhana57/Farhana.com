"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 240);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll back to top"
      className={`group fixed right-6 bottom-6 z-40 inline-flex h-11 w-[74px] cursor-pointer items-center justify-between overflow-hidden rounded-full border px-2.5 shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 ${
        // Light Mode: clean pill with soft sky/white surface & subtle dots
        "border-stone-300/90 bg-gradient-to-r from-stone-100 via-white to-sky-50 text-slate-800 shadow-[0_10px_25px_rgba(15,23,42,0.12)] hover:border-blue-400/70 hover:shadow-[0_14px_30px_rgba(37,99,235,0.2)] " +
        // Dark Mode: night-sky pill matching the glowing toggle aesthetic
        "dark:border-amber-400/35 dark:bg-gradient-to-r dark:from-[#060913] dark:via-[#0B1326] dark:to-[#0F1B35] dark:text-amber-200 dark:shadow-[0_10px_28px_rgba(0,0,0,0.65),0_0_14px_rgba(251,191,36,0.12)] dark:hover:border-amber-300/70 dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.75),0_0_20px_rgba(251,191,36,0.24)]"
      } ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      {/* Decorative stars/dots inside the pill */}
      <span
        aria-hidden="true"
        className="pointer-events-none relative flex h-full flex-1 items-center justify-center"
      >
        <span className="absolute top-2.5 left-1.5 h-1 w-1 rounded-full bg-slate-400/70 transition-transform duration-300 group-hover:scale-125 dark:bg-amber-200/80" />
        <span className="absolute bottom-2.5 left-3.5 h-[3px] w-[3px] rounded-full bg-slate-400/55 transition-opacity duration-300 group-hover:opacity-100 dark:bg-amber-300/65" />
        <span className="absolute top-3 left-5 h-[2px] w-[2px] rounded-full bg-blue-500/60 dark:bg-white/75" />
      </span>

      {/* Glowing circular badge with Up Arrow */}
      <span
        aria-hidden="true"
        className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500 dark:bg-gradient-to-tr dark:from-amber-400 dark:to-amber-200 dark:text-slate-950 dark:shadow-[0_0_12px_rgba(251,191,36,0.75)]"
      >
        <ArrowUp className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-300 group-hover:-translate-y-0.5" />
      </span>
    </button>
  );
}