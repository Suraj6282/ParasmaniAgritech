import React, { useState } from 'react';
import productimg from "../../public/Productsimg/seeddrill.png";
import mainframewiththreetine from "../../public/Productsimg/mainframewiththreetine.png";

const LandingProductPage = () => {
  const initialProducts = [
    { id: 1, name: "Seed Drill", description: "A premium seed drill designed for precision planting and durability.", image: productimg, alt: "Seed Drill - Precision Farming Tool", mrp: 15000, sellPrice: 12000 },
    { id: 2, name: "Precision Planter", description: "Optimize your planting with this advanced precision tool.", image: mainframewiththreetine, alt: "Precision Planter - Agricultural Equipment", mrp: 20000, sellPrice: 17000 },
    { id: 3, name: "Soil Cultivator", description: "Enhance soil health with this robust cultivator.", image: productimg, alt: "Soil Cultivator - Farming Equipment", mrp: 18000, sellPrice: 16200 },
    { id: 4, name: "Fertilizer Spreader", description: "Evenly distribute nutrients with ease.", image: productimg, alt: "Fertilizer Spreader - Farm Tool", mrp: 12000, sellPrice: 10800 },
    { id: 5, name: "Tractor Attachment", description: "Versatile attachment for all your farming needs.", image: productimg, alt: "Tractor Attachment - Agricultural Gear", mrp: 25000, sellPrice: 18750 },
    { id: 6, name: "Irrigation System", description: "Efficient water management for crops.", image: productimg, alt: "Irrigation System - Farm Solution", mrp: 30000, sellPrice: 27000 },
    { id: 7, name: "Irrigation System 2", description: "Efficient water management for crops.", image: productimg, alt: "Irrigation System - Farm Solution", mrp: 30000, sellPrice: 27000 },
    { id: 8, name: "Irrigation System 3", description: "Efficient water management for crops.", image: productimg, alt: "Irrigation System - Farm Solution", mrp: 30000, sellPrice: 27000 },
    { id: 9, name: "Irrigation System 4", description: "Efficient water management for crops.", image: productimg, alt: "Irrigation System - Farm Solution", mrp: 30000, sellPrice: 27000 },
    { id: 10, name: "Irrigation System 5", description: "Efficient water management for crops.", image: productimg, alt: "Irrigation System - Farm Solution", mrp: 30000, sellPrice: 27000 },
    { id: 11, name: "Irrigation System 6", description: "Efficient water management for crops.", image: productimg, alt: "Irrigation System - Farm Solution", mrp: 30000, sellPrice: 27000 },
    { id: 12, name: "Irrigation System 7", description: "Efficient water management for crops.", image: productimg, alt: "Irrigation System - Farm Solution", mrp: 30000, sellPrice: 27000 },
    { id: 13, name: "Irrigation System 8", description: "Efficient water management for crops.", image: productimg, alt: "Irrigation System - Farm Solution", mrp: 30000, sellPrice: 27000 },
  ];

  const calculateDiscount = (mrp, sellPrice) => {
    if (mrp <= sellPrice) return 0;
    return Math.round(((mrp - sellPrice) / mrp) * 100);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity });
  const productsPerPage = 8;

  const filteredProducts = initialProducts
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product => 
      product.sellPrice >= priceFilter.min && product.sellPrice <= priceFilter.max
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'priceLowToHigh': return a.sellPrice - b.sellPrice;
        case 'priceHighToLow': return b.sellPrice - a.sellPrice;
        case 'nameAZ': return a.name.localeCompare(b.name);
        case 'nameZA': return b.name.localeCompare(a.name);
        default: return a.id - b.id;
      }
    });

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleFilterChange = () => setCurrentPage(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="pt-12 px-4 sm:px-6 lg:px-12 xl:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 tracking-tight animate-fade-in text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-500">Latest Drops</span> Await You
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 text-center max-w-3xl mx-auto">Discover cutting-edge agricultural tools designed for efficiency and sustainability.</p>
      </header>

      <main className="py-10 px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Filter Section */}
        <div className="mb-8 bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Explore Products</h2>
            <span className="text-sm text-gray-500 mt-2 sm:mt-0">
              Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, totalProducts)} of <span className='text-black font-bold'>{totalProducts} products</span>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); handleFilterChange(); }}
                className="w-full p-3 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              value={sortOption}
              onChange={(e) => { setSortOption(e.target.value); handleFilterChange(); }}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <option value="default">Sort: Default</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="nameAZ">Name: A to Z</option>
              <option value="nameZA">Name: Z to A</option>
            </select>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min Price"
                onChange={(e) => { setPriceFilter({ ...priceFilter, min: e.target.value ? Number(e.target.value) : 0 }); handleFilterChange(); }}
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Max Price"
                onChange={(e) => { setPriceFilter({ ...priceFilter, max: e.target.value ? Number(e.target.value) : Infinity }); handleFilterChange(); }}
                className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => {
            const discount = calculateDiscount(product.mrp, product.sellPrice);
            return (
              <article
                key={product.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative">
                  {discount > 0 && (
                    <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      {discount}% OFF
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-48 sm:h-56 object-contain bg-gray-50 p-4 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate group-hover:text-green-600 transition-colors duration-200">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base line-clamp-2">{product.description}</p>
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="text-gray-400 line-through text-sm">₹{product.mrp.toLocaleString()}</span>
                    <span className="text-green-700 font-bold text-lg">₹{product.sellPrice.toLocaleString()}</span>
                  </div>
                  <button
                    className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-2 rounded-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            );
          })}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center items-center gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>
            <span className="text-gray-700 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
            >
              Next
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default LandingProductPage;