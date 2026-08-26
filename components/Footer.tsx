export default function Footer() {
  return (
    <footer className="bg-bg border-t border-line py-6">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.12em] text-zinc-500">
          <span className="h-6 w-6 rounded-full bg-ink text-white flex items-center justify-center font-bold">BY</span>
          <span>© {new Date().getFullYear()} BYPRAYUDA — SEMARANG, INDONESIA</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-400">
          <span>WEBSITE CUSTOM & PROFESIONAL</span>
          <span className="h-1 w-1 rounded-full bg-line" />
          <span>DIBANGUN DENGAN NEXT.JS</span>
          <span className="hidden sm:inline-flex ml-2 rounded-full border border-line bg-white px-2 py-1">SYSTEM OK</span>
        </div>
      </div>
    </footer>
  );
}
