const Chevron = () => (
  <svg
    className="mx-2 h-3 w-3 text-gray-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Breadcrumb = () => {
  return (
    <div className="bg-white py-4 text-xs text-gray-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center flex-wrap text-sm">
          <a href="/" className="hover:underline">Home</a>
          <Chevron />
          <a href="/smartphones" className="hover:underline">Smartphones</a>
          <Chevron />
          <a href="/galaxy-a" className="hover:underline">Galaxy A</a>
          <Chevron />
          <span className="text-gray-700">Galaxy A25 5G</span>
        </nav>
      </div>
    </div>
  );
};


const Bandwidth = () => {
    return (
      <>
      <div className="bg-[#f7f7f7] py-4 font-samsung400">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-6 text-xs text-[#313131]">
            <p className="py-2">* Jaringan: Bandwidth yang didukung oleh perangkat dapat berbeda-beda tergantung wilayah dan provider internet.</p>
            <p className="py-2">* Memori yang tersedia untuk pengguna: Memori pengguna lebih sedikit dari total memori karena penyimpanan sistem operasi dan perangkat lunak yang digunakan untuk mengoperasikan fitur-fitur perangkat. Memori pengguna yang sebenarnya dapat berbeda-beda tergantung operator dan dapat berubah setelah melakukan pembaruan perangkat lunak.</p>
            <p className="py-2">* Baterai: Masa pakai baterai yang sebenarnya dapat bervariasi berdasarkan lingkungan jaringan, fitur dan aplikasi yang digunakan, frekuensi pesan dan panggilan, jumlah pengisian daya, serta faktor-faktor lainnya.</p>
        </div>
      </div>
        <Breadcrumb />
      </>
    );
  };
  
  
  export default Bandwidth;