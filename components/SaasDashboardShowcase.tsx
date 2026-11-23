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
      className="border-t border-stone-200/80 py-16 transition-colors duration-300 dark:border-slate-800 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Intro Column */}
          <div className="space-y-4 lg:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#190aeb] transition-colors dark:text-[#F59E0B]">
              SYSTEM ARCHITECTURE
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18181B] transition-colors dark:text-white sm:text-4xl">
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

            <div className="flex flex-wrap gap-2 pt-1">
              {["Role-Based Views", "Live KPIs", "Responsive UI"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200/90 bg-white px-3 py-1 text-xs font-medium text-[#18181B] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:shadow-sm dark:border-slate-700 dark:bg-[#0F2942]/80 dark:text-slate-200 dark:hover:border-amber-400/50"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#0D9488] transition-transform duration-200 group-hover:scale-110 dark:text-[#FBBF24]" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Interactive Dashboard Window */}
          <div className="lg:col-span-7">
            <div className="group/dash overflow-hidden rounded-2xl border border-stone-200/90 bg-white text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_24px_54px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:bg-[#08111E] dark:text-slate-100 dark:shadow-[0_22px_50px_rgba(0,0,0,0.45)] dark:hover:border-amber-400/35 dark:hover:shadow-[0_26px_60px_rgba(0,0,0,0.6)]">
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 bg-stone-50/90 px-4 py-3 transition-colors dark:border-slate-800 dark:bg-[#0F2942]/90">
                <div className="flex flex-wrap items-center gap-1.5">
                  {topTabs.map((tab) => {
                    const isActive = activeTopTab === tab;
                    return (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTopTab(tab)}
                        className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 active:scale-95 ${
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

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 transition-transform duration-200 hover:scale-105 dark:border-emerald-400/30 dark:text-emerald-300">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  <span>Live System Active</span>
                </div>
              </div>

              {/* Workspace Body */}
              <div className="grid md:grid-cols-12">
                {/* Sidebar */}
                <aside className="border-b border-stone-200/80 bg-stone-50/60 p-3.5 transition-colors dark:border-slate-800 dark:bg-[#0A1728] md:col-span-3 md:border-b-0 md:border-r">
                  <p className="mb-2.5 px-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400">
                    Workspace
                  </p>
                  <nav className="flex flex-row gap-1 overflow-x-auto md:flex-col">
                    {sideItems.map(({ id, icon: Icon }) => {
                      const active = activeSideNav === id;
                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setActiveSideNav(id)}
                          className={`group/nav flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-lg px-2.5 py-2 text-xs font-medium transition-all duration-200 active:scale-[0.98] ${
                            active
                              ? "bg-blue-500/12 text-[#1D4ED8] ring-1 ring-blue-500/25 dark:bg-[#0F2942] dark:text-amber-300 dark:ring-amber-400/30"
                              : "text-slate-600 hover:translate-x-0.5 hover:bg-blue-500/8 hover:text-[#1E40AF] dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/nav:scale-110" />
                          <span>{id}</span>
                        </button>
                      );
                    })}
                  </nav>
                </aside>

                {/* Main Content Panel */}
                <div className="space-y-4 p-4 sm:p-5 md:col-span-9">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#2563EB] dark:text-amber-400">
                        {activeSideNav} • {activeTopTab}
                      </p>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        Operations &amp; Performance Snapshot
                      </h3>
                    </div>
                    <Settings className="h-4 w-4 cursor-pointer text-slate-400 transition-transform duration-500 hover:rotate-90 hover:text-[#2563EB] dark:hover:text-amber-400" />
                  </div>

                  {/* 3 KPI Cards */}
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-stone-200/90 bg-stone-50/75 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-[#0F2942]/60 dark:hover:border-amber-400/40 dark:hover:bg-[#0F2942]/90">
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Active Projects
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                          {current.projects}
                        </span>
                        <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                          {current.projectsDelta}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-stone-200/90 bg-stone-50/75 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-[#0F2942]/60 dark:hover:border-amber-400/40 dark:hover:bg-[#0F2942]/90">
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Monthly Revenue
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                          {current.revenue}
                        </span>
                        <span className="inline-flex items-center gap-0.5 rounded bg-amber-400/20 px-1.5 py-0.5 text-[11px] font-semibold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">
                          <TrendingUp className="h-3 w-3" />
                          {current.revenueDelta}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-stone-200/90 bg-stone-50/75 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-[#0F2942]/60 dark:hover:border-amber-400/40 dark:hover:bg-[#0F2942]/90">
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Team Productivity
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                          {current.productivity}
                        </span>
                        <span className="rounded bg-teal-500/15 px-1.5 py-0.5 text-[11px] font-semibold text-teal-700 dark:text-teal-300">
                          {current.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Overview & Milestone */}
                  <div className="grid gap-3 sm:grid-cols-12">
                    <div className="rounded-xl border border-stone-200/90 bg-stone-50/70 p-3.5 transition-colors duration-200 hover:border-blue-400/40 dark:border-slate-800 dark:bg-[#0F2942]/50 dark:hover:border-amber-400/30 sm:col-span-7">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                          Performance Overview
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-teal-700 dark:text-teal-300">
                          <Activity className="h-3 w-3" />
                          Real-time Data
                        </span>
                      </div>

                      <div className="flex h-24 items-end gap-2 pt-2">
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

                    <div className="group/mile flex flex-col justify-between rounded-xl border border-stone-200/90 bg-stone-50/70 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 dark:border-slate-800 dark:bg-[#0F2942]/50 dark:hover:border-amber-400/30 sm:col-span-5">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400">
                          Milestone
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                          {current.milestone}
                        </p>
                      </div>

                      <div className="mt-4 space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600 dark:text-slate-300">
                            Progress
                          </span>
                          <span className="font-semibold text-[#2563EB] dark:text-amber-300">
                            {current.progress}%
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
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
              <div className="flex items-center justify-between border-t border-stone-200/80 bg-stone-50/90 px-4 py-2.5 text-[11px] text-slate-500 transition-colors dark:border-slate-800 dark:bg-[#0A1728] dark:text-slate-400">
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