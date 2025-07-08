const Breadcrumb = () => {
  return (
    <div className="bg-white py-4">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6">
        <nav className="flex items-center text-sm text-gray-500 space-x-1" aria-label="breadcrumb">
          <a href="#" className="hover:text-gray-700">Galaxy A</a>
          <span className="text-gray-400">/</span>
          <a href="#" className="hover:text-gray-700">Detail produk</a>
        </nav>
      </div>
    </div>
  );
};


export default Breadcrumb;