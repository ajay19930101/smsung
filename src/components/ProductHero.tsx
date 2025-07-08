import { Star } from 'lucide-react';
import { useRef, useState } from 'react';
import { useScrollTracker } from '../utils/useScrollHandler';
import { analyticsEvent } from '../utils/gtag';

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
      ]
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
      ]
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
      ]
    }
    
  ];

  const storageOptions = [
    { value: '128gb', label: '128GB', price: 'Rp 3.999.000' },
    { value: '256gb', label: '256GB', price: 'Rp 4.499.000' },
  ];

  const RAMStorageOptions = [
    { value: '8gb', label: '8GB', price: 'Rp 3.999.000' },
  ];

  const currentColorData = colors.find(c => c.value === selectedColor);
  const currentImages = currentColorData?.images || colors[0].images;

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  }[currentImages.length + 1] || 'grid-cols-6';

  return (
    <div className="bg-white" ref={scrollRef}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-[#f7f7f7] rounded-lg overflow-hidden">
              <img
                src={currentImages[0]}
                alt="Galaxy A25 5G"
                className="w-full h-full object-cover"
              />

              {/* Image indicators */}
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

            {/* Thumbnail images */}
            <div className={`grid ${gridColsClass} gap-2`}>
              {currentImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImage(index);
                    analyticsEvent({
                      action: 'image_selected',
                      category: 'product',
                      label: `Image No. ${index + 1}`
                    })
                  }}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentImage === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
              <button
                  className='aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 border-gray-200 hover:border-gray-300'
                >
                  +4 lebih banyak
                </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Galaxy A25 5G
              </h1>
              <p className="text-lg text-gray-600 mb-4">
              SM-A256EZKGXID
              </p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm text-gray-600">(4.5)</span>
                <span className="text-sm text-gray-600">(32)</span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pilih Warna Anda</h3>
              <div className="flex flex-col gap-x-4">
              <p className="text-sm text-gray-600 mt-2">
              Warna: {colors.find(c => c.value === selectedColor)?.name}
              </p>
              <div className='flex space-x-4 mt-2'>
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => {
                      setSelectedColor(color.value);
                      setCurrentImage(0);
                      analyticsEvent({
                        action: 'color_selected',
                        category: 'product',
                        label: color.value
                      })
                    }}
                    className={`relative w-12 h-12 rounded-full ${color.color} border-3 transition-all duration-200 ${
                      selectedColor === color.value
                        ? 'border-blue-600 ring-2 ring-blue-200'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {selectedColor === color.value && (
                      <div className="absolute inset-2 rounded-full border-2 border-white"></div>
                    )}
                  </button>
                ))}
              </div>
              </div>
            </div>

            {/* Storage Options */}
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
                        label: option.label
                      })
                    }}
                    className={`p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                      selectedStorage === option.value
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pilih Kapasitas Penyimpanan AndaAnda</h3>
              <div className="grid grid-cols-2 gap-3">
                {storageOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedStorage(option.value);
                      analyticsEvent({
                        action: 'storage_selected',
                        category: 'product',
                        label: option.label
                      })
                    }}
                    className={`p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                      selectedStorage === option.value
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-semibold">{option.label}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className='bg-[#f7f7f7] p-4 flex flex-col justify-center'>
              Galaxy A25 5G
              <p>Yellow | 8 GB | 128 GB</p>
              <hr className='my-4 bg-[#ddd]' />
              <div className='flex items-center justify-center py-12'>
                <button className="w-[210px] bg-black opacity-20 text-white font-bold px-4 py-2 rounded-full text-sm w-auto" onClick={() => analyticsEvent({
                                action: 'button_clicked',
                                category: 'button',
                                label: 'tidak untuk dijual'
                              })}>tidak untuk dijual</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;