import { useState } from 'react';
import { Search, Menu, ShoppingCart, User } from 'lucide-react';
import { analyticsEvent } from '../utils/gtag.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const GAHandler = (label) => {
    analyticsEvent({
      action: 'header',
      category: 'header',
      label
    })
  }

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="text-xs">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="flex justify-end items-end py-2">
            <div className="flex items-center space-x-4">
              <button className="flex items-center hover:text-gray-300">
                Dukungan
              </button>
              <a href="#" className="hover:text-gray-300">For Business</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black tracking-wider" onClick={() => GAHandler('SAMSUNG')}>SAMSUNG</div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-8">
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md" onClick={() => GAHandler('Shop')}>Shop</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md" onClick={() => GAHandler('Mobile')}>Mobile</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md" onClick={() => GAHandler('TV & AV')}>TV & AV</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md" onClick={() => GAHandler('Appliances')}>Appliances</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md" onClick={() => GAHandler('IT')}>IT</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md" onClick={() => GAHandler('Accessories')}>Accessories</a>
          </nav>
          </div>


          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors" onClick={() => GAHandler('Search')}/>
            <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors"  onClick={() => GAHandler('ShoppingCart')}/>
            <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition-colors" onClick={() => GAHandler('User')}/>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-800 font-medium">Mobile</a>
            <a href="#" className="block px-3 py-2 text-gray-800 font-medium">Computing</a>
            <a href="#" className="block px-3 py-2 text-gray-800 font-medium">Displays</a>
            <a href="#" className="block px-3 py-2 text-gray-800 font-medium">Home Appliances</a>
            <a href="#" className="block px-3 py-2 text-gray-800 font-medium">TV & Audio</a>
            <a href="#" className="block px-3 py-2 text-gray-800 font-medium">Support</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;