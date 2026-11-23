"use client";

import { Mail, MessageCircle } from "lucide-react";

function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.34V10.67H6.12V17.34H8.34ZM7.23 9.76C8 9.76 8.46 9.25 8.46 8.61C8.44 7.96 8 7.47 7.25 7.47C6.5 7.47 6 7.96 6 8.61C6 9.25 6.48 9.76 7.21 9.76H7.23ZM18 17.34V13.45C18 11.37 16.89 10.4 15.41 10.4C14.22 10.4 13.69 11.05 13.39 11.51V10.67H11.18C11.21 11.14 11.18 17.34 11.18 17.34H13.39V13.62C13.39 13.42 13.41 13.22 13.47 13.08C13.63 12.68 14 12.27 14.62 12.27C15.42 12.27 15.78 12.88 15.78 13.77V17.34H18Z" />
    </svg>
  );
}

const SOCIAL_ITEMS = [
  {
    name: "WhatsApp",
    href:
      "https://wa.me/8801759945057?text=" +
      encodeURIComponent(
        "Hello Farhana! I visited your portfolio and would like to connect."
      ),
    icon: <MessageCircle className="h-4 w-4" />,
    hoverClass:
      "hover:border-emerald-500 hover:bg-emerald-500 hover:text-slate-950",
  },
  {
    name: "Email",
    href:
      "mailto:farhanakhatun22@gmail.com?subject=" +
      encodeURIComponent("Project Inquiry — Farhana Khatun Portfolio"),
    icon: <Mail className="h-4 w-4" />,
    hoverClass:
      "hover:border-amber-500 hover:bg-amber-400 hover:text-slate-950",
    external: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/farhana-khatun-828691405",
    icon: <LinkedInIcon className="h-4 w-4" />,
    hoverClass:
      "hover:border-sky-500 hover:bg-sky-500 hover:text-white",
  },
  {
    name: "GitHub",
    href: "https://github.com/Farhana57",
    icon: <GitHubIcon className="h-4 w-4" />,
    hoverClass:
      "hover:border-[#0D9488] hover:bg-[#0D9488] hover:text-white dark:hover:border-amber-400 dark:hover:bg-amber-400 dark:hover:text-slate-950",
  },
];

export default function FloatingSocialRail() {
  return (
    <aside
      aria-label="Quick contact links"
      className="fixed left-4 top-1/2 z-[9990] hidden -translate-y-1/2 flex-col items-center gap-2.5 md:flex"
    >
      <div className="flex flex-col items-center gap-2.5 rounded-full border border-stone-200/90 bg-white/85 px-2 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur-md dark:border-slate-700/80 dark:bg-[#0B192C]/85 dark:shadow-[0_14px_34px_rgba(0,0,0,0.45)]">
        {SOCIAL_ITEMS.map((item) => {
          const isExternal = item.external !== false;

          return (
            <a
              key={item.name}
              href={item.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={item.name}
              title={item.name}
              className={`group relative flex h-10 w-10 items-center justify-center rounded-full border border-stone-200/80 bg-white text-slate-700 shadow-xs transition-all duration-200 hover:scale-110 dark:border-slate-700/80 dark:bg-slate-900/90 dark:text-slate-200 ${item.hoverClass}`}
            >
              {item.icon}
              <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md border border-slate-700/60 bg-slate-900 px-2.5 py-1 font-mono text-[10px] font-medium text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100">
                {item.name}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}