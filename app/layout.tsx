import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="id" className={cn("h-full antialiased", "font-sans", inter.variable)}>
      <body className="min-h-full flex flex-col bg-bg text-navy-dark">
        {children}
      </body>
    </html>
  );
}
