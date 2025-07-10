import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { analyticsEvent } from '../utils/gtag';
import { MdArrowOutward } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from "react-icons/go";

const Footer = () => {
  const boxRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  const GAHandler = (label) => {
    analyticsEvent({
      action: 'header',
      category: 'header',
      label
    })
  }

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
              ? 'md:fixed md:bottom-0 md:left-0 md:right-0 md:z-50 md:bg-white md:border-t md:shadow-md'
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
          <div className="flex flex-row md:flex-col justify-between md:justify-start flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700" onClick={() => GAHandler('Produk & Layanan')}>Produk & Layanan</h1>
            <span className='md:hidden'>
              <GoChevronDown className='h-8 w-8'/>
            </span>
            <div className='hidden md:block space-y-2'>
              <p>Smartphones</p><p>Tablets</p><p>Audio Sound</p><p>Watches</p><p>Smart Switch</p><p>Aksesoris</p><p>TVs</p>
              <p>Lifestyle TV</p><p>Sound Devices</p><p>Kulkas</p><p>Laundry</p><p>Air Solutions</p>
              <p>Cooking Appliances</p><p>Monitors</p><p>Memory Storage</p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col justify-between md:justify-start flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700" onClick={() => GAHandler('Shop')}>Shop</h1>
            <span className='md:hidden'>
              <GoChevronDown className='h-8 w-8'/>
            </span>
            <div className='hidden md:block space-y-2'>
              <p>Promo</p><p>Samsung Rewards</p><p>Samsung Trade-In</p><p>Samsung Experience Store</p><p>Business Shop</p>
              <p>Samsung Care+</p><p>FAQ Toko Online</p><p>Store Pickup</p><p>Promo Program Pendidikan</p>
              <p>Corporate Employee Offers</p><p>Explore</p><p>Terms & Conditions</p><p>Pendidikan</p>
              <p>Air Solutions</p><p>Cooking Appliances</p><p>Monitors</p><p>Memory Storage</p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col justify-between md:justify-start flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700" onClick={() => GAHandler('Dukungan')}>Dukungan</h1>
            <span className='md:hidden'>
              <GoChevronDown className='h-8 w-8'/>
            </span>
            <div className='hidden md:block space-y-2'>
              <p className="flex items-center">Live Chat <MdArrowOutward className="ms-1" /></p>
              <p>Reservasi Perbaikan</p><p>Product Registration</p><p>Pusat Service Center</p><p>Remote Service</p>
              <p className="flex items-center">Bahasa Isyarat <MdArrowOutward className="ms-1" /></p>
              <p>Berikan Tanggapan Anda</p>
              <p className="flex items-center">Email to CEO's Office <MdArrowOutward className="ms-1" /></p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col justify-between md:justify-start flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700" onClick={() => GAHandler('Akun & Komunitas')}>Akun & Komunitas</h1>
            <span className='md:hidden'>
              <GoChevronDown className='h-8 w-8'/>
            </span>
            <div className='hidden md:block space-y-2'>
              <p>Halaman Saya</p><p>Produk Saya</p><p>Pesanan</p><p>Wishlist</p><p>Voucher</p><p>Layanan</p><p>Member</p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col justify-between md:justify-start flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700" onClick={() => GAHandler('Keberlanjutan')}>Keberlanjutan</h1>
            <span className='md:hidden'>
              <GoChevronDown className='h-8 w-8'/>
            </span>
            <div className='hidden md:block space-y-2'>
              <p>Lingkungan</p><p>Keamanan & Privasi</p><p>Aksesibilitas</p><p>Keragaman · Kesetaraan · Inklusi</p>
              <p className="flex items-center">Corporate Citizenship <MdArrowOutward className="ms-1" /></p>
              <p className="flex items-center">Corporate Sustainability <MdArrowOutward className="ms-1" /></p>
              <p>Member</p>
            </div>
            <h1 className="text-lg font-bold font-samsung700 hidden md:block" onClick={() => GAHandler('Tentang Kami')}>Tentang Kami</h1>
            <div className='hidden md:block space-y-2'>
              <p>Info Perusahaan</p><p>Area Bisnis</p><p>Identitas Merek</p><p>Karier</p>
              <p className="flex items-center">Hubungan Investor <MdArrowOutward className="ms-1" /></p>
              <p className="flex items-center">Newsroom <MdArrowOutward className="ms-1" /></p>
              <p>Etika</p><p className="flex items-center">Desain Samsung <MdArrowOutward className="ms-1" /></p>
            </div>
          </div>

          <div className="md:hidden flex flex-row md:flex-col justify-between md:justify-start flex-1 border-r px-5 py-4 gap-2 font-samsung400">
            <h1 className="text-lg font-bold font-samsung700" onClick={() => GAHandler('Tentang Kami')}>Tentang Kami</h1>
            <span className='md:hidden'>
              <GoChevronDown className='h-8 w-8'/>
            </span>
          </div>
        </div>

        <div className="text-xs font-samsung400 py-8 px-4 border-b">
          Copyright© 1995-2025 Samsung. All rights reserved.
        </div>

        <div className="py-6 px-4 flex flex-col md:flex-row justify-between md:space-x-6">
          <div className="flex space-x-6 text-xs">
            <span>Indonesia/Bahasa Indonesia</span>
            <span className="hidden md:block font-samsung400">Privasi</span>
            <span className="hidden md:block font-samsung400">Legal</span>
            <span className="hidden md:block font-samsung400">Peta Situs</span>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 text-xs text-black items-center mt-8 md:mt-0">
            <span className="font-samsung400">Ingin Tetap Terhubung?</span>
            <div className='flex space-x-4 mt-4 md:mt-0'>
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
            <div className='md:hidden flex space-x-4 mt-4'>
              <span className="font-samsung400">Privasi</span>
              <span className="font-samsung400">Legal</span>
              <span className="font-samsung400">Peta Situs</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
