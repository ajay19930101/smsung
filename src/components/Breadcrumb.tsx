const Breadcrumb = () => {
  return (
    <div className="bg-white text-[#757575] font-samsung700" style={ { paddingTop: '24px'}}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-6">
        <nav className="flex items-center text-sm" aria-label="breadcrumb">
          <a href="#" className="border-b border-[#757575]">Galaxy A</a>
          <span className="mx-3">/</span>
          <a href="#" className="">Detail produk</a>
        </nav>
      </div>
    </div>
  );
};


export default Breadcrumb;