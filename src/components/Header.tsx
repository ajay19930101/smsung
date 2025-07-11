import { useState } from 'react';
import { Menu } from 'lucide-react';
import { analyticsEvent } from '../utils/gtag.js';
import { MdArrowOutward } from "react-icons/md";


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
      <div className="text-sm font-samsung700">
        <div className="max-w-8xl mx-auto px-4 sm:px-6">
          <div className="flex justify-end items-end" style={ { marginTop: '12px' }}>
            <div className="flex items-center space-x-5">
              <button className="flex items-center hover:text-gray-300">
                Dukungan
              </button>
              <a href="#" className="hover:text-gray-300 flex items-center">For Business
                <MdArrowOutward className='ms-1'/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between" style={ { height: '74px' }}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black tracking-wider px-1" onClick={() => GAHandler('SAMSUNG')}>
            <svg className="icon " focusable="false" aria-hidden="true" width="130" height="29" viewBox="0 0 130 29">
              <g transform="translate(-250 -7)">
                <path d="M0,13.835V12.482H4.609V14.2a1.558,1.558,0,0,0,1.724,1.6A1.509,1.509,0,0,0,8,14.6a2.237,2.237,0,0,0-.03-1.322C7.076,10.976.981,9.931.208,6.333a6.531,6.531,0,0,1-.029-2.4C.654,1.045,3.122,0,6.184,0c2.438,0,5.8.585,5.8,4.458V5.719H7.7V4.612a1.492,1.492,0,0,0-1.605-1.6,1.452,1.452,0,0,0-1.575,1.2,2.468,2.468,0,0,0,.03.922c.5,2.059,7.017,3.167,7.73,6.887a8.481,8.481,0,0,1,.029,2.921C11.892,17.893,9.336,19,6.244,19,3,19,0,17.8,0,13.835Zm55.837-.062V12.421h4.549v1.691a1.533,1.533,0,0,0,1.695,1.6,1.49,1.49,0,0,0,1.665-1.168,2.147,2.147,0,0,0-.029-1.292c-.863-2.274-6.9-3.319-7.671-6.917a6.37,6.37,0,0,1-.03-2.367c.476-2.859,2.944-3.9,5.946-3.9,2.409,0,5.739.615,5.739,4.427v1.23H63.449V4.643a1.485,1.485,0,0,0-1.575-1.6,1.4,1.4,0,0,0-1.546,1.168,2.463,2.463,0,0,0,.029.922C60.832,7.194,67.284,8.27,68,11.959a8.314,8.314,0,0,1,.029,2.89c-.416,2.952-2.943,4.028-6.005,4.028C58.811,18.877,55.837,17.678,55.837,13.773Zm16.293.647A7.18,7.18,0,0,1,72.1,13.25V.523h4.341V13.65a5.023,5.023,0,0,0,.029.677,1.682,1.682,0,0,0,3.271,0,4.852,4.852,0,0,0,.03-.677V.523h4.341V13.25c0,.339-.03.984-.03,1.169-.3,3.319-2.825,4.4-5.976,4.4S72.428,17.739,72.13,14.419Zm35.739-.185a9.539,9.539,0,0,1-.059-1.168V5.6c0-.308.029-.861.059-1.169.386-3.319,2.973-4.365,6.036-4.365,3.033,0,5.708,1.045,6.006,4.365A8.781,8.781,0,0,1,119.94,5.6v.584H115.6V5.2a3.791,3.791,0,0,0-.059-.677,1.777,1.777,0,0,0-3.42,0,3.772,3.772,0,0,0-.059.829v8.117a5.1,5.1,0,0,0,.03.677,1.707,1.707,0,0,0,1.813,1.291,1.633,1.633,0,0,0,1.754-1.291,2.554,2.554,0,0,0,.03-.677V10.883h-1.754V8.3H120v4.765a9.377,9.377,0,0,1-.06,1.168c-.3,3.228-3,4.366-6.036,4.366S108.166,17.462,107.869,14.235Zm-60.5,4.027L47.245,1.845,44.272,18.262H39.931L36.987,1.845l-.118,16.417H32.587L32.943.554h6.988L42.1,14.388,44.272.554h6.987l.386,17.708Zm-22.835,0L22.211,1.845,19.831,18.262H15.194L18.344.554h7.642l3.152,17.708Zm72.665-.184L92.884,3.352l.238,14.726H88.9V.554h6.363l4.044,14.265L99.068.554h4.251V18.078Z" transform="translate(255 12)"></path>
              </g>
            </svg>
            </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center ml-8 font-samsung700">
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md p-3" onClick={() => GAHandler('Shop')}>Shop</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md p-3" onClick={() => GAHandler('Mobile')}>Mobile</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md p-3" onClick={() => GAHandler('TV & AV')}>TV & AV</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md p-3" onClick={() => GAHandler('Appliances')}>Appliances</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md p-3" onClick={() => GAHandler('IT')}>IT</a>
            <a href="#" className="text-gray-800 hover:text-black font-medium text-md p-3" onClick={() => GAHandler('Accessories')}>Accessories</a>
          </nav>
          </div>


          {/* Right side icons */}
          <div className="flex items-center space-x-4" style={{ height: '41.5px' }}>
            <button className="hidden md:flex relative items-center justify-start gap-2 mr-[10px] px-[12px] py-[10px] border border-[#f7f7f7] w-[176px] text-[#555] bg-[#f7f7f7] rounded-full transition duration-[500ms] [transition-timing-function:cubic-bezier(0.35,0,0.36,1)]" >
            <span className="hidden">Cari</span>
            <svg className="icon" focusable="false" aria-hidden="true" width="16" height="16" viewBox="0 0 96 96">
                <path d="M85.732,89.269v0L60.479,64.018A36.5,36.5,0,1,1,22.295,2.869,36.5,36.5,0,0,1,64.02,60.483L89.268,85.732l-3.535,3.535ZM36.5,5A31.508,31.508,0,0,0,24.238,65.525,31.508,31.508,0,0,0,48.762,7.476,31.316,31.316,0,0,0,36.5,5Z" transform="translate(3.366 3.366)"></path>
            </svg>
            <span className="font-samsung400">Cari</span>
        </button>
            <svg className="icon" focusable="false" aria-hidden="true" width="24" height="24" viewBox="0 0 96 96">
                <g transform="translate(-625.251 -196)" clip-path="url(#clip-path)">
                    <path d="M697.237,263.578a10,10,0,1,1-10,10A10,10,0,0,1,697.237,263.578Zm-34.944,0a10,10,0,1,1-10,10A10,10,0,0,1,662.293,263.578Zm34.944,5a5,5,0,1,0,5,5A5,5,0,0,0,697.237,268.578Zm-34.944,0a5,5,0,1,0,5,5A5,5,0,0,0,662.293,268.578ZM638.1,197.25a3.86,3.86,0,0,1,3.6,2.652l.052.184,3.208,12.292h70.036a3.224,3.224,0,0,1,3.192,3.916l-.04.18-9.4,36.292a3.86,3.86,0,0,1-3.46,2.832l-.2.008h-51.1a3.866,3.866,0,0,1-3.6-2.648l-.052-.188-13.192-50.516-11.612,0,0-5Zm74.648,20.128h-66.48l8.672,33.228h49.2Z" transform="translate(0.834 3.75)"></path>
                </g>
            </svg>
            <svg className="icon" focusable="false" aria-hidden="true" width="24" height="24" viewBox="0 0 96 96">
                        <path d="M48,51.5c16.521,0,30.5,13.82,30.5,29.555h0V89A3.5,3.5,0,0,1,75,92.5H21A3.5,3.5,0,0,1,17.5,89h0V81.055C17.5,65.32,31.479,51.5,48,51.5Zm0,5c-13.772,0-25.5,11.595-25.5,24.555h0V87.5h51V81.055c0-12.831-11.494-24.323-25.087-24.552h0Zm0-53A20.5,20.5,0,1,1,27.5,24,20.5,20.5,0,0,1,48,3.5Zm0,5A15.5,15.5,0,1,0,63.5,24,15.5,15.5,0,0,0,48,8.5Z" transform="translate(-0.5 0.5)"></path>
                    </svg>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;