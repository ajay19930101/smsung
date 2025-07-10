import { Star } from 'lucide-react';
import { useRef, useState } from 'react';
import { useScrollTracker } from '../utils/useScrollHandler';
import { analyticsEvent } from '../utils/gtag';
import Alternatif from './Ads';

const ProductHero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('blue-black');
  const [selectedStorage, setSelectedStorage] = useState('128gb');
  const scrollRef = useRef(null);

  useScrollTracker(scrollRef, 'ScrollableSection');

  const colors = [
    {
      name: 'Yellow',
      value: 'yellow',
      color: 'bg-[#ffff00]',
      images: [
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezygxid/gallery/id-galaxy-a25-5g-sm-a256-sm-a256ezygxid-539285754?$684_547_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezygxid/gallery/id-galaxy-a25-5g-sm-a256-sm-a256ezygxid-thumb-539285745?$104_104_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezygxid/gallery/id-galaxy-a25-5g-sm-a256-sm-a256ezygxid-thumb-539285746?$104_104_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezygxid/gallery/id-galaxy-a25-5g-sm-a256-sm-a256ezygxid-thumb-539285747?$104_104_PNG$',
      ],
    },
    {
      name: 'Blue Black',
      value: 'blue-black',
      color: 'bg-[#3f4251]',
      images: [
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezkgxid/gallery/id-galaxy-a25-5g-sm-a256-488831-sm-a256ezkgxid-539417586?$684_547_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezkgxid/gallery/id-galaxy-a25-5g-sm-a256-488831-sm-a256ezkgxid-thumb-539417579?$104_104_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezkgxid/gallery/id-galaxy-a25-5g-sm-a256-488831-sm-a256ezkgxid-thumb-539417578?$104_104_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezkgxid/gallery/id-galaxy-a25-5g-sm-a256-488831-sm-a256ezkgxid-thumb-539417577?$104_104_PNG$',
      ],
    },
    {
      name: 'Blue',
      value: 'light-blue',
      color: 'bg-[#a7c6ed]',
      images: [
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezbgxid/gallery/id-galaxy-a25-5g-sm-a256-sm-a256ezbgxid-539285678?$684_547_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezbgxid/gallery/id-galaxy-a25-5g-sm-a256-sm-a256ezbgxid-thumb-539285669?$104_104_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezbgxid/gallery/id-galaxy-a25-5g-sm-a256-sm-a256ezbgxid-thumb-539285670?$104_104_PNG$',
        'https://images.samsung.com/is/image/samsung/p6pim/id/sm-a256ezbgxid/gallery/id-galaxy-a25-5g-sm-a256-sm-a256ezbgxid-thumb-539285671?$104_104_PNG$',
      ],
    },
  ];

  const storageOptions = [
    { value: '128gb', label: '128GB', price: 'Rp 3.999.000' },
    { value: '256gb', label: '256GB', price: 'Rp 4.499.000' },
  ];

  const RAMStorageOptions = [{ value: '8gb', label: '8GB', price: 'Rp 3.999.000' }];

  const currentColorData = colors.find((c) => c.value === selectedColor);
  const currentImages = currentColorData?.images || colors[0].images;

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }[currentImages.length + 1] || 'grid-cols-6';

  return (
    <div className="bg-white" ref={scrollRef}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row md:gap-16">
          <div className='w-full md:hidden'>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-center">Galaxy A25 5G</h1>
                <svg className="icon h-6 w-6" focusable="false" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                <path d="M82.659 46.562c-.237.336-1.321 1.867-1.736 2.413-6.187 8.141-26.914 24.719-32.859 29.329L48 78.25l-.064.054c-5.945-4.61-26.672-21.188-32.857-29.327a136.36 136.36 0 01-1.737-2.415A19.366 19.366 0 0110.5 36.449c0-10.729 8.748-19.457 19.5-19.457a19.549 19.549 0 0115.957 8.28L48 28.171l2.044-2.899A19.548 19.548 0 0166 16.992c10.753 0 19.5 8.728 19.5 19.457 0 3.577-.982 7.072-2.841 10.113M66 11.992a24.556 24.556 0 00-18 7.875 24.552 24.552 0 00-18-7.875c-13.509 0-24.5 10.971-24.5 24.457 0 4.53 1.254 8.957 3.625 12.802l.086.13s1.391 1.967 1.885 2.619c3.235 4.257 10.172 10.853 20.619 19.603a514.58 514.58 0 0010.291 8.386c4.905 3.893 4.905 3.893 5.706 3.986l.288.033.289-.033c.8-.093.8-.093 5.706-3.986a517.926 517.926 0 0010.29-8.386c10.447-8.75 17.384-15.346 20.62-19.604.494-.651 1.884-2.618 1.884-2.618l.086-.13A24.365 24.365 0 0090.5 36.449c0-13.486-10.99-24.457-24.5-24.457"></path>
            </svg>
              </div>
              <p className="text-sm font-samsung400 mb-6">SM-A256EZKGXID</p>
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm text-gray-600">(4.1)</span>
                <span className="text-sm text-gray-600">(32)</span>
              </div>
            </div>
          <div className="w-full md:w-1/2">
          <div className='sticky top-[94px] space-y-4'>
            <div className="relative aspect-square bg-[#f7f7f7] rounded-lg overflow-hidden flex justify-center items-center">
              <img src={currentImages[0]} alt="Galaxy A25 5G" className="object-cover" height={684} />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      currentImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className={`grid ${gridColsClass} gap-2`}>
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImage(index);
                    analyticsEvent({
                      action: 'image_selected',
                      category: 'product',
                      label: `Image No. ${index + 1}`,
                    });
                  }}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentImage === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
              <button className="aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 border-gray-200 hover:border-gray-300">
                +4 lebih banyak
              </button>
            </div>
          </div>
          </div>
          <div className="w-full md:w-1/2 space-y-8 px-4">
            <div className='hidden md:block'>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-center">Galaxy A25 5G</h1>
                <svg className="icon h-6 w-6" focusable="false" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                <path d="M82.659 46.562c-.237.336-1.321 1.867-1.736 2.413-6.187 8.141-26.914 24.719-32.859 29.329L48 78.25l-.064.054c-5.945-4.61-26.672-21.188-32.857-29.327a136.36 136.36 0 01-1.737-2.415A19.366 19.366 0 0110.5 36.449c0-10.729 8.748-19.457 19.5-19.457a19.549 19.549 0 0115.957 8.28L48 28.171l2.044-2.899A19.548 19.548 0 0166 16.992c10.753 0 19.5 8.728 19.5 19.457 0 3.577-.982 7.072-2.841 10.113M66 11.992a24.556 24.556 0 00-18 7.875 24.552 24.552 0 00-18-7.875c-13.509 0-24.5 10.971-24.5 24.457 0 4.53 1.254 8.957 3.625 12.802l.086.13s1.391 1.967 1.885 2.619c3.235 4.257 10.172 10.853 20.619 19.603a514.58 514.58 0 0010.291 8.386c4.905 3.893 4.905 3.893 5.706 3.986l.288.033.289-.033c.8-.093.8-.093 5.706-3.986a517.926 517.926 0 0010.29-8.386c10.447-8.75 17.384-15.346 20.62-19.604.494-.651 1.884-2.618 1.884-2.618l.086-.13A24.365 24.365 0 0090.5 36.449c0-13.486-10.99-24.457-24.5-24.457"></path>
            </svg>
              </div>
              <p className="text-sm font-samsung400 mb-6">SM-A256EZKGXID</p>
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm text-gray-600">(4.1)</span>
                <span className="text-sm text-gray-600">(32)</span>
              </div>
            </div>

            <hr className="my-5" />
            <Alternatif />
            <hr className="my-5" />

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-samsung700">Pilih Warna Anda</h3>
              <p className="text-sm text-gray-600 mt-2 font-samsung400">
                <span className="font-samsung700">Warna: </span>
                {colors.find((c) => c.value === selectedColor)?.name}
              </p>
              <div className="flex space-x-4 mt-6">
                {colors.map((color) => (
                  <div key={color.value} className="relative">
                    {selectedColor === color.value && (
                      <div className="absolute -inset-[0.3rem] rounded-full border-[1px] border-black z-10 aspect-square"></div>
                    )}
                    <button
                      onClick={() => {
                        setSelectedColor(color.value);
                        setCurrentImage(0);
                        analyticsEvent({
                          action: 'color_selected',
                          category: 'product',
                          label: color.value,
                        });
                      }}
                      className={`relative w-9 h-9 rounded-full ${color.color} border-3 transition-all duration-200 z-20`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <hr className="my-5" />

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pilih Memori Anda</h3>
              <div className="grid grid-cols-2 gap-3">
                {RAMStorageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedStorage(option.value);
                      analyticsEvent({
                        action: 'ram_storage_selected',
                        category: 'product',
                        label: option.label,
                      });
                    }}
                    className={`py-6 rounded-lg border-[1px] text-center transition-all duration-200 hover:bg-black hover:text-white ${
                      selectedStorage === option.value ? 'border-black' : 'border-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="font-samsung700 text-sm">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <hr className="my-5" />

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pilih Kapasitas Penyimpanan Anda</h3>
              <div className="grid grid-cols-2 gap-3 font-samsung700 text-sm">
                {storageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedStorage(option.value);
                      analyticsEvent({
                        action: 'storage_selected',
                        category: 'product',
                        label: option.label,
                      });
                    }}
                    className={`py-6 rounded-lg border-[1px] text-center transition-all duration-200 hover:bg-black hover:text-white ${
                      selectedStorage === option.value ? 'border-black' : 'border-gray-200 text-gray-700'
                    }`}
                  >
                    <div>{option.label}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#f7f7f7] px-6 py-4 flex flex-col justify-center rounded-xl font-samsung700">
              Galaxy A25 5G
              <p className="font-samsung400">Yellow | 8 GB | 128 GB</p>
              <hr className="my-4 bg-[#ddd]" />
              <div className="flex items-center justify-center py-8">
                <button
                  className="w-[210px] bg-black opacity-20 text-white font-bold px-4 py-2 rounded-full text-sm w-auto"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
