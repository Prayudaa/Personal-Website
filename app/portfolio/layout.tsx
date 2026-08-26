import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio Proyek — byprayuda",
  description:
    "Koleksi lengkap studi kasus dan proyek personal yang dibangun dengan fokus pada performa, estetika, dan solusi bisnis nyata.",
  openGraph: {
    title: "Portofolio Proyek | byprayuda",
    description:
      "Studi kasus dan project personal — dari company profile hingga platform edukasi.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
