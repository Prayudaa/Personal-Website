import type { Metadata } from "next";
import "./globals.css";

// CATATAN: next/font/google butuh akses internet saat build.
// Di lingkungan development ini domain fonts.googleapis.com diblokir,
// jadi font di-load lewat @import di globals.css sebagai gantinya.
// Saat deploy ke Vercel (yang punya akses penuh), kamu bisa ganti ke:
//
// import { Inter } from "next/font/google";
// const inter = Inter({ variable: "--font-display", subsets: ["latin"], weight: ["400","500","600","700","800"] });
//
// lalu tambahkan `${inter.variable}` ke className <html> di bawah,
// dan hapus @import font dari globals.css supaya tidak double-load.

export const metadata: Metadata = {
  title: "byprayuda — Jasa Pembuatan Website untuk Bisnis & Toko Online",
  description:
    "Jasa pembuatan website company profile dan toko online, dari desain sampai deploy. Cepat, custom, dan jelas prosesnya. Konsultasi langsung via WhatsApp.",
  metadataBase: new URL("https://byprayuda.com"),
  openGraph: {
    title: "byprayuda — Jasa Pembuatan Website",
    description:
      "Website company profile & toko online yang dibangun custom, bukan template asal jadi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-navy-dark">
        {children}
      </body>
    </html>
  );
}
