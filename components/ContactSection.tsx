"use client";

import { useState, FormEvent } from "react";
import BookPageSection from "./BookPageSection";
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Database,
  FileCode2,
  Film,
  Globe,
  Layers,
  Mail,
  MessageCircle,
  Palette,
  Send,
  Server,
  Sparkles,
} from "lucide-react";

type ToolboxIconId =
  | "css"
  | "tailwind"
  | "javascript"
  | "react"
  | "nextjs"
  | "nodejs"
  | "expressjs"
  | "mongodb"
  | "canva"
  | "capcut"
  | "postman";

interface ToolboxItem {
  id: ToolboxIconId;
  label: string;
  badgeClass: string;
}

const TOOLBOX_ITEMS: ToolboxItem[] = [
  {
    id: "css",
    label: "CSS",
    badgeClass:
      "border-purple-500/30 bg-purple-500/10 text-purple-700 dark:border-purple-400/30 dark:bg-purple-500/15 dark:text-purple-300",
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    badgeClass:
      "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-500/15 dark:text-cyan-300",
  },
  {
    id: "javascript",
    label: "JavaScript",
    badgeClass:
      "border-yellow-500/35 bg-yellow-500/10 text-yellow-800 dark:border-yellow-400/30 dark:bg-yellow-400/15 dark:text-yellow-300",
  },
  {
    id: "react",
    label: "React",
    badgeClass:
      "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/15 dark:text-sky-300",
  },
  {
    id: "nextjs",
    label: "Next.js",
    badgeClass:
      "border-slate-400/40 bg-slate-500/10 text-slate-800 dark:border-slate-500/40 dark:bg-slate-400/15 dark:text-slate-100",
  },
  {
    id: "nodejs",
    label: "Node.js",
    badgeClass:
      "border-lime-500/35 bg-lime-500/10 text-lime-800 dark:border-lime-400/30 dark:bg-lime-400/15 dark:text-lime-300",
  },
  {
    id: "expressjs",
    label: "Express.js",
    badgeClass:
      "border-orange-500/30 bg-orange-500/10 text-orange-700 dark:border-orange-400/30 dark:bg-orange-400/15 dark:text-orange-300",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    badgeClass:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300",
  },
  {
    id: "canva",
    label: "Canva",
    badgeClass:
      "border-teal-500/30 bg-teal-500/10 text-teal-700 dark:border-teal-400/30 dark:bg-teal-400/15 dark:text-teal-300",
  },
  {
    id: "capcut",
    label: "CapCut",
    badgeClass:
      "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-700 dark:border-fuchsia-400/30 dark:bg-fuchsia-400/15 dark:text-fuchsia-300",
  },
  {
    id: "postman",
    label: "Postman",
    badgeClass:
      "border-amber-500/35 bg-amber-500/10 text-amber-800 dark:border-amber-400/30 dark:bg-amber-400/15 dark:text-amber-300",
  },
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

function ToolboxIcon({ id }: { id: ToolboxIconId }) {
  const cls = "h-3.5 w-3.5 shrink-0";
  switch (id) {
    case "css":
      return <Layers className={cls} />;
    case "tailwind":
      return <Sparkles className={cls} />;
    case "javascript":
      return <FileCode2 className={cls} />;
    case "react":
      return <Code2 className={cls} />;
    case "nextjs":
      return <Globe className={cls} />;
    case "nodejs":
      return <Server className={cls} />;
    case "expressjs":
      return <Send className={cls} />;
    case "mongodb":
      return <Database className={cls} />;
    case "canva":
      return <Palette className={cls} />;
    case "capcut":
      return <Film className={cls} />;
    case "postman":
      return <Send className={cls} />;
  }
}

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const emailAddress = "farhanakhatun22@gmail.com";
  const whatsappNumber = "01759945057";
  const whatsappUrl = "https://wa.me/8801759945057";
  const githubUrl = "https://github.com/Farhana57";
  const linkedinUrl = "https://linkedin.com/in/farhana-khatun-828691405";
  const web3FormsAccessKey = "cced1010-94d7-468e-beab-c78d1379fb3f";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setFeedback("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `New Portfolio Inquiry from ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Could not send message.");
      }

      setStatus("success");
      setFeedback("Your message has been sent directly to my email.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus("error");
      setFeedback(
        err instanceof Error ? err.message : "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookPageSection
      id="contact"
      className="border-t border-stone-200/80 dark:border-slate-800"
    >
      <style jsx global>{`
        @keyframes contactShadowPulse {
          0%,
          100% {
            box-shadow:
              0 14px 34px rgba(13, 148, 136, 0.14),
              0 0 0 1px rgba(13, 148, 136, 0.14);
          }
          50% {
            box-shadow:
              0 20px 44px rgba(13, 148, 136, 0.24),
              0 0 24px rgba(13, 148, 136, 0.12);
          }
        }

        .dark .contact-form-animated {
          animation: contactShadowPulseDark 4s ease-in-out infinite;
        }

        @keyframes contactShadowPulseDark {
          0%,
          100% {
            box-shadow:
              0 18px 42px rgba(0, 0, 0, 0.48),
              0 0 18px rgba(251, 191, 36, 0.12);
          }
          50% {
            box-shadow:
              0 24px 52px rgba(0, 0, 0, 0.62),
              0 0 28px rgba(251, 191, 36, 0.24);
          }
        }

        .contact-form-animated {
          animation: contactShadowPulse 4s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-5xl space-y-10">
        {/* Main Contact Card */}
        <div className="grid gap-8 rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-[0_14px_34px_rgba(15,41,66,0.08)] transition-all duration-300 dark:border-slate-700/80 dark:bg-[#0F2942] dark:shadow-[0_18px_42px_rgba(0,0,0,0.42)] sm:p-8 md:grid-cols-12 md:items-center">
          {/* Left Column */}
          <div className="space-y-4 md:col-span-6">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] text-[#2009ec] dark:text-[#F59E0B]">
              09 / CONTACT
            </p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18181B] dark:text-white sm:text-4xl">
              Full-stack MERN build, freelance or{" "}
              <span className="text-[#0918ec] dark:text-[#FBBF24]">
                team role?
              </span>
            </h2>
            <p className="text-sm leading-relaxed text-[#52525B] dark:text-slate-300 sm:text-base">
              I&apos;m open to full-stack web development projects, remote and
              freelance roles, and collaborative builds using React, Next.js,
              Node.js, Express, and MongoDB. Based in Sylhet, Bangladesh.
            </p>
          </div>

          {/* Right Column Action Stack */}
          <div className="flex flex-col gap-3 md:col-span-6">
            {/* Primary Email Action */}
            <div className="flex items-center justify-between gap-2 rounded-xl border border-[#0F2942] bg-[#0F2942] px-4 py-3 text-white shadow-sm dark:border-amber-400/40 dark:bg-[#08111E]">
              <a
                href={`mailto:${emailAddress}`}
                className="flex min-w-0 items-center gap-2.5 text-sm font-medium hover:underline"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#FBBF24]" />
                <span className="truncate">{emailAddress}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium text-white transition hover:bg-white/20"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-300" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50/90 px-4 py-3 text-sm font-semibold text-[#18181B] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0D9488] hover:bg-white dark:border-slate-700 dark:bg-[#08111E]/70 dark:text-slate-100 dark:hover:border-[#F59E0B] dark:hover:bg-[#08111E]"
            >
              <GitHubIcon className="h-4 w-4 text-[#031816] dark:text-[#FBBF24]" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50/90 px-4 py-3 text-sm font-semibold text-[#18181B] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0D9488] hover:bg-white dark:border-slate-700 dark:bg-[#08111E]/70 dark:text-slate-100 dark:hover:border-[#F59E0B] dark:hover:bg-[#08111E]"
            >
              <LinkedInIcon className="h-4 w-4 text-[#0872eb] dark:text-[#FBBF24]" />
              <span>LinkedIn</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-stone-200 bg-stone-50/90 px-4 py-3 text-sm font-semibold text-[#18181B] shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-50/60 dark:border-slate-700 dark:bg-[#08111E]/70 dark:text-slate-100 dark:hover:border-emerald-400 dark:hover:bg-[#08111E]"
            >
              <MessageCircle className="h-4 w-4 text-green-600 dark:text-emerald-400" />
              <span>WhatsApp • {whatsappNumber}</span>
            </a>
          </div>
        </div>

        {/* TOOLBOX Strip */}
        <div className="space-y-4 text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0d0dc5] dark:text-slate-400">
            TOOLBOX
          </p>

          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2.5">
            {TOOLBOX_ITEMS.map((tool) => (
              <span
                key={tool.id}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-xs font-semibold shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${tool.badgeClass}`}
              >
                <ToolboxIcon id={tool.id} />
                <span>{tool.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Direct Inquiry Form inside the same Contact Section */}
        <div className="mx-auto max-w-3xl">
          <div className="contact-form-animated rounded-2xl border border-stone-200/90 bg-white/95 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 dark:border-amber-400/25 dark:bg-[#0F2942]/90 sm:p-8">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0f31f1] dark:text-[#FBBF24]">
                Direct Message
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#18181B] dark:text-[#F8FAFC] sm:text-3xl">
                Send a Quick Inquiry
              </h3>
              <p className="mt-1.5 text-sm text-[#52525B] dark:text-slate-300">
                Have a project, freelance task, or role in mind? Drop a note and
                it goes straight to{" "}
                <span className="font-medium text-[#0F2942] dark:text-amber-400">
                  {emailAddress}
                </span>
                .
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#18181B] dark:text-slate-200">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-[#18181B] shadow-2xs outline-none transition focus:border-[#0D9488] focus:shadow-[0_0_0_3px_rgba(13,148,136,0.16)] dark:border-slate-700 dark:bg-[#09131E]/90 dark:text-white dark:focus:border-amber-400 dark:focus:shadow-[0_0_0_3px_rgba(251,191,36,0.18)]"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-[#18181B] dark:text-slate-200">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="farhanakhatun22@gmail.com"
                    className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-[#18181B] shadow-2xs outline-none transition focus:border-[#0D9488] focus:shadow-[0_0_0_3px_rgba(13,148,136,0.16)] dark:border-slate-700 dark:bg-[#09131E]/90 dark:text-white dark:focus:border-amber-400 dark:focus:shadow-[0_0_0_3px_rgba(251,191,36,0.18)]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-[#18181B] dark:text-slate-200">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me briefly about your project or inquiry..."
                  className="w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-[#18181B] shadow-2xs outline-none transition focus:border-[#0D9488] focus:shadow-[0_0_0_3px_rgba(13,148,136,0.16)] dark:border-slate-700 dark:bg-[#09131E]/90 dark:text-white dark:focus:border-amber-400 dark:focus:shadow-[0_0_0_3px_rgba(251,191,36,0.18)]"
                />
              </div>

              {status !== "idle" && (
                <div
                  className={`flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-medium ${
                    status === "success"
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                      : "bg-rose-500/15 text-rose-700 dark:text-rose-300"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_12px_26px_rgba(37,99,235,0.38)] disabled:opacity-60 dark:bg-amber-400 dark:text-slate-950 dark:shadow-[0_8px_22px_rgba(251,191,36,0.25)] dark:hover:bg-amber-300 dark:hover:shadow-[0_12px_28px_rgba(251,191,36,0.38)]"
              >
                <Send className="h-4 w-4" />
                <span>{loading ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </BookPageSection>
  );
}