export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-overlay py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-bg/70 sm:flex-row md:px-8">
        <span>&copy; {new Date().getFullYear()} byprayuda. Semarang, Indonesia.</span>
        <div className="flex items-center gap-3">
          <span>Website custom & profesional</span>
          <span className="hidden h-1 w-1 rounded-full bg-bg/40 sm:block" />
          <span>Dibangun dengan Next.js</span>
        </div>
      </div>
    </footer>
  );
}
