export const WHATSAPP_NUMBER = "62895350846090";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Halo Kak Yuda, saya tertarik diskusi soal pembuatan website."
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Tentang", href: "#tentang" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Layanan", href: "#layanan" },
  { label: "Kontak", href: "#kontak" },
];

export const BENEFITS = [
  {
    title: "Custom, Bukan Template",
    desc: "Dibangun dari nol sesuai kebutuhan bisnis kamu, bukan tinggal ganti logo dari template orang lain.",
  },
  {
    title: "Cepat & Transparan",
    desc: "Progress dilaporkan tiap tahap, tidak menghilang begitu DP masuk. Kamu tahu persis di mana prosesnya.",
  },
  {
    title: "Siap Dikembangkan",
    desc: "Kode bersih dan terstruktur, jadi kalau bisnis kamu tumbuh, website-nya bisa ditambah fitur tanpa bongkar ulang.",
  },
];

export const TRUST_BADGES = [
  { label: "Respons Cepat", detail: "Balas dalam 1 hari kerja" },
  { label: "Custom Design", detail: "Desain khusus, bukan template" },
  { label: "SEO Friendly", detail: "Struktur website siap tumbuh" },
  { label: "Free Consultation", detail: "Diskusi pertama gratis" },
];

export const SOCIAL_PROOF = [
  { value: "10+", label: "Project diselesaikan" },
  { value: "100%", label: "Konsultasi gratis" },
  { value: "24/7", label: "Komunikasi via WhatsApp" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  url?: string;
  type: "Studi Kasus" | "Personal Project";
};

export const PROJECTS: Project[] = [
  {
    slug: "gerakansolusi",
    title: "Gerakan Solusi",
    category: "Website CMS",
    description:
      "Website resmi Gerakan Solusi yang menampilkan layanan, proyek, dan solusi digital untuk bisnis dan komunitas.",
    tags: ["Next.js", "Tailwind", "Design"],
    image: "https://s.wordpress.com/mshots/v1/gerakansolusi.id?w=1200",
    url: "https://gerakansolusi.id",
    type: "Studi Kasus",
  },
];

export const SKILLS = [
  { name: "Next.js / React", level: "Utama" },
  { name: "TypeScript", level: "Utama" },
  { name: "Tailwind CSS", level: "Utama" },
  { name: "Node.js / API Routes", level: "Menengah" },
  { name: "Supabase / PostgreSQL", level: "Menengah" },
  { name: "UI/UX Design (Figma)", level: "Menengah" },
];

export type Service = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
};

export const SERVICES: Service[] = [
  {
    name: "Company Profile",
    price: "Mulai dari Rp 1.500.000",
    desc: "Untuk bisnis jasa yang butuh kehadiran online yang jelas dan kredibel.",
    features: [
      "Landing page single-page",
      "Desain custom (bukan template)",
      "Optimasi SEO dasar",
      "Integrasi WhatsApp/kontak",
      "Responsive di semua device",
    ],
  },
  {
    name: "Toko Online",
    price: "Mulai dari Rp 3.000.000",
    desc: "Untuk bisnis yang butuh jualan produk langsung dari website sendiri.",
    features: [
      "Semua fitur Company Profile",
      "Katalog produk",
      "Sistem keranjang & checkout",
      "Integrasi pembayaran",
      "Panel kelola produk sendiri",
    ],
    highlight: true,
  },
  {
    name: "Custom Project",
    price: "Diskusi Kebutuhan",
    desc: "Untuk kebutuhan spesifik: dashboard internal, sistem booking, atau aplikasi web lainnya.",
    features: [
      "Konsultasi kebutuhan mendalam",
      "Arsitektur sesuai skala",
      "Database & backend custom",
      "Dukungan pasca-launch",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diskusi",
    desc: "Kita ngobrol soal kebutuhan, target audience, dan referensi yang kamu suka lewat WhatsApp atau call.",
  },
  {
    step: "02",
    title: "Desain",
    desc: "Saya buat draft desain, kamu review dan kasih revisi sampai arahnya pas sebelum masuk development.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Website dibangun dengan kode bersih, saya update progress secara berkala — bukan menghilang tiba-tiba.",
  },
  {
    step: "04",
    title: "Revisi & Launch",
    desc: "Testing menyeluruh, revisi terakhir, lalu deploy. Kamu dapat handover penuh atas website-nya.",
  },
];

export const FAQS = [
  {
    q: "Berapa lama proses pengerjaan?",
    a: "Untuk company profile biasanya 1-2 minggu, toko online 2-4 minggu, tergantung kompleksitas dan kecepatan revisi dari kamu.",
  },
  {
    q: "Apakah bisa revisi setelah selesai?",
    a: "Ya, ada jatah revisi minor gratis di masa garansi. Perubahan besar di luar scope awal akan didiskusikan biayanya.",
  },
  {
    q: "Saya belum punya domain/hosting, gimana?",
    a: "Tidak masalah, saya bisa bantu arahkan proses pembelian domain dan hosting sesuai kebutuhan.",
  },
  {
    q: "Apakah saya bisa edit konten sendiri nanti?",
    a: "Bisa, tergantung paket — untuk toko online tersedia panel kelola produk sendiri tanpa perlu tahu coding.",
  },
];

export const METRICS = [
  {
    icon: "★",
    value: "4.9/5",
    label: "Rating Klien",
    description: "Skor kepuasan berdasarkan feedback pengguna terhadap desain dan kecepatan penyelesaian.",
  },
  {
    icon: "⚡",
    value: "1 hari",
    label: "Response Time",
    description: "Balasan awal untuk diskusi dan pertanyaan penting, menjaga komunikasi tetap cepat.",
  },
  {
    icon: "📈",
    value: "60%",
    label: "Tingkat Konversi",
    description: "Website yang dirancang untuk menarik perhatian dan memaksimalkan tindakan pengunjung.",
  },
  {
    icon: "💼",
    value: "10+",
    label: "Proyek Selesai",
    description: "Pengalaman kerja yang menunjukkan kemampuan untuk menyelesaikan berbagai kebutuhan bisnis.",
  },
];
