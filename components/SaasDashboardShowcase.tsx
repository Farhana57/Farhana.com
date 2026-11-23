"use client";

import { useState } from "react";
import {
  Activity,
  BarChart3,
  CheckCircle2,
  FolderKanban,
  LayoutDashboard,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

type TopTab = "Overview" | "Analytics" | "Projects" | "Settings";
type SideNav = "Dashboard" | "Projects" | "Analytics" | "Team";

const TAB_METRICS: Record<
  TopTab,
  {
    projects: string;
    projectsDelta: string;
    revenue: string;
    revenueDelta: string;
    productivity: string;
    status: string;
    milestone: string;
    progress: number;
    bars: number[];
  }
> = {
  Overview: {
    projects: "12",
    projectsDelta: "+14%",
    revenue: "$74.5K",
    revenueDelta: "+22%",
    productivity: "94%",
    status: "Optimal",
    milestone: "Phase 3 Execution",
    progress: 85,
    bars: [42, 58, 51, 74, 68, 86, 79],
  },
  Analytics: {
    projects: "15",
    projectsDelta: "+19%",
    revenue: "$82.2K",
    revenueDelta: "+26%",
    productivity: "96%",
    status: "Peak",
    milestone: "Conversion Funnel Audit",
    progress: 88,
    bars: [55, 64, 72, 70, 82, 91, 88],
  },
  Projects: {
    projects: "12",
    projectsDelta: "+14%",
    revenue: "$74.5K",
    revenueDelta: "+18%",
    productivity: "92%",
    status: "On Track",
    milestone: "Client Release & QA",
    progress: 85,
    bars: [48, 52, 60, 66, 73, 75, 75],
  },
  Settings: {
    projects: "12",
    projectsDelta: "Synced",
    revenue: "$74.5K",
    revenueDelta: "Verified",
    productivity: "95%",
    status: "Secured",
    milestone: "Role & API Permissions",
    progress: 90,
    bars: [65, 70, 75, 80, 85, 88, 90],
  },
};

export default function SaasDashboardShowcase() {
  const [activeTopTab, setActiveTopTab] = useState<TopTab>("Overview");
  const [activeSideNav, setActiveSideNav] = useState<SideNav>("Dashboard");

  const current = TAB_METRICS[activeTopTab];

  const topTabs: TopTab[] = ["Overview", "Analytics", "Projects", "Settings"];
  const sideItems: { id: SideNav; icon: typeof LayoutDashboard }[] = [
    { id: "Dashboard", icon: LayoutDashboard },
    { id: "Projects", icon: FolderKanban },
    { id: "Analytics", icon: BarChart3 },
    { id: "Team", icon: Users },
  ];

  return (
    <section
      id="saas-systems"
      className="border-t border-stone-200/80 py-12 transition-colors duration-300 dark:border-slate-800 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Left Intro Column */}
          <div className="min-w-0 space-y-3.5 sm:space-y-4 lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#190aeb] transition-colors dark:text-[#F59E0B]">
              SYSTEM ARCHITECTURE
            </p>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#18181B] transition-colors dark:text-white sm:text-4xl">
              SaaS &amp; Dashboard{" "}
              <span className="text-[#0918ec] dark:text-[#FBBF24]">
                Systems
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-[#52525B] transition-colors dark:text-slate-300 sm:text-base">
              Designing high-performance, data-driven analytical platforms and
              management portals with seamless user experience and adaptable
              light &amp; dark interfaces.
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2">
              {["Role-Based Views", "Live KPIs", "Responsive UI"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200/90 bg-white px-2.5 py-1 text-[11px] font-medium text-[#18181B] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:shadow-sm dark:border-slate-700 dark:bg-[#0F2942]/80 dark:text-slate-200 dark:hover:border-amber-400/50 sm:px-3 sm:text-xs"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#0D9488] transition-transform duration-200 group-hover:scale-110 dark:text-[#FBBF24]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Interactive Dashboard Window */}
          <div className="min-w-0 lg:col-span-7">
            <div className="group/dash overflow-hidden rounded-2xl border border-stone-200/90 bg-white text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_24px_54px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:bg-[#08111E] dark:text-slate-100 dark:shadow-[0_22px_50px_rgba(0,0,0,0.45)] dark:hover:border-amber-400/35 dark:hover:shadow-[0_26px_60px_rgba(0,0,0,0.6)]">
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/80 bg-stone-50/90 px-3 py-2.5 transition-colors dark:border-slate-800 dark:bg-[#0F2942]/90 sm:gap-3 sm:px-4 sm:py-3">
                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                  {topTabs.map((tab) => {
                    const isActive = activeTopTab === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTopTab(tab)}
                        className={`cursor-pointer rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all duration-200 active:scale-95 sm:px-3 sm:py-1.5 sm:text-xs ${
                          isActive
                            ? "bg-[#2563EB] text-white shadow-xs dark:bg-amber-400 dark:text-slate-950"
                            : "text-slate-600 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:text-[#1D4ED8] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-700 transition-transform duration-200 hover:scale-105 dark:border-emerald-400/30 dark:text-emerald-300 sm:gap-2 sm:px-2.5 sm:py-1 sm:text-[11px]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400 sm:h-2 sm:w-2" />
                  <span>Live System Active</span>
                </div>
              </div>

              {/* Workspace Body */}
              <div className="grid md:grid-cols-12">
                {/* Sidebar */}
                <aside className="min-w-0 border-b border-stone-200/80 bg-stone-50/60 p-2.5 transition-colors dark:border-slate-800 dark:bg-[#0A1728] sm:p-3.5 md:col-span-3 md:border-b-0 md:border-r">
                  <p className="mb-1.5 px-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400 sm:mb-2.5 sm:px-2">
                    Workspace
                  </p>
                  <nav className="flex flex-wrap gap-1 md:flex-col">
                    {sideItems.map(({ id, icon: Icon }) => {
                      const active = activeSideNav === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setActiveSideNav(id)}
                          className={`group/nav flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-1.5 text-[11px] font-medium transition-all duration-200 active:scale-[0.98] sm:gap-2 sm:px-2.5 sm:py-2 sm:text-xs ${
                            active
                              ? "bg-blue-500/12 text-[#1D4ED8] ring-1 ring-blue-500/25 dark:bg-[#0F2942] dark:text-amber-300 dark:ring-amber-400/30"
                              : "text-slate-600 hover:translate-x-0.5 hover:bg-blue-500/8 hover:text-[#1E40AF] dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                          }`}
                        >
                          <Icon className="h-3 w-3 shrink-0 transition-transform duration-200 group-hover/nav:scale-110 sm:h-3.5 sm:w-3.5" />
                          <span>{id}</span>
                        </button>
                      );
                    })}
                  </nav>
                </aside>

                {/* Main Content Panel */}
                <div className="min-w-0 space-y-3 p-3 sm:space-y-4 sm:p-5 md:col-span-9">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#2563EB] dark:text-amber-400 sm:text-[11px]">
                        {activeSideNav} • {activeTopTab}
                      </p>
                      <h3 className="truncate text-xs font-semibold text-slate-900 dark:text-white sm:text-sm">
                        Operations &amp; Performance Snapshot
                      </h3>
                    </div>
                    <Settings className="h-4 w-4 shrink-0 cursor-pointer text-slate-400 transition-transform duration-500 hover:rotate-90 hover:text-[#2563EB] dark:hover:text-amber-400" />
                  </div>

                  {/* 3 Compact KPI Cards */}
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
                    <div className="min-w-0 rounded-xl border border-stone-200/90 bg-stone-50/75 p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-[#0F2942]/60 dark:hover:border-amber-400/40 dark:hover:bg-[#0F2942]/90 sm:p-3">
                      <p className="truncate text-[10px] text-slate-500 dark:text-slate-400 sm:text-[11px]">
                        Active Projects
                      </p>
                      <div className="mt-1 flex items-baseline justify-between gap-1">
                        <span className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                          {current.projects}
                        </span>
                        <span className="shrink-0 rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 sm:text-[11px]">
                          {current.projectsDelta}
                        </span>
                      </div>
                    </div>

                    <div className="min-w-0 rounded-xl border border-stone-200/90 bg-stone-50/75 p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-[#0F2942]/60 dark:hover:border-amber-400/40 dark:hover:bg-[#0F2942]/90 sm:p-3">
                      <p className="truncate text-[10px] text-slate-500 dark:text-slate-400 sm:text-[11px]">
                        Monthly Revenue
                      </p>
                      <div className="mt-1 flex items-baseline justify-between gap-1">
                        <span className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                          {current.revenue}
                        </span>
                        <span className="inline-flex shrink-0 items-center gap-0.5 rounded bg-amber-400/20 px-1.5 py-0.5 text-[10px] font-semibold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300 sm:text-[11px]">
                          <TrendingUp className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          {current.revenueDelta}
                        </span>
                      </div>
                    </div>

                    <div className="col-span-2 min-w-0 rounded-xl border border-stone-200/90 bg-stone-50/75 p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-[#0F2942]/60 dark:hover:border-amber-400/40 dark:hover:bg-[#0F2942]/90 sm:col-span-1 sm:p-3">
                      <p className="truncate text-[10px] text-slate-500 dark:text-slate-400 sm:text-[11px]">
                        Team Productivity
                      </p>
                      <div className="mt-1 flex items-baseline justify-between gap-1">
                        <span className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                          {current.productivity}
                        </span>
                        <span className="shrink-0 rounded bg-teal-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-teal-700 dark:text-teal-300 sm:text-[11px]">
                          {current.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Overview & Milestone */}
                  <div className="grid gap-2.5 sm:grid-cols-12 sm:gap-3">
                    <div className="min-w-0 rounded-xl border border-stone-200/90 bg-stone-50/70 p-3 transition-colors duration-200 hover:border-blue-400/40 dark:border-slate-800 dark:bg-[#0F2942]/50 dark:hover:border-amber-400/30 sm:col-span-7 sm:p-3.5">
                      <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3">
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Performance Overview
                        </span>
                        <span className="inline-flex shrink-0 items-center gap-1 text-[10px] text-teal-700 dark:text-teal-300 sm:text-[11px]">
                          <Activity className="h-3 w-3" />
                          Real-time Data
                        </span>
                      </div>

                      <div className="flex h-16 items-end gap-1.5 pt-1 sm:h-24 sm:gap-2 sm:pt-2">
                        {current.bars.map((val, idx) => (
                          <div
                            key={idx}
                            title={`${val}%`}
                            className="flex-1 origin-bottom cursor-pointer rounded-t-md bg-gradient-to-t from-[#2563EB]/80 to-[#60A5FA] transition-all duration-300 hover:scale-y-105 hover:brightness-110 dark:from-amber-400/75 dark:to-amber-300"
                            style={{ height: `${val}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="group/mile flex min-w-0 flex-col justify-between rounded-xl border border-stone-200/90 bg-stone-50/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 dark:border-slate-800 dark:bg-[#0F2942]/50 dark:hover:border-amber-400/30 sm:col-span-5 sm:p-3.5">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400 sm:text-[11px]">
                          Milestone
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-slate-900 dark:text-white sm:mt-1 sm:text-sm">
                          {current.milestone}
                        </p>
                      </div>

                      <div className="mt-3 space-y-1 sm:mt-4 sm:space-y-1.5">
                        <div className="flex items-center justify-between text-[11px] sm:text-xs">
                          <span className="text-slate-600 dark:text-slate-300">
                            Progress
                          </span>
                          <span className="font-semibold text-[#2563EB] dark:text-amber-300">
                            {current.progress}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 sm:h-2">
                          <div
                            className="h-full rounded-full bg-[#2563EB] transition-all duration-500 group-hover/mile:brightness-110 dark:bg-amber-400"
                            style={{ width: `${current.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Standard Bar */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 border-t border-stone-200/80 bg-stone-50/90 px-3 py-2 text-[10px] text-slate-500 transition-colors dark:border-slate-800 dark:bg-[#0A1728] dark:text-slate-400 sm:px-4 sm:py-2.5 sm:text-[11px]">
                <span>Full-Stack MERN Architecture</span>
                <span className="font-mono text-[#1D4ED8] dark:text-amber-300/90">
                  Production Dashboard Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}