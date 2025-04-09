// Le Mirus Web Sitesi – Üst Menü ve Dinamik Bilgi Barı ile

import { useState, useEffect } from "react";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const messages = [
  "Her siparişiniz sigortalı ve ücretsizdir.",
  "İade ve Değişim 30 gün içinde yapılır",
  "Ömür boyu bakım garantisi"
];

export default function LeMirusHomePage() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleMailClick = () => {
    window.location.href = "mailto:info@lemirus.com";
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#0a0a23]">
      {/* Dinamik bilgi barı */}
      <div className="bg-black text-white text-sm text-center py-2 tracking-wide">
        {messages[currentMessage]}
      </div>

      {/* Üst Menü */}
      <header className="bg-[#f8f8f8] text-[#0a0a23] py-4 px-6 border-b border-[#0a0a23]">
        <div className="flex items-center justify-between">
          {/* Sol ikon: Mail */}
          <div className="flex items-center gap-4">
            <FiMail className="text-xl cursor-pointer" onClick={handleMailClick} />
          </div>

          {/* Sağ ikonlar + Sosyal medya */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-4">
              <FaInstagram className="text-xl cursor-pointer" onClick={() => window.open("https://instagram.com/le.mirus", "_blank")} />
              <FaTiktok className="text-xl cursor-pointer" onClick={() => window.open("https://tiktok.com/lemirus", "_blank")} />
              <FaXTwitter className="text-xl cursor-pointer" onClick={() => window.open("https://x.com/le.mirus", "_blank")} />
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="text-center mt-4">
          <h1 className="text-4xl font-bold tracking-wide" style={{ fontFamily: 'serif' }}>Le Mirus</h1>
        </div>

        {/* Alt ikonlar */}
        <div className="flex justify-end mt-6 gap-4">
          <FaSearch className="text-xl cursor-pointer" />
          <FaUser className="text-xl cursor-pointer" />
          <FaShoppingBag className="text-xl cursor-pointer" />
        </div>
      </header>

      {/* Navigasyon Menüsü */}
      <nav className="bg-[#f8f8f8] text-[#0a0a23] text-sm font-medium px-6 py-2 flex justify-center gap-8 border-b border-[#0a0a23]">
  <a href="#kategori-yuzuk" className="hover:underline">Yüzük</a>
  <a href="#kategori-kolye" className="hover:underline">Kolye</a>
  <a href="#kategori-bileklik" className="hover:underline">Bileklik</a>
  <a href="#kategori-evlilik" className="hover:underline">Evlilik</a>
  <a href="#kategori-kisisel" className="hover:underline">Kişiselleştirme</a>
</nav>

      {/* Hero Banner */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/banner-main.png')" }}>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-start pl-16">
          <div className="text-white max-w-md">
            <h2 className="text-3xl font-semibold mb-2">%10 İndirim — Anında Uygulanır</h2>
            <p className="text-sm mb-4">Hemen keşfet! Kampanya 30 Nisan 2025'e kadar geçerlidir.</p>
            <button onClick={() => window.location.href = '#kategori-yuzuk'} className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition-all">
              Şimdi Alışveriş Yap
            </button>
          </div>
        </div>
      </section>

      {/* Ana İçerik */}
      <main className="p-6 grid gap-16">
  <section className="text-center">
    <h2 className="text-3xl font-semibold mb-6">En Çok Beğenilenler</h2>
    {/* Trend ürün listesi buraya gelecek */}
  </section>
  <section className="text-center">
    <h2 className="text-2xl mb-2">Yeni Koleksiyon</h2>
    <p className="text-[#444] max-w-xl mx-auto">
      Etnik çizgilerle harmanlanmış, mitolojik esintili pırlanta koleksiyonumuzla tanışın.
    </p>
  </section>
</main>

      <footer className="p-6 mt-12 border-t border-[#0a0a23] text-center text-sm text-[#666]">
        © 2025 Le Mirus. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
