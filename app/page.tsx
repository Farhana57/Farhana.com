"use client";

import { useEffect, useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import SpiderWebBackground from "@/components/SpiderWebBackground";
import RainbowCursor from "@/components/RainbowCursor";
import BookPageSection from "@/components/BookPageSection";
import JourneySection from "@/components/JourneySection";
import TechMarqueeStrip from "@/components/TechMarqueeStrip";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
import SaasDashboardShowcase from "@/components/SaasDashboardShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import FocusGlobeSection from "@/components/FocusGlobeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Download,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const TYPING_ROLES = [
  "Frontend Developer",
  "Full Stack Developer",
  "Backend Developer",
  "Web Designer",
];

const QUICK_HIGHLIGHTS = [
  "React & Next.js UI",
  "Node.js & MongoDB APIs",
  "Responsive & SEO Ready",
];

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

export default function PortfolioPage() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = TYPING_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      }, 85);
    } else if (!isDeleting && typedText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length - 1));
      }, 45);
    } else if (isDeleting && typedText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
      }, 250);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const whatsappDirectUrl =
    "https://wa.me/8801759945057?text=" +
    encodeURIComponent(
      "Hello Farhana! I visited your portfolio and would like to discuss a project or role."
    );

  return (
    <main className="min-h-screen transition-colors">
      <style jsx global>{`
        @keyframes cardSlideUp {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-card-slide-up {
          animation: cardSlideUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      {/* Hero Section */}
      <BookPageSection id="hero" className="pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="space-y-6 md:col-span-7">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500 bg-blue-300 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-800 shadow-sm transition-all duration-300 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500 dark:bg-blue-400" />
              </span>
              <span>Available for Freelance &amp; Remote MERN Roles</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[#18181B] dark:text-[#F8FAFC] sm:text-5xl">
              Farhana Khatun —{" "}
              <span className="text-[#0833f3] dark:text-[#FBBF24]">
                Full-Stack MERN Developer
              </span>
            </h1>

            {/* Larger Auto-Typing Role Box */}
            <div className="rounded-2xl border border-[#0D9488]/30 bg-white/90 px-6 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-md transition-all duration-300 hover:border-[#0D9488]/60 hover:shadow-[0_16px_36px_rgba(13,148,136,0.16)] dark:border-amber-400/35 dark:bg-[#0F2942]/90 dark:shadow-[0_14px_34px_rgba(0,0,0,0.45)] dark:hover:border-amber-400/65 dark:hover:shadow-[0_18px_42px_rgba(245,158,11,0.18)]">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0c41ee] dark:text-[#FBBF24]">
                  ACTIVE SPECIALIZATION
                </span>
                <Sparkles className="h-3.5 w-3.5 text-[#0e31f1] dark:text-[#FBBF24]" />
              </div>
              <div className="mt-1.5 flex min-h-[2.25rem] items-center text-xl font-bold text-[#18181B] dark:text-white sm:min-h-[2.5rem] sm:text-2xl">
                <span className="font-mono text-[#0c22e7] dark:text-[#FBBF24]">
                  {typedText}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-6 w-[2.5px] animate-pulse bg-[#0a2df1] dark:bg-[#FBBF24]"
                />
              </div>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-[#52525B] dark:text-slate-300 sm:text-lg">
              I build responsive, fast, and practical web applications using React,
              Next.js, Node.js, Express, and MongoDB—from UI to live deployment.
            </p>

            {/* Quick Value Pills */}
            <div className="flex flex-wrap gap-2.5">
              {QUICK_HIGHLIGHTS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200/90 bg-white/85 px-3 py-1.5 font-mono text-[11px] font-medium text-[#3F3F46] shadow-xs dark:border-slate-700/80 dark:bg-[#0F2942]/75 dark:text-slate-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0b2ef0] dark:text-[#FBBF24]" />
                  <span>{item}</span>
                </span>
              ))}
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#0a2ceb] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0F766E] hover:shadow-[0_8px_22px_rgba(13,148,136,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f1da07] dark:bg-[#F59E0B] dark:text-[#09131E] dark:hover:bg-[#FBBF24] dark:hover:shadow-[0_8px_24px_rgba(245,158,11,0.35)] dark:focus-visible:ring-[#FBBF24]"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
  href="/Farhana-Khatun-CV.pdf"
  download="Farhana-Khatun-CV.pdf"
  className="group inline-flex items-center gap-2 rounded-lg border border-[#0F2942]/25 bg-[#0F2942] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0D9488] hover:shadow-[0_8px_20px_rgba(15,41,66,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] dark:border-amber-400 dark:bg-[#0F2942] dark:text-[#FBBF24] dark:hover:border-[#FBBF24] dark:hover:bg-[#133454] dark:hover:shadow-[0_8px_22px_rgba(245,158,11,0.22)] dark:focus-visible:ring-[#FBBF24]"
>
  <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
  <span>RESUME</span>
</a>
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-slate-950 dark:text-amber-300 dark:hover:text-slate-950"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Hire via WhatsApp</span>
              </a>
            </div>

            {/* Social Links: GitHub, LinkedIn, WhatsApp */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://github.com/Farhana57"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="group inline-flex items-center gap-2 rounded-lg border border-stone-200/90 bg-white/80 px-3.5 py-2 text-xs font-medium text-[#3F3F46] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0D9488] hover:bg-[#0D9488]/10 hover:text-[#0D9488] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] dark:border-slate-700/80 dark:bg-[#0F2942]/70 dark:text-slate-300 dark:hover:border-[#FBBF24] dark:hover:bg-amber-400/10 dark:hover:text-[#FBBF24] dark:focus-visible:ring-[#FBBF24]"
              >
                <GitHubIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/farhana-khatun-828691405"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="group inline-flex items-center gap-2 rounded-lg border border-stone-200/90 bg-white/80 px-3.5 py-2 text-xs font-medium text-[#3F3F46] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0D9488] hover:bg-[#0D9488]/10 hover:text-[#0D9488] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] dark:border-slate-700/80 dark:bg-[#0F2942]/70 dark:text-slate-300 dark:hover:border-[#FBBF24] dark:hover:bg-amber-400/10 dark:hover:text-[#FBBF24] dark:focus-visible:ring-[#FBBF24]"
              >
                <LinkedInIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://wa.me/8801759945057"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="group inline-flex items-center gap-2 rounded-lg border border-stone-200/90 bg-white/80 px-3.5 py-2 text-xs font-medium text-[#3F3F46] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0D9488] hover:bg-[#0D9488]/10 hover:text-[#0D9488] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] dark:border-slate-700/80 dark:bg-[#0F2942]/70 dark:text-slate-300 dark:hover:border-[#FBBF24] dark:hover:bg-amber-400/10 dark:hover:text-[#FBBF24] dark:focus-visible:ring-[#FBBF24]"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Enlarged Circular Profile Photo + Credential Highlight Card */}
          <div className="flex flex-col items-center space-y-6 md:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#0D9488]/25 via-amber-400/25 to-sky-400/20 blur-2xl dark:from-amber-400/25 dark:via-amber-300/15 dark:to-sky-500/20"
              />

              <div className="group relative h-60 w-60 cursor-pointer rounded-full border-4 border-blue-500 bg-white p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.16)] transition-all duration-300 hover:border-[#ebc90e] hover:shadow-[0_0_30px_rgba(13,148,136,0.38)] dark:border-amber-400/55 dark:bg-[#0F2942] dark:shadow-[0_20px_50px_rgba(0,0,0,0.55)] dark:hover:border-[#F59E0B] dark:hover:shadow-[0_0_32px_rgba(245,158,11,0.38)] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <img
                    src="/farhana.jpg"
                    alt="Farhana Khatun"
                    className="h-full w-full object-cover object-[50%_15%] transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="w-full rounded-2xl border border-transparent bg-[#0F2942] p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0D9488]/40 hover:shadow-xl dark:border-amber-400/20 dark:hover:border-amber-400/45">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D9488]/20 text-[#5EEAD4] dark:bg-amber-400/15 dark:text-[#FBBF24]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-amber-500 dark:text-[#FBBF24]">
                    Vetted Assessment
                  </p>
                  <h2 className="text-base font-bold text-white">
                    Full Stack Web Development (MERN)
                  </h2>
                </div>
              </div>
              <p className="text-sm text-slate-300">
                Completed Batch 13 via Ostad with 91.7% in Assignments. ID: A46899.
              </p>
            </div>
          </div>
        </div>
      </BookPageSection>

      <WelcomeScreen word="WELCOME" />
      {/* Journey & Credentials Section */}
      <JourneySection />
      {/* Auto-scrolling Tech Strip above Technical Expertise */}
      <TechMarqueeStrip />
      <TechStackSection />
      <ServicesSection />
      <SaasDashboardShowcase/>
      <ProjectsSection />
      <FocusGlobeSection />
      <TestimonialsSection />
      <ContactSection />
      <ScrollToTopButton />
      <RainbowCursor />
      <SpiderWebBackground />
    </main>
  );
}