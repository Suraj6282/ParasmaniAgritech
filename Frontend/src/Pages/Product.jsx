import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft } from "lucide-react";
import Header from "../component/Header"; // Adjust path as needed
import Footer from "../component/Footer"; // Adjust path as needed

const AgriStore = () => {
  const [expandedSections, setExpandedSections] = useState({
    refineBy: true,
    price: true,
  });

  const [filters, setFilters] = useState({
    discountRange: "", // "" means no filter, otherwise a range like "20-30"
    priceRange: [50000, 2000000], // [min, max]
    sortBy: "default", // "default", "lowToHigh", "highToLow"
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 items per page

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  // Sample agricultural products (all with discount tags)
  const products = [
    { id: 1, name: "AGRITECH 5000 HARVESTER", price: 1050000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn=CCSl7pm_E22Yeao5DaUhjosP5MWvmkwygPDG0Q&s", badge: { type: "discount", value: 10 } },
    { id: 2, name: "AGRITECH 3000 PLANTER", price: 720000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn=CCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 15 } },
    { id: 3, name: "AGRITECH 6000 TRACTOR", price: 1250000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn=CCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 20 } },
    { id: 4, name: "AGRITECH 7000 CULTIVATOR", price: 875000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn=CCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 25 } },
    { id: 5, name: "AGRITECH 4000 SPRAYER", price: 750000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn=CCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 30 } },
    { id: 6, name: "AGRITECH 8000 PLOW", price: 600000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn=CCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 35 } },
    { id: 7, name: "AGRITECH 9000 SEEDER", price: 950000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn=CCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 40 } },
    { id: 8, name: "AGRITECH 2000 TILLER", price: 450000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn=CCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 45 } },
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const inPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      if (!filters.discountRange) return inPriceRange; // No discount filter applied
      const [minDiscount, maxDiscount] = filters.discountRange.split("-").map(Number);
      const discountValue = product.badge?.type === "discount" ? product.badge.value : 0;
      return inPriceRange && discountValue >= minDiscount && (maxDiscount ? discountValue <= maxDiscount : true);
    })
    .sort((a, b) => {
      if (filters.sortBy === "lowToHigh") return a.price - b.price;
      if (filters.sortBy === "highToLow") return b.price - a.price;
      return 0; // Default (no sorting)
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDiscountFilter = (range) => {
    setFilters((prev) => ({
      ...prev,
      discountRange: prev.discountRange === range ? "" : range, // Toggle off if same range is clicked
    }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setFilters((prev) => ({
      ...prev,
      priceRange: [prev.priceRange[0], value],
    }));
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSortChange = (sortOption) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: sortOption,
    }));
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen p-4 sm:p-6 font-poppins">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-col sm:flex-row justify-between items-center mb-6" initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Agricultural Machinery</h1>
              <p className="text-sm text-gray-600">{filteredProducts.length} items</p>
            </div>
            <div className="relative mt-4 sm:mt-0">
              <div className="group">
                <button className="bg-white px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 font-medium text-sm hover:bg-gray-50 transition-colors">
                  SORT BY: {filters.sortBy === "default" ? "Default" : filters.sortBy === "lowToHigh" ? "Price: Low to High" : "Price: High to Low"}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-10">
                  <button
                    onClick={() => handleSortChange("default")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Default
                  </button>
                  <button
                    onClick={() => handleSortChange("lowToHigh")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => handleSortChange("highToLow")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Price: High to Low
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <motion.div className="w-full md:w-64 shrink-0" initial="hidden" animate="visible" variants={staggerContainer}>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Filters</h2>

                {/* Discount Filter */}
                <div className="mb-4">
                  <button
                    className="w-full flex justify-between items-center cursor-pointer mb-2 focus:outline-none"
                    onClick={() => toggleSection("refineBy")}
                  >
                    <h3 className="font-medium text-sm text-gray-700">DISCOUNT</h3>
                    {expandedSections.refineBy ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedSections.refineBy && (
                    <div className="space-y-2 mt-2">
                      {[
                        { label: "All Discounts", range: "" },
                        { label: "10% - 20%", range: "10-20" },
                        { label: "20% - 30%", range: "20-30" },
                        { label: "40% - 50%", range: "40-50" },
                      ].map(({ label, range }) => (
                        <div key={range} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={`discount-${range}`}
                            checked={filters.discountRange === range}
                            onChange={() => handleDiscountFilter(range)}
                            className="h-4 w-4 text-green-500 rounded focus:ring-green-400 border-gray-300"
                          />
                          <label htmlFor={`discount-${range}`} className="text-sm text-gray-700">{label}</label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Filter */}
                <div className="mb-4">
                  <button
                    className="w-full flex justify-between items-center cursor-pointer mb-2 focus:outline-none"
                    onClick={() => toggleSection("price")}
                  >
                    <h3 className="font-medium text-sm text-gray-700">PRICE (₹)</h3>
                    {expandedSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedSections.price && (
                    <div className="mt-4 px-2">
                      <input
                        type="range"
                        min="50000"
                        max="2000000"
                        step="50000"
                        value={filters.priceRange[1]}
                        onChange={handlePriceChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                      />
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>₹50,000</span>
                        <span>₹{filters.priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Product Grid */}
            <motion.div className="flex-1" initial="hidden" animate="visible" variants={staggerContainer}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.length > 0 ? (
                  paginatedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10">
                    <p className="text-gray-600">No products match your filters.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {filteredProducts.length > 0 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1 border border-gray-300 rounded-md flex items-center gap-1 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      PREVIOUS
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-8 h-8 flex items-center justify-center rounded-md ${
                          page === currentPage ? "bg-green-500 text-white" : "bg-white border border-gray-300 hover:bg-gray-50"
                        } transition-colors focus:outline-none focus:ring-2 focus:ring-green-400`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 border border-gray-300 rounded-md flex items-center gap-1 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      NEXT
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// Product Card Component (only showing discount tags)
const ProductCard = ({ image, name, price, badge }) => {
  const zoomIn = { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };

  return (
    <motion.div className="flex flex-col" variants={zoomIn} whileHover={{ scale: 1.03 }}>
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
        {badge && badge.type === "discount" && (
          <span className="absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-sm bg-orange-400 text-white">
            {badge.value}% OFF
          </span>
        )}
        <img src={image} alt={name} className="w-full h-64 object-contain bg-gray-50 p-4" loading="lazy" />
      </div>
      <div className="mt-2 px-2">
        <h3 className="font-bold text-gray-900 uppercase text-sm sm:text-base">{name}</h3>
      </div>
      <button className="mt-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-2 rounded-md text-center font-medium text-sm sm:text-base hover:from-green-600 hover:to-green-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400">
        VIEW PRODUCT - ₹{price.toLocaleString()}
      </button>
    </motion.div>
  );
};

export default AgriStore;