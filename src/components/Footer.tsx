import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { analyticsEvent } from '../utils/gtag';
import { MdArrowOutward } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const boxRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      { root: null, threshold: 0.1, rootMargin: '150px' }
    );
  
    const target = sentinelRef.current;
    if (target) observer.observe(target);
  
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <>
      <footer className="bg-white text-black text-2xl">

        <div ref={sentinelRef} className="h-0" />

        <div className={`w-full bg-white bottom-b border ${
            isFixed
              ? 'fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-md'
              : 'relative'
          }`} ref={boxRef}>

        <div
          
          className={`max-w-7xl mx-auto py-8 px-4 flex justify-between items-center transition-all duration-300`}
        >
          <p className="font-black">Galaxy A25 5G</p>
          <button
            className="w-[150px] bg-black opacity-20 text-white font-bold rounded-full text-sm p-2"
            onClick={() =>
              analyticsEvent({
                action: 'button_clicked',
                category: 'button',
                label: 'tidak untuk dijual',
              })
            }
          >
            tidak untuk dijual
          </button>
        </div>
        </div>

        <div className="flex flex-col md:flex-row text-sm border-b">
          <div className="flex flex-col flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700">Produk & Layanan</h1>
            <p>Smartphones</p><p>Tablets</p><p>Audio Sound</p><p>Watches</p><p>Smart Switch</p><p>Aksesoris</p><p>TVs</p>
            <p>Lifestyle TV</p><p>Sound Devices</p><p>Kulkas</p><p>Laundry</p><p>Air Solutions</p>
            <p>Cooking Appliances</p><p>Monitors</p><p>Memory Storage</p>
          </div>

          <div className="flex flex-col flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700">Shop</h1>
            <p>Promo</p><p>Samsung Rewards</p><p>Samsung Trade-In</p><p>Samsung Experience Store</p><p>Business Shop</p>
            <p>Samsung Care+</p><p>FAQ Toko Online</p><p>Store Pickup</p><p>Promo Program Pendidikan</p>
            <p>Corporate Employee Offers</p><p>Explore</p><p>Terms & Conditions</p><p>Pendidikan</p>
            <p>Air Solutions</p><p>Cooking Appliances</p><p>Monitors</p><p>Memory Storage</p>
          </div>

          <div className="flex flex-col flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700">Dukungan</h1>
            <p className="flex items-center">Live Chat <MdArrowOutward className="ms-1" /></p>
            <p>Reservasi Perbaikan</p><p>Product Registration</p><p>Pusat Service Center</p><p>Remote Service</p>
            <p className="flex items-center">Bahasa Isyarat <MdArrowOutward className="ms-1" /></p>
            <p>Berikan Tanggapan Anda</p>
            <p className="flex items-center">Email to CEO's Office <MdArrowOutward className="ms-1" /></p>
          </div>

          <div className="flex flex-col flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700">Akun & Komunitas</h1>
            <p>Halaman Saya</p><p>Produk Saya</p><p>Pesanan</p><p>Wishlist</p><p>Voucher</p><p>Layanan</p><p>Member</p>
          </div>

          <div className="flex flex-col flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700">Keberlanjutan</h1>
            <p>Lingkungan</p><p>Keamanan & Privasi</p><p>Aksesibilitas</p><p>Keragaman · Kesetaraan · Inklusi</p>
            <p className="flex items-center">Corporate Citizenship <MdArrowOutward className="ms-1" /></p>
            <p className="flex items-center">Corporate Sustainability <MdArrowOutward className="ms-1" /></p>
            <p>Member</p>
            <h1 className="text-lg font-bold font-samsung700">Tentang Kami</h1>
            <p>Info Perusahaan</p><p>Area Bisnis</p><p>Identitas Merek</p><p>Karier</p>
            <p className="flex items-center">Hubungan Investor <MdArrowOutward className="ms-1" /></p>
            <p className="flex items-center">Newsroom <MdArrowOutward className="ms-1" /></p>
            <p>Etika</p><p className="flex items-center">Desain Samsung <MdArrowOutward className="ms-1" /></p>
          </div>
        </div>

        <div className="text-xs font-samsung400 py-8 px-4 border-b">
          Copyright© 1995-2025 Samsung. All rights reserved.
        </div>

        <div className="py-6 px-4 flex flex-col md:flex-row justify-between space-x-6">
          <div className="flex space-x-6 text-xs">
            <span>Indonesia/Bahasa Indonesia</span>
            <span className="font-samsung400">Privasi</span>
            <span className="font-samsung400">Legal</span>
            <span className="font-samsung400">Peta Situs</span>
          </div>
          <div className="flex space-x-4 text-xs text-black items-center">
            <span className="font-samsung400">Ingin Tetap Terhubung?</span>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <RiTwitterXFill className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
