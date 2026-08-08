# byprayuda — Personal Website & Jasa Pembuatan Website

Website portofolio dan landing page profesional milik **Prayuda** (`byprayuda`), yang menawarkan layanan pembuatan website company profile, toko online, dan custom web project untuk bisnis & UMKM.

---

## 📌 Gambaran Umum (Overview)

Website ini dirancang modern, cepat, dan responsif dengan arsitektur modular berbasis **Next.js (App Router)** dan **Tailwind CSS**. Seluruh konten (layanan, portofolio, estimasi harga, FAQ, dan kontak) dikelola secara terpusat melalui *Single Source of Truth* di file `lib/data.ts` untuk kemudahan perawatan dan pembaruan.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library UI**: [React 19](https://react.dev/), [Lucide React](https://lucide.dev/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), `@base-ui/react`, `tw-animate-css`
- **Komponen UI**: Base Shadcn UI primitives (`button`, `card`, `dialog`)
- **SEO & Performance**: Dynamic `sitemap.ts`, `robots.ts`, OpenGraph Metadata

---

## 📂 Struktur Folder & Arsitektur Project

Berikut adalah struktur folder dan penjelasan arsitektur file dari project ini:

```text
Personal-Website/
├── app/                      # Next.js App Router (Halaman & Routing Utama)
│   ├── globals.css           # Styling global, Tailwind v4 imports, theme variables & animasi
│   ├── layout.tsx            # Root layout aplikasi (Font Inter, metadata global, HTML wrapper)
│   ├── page.tsx              # Main entry page (Home page) yang merakit seluruh section UI
│   ├── robots.ts             # Generasi dinamis file robots.txt untuk SEO
│   └── sitemap.ts            # Generasi dinamis file sitemap.xml untuk SEO
├── components/               # Komponen UI modular berbasis React
│   ├── ui/                   # Komponen UI tingkat atomik (Primitive UI / Shadcn UI)
│   │   ├── button.tsx        # Komponen Button reusable
│   │   ├── card.tsx          # Komponen Card reusable
│   │   └── dialog.tsx        # Komponen Dialog/Modal reusable
│   ├── About.tsx             # Section Tentang & Nilai Tambah
│   ├── Contact.tsx           # Section Form & Kontak
│   ├── FloatingCta.tsx       # Button WhatsApp melayang di sudut layar
│   ├── Footer.tsx            # Section Footer website
│   ├── Header.tsx            # Navigasi utama (Navbar)
│   ├── Hero.tsx              # Section Hero (Main Banner & Value Proposition)
│   ├── HeroScene.tsx         # Visual background / animasi interaktif pada Hero section
│   ├── Metrics.tsx           # Section Statistika & Key Metrics
│   ├── Portfolio.tsx         # Section Showcasing Proyek & Studi Kasus
│   ├── Process.tsx           # Section Alur Kerja (4 Langkah Proses)
│   ├── RevealOnScroll.tsx    # Wrapper animasi scroll-reveal untuk elemen UI
│   ├── Services.tsx          # Section Daftar Layanan & Harga
│   └── Testimonial.tsx       # Section FAQ & Bukti Sosial
├── lib/                      # Utilitas, Helper, dan Terpusat Data Konten
│   ├── data.ts               # Single Source of Truth (Data proyek, layanan, FAQ, kontak, dll.)
│   └── utils.ts              # Utility function (contoh: `cn` helper untuk gabungan kelas Tailwind)
├── public/                   # Asset statis yang dapat diakses publik (SVG, Gambar)
├── .env.local                # File konfigurasi environment variables lokal
├── next.config.ts            # Konfigurasi Next.js
├── tailwind.config.ts        # Konfigurasi Tailwind CSS
├── tsconfig.json             # Konfigurasi TypeScript
└── package.json              # File manifes dependensi dan npm scripts
```

---

## 🏷️ Konvensi Penamaan File (File Naming Conventions)

Project ini mengikuti konvensi penamaan file yang konsisten dan terstruktur:

1. **Komponen Section / Fitur Utama (`components/*.tsx`)**
   - Menggunakan **`PascalCase.tsx`** (Contoh: `Header.tsx`, `Hero.tsx`, `Services.tsx`, `FloatingCta.tsx`).
   - Melambangkan komponen React yang merepresentasikan 1 section penuh atau modul utama.

2. **Komponen UI Atomik (`components/ui/*.tsx`)**
   - Menggunakan **`kebab-case.tsx`** atau **`lowercase.tsx`** (Contoh: `button.tsx`, `card.tsx`, `dialog.tsx`).
   - Mengikuti konvensi umum Shadcn UI untuk komponen dasar yang universal dan reusable.

3. **Special App Router Files (`app/*`)**
   - Menggunakan konvensi bawaan Next.js App Router dalam **`lowercase`** (Contoh: `page.tsx`, `layout.tsx`, `robots.ts`, `sitemap.ts`).

4. **Data & Utility (`lib/*.ts`)**
   - Menggunakan **`camelCase.ts`** atau **`lowercase.ts`** (Contoh: `data.ts`, `utils.ts`).

---

## 📐 Prinsip Desain & Arsitektur Kode

- **Separation of Concerns (Pemisahan Tanggung Jawab)**:
  - Tampilan UI sepenuhnya berada di folder `components/`.
  - Data konten (teks, harga, portofolio, nomor WhatsApp) disimpan terpisah di `lib/data.ts`. Jika ada perubahan teks/data, tidak perlu mengubah komponen UI.
- **Modular Component Architecture**: Setiap section dibuat terpisah sehingga mudah dipelihara, di-reorder, atau ditambahkan fitur baru.
- **Design System & Theme Tokens**: Styling utama dipusatkan di `app/globals.css` memanfaatkan Tailwind CSS v4 variables untuk konsistensi warna, font, dan ruang (`spacing`).

---

## 🚀 Cara Menjalankan Project (Getting Started)

### 1. Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18+ disarankan) dan npm/pnpm/yarn.

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat hasilnya.

### 4. Build untuk Produksi
```bash
npm run build
```
Untuk menguji hasil build produksi secara lokal:
```bash
npm run start
```

---

## 📄 Lisensi
Private / Proprietary — **byprayuda**

