import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Calculator, 
  Printer, 
  Settings, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Menu, 
  X,
  MessageCircle,
  Smartphone,
  Check,
  
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTnCOpen, setIsTnCOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle sticky header styling on scroll
  useEffect(() => {
    if (isTnCOpen || isPrivacyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isTnCOpen, isPrivacyOpen]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      
      {/* 1. HEADER & NAVIGATION */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/50' : 'bg-white/50 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo-laundrix.png" 
              alt="Laundrix Logo" 
              className="w-10 h-10 object-contain shadow-sm rounded-lg shrink-0" 
            />
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-3xl tracking-tight text-slate-900 leading-none">
                Laundrix
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium mt-1 tracking-wide">
                Smart Laundry Management System
              </span>
            </div>
          </div>

          {}
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#fitur" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Fitur</a>
            <a href="#solusi" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Solusi</a>
            <a href="#harga" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Harga</a>
            <a href="https://wa.me/6281355533802?text=Halo%20Tim%20Laundrix!%20Saya%20ingin%20bertanya%20seputar%20aplikasi%20Laundrix." target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Hubungi Kami</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5">
              Coba Gratis
            </button>
          </div>

          {}
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col gap-4">
            <a href="#fitur" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Fitur</a>
            <a href="#solusi" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Solusi</a>
            <a href="#harga" className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>Harga</a>
            <a href="https://wa.me/6281355533802?text=Halo%20Tim%20Laundrix!%20Saya%20ingin%20bertanya%20seputar%20aplikasi%20Laundrix." target="_blank" rel="noreferrer" className="text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Hubungi Kami</a>
            <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold mt-2">
              Coba Gratis Sekarang
            </button>
          </div>
        )}
      </header>

      {}
      {/* 2. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Kelola Laundry dari Mana Saja. <br className="hidden md:block"/>
              <span className="text-blue-600">Lebih Cepat, Tepat, Tanpa Ribet.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Sistem Kasir (POS) dan Manajemen Laundry pintar. Pantau omzet harian, cetak nota thermal instan, dan kelola database pelanggan hanya dari genggaman Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-base font-semibold transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-1">
                Coba Laundrix Sekarang
                <ArrowRight size={18} />
              </button>
              <a 
                href="https://wa.me/6281355533802?text=Halo%20Tim%20Laundrix!%20Saya%20tertarik%20untuk%20menggunakan%20aplikasi%20Laundrix.%20Boleh%20saya%20ditunjukkan%20demo%20penggunaannya%3F%20Terima%20kasih!"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full text-base font-semibold transition-all hover:-translate-y-1"
              >
                Jadwalkan Demo
              </a>
            </div>
          </div>

          {}
          {/* Dashboard Image */}
          <div className="mt-16 lg:mt-24 relative max-w-5xl mx-auto px-4 sm:px-0">
            <img 
              src="/laundrix_desktop.png" 
              alt="Dashboard Laundrix" 
              className="w-full h-auto rounded-xl lg:rounded-2xl shadow-2xl border border-slate-200/80 bg-white" 
            />
          </div>
        </div>
      </section>

      {}
      {/* 5. SOCIAL PROOF / STATS (Banner) */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-400/30">
            <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
              <Clock className="text-blue-200 mb-2" size={32} />
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-1">Hemat 2 Jam</h3>
              <p className="text-blue-100 text-sm font-medium">Waktu Rekap Harian</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <ShieldCheck className="text-blue-200 mb-2" size={32} />
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-1">100% Akurat</h3>
              <p className="text-blue-100 text-sm font-medium">Perhitungan Harga & Kas</p>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
              <Smartphone className="text-blue-200 mb-2" size={32} />
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-1">Multi-Platform</h3>
              <p className="text-blue-100 text-sm font-medium">Bisa Diakses via HP & Laptop</p>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* 3. FEATURES SECTION (Grid Layout) */}
      <section id="fitur" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Kenapa Memilih Laundrix?</h2>
            <p className="text-slate-600">Sistem yang dirancang khusus untuk memecahkan masalah operasional laundry Anda sehari-hari.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <LayoutDashboard size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dashboard Cerdas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pantau arus kas, total nota, dan performa bisnis secara real-time dari mana saja. Keputusan bisnis jadi lebih mudah.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Calculator size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Kasir POS Kilat</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Desain visual berbasis ikon untuk memproses pesanan dan checkout dalam hitungan detik. Karyawan baru bisa langsung pakai.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Printer size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Support Printer Thermal</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cetak struk fisik langsung ke printer thermal via Bluetooth. Bukti transaksi terlihat profesional di mata pelanggan.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Settings size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Manajemen Dinamis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Edit status cucian (Proses/Selesai) dan atur daftar harga layanan sendiri dengan fleksibel tanpa pusing koding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* 4. COMPARISON SECTION */}
      <section id="solusi" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tinggalkan Cara Lama</h2>
            <p className="text-slate-600">Berhenti membuang waktu dan tenaga untuk hal yang bisa diotomatisasi.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
            {/* Tradisional */}
            <div className="flex-1 bg-white rounded-3xl p-8 lg:p-10 border-2 border-red-50 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <XCircle size={100} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                   <span className="font-bold">✗</span>
                </div>
                Cara Tradisional
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <XCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Hitung manual pakai kalkulator, rawan selisih dan salah harga.</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Nota kertas berserakan, mudah hilang, dan sulit dilacak.</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Pusing saat rekap omzet harian & akhir bulan, buang waktu berjam-jam.</span>
                </li>
                <li className="flex items-start gap-4">
                  <XCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-700">Tidak tahu pasti performa bisnis saat sedang tidak ada di lokasi.</span>
                </li>
              </ul>
            </div>

            {/* Laundrix Way */}
            <div className="flex-1 bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 lg:p-10 border-2 border-blue-100 shadow-xl relative overflow-hidden ring-4 ring-blue-50">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <CheckCircle2 size={100} className="text-blue-500" />
              </div>
              
              
              <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                   <Check size={20} strokeWidth={3}/>
                </div>
                Cara Laundrix
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-800 font-medium">Kalkulasi sistematis otomatis, 100% akurat tanpa *human error*.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-800 font-medium">Database digital aman, cetak nota thermal instan & terlihat profesional.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-800 font-medium">Laporan omzet langsung jadi. Waktu bisa dipakai untuk hal lain.</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-slate-800 font-medium">Akses Dashboard dari HP, pantau bisnis real-time sambil ngopi.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* 6. FOOTER & FINAL CTA */}
      <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 blur-sm"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Membuat Karyawan Nyaman <br className="hidden md:block"/>
            <span className="text-blue-400">dan Pelanggan Senang?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan pengusaha laundry modern lainnya. Tingkatkan efisiensi dan skala bisnis Anda mulai hari ini.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-blue-900/50 hover:shadow-blue-600/40 hover:-translate-y-1">
            Mulai Digitalisasi Laundry Saya
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright & Info */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                 <img 
                  src="/logo-laundrix.png" 
                  alt="Laundrix Logo" 
                  className="w-6 h-6 object-contain rounded-md shrink-0 bg-white" 
                />
                <span className="text-white font-bold tracking-wider">Laundrix.</span>
              </div>
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} PT Laundrix Teknologi Digital. All rights reserved.
              </p>
            </div>

            {/* Links & Socials */}
            <div className="flex flex-wrap justify-center items-center gap-6">
               <button 
                 onClick={() => setIsPrivacyOpen(true)} 
                 className="text-slate-400 hover:text-white text-sm transition-colors"
               >
                 Kebijakan Privasi
               </button>
               <button 
                 onClick={() => setIsTnCOpen(true)} 
                 className="text-slate-400 hover:text-white text-sm transition-colors"
               >
                 Syarat & Ketentuan
               </button>
               
               <div className="flex items-center gap-4 border-l border-slate-700 pl-6 ml-2">
                  <a 
                    href="https://wa.me/6281355533802?text=Halo%20Tim%20Laundrix!%20Saya%20tertarik%20untuk%20menggunakan%20aplikasi%20Laundrix.%20Boleh%20minta%20informasi%20lebih%20lanjut%20mengenai%20fitur%2C%20harga%2C%20dan%20cara%20berlangganannya%3F%20Terima%20kasih!" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors group"
                  >
                    <div className="bg-slate-800 p-2 rounded-full group-hover:bg-green-500/10">
                      <MessageCircle size={18} />
                    </div>
                    <span className="text-sm font-medium">Hubungi Kami</span>
                  </a>
                  
                  <a href="https://tiktok.com/@laundrix.id" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
                     <div className="bg-slate-800 p-2 rounded-full group-hover:bg-white/10">
                      <Smartphone size={18} />
                    </div>
                    <span className="text-sm font-medium">@laundrix.id</span>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </footer>
      
      {}
      {/* 7. MODAL SYARAT & KETENTUAN */}
      {isTnCOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsTnCOpen(false)}
          ></div>
          
          {/* Modal Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white z-10">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Syarat & Ketentuan Penggunaan Laundrix</h2>
                <p className="text-sm text-slate-500 mt-1">Pembaruan Terakhir: 03 Juli 2026</p>
              </div>
              <button 
                onClick={() => setIsTnCOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-6">
              <p>
                Selamat datang di Laundrix. Syarat & Ketentuan ini mengatur akses dan penggunaan Anda atas aplikasi kasir (POS) dan sistem manajemen laundry Laundrix ("Layanan"). Dengan mendaftar, mengakses, atau menggunakan Layanan kami, Anda ("Pengguna" atau "Mitra") menyetujui untuk terikat dengan Syarat & Ketentuan ini.
              </p>
              <p className="font-medium text-slate-800">
                Jika Anda tidak menyetujui Syarat & Ketentuan ini, mohon untuk tidak menggunakan Layanan Laundrix.
              </p>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">1. Definisi</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">Laundrix:</strong> Perangkat lunak (software) berbasis cloud, aplikasi mobile, dan layanan terkait lainnya yang disediakan oleh PT Laundrix Teknologi Digital.</li>
                  <li><strong className="text-slate-800">Pengguna:</strong> Pemilik usaha laundry, badan usaha, atau perwakilan sah yang mendaftar dan menggunakan layanan Laundrix.</li>
                  <li><strong className="text-slate-800">Pelanggan:</strong> Pihak ketiga yang merupakan konsumen akhir dari jasa laundry milik Pengguna.</li>
                  <li><strong className="text-slate-800">Data Pengguna:</strong> Segala informasi, data pelanggan, transaksi, dan laporan operasional yang dimasukkan oleh Pengguna ke dalam sistem Laundrix.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">2. Akun dan Keamanan</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">Kelayakan:</strong> Anda harus berusia minimal 18 tahun dan memiliki kapasitas hukum untuk mewakili bisnis laundry Anda saat mendaftar.</li>
                  <li><strong className="text-slate-800">Kerahasiaan Akun:</strong> Anda bertanggung jawab penuh untuk menjaga kerahasiaan username dan password akun Anda. Laundrix tidak bertanggung jawab atas kerugian yang timbul akibat kelalaian Anda dalam menjaga keamanan akun.</li>
                  <li><strong className="text-slate-800">Aktivitas Akun:</strong> Segala aktivitas yang terjadi di bawah akun Anda adalah tanggung jawab Anda sepenuhnya, termasuk tindakan yang dilakukan oleh karyawan atau staf Anda yang diberi akses (Hak Akses Pegawai).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">3. Penggunaan Layanan</h3>
                <p className="mb-2"><strong className="text-slate-800">Hak Akses:</strong> Laundrix memberikan Anda lisensi terbatas, non-eksklusif, dan tidak dapat dialihkan untuk menggunakan Layanan semata-mata untuk keperluan operasional bisnis laundry Anda.</p>
                <p className="mb-2"><strong className="text-slate-800">Batasan:</strong> Pengguna dilarang keras untuk:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Menyalin, memodifikasi, atau merekayasa balik (reverse engineering) sistem Laundrix.</li>
                  <li>Menjual, menyewakan, atau melisensikan kembali akun Laundrix kepada pihak lain tanpa izin tertulis dari kami.</li>
                  <li>Menggunakan Layanan untuk tindakan ilegal, penipuan, atau melanggar hukum yang berlaku di wilayah Republik Indonesia.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">4. Berlangganan dan Pembayaran</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">Biaya Layanan:</strong> Penggunaan beberapa fitur premium Laundrix mungkin memerlukan biaya berlangganan sesuai dengan paket yang Anda pilih. Harga dapat berubah sewaktu-waktu dengan pemberitahuan sebelumnya.</li>
                  <li><strong className="text-slate-800">Siklus Tagihan:</strong> Pembayaran ditagihkan di awal periode berlangganan (bulanan/tahunan).</li>
                  <li><strong className="text-slate-800">Pengembalian Dana (Refund):</strong> Semua pembayaran yang telah dilakukan tidak dapat dikembalikan, kecuali diwajibkan lain oleh hukum. Jika Anda membatalkan langganan, Anda tetap dapat menggunakan Layanan hingga akhir periode penagihan yang telah dibayar.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">5. Hak Kekayaan Intelektual</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">Kepemilikan Laundrix:</strong> Seluruh merek dagang, logo, desain, kode sumber, dan hak kekayaan intelektual pada sistem Laundrix sepenuhnya adalah milik PT Laundrix Teknologi Digital.</li>
                  <li><strong className="text-slate-800">Kepemilikan Data Pengguna:</strong> Anda tetap menjadi pemilik sah atas semua Data Pengguna (termasuk data pelanggan dan transaksi bisnis Anda). Anda memberikan hak kepada Laundrix untuk menyimpan, memproses, dan mencadangkan (backup) data tersebut semata-mata demi kelancaran Layanan.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">6. Privasi dan Keamanan Data</h3>
                <p>
                  Laundrix berkomitmen untuk melindungi privasi dan data bisnis Anda. Kami menerapkan standar keamanan industri untuk mencegah kebocoran data. Namun, kami tidak akan membagikan, menjual, atau menyalahgunakan data pelanggan bisnis Anda kepada pihak ketiga untuk tujuan pemasaran mereka.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">7. Pembatasan Tanggung Jawab</h3>
                <p className="mb-2">
                  Laundrix disediakan secara "sebagaimana adanya" (as is). Kami berupaya memastikan sistem berjalan lancar (uptime tinggi), namun kami tidak menjamin Layanan akan selalu bebas dari gangguan teknis, 100% bebas bug, atau pemeliharaan sistem.
                </p>
                <p>
                  Laundrix tidak bertanggung jawab atas kerugian bisnis, kehilangan laba, kehilangan data, atau sengketa antara Pengguna (pemilik laundry) dengan Pelanggan (konsumen laundry), yang diakibatkan oleh penggunaan atau ketidakmampuan menggunakan Layanan kami.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">8. Penghentian Layanan</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">Oleh Pengguna:</strong> Anda dapat berhenti menggunakan Laundrix kapan saja dengan menghapus akun atau menghentikan langganan Anda.</li>
                  <li><strong className="text-slate-800">Oleh Laundrix:</strong> Kami berhak menangguhkan atau menutup akun Anda tanpa pemberitahuan jika ditemukan indikasi penyalahgunaan sistem, pelanggaran Syarat & Ketentuan ini, atau tidak dilakukannya pembayaran langganan.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">9. Hukum yang Berlaku</h3>
                <p>
                  Syarat & Ketentuan ini diatur dan ditafsirkan berdasarkan hukum wilayah Republik Indonesia. Segala perselisihan yang timbul akan diselesaikan secara musyawarah, atau melalui yurisdiksi pengadilan negeri Yogyakarta.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">10. Perubahan Syarat & Ketentuan</h3>
                <p>
                  Laundrix berhak memperbarui atau mengubah Syarat & Ketentuan ini kapan saja untuk menyesuaikan dengan perkembangan sistem atau kepatuhan hukum. Kami akan memberitahukan perubahan tersebut melalui email atau notifikasi di dalam dasbor aplikasi. Penggunaan Layanan secara berkelanjutan setelah perubahan berlaku dianggap sebagai persetujuan Anda terhadap syarat yang baru.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-4">11. Hubungi Kami</h3>
                <p className="mb-4">Jika Anda memiliki pertanyaan, kendala, atau saran terkait Syarat & Ketentuan ini, silakan hubungi tim dukungan kami melalui:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span className="font-bold text-xs">@</span></div>
                    <span className="font-medium text-slate-800">support@laundrix.my.id</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><MessageCircle size={14}/></div>
                    <span className="font-medium text-slate-800">+62-813-555-33802 (WhatsApp)</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5"><LayoutDashboard size={14}/></div>
                     <span className="font-medium text-slate-800 leading-relaxed">Jln. Palagan Tentara Pelajar Km.13, Sariharjo, Ngaglik, Sleman, Yogyakarta.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={() => setIsTnCOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl font-semibold transition-colors"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
      )}

      {}
      {/* 8. MODAL KEBIJAKAN PRIVASI */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsPrivacyOpen(false)}
          ></div>
          
          {/* Modal Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-white z-10">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">Kebijakan Privasi Laundrix</h2>
                <p className="text-sm text-slate-500 mt-1">Pembaruan Terakhir: 03 Juli 2026</p>
              </div>
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-6">
              <p>
                Di Laundrix ("kami", "Layanan", atau "Perusahaan"), privasi dan keamanan data Anda adalah prioritas utama. Kami memahami bahwa sebagai pemilik bisnis laundry, data operasional dan data pelanggan Anda adalah aset yang sangat berharga.
              </p>
              <p>
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda ("Pengguna" atau "Mitra") serta informasi konsumen Anda ("Pelanggan") saat Anda menggunakan aplikasi kasir (POS) dan sistem manajemen Laundrix.
              </p>
              <p className="font-medium text-slate-800">
                Dengan mendaftar dan menggunakan Layanan Laundrix, Anda menyetujui praktik pengelolaan data yang dijelaskan dalam Kebijakan Privasi ini.
              </p>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">1. Informasi yang Kami Kumpulkan</h3>
                <p className="mb-2">Untuk memberikan layanan sistem POS dan manajemen yang optimal, kami mengumpulkan dua jenis informasi utama:</p>
                
                <h4 className="font-semibold text-slate-800 mt-4 mb-2">A. Data Anda sebagai Pengguna (Pemilik Bisnis)</h4>
                <p className="mb-2">Saat Anda mendaftar dan menggunakan Laundrix, kami mengumpulkan:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><strong className="text-slate-800">Informasi Profil & Kontak:</strong> Nama lengkap, nama bisnis (laundry), alamat email, nomor telepon/WhatsApp, dan alamat outlet Anda.</li>
                  <li><strong className="text-slate-800">Informasi Pembayaran:</strong> Data tagihan dan riwayat transaksi saat Anda berlangganan paket berbayar Laundrix (diproses secara aman oleh pihak ketiga/Payment Gateway resmi).</li>
                  <li><strong className="text-slate-800">Data Teknis:</strong> Alamat IP, jenis perangkat, sistem operasi, dan aktivitas log saat Anda mengakses dasbor Laundrix demi keperluan keamanan dan perbaikan sistem.</li>
                </ul>

                <h4 className="font-semibold text-slate-800 mt-4 mb-2">B. Data Pelanggan Anda (Konsumen Laundry)</h4>
                <p className="mb-2">Sebagai penyedia sistem, kami menyediakan ruang bagi Anda untuk mencatat transaksi konsumen Anda. Data ini sepenuhnya dikendalikan oleh Anda, yang mungkin meliputi:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nama pelanggan, nomor telepon, alamat antar-jemput.</li>
                  <li>Riwayat pesanan, preferensi layanan, dan catatan hutang/piutang pelanggan.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">2. Bagaimana Kami Menggunakan Informasi Anda</h3>
                <p className="mb-2">Kami menggunakan data yang dikumpulkan semata-mata untuk mendukung operasional bisnis Anda, dengan rincian sebagai berikut:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">Menjalankan Layanan:</strong> Memproses transaksi, mengirimkan nota digital (WhatsApp/Email) kepada pelanggan Anda, dan menyajikan laporan keuangan bisnis Anda.</li>
                  <li><strong className="text-slate-800">Pemeliharaan Akun:</strong> Mengirimkan tagihan berlangganan, pemberitahuan pembaruan sistem, atau informasi terkait kendala teknis.</li>
                  <li><strong className="text-slate-800">Dukungan Pelanggan (Customer Support):</strong> Membantu Anda saat mengalami masalah teknis atau pertanyaan seputar penggunaan aplikasi.</li>
                  <li><strong className="text-slate-800">Pengembangan Produk:</strong> Menganalisis statistik penggunaan aplikasi (secara anonim) untuk memperbaiki fitur-fitur Laundrix di masa mendatang.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">3. Perlindungan Data Konsumen Anda (Janji Kami)</h3>
                <p className="mb-2">Kami mengerti bahwa data pelanggan laundry Anda adalah milik Anda. Oleh karena itu, Laundrix berjanji:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">TIDAK AKAN</strong> menghubungi pelanggan Anda untuk kepentingan pemasaran kami.</li>
                  <li><strong className="text-slate-800">TIDAK AKAN</strong> menjual, menyewakan, atau mendistribusikan data pelanggan Anda kepada pihak ketiga mana pun.</li>
                  <li>Data pelanggan Anda hanya diproses oleh sistem semata-mata untuk menjalankan instruksi Anda (misalnya: pengiriman nota WhatsApp otomatis dari sistem POS).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">4. Berbagi dan Pengungkapan Informasi</h3>
                <p className="mb-2">Kami tidak akan membagikan data pribadi atau data bisnis Anda kepada pihak ketiga, kecuali dalam kondisi berikut:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">Penyedia Layanan Pihak Ketiga:</strong> Kami bekerja sama dengan mitra tepercaya untuk menjalankan sistem (misal: penyedia server cloud seperti AWS/Google Cloud, Payment Gateway, atau API WhatsApp resmi). Mitra ini terikat oleh kewajiban kerahasiaan yang ketat.</li>
                  <li><strong className="text-slate-800">Kewajiban Hukum:</strong> Kami dapat mengungkapkan informasi Anda jika diwajibkan oleh hukum, perintah pengadilan, atau permintaan resmi dari otoritas hukum di Republik Indonesia.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">5. Keamanan dan Penyimpanan Data</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-800">Enkripsi & Keamanan:</strong> Kami menggunakan protokol keamanan standar industri (seperti enkripsi SSL/TLS) untuk melindungi transmisi data antara perangkat Anda dan server kami.</li>
                  <li><strong className="text-slate-800">Penyimpanan Cloud:</strong> Data Anda disimpan di server cloud dengan sistem backup (pencadangan) berkala untuk mencegah kehilangan data akibat kegagalan sistem.</li>
                  <li><strong className="text-slate-800">Akses Internal:</strong> Akses terhadap database Anda dibatasi hanya untuk staf teknis berwenang kami, dan itupun hanya dilakukan untuk tujuan pemeliharaan (troubleshooting) atas permintaan Anda.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">6. Retensi dan Penghapusan Data</h3>
                <p>
                  Kami akan menyimpan data bisnis dan transaksi Anda selama akun Anda aktif. Jika Anda memutuskan untuk berhenti berlangganan atau menutup akun, Anda dapat mengajukan permohonan penghapusan data. Kami akan menghapus data Anda dari server kami dalam kurun waktu 30 hari sejak permintaan diterima, kecuali hukum mengharuskan kami menyimpannya lebih lama.
                </p>
              </div>
              
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">7. Hak Anda</h3>
                <p className="mb-2">Sebagai Pengguna, Anda memiliki hak penuh untuk:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Mengakses, memperbarui, atau memperbaiki informasi profil dan bisnis Anda kapan saja melalui dasbor pengaturan.</li>
                  <li>Mengekspor atau mengunduh laporan transaksi dan data pelanggan Anda.</li>
                  <li>Meminta penghapusan akun beserta seluruh data yang ada di dalamnya.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">8. Perubahan pada Kebijakan Privasi</h3>
                <p>
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Jika terdapat perubahan yang signifikan terhadap cara kami mengelola data Anda, kami akan memberikan pemberitahuan yang jelas melalui email atau pop-up notifikasi di dalam aplikasi Laundrix sebelum perubahan tersebut berlaku.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-4">9. Hubungi Kami</h3>
                <p className="mb-4">Jika Anda memiliki pertanyaan, kekhawatiran, atau keluhan terkait privasi data dan Kebijakan Privasi ini, silakan hubungi Tim Perlindungan Data kami melalui:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><span className="font-bold text-xs">@</span></div>
                    <span className="font-medium text-slate-800">support@laundrix.my.id</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><MessageCircle size={14}/></div>
                    <span className="font-medium text-slate-800">+62-813-555-33802 (WhatsApp)</span>
                  </li>
                  <li className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-0.5"><LayoutDashboard size={14}/></div>
                     <span className="font-medium text-slate-800 leading-relaxed">Jln. Palagan Tentara Pelajar Km.13, Sariharjo, Ngaglik, Sleman, Yogyakarta.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-xl font-semibold transition-colors"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}