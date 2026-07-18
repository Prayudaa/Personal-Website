export default function Footer() {
  return (
    <footer className="bg-navy-dark py-6 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-bg/40">
        <span>&copy; {new Date().getFullYear()} byprayuda. Semarang, Indonesia.</span>
        <span>Dibangun dengan Next.js</span>
      </div>
    </footer>
  );
}
