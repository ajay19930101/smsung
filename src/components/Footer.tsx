import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { analyticsEvent } from '../utils/gtag';

const Footer = () => {
  return (
    <footer className="bg-white text-black text-2xl">
      <div className='border border-t-0'>
        <div className='max-w-7xl mx-auto py-5 flex justify-between'>
          <p className='py-5 font-black'>Galaxy A25 5G</p>
          <button className="w-[150px] bg-black opacity-20 text-white font-bold rounded-full text-sm" onClick={() => analyticsEvent({
                                action: 'button_clicked',
                                category: 'button',
                                label: 'tidak untuk dijual'
                              })}>tidak untuk dijual</button>
        </div>
      </div>
      <div className='flex text-sm border-b'>
        <div className='flex flex-col flex-1 border-r px-4 pt-2 gap-2'>
          <h1 className='text-lg font-bold'>Produk & Layanan</h1>
          <p>Smartphones</p>
          <p>Tablets</p>
          <p>Audio Sound</p>
          <p>Watches</p>
          <p>Smart Switch</p>
          <p>Aksesoris</p>
          <p>TVs</p>
          <p>Lifestyle TV</p>
          <p>Sound Devices</p>
          <p>Kulkas</p>
          <p>Laundry</p>
          <p>Air Solutions</p>
          <p>Cooking Appliances</p>
          <p>Monitors</p>
          <p>Memory Storage</p>
        </div>
        <div className="flex flex-col flex-1 border-r px-4 pt-2 gap-2">
          <h1 className='text-lg font-bold'>Shop</h1>
          <p>Promo</p>
          <p>Samsung Rewards</p>
          <p>Samsung Trade-In</p>
          <p>Samsung Experience Store</p>
          <p>Business Shop</p>
          <p>Samsung Care+</p>
          <p>FAQ Toko Online</p>
          <p>Store Pickup</p>
          <p>Promo Program Pendidikan</p>
          <p>Corporate Employee Offers</p>
          <p>Explore</p>
          <p>Terms & Conditions</p>
          <p>Pendidikan</p>
          <p>Air Solutions</p>
          <p>Cooking Appliances</p>
          <p>Monitors</p>
          <p>Memory Storage</p>
        </div>
        <div className='flex flex-col flex-1 border-r px-4 pt-2 gap-2'>
          <h1 className='text-lg font-bold'>Dukungan</h1>
          <p>Live Chat</p>
          <p>Reservasi Perbaikan</p>
          <p>Product Registration</p>
          <p>Pusat Service Center</p>
          <p>Remote Service</p>
          <p>Bahasa Isyarat</p>
          <p>Berikan Tanggapan Anda</p>
          <p>Email to CEO's Office</p>
        </div>
        <div className='flex flex-col flex-1 border-r px-4 pt-2 gap-2'>
          <h1 className='text-lg font-bold'>Akun & Komunitas</h1>
          <p>Halaman Saya</p>
          <p>Produk Saya</p>
          <p>Pesanan</p>
          <p>Wishlist</p>
          <p>Voucher</p>
          <p>Layanan</p>
          <p>Member</p>
        </div>
        <div className='flex flex-col flex-1 border-r px-4 pt-2 gap-2'>
          <h1 className='text-lg font-bold'>Keberlanjutan</h1>
          <p>Lingkungan</p>
          <p>Keamanan & Privasi</p>
          <p>Aksesibilitas</p>
          <p>Keragaman · Kesetaraan · Inklusi</p>
          <p>Corporate Citizenship</p>
          <p>Corporate Sustainability</p>
          <p>Member</p>
          <h1 className='text-lg font-bold'>Tentang Kami</h1>
          <p>Info Perusahaan</p>
          <p>Area Bisnis</p>
          <p>Identitas Merek</p>
          <p>Karier</p>
          <p>Hubungan Investor</p>
          <p>Newsroom</p>
          <p>Etika</p>
          <p>Desain Samsung</p>
        </div>
      </div>
      <div className='text-sm py-8 px-4 border-b'>
        Copyright© 1995-2025 Samsung. All rights reserved.
      </div>
      <div className="p-4 flex justify-between space-x-6">
        <div className='flex space-x-6 text-sm'>
        <span>Indonesia/Bahasa Indonesia</span>
        <span>Privasi</span>
        <span>Legal</span>
        <span>Peta Situs</span>
        </div>
        <div className='flex space-x-6 text-sm'>
          <span>Ingin Tetap Terhubung?</span>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <FaTwitter className="w-5 h-5" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;