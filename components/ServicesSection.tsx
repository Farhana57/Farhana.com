"use client";

import BookPageSection from "./BookPageSection";

interface ServiceItem {
  badge: string;
  title: string;
  subtitle: string;
  features: string[];
  idealFor: string;
  whatsappText: string;
  featured?: boolean;
}

const SERVICES: ServiceItem[] = [
  {
    badge: "01 / CORPORATE & AGENCY",
    title: "Business & Corporate Website",
    subtitle:
      "Fast, mobile-responsive, and SEO-ready company websites tailored to build brand credibility.",
    features: [
      "Modern React / Next.js UI with smooth animations",
      "Bilingual support (English & বাংলা toggle)",
      "Direct WhatsApp, inquiry form & Google Maps integration",
      "Domain, SSL & cPanel / Vercel live deployment",
    ],
    idealFor: "Exporters, Agencies, Clinics & Local Businesses",
    whatsappText:
      "Hello Farhana! I am interested in a Business & Corporate Website.",
  },
  {
    badge: "02 / FULL-STACK MERN",
    title: "Custom Web App & E-Commerce",
    subtitle:
      "End-to-end full-stack web applications with secure backend APIs, database, and admin control.",
    features: [
      "React / Next.js frontend + Node.js & Express.js API",
      "MongoDB Atlas database & role-based authentication",
      "Product/service management dashboard & order tracking",
      "Performance optimization & cloud deployment",
    ],
    idealFor: "E-Commerce Stores, Booking Platforms & SaaS MVPs",
    whatsappText:
      "Hello Farhana! I would like to discuss a Full-Stack MERN Web App.",
    featured: true,
  },
  {
    badge: "03 / PERSONAL & MEDICAL",
    title: "Portfolio & Appointment Site",
    subtitle:
      "Clean personal branding websites for doctors, consultants, and professionals.",
    features: [
      "Chamber/schedule showcase & appointment booking flow",
      "Custom graphic banners & clean mobile-first layout",
      "Fast loading speed & social media link integration",
      "Easy content updates & ongoing support",
    ],
    idealFor: "Doctors, Consultants, Freelancers & Creators",
    whatsappText:
      "Hello Farhana! I want to build a Portfolio / Appointment website.",
  },
];

export default function ServicesSection() {
  const phoneNumber = "8801759945057";

  return (
    <BookPageSection
      id="services"
      className="border-t border-stone-200/80 dark:border-slate-800"
    >
      <div className="space-y-10">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0c2de9] dark:text-amber-400">
              WHAT I CAN BUILD FOR YOU
            </p>
            <h2 className="mt-0.5 text-3xl font-bold tracking-tight text-[#18181B] dark:text-white sm:text-4xl">
              My{" "}
              <span className="font-serif italic font-normal text-[#0c2ef0] dark:text-amber-300">
                Services
              </span>{" "}
              &amp; Solutions
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            From clean frontend interfaces to complete MERN stack applications, I
            deliver production-ready websites built for speed and real business
            results.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service) => {
            const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              service.whatsappText
            )}`;

            return (
              <div
                key={service.title}
                className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                  service.featured
                    ? "border-amber-400/80 bg-gradient-to-b from-[#FFFBEB] via-white to-[#FEF3C7]/75 shadow-[0_14px_34px_rgba(217,119,6,0.16)] hover:shadow-[0_20px_44px_rgba(217,119,6,0.24)] dark:border-amber-400/50 dark:from-amber-500/12 dark:via-[#0B1C2E]/95 dark:to-[#081320] dark:shadow-[0_18px_42px_rgba(245,158,11,0.16)] dark:hover:shadow-[0_22px_50px_rgba(245,158,11,0.25)]"
                    : "border-stone-200/90 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] hover:border-amber-500/50 hover:shadow-[0_16px_38px_rgba(15,23,42,0.13)] dark:border-slate-800 dark:bg-[#0B192C]/90 dark:shadow-[0_14px_34px_rgba(0,0,0,0.45)] dark:hover:border-amber-400/20 dark:hover:shadow-[0_18px_42px_rgba(0,0,0,0.6)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1625f5] dark:text-amber-400">
                      {service.badge}
                    </span>
                    {service.featured && (
                      <span className="rounded-full border border-amber-500/40 bg-amber-400/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-amber-800 dark:border-amber-400/40 dark:bg-amber-400/15 dark:text-amber-300">
                        POPULAR
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-xl font-bold text-[#18181B] dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {service.subtitle}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-4 text-xs font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="mt-0.5 font-bold text-amber-600 dark:text-amber-400">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-slate-200/80 pt-4 dark:border-slate-800">
                  <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Ideal for:
                    </span>{" "}
                    {service.idealFor}
                  </p>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider shadow-sm transition-all ${
                      service.featured
                        ? "bg-amber-500 text-slate-950 shadow-amber-500/20 hover:bg-amber-400 dark:bg-amber-400 dark:hover:bg-amber-300"
                        : "border border-slate-300 bg-slate-100 text-slate-900 hover:border-amber-500 hover:bg-amber-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900/85 dark:text-white dark:hover:border-amber-400 dark:hover:bg-amber-400 dark:hover:text-slate-950"
                    }`}
                  >
                    <span>Discuss This Service</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BookPageSection>
  );
}