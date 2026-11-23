"use client";

export default function WhatsAppFloat() {
  const phoneNumber = "8801759945057";
  const defaultMessage = encodeURIComponent(
    "Hello Farhana! I visited your portfolio and would like to discuss a project."
  );

  return (
    <a
      href={`https://wa.me/${8801759945057}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 left-5 z-[9995] inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-[#071B16]/95 px-4 py-2.5 text-xs font-semibold text-emerald-300 shadow-[0_10px_28px_rgba(16,185,129,0.28)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-500 hover:text-slate-950"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      <span className="font-mono tracking-wider">WhatsApp</span>
    </a>
  );
}