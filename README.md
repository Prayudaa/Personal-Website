# byprayuda — Personal Website & Jasa Pembuatan Website

Website portofolio dan landing page profesional milik **Prayuda** (`byprayuda`), yang menawarkan layanan pembuatan website company profile, toko online, dan custom web project untuk bisnis & UMKM.

> **Design Update 2026.08** — Migrasi ke **Bento Grid Swiss**: layout 12-kolom, border tipis, mono-label, dan sistem kartu bento untuk kesan rapi, sistematis, dan premium.

---

## 📌 Gambaran Umum (Overview)

Website dirancang modern, cepat, dan responsif dengan arsitektur modular berbasis **Next.js (App Router)** dan **Tailwind CSS v4**. Seluruh konten (layanan, portofolio, estimasi harga, FAQ, dan kontak) dikelola terpusat via *Single Source of Truth* di `lib/data.ts`. Desain mengadopsi **Swiss / Bento Grid** — terinspirasi studio editorial & Linear — untuk memaksimalkan kejelasan informasi dan kepercayaan.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library UI**: [React 19](https://react.dev/), [Lucide React](https://lucide.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), `@base-ui/react`, `tw-animate-css`
- **Komponen UI**: Shadcn primitives (`button`, `card`, `dialog`)
- **Font**: `Inter` (display/body) + `JetBrains Mono` (label Swiss)
- **SEO & Performance**: Dynamic `sitemap.ts` (termasuk route `/portfolio/[slug]`), `robots.ts`, OpenGraph Metadata

---

## 🎨 Design System — Bento Grid Swiss

Palet & token didefinisikan di `app/globals.css:7`:

| Token | Value | Penggunaan |
|-------|-------|------------|
| `--color-bg` | `#FCFCF9` | Background utama |
| `--color-ink` | `#0A0A0A` | Teks & CTA primer |
| `--color-line` | `#E7E7E2` | Border bento (1px) |
| `--color-surface` | `#FFFFFF` | Kartu bento |
| `--color-muted` | `#F4F4F0` | Kartu muted / tag |
| `--color-swiss-red` | `#E30613` | Aksen Swiss |

Primitif:
- `.bento-card` — kartu putih `border 1px var(--color-line)` `rounded 20px`
- `.bento-card--ink` / `--accent` — varian gelap & aksen
- `.swiss-label` — `JetBrains Mono 10px tracking 0.14em uppercase`
- `.swiss-grid` — grid 80×80px garis tipis
- `.swiss-num` — angka display `800` `tracking -0.04em`
- `.glass-card`, `.glass-nav`, `.cta-primary` di-override ke gaya Swiss (border tipis, tanpa shadow berat) agar kompatibel dengan komponen lama.

Layout bento: wrapper `grid grid-cols-12 gap-[1px] bg-line border border-line rounded-[24px] overflow-hidden p-[1px]` — gutter `1px` adalah garis grid Swiss.

---

## 📂 Struktur Folder & Arsitektur Project

```text
Personal-Website/
├── app/                      # Next.js App Router
│   ├── globals.css           # Theme tokens Swiss, bento utilities, override glass
│   ├── layout.tsx            # Root layout (Inter + JetBrains Mono, metadata, HTML wrapper)
│   ├── page.tsx              # Home — merakit Hero, About, Metrics, Portfolio, Services, Process, Testimonial, Contact
│   ├── portfolio/
│   │   ├── layout.tsx        # Metadata koleksi portfolio
│   │   ├── page.tsx          # Listing portfolio + filter kategori
│   │   └── [slug]/page.tsx   # Detail studi kasus / personal project
│   ├── robots.ts             # robots.txt dinamis
│   └── sitemap.ts            # sitemap.xml dinamis (home + /portfolio + /portfolio/[slug])
├── components/               # Komponen UI modular (Swiss Bento)
│   ├── ui/                   # Primitif atomik (Shadcn)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── dialog.tsx
│   ├── About.tsx             # Bento profil + 3 benefits
│   ├── Contact.tsx           # Bento kontak (split white / ink)
│   ├── FloatingCta.tsx       # CTA WhatsApp melayang (ink pill)
│   ├── Footer.tsx            # Footer mono minimal
│   ├── Header.tsx            # Navbar Swiss (thin border, mono uppercase, pill WhatsApp)
│   ├── Hero.tsx              # Bento 8+4 (headline + stats + grid visual)
│   ├── HeroScene.tsx         # Placeholder (Swiss tidak pakai orb)
│   ├── Metrics.tsx           # 4 bento metrics (varian ink & red)
│   ├── Portfolio.tsx         # 3-col bento cards
│   ├── Process.tsx           # 4 steps bento
│   ├── RevealOnScroll.tsx    # Scroll-reveal 14px / 600ms
│   ├── Services.tsx          # 3 tiers bento (highlight = ink)
│   └── Testimonial.tsx       # 2-col bento quotes
├── lib/
│   ├── data.ts               # Single Source of Truth (NAV_LINKS, PROJECTS, SERVICES, PROCESS_STEPS, METRICS, TESTIMONIALS, WHATSAPP_LINK)
│   └── utils.ts              # cn helper
├── public/                   # Asset statis
├── tailwind.config.ts        # Extend colors: ink, line, surface, muted, swiss-red + font mono & shadow bento
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🏷️ Konvensi Penamaan File

1. **Komponen Section (`components/*.tsx`)** — `PascalCase.tsx` (`Header.tsx`, `Hero.tsx`)
2. **Komponen UI Atomik (`components/ui/*.tsx`)** — `lowercase.tsx` (`button.tsx`, `card.tsx`)
3. **App Router (`app/*`)** — `lowercase` (`page.tsx`, `layout.tsx`, `robots.ts`)
4. **Data & Utility (`lib/*.ts`)** — `lowercase.ts` (`data.ts`, `utils.ts`)

---

## 📐 Prinsip Desain & Arsitektur Kode

- **Separation of Concerns**: UI di `components/`, data di `lib/data.ts`.
- **Modular Bento Architecture**: Setiap section adalah bento grid independen; mudah reorder/tambah section tanpa sentuh section lain.
- **Design System Tokens**: Warna, font mono, radius, dan grid terpusat di `app/globals.css:7` + `tailwind.config.ts:12`.
- **Swiss Grid**: `gap-[1px] bg-line` untuk garis grid konsisten; border `1px` tipis menggantikan shadow berat.
- **Progressive Enhancement**: `RevealOnScroll` dengan `prefers-reduced-motion` support.

---

## 🚀 Cara Menjalankan Project

### 1. Prasyarat
Node.js 18+ dan npm/pnpm/yarn.

### 2. Instalasi
```bash
npm install
```

### 3. Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000).

### 4. Build Produksi
```bash
npm run build
npm run start
```

---

## 📝 Changelog

- **2026.08 — feat: Bento Grid Swiss** — redesign tokens, Hero/About/Metrics/Portfolio/Services/Process/Testimonial/Contact/Header/Footer ke bento Swiss; tambah `JetBrains Mono`; tambah route `/portfolio` & `/portfolio/[slug]` + sitemap dinamis; override glass ke border tipis.
- **2026.08 — feat: portfolio** — listing & detail slug page.

---

## 📄 Lisensi
Private / Proprietary — **byprayuda**
