import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample product data
const products = [
  {
    id: 1,
    name: "Fresh Apples",
    description: "Juicy and crisp apples from Perfcat farms.",
    mrp: 299,
    sellPrice: 249,
    image: "https://via.placeholder.com/150",
    alt: "Fresh Apples",
  },
  {
    id: 2,
    name: "Organic Milk",
    description: "Pure organic milk by Perfcat.",
    mrp: 349,
    sellPrice: 299,
    image: "https://via.placeholder.com/150",
    alt: "Organic Milk",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    description: "Healthy bread from Perfcat bakery.",
    mrp: 199,
    sellPrice: 179,
    image: "https://via.placeholder.com/150",
    alt: "Whole Wheat Bread",
  },
  {
    id: 4,
    name: "Tomato Sauce",
    description: "Rich sauce by Perfcat kitchens.",
    mrp: 99,
    sellPrice: 89,
    image: "https://via.placeholder.com/150",
    alt: "Tomato Sauce",
  },
];

// Calculate discount percentage
const calculateDiscount = (mrp, sellPrice) => {
  return Math.round(((mrp - sellPrice) / mrp) * 100);
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center p-4">
      {/* Search Bar */}
      <motion.div
        className="w-full max-w-2xl sticky top-0 z-10 py-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 text-lg bg-gray-100 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
        />
      </motion.div>

      {/* Product Grid */}
      <div className="w-full max-w-5xl mt-6">
        {filteredProducts.length > 0 ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const discount = calculateDiscount(product.mrp, product.sellPrice);
              return (
                <motion.article
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    {discount > 0 && (
                      <motion.span
                        className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-sm"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {discount}% OFF
                      </motion.span>
                    )}
                    <motion.img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-48 sm:h-56 object-contain bg-gray-50 p-4"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-grow">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 truncate group-hover:text-green-600 transition-colors duration-200">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base line-clamp-2">
                      {product.description}{" "}
                      <span className="text-blue-500 font-medium">Perfcat</span>
                    </p>
                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      <span className="text-gray-400 line-through text-sm">
                        ₹{product.mrp.toLocaleString()}
                      </span>
                      <span className="text-green-700 font-bold text-lg">
                        ₹{product.sellPrice.toLocaleString()}
                      </span>
                    </div>
                    <motion.button
                      className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      whileHover={{
                        scale: 1.05,
                        background: "linear-gradient(to right, #16a34a, #15803d)",
                        boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.article>
              );
            })}
          </section>
        ) : (
          <motion.p
            className="text-gray-500 text-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {searchTerm === ""
              ? "Type something to search for products..."
              : "No products found."}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;