import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const ProductPage = () => {
  const [mainImage, setMainImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7pm_E22Yeao5DaUhjosP5MWvmkwygPDG0Q&s"
  );
  const [reviewFilter, setReviewFilter] = useState("All Reviews");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true);
  const [isReviewsOpen, setIsReviewsOpen] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const scrollRef = useRef(null);

  const baseSellPrice = 1050000;
  const baseMrp = 1275000;

  const thumbnailImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7pm_E22Yeao5DaUhjosP5MWvmkwygPDG0Q&s",
    "https://w7.pngwing.com/pngs/506/500/png-transparent-seed-drill-agricultural-machinery-agriculture-weagant-farm-supplies-ltd-agriculture-agricultural-machinery-drill.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gXhFNRFKE5pO83vQJ8eLdtzG-GzR8fQJmg&s",
  ];

  const reviews = [
    { name: "Ramesh Patel", rating: 5, comment: "This harvester is a game-changer! It’s efficient and easy to use.", date: "March 15, 2025" },
    { name: "Priya Sharma", rating: 4, comment: "Great value for money, though it could be a bit quieter.", date: "March 10, 2025" },
    { name: "Vikram Singh", rating: 5, comment: "Absolutely worth the investment. My farm productivity doubled!", date: "March 5, 2025" },
    { name: "Anita Desai", rating: 3, comment: "Good product, but the setup took longer than expected.", date: "March 1, 2025" },
  ];

  const products = [
    { id: 1, name: "3000 PLANTER", sellPrice: 720000, mrp: 850000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", alt: "AGRITECH 3000 PLANTER", description: "Efficient planting solution." },
    { id: 2, name: "4000 SPRAYER", sellPrice: 750000, mrp: 900000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", alt: "AGRITECH 4000 SPRAYER", description: "Precision spraying technology." },
    { id: 3, name: "6000 TRACTOR", sellPrice: 1250000, mrp: 1475000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", alt: "AGRITECH 6000 TRACTOR", description: "Powerful and reliable tractor." },
    { id: 4, name: "7000 CULTIVATOR", sellPrice: 875000, mrp: 1025000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", alt: "AGRITECH 7000 CULTIVATOR", description: "Advanced soil cultivation." },
    { id: 5, name: "8000 HARVESTER", sellPrice: 950000, mrp: 1100000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", alt: "AGRITECH 8000 HARVESTER", description: "High-efficiency harvester." },
    { id: 6, name: "9000 PLOW", sellPrice: 600000, mrp: 750000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", alt: "AGRITECH 9000 PLOW", description: "Durable plowing tool." },
  ];

  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const zoomIn = { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };
  const glowEffect = { hidden: { boxShadow: "0 0 0 rgba(34, 197, 94, 0)" }, visible: { boxShadow: "0 8px 25px rgba(34, 197, 94, 0.4)", transition: { duration: 0.4 } } };

  const handleThumbnailClick = (image) => setMainImage(image);
  const filteredReviews = reviewFilter === "All Reviews" ? reviews : reviews.filter((review) => review.rating === parseInt(reviewFilter.split(" ")[0]));
  const totalSellPrice = baseSellPrice * quantity;
  const totalMrp = baseMrp * quantity;
  const discountAmount = totalMrp - totalSellPrice;
  const discountPercentage = Math.round((discountAmount / totalMrp) * 100);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AGRITECH 5000 Harvester",
    image: mainImage,
    description: "The AGRITECH 5000 Harvester is a pinnacle of modern agricultural innovation, blending cutting-edge technology with eco-conscious design.",
    sku: "AGRITECH-5000",
    brand: { "@type": "Brand", name: "AGRITECH" },
    offers: {
      "@type": "Offer",
      url: window.location.href,
      priceCurrency: "INR",
      price: totalSellPrice,
      priceValidUntil: "2025-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: reviews.length,
    },
  };

  return (
    <>
      <Header />
      <main className="min-h-screen font-poppins bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
        <section className="container mx-auto px-4 py-16 sm:px-6 md:px-12 lg:px-20">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" initial="hidden" animate="visible" variants={staggerContainer}>
            {/* Product Images */}
            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div
                className="relative bg-gray-100 rounded-2xl overflow-hidden h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] shadow-xl ring-1 ring-gray-200"
                variants={zoomIn}
                whileHover={{ scale: 1.03, ...glowEffect.visible }}
              >
                <img src={mainImage} alt="AGRITECH 5000 Harvester" className="w-full h-full object-cover transition-transform duration-700" loading="lazy" />
              </motion.div>
              <motion.div className="flex flex-wrap gap-4 justify-center" variants={staggerContainer}>
                {thumbnailImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gray-100 rounded-lg overflow-hidden w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] cursor-pointer border-2 ${mainImage === image ? "border-green-500" : "border-gray-200"}`}
                    variants={zoomIn}
                    whileHover={{ scale: 1.1, ...glowEffect.visible }}
                    onClick={() => handleThumbnailClick(image)}
                  >
                    <img src={image} alt={`AGRITECH 5000 Harvester Thumbnail ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300" loading="lazy" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Product Info */}
            <motion.div className="space-y-8" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-gray-800">
                  AGRITECH 5000 <span className="text-green-500">HARVESTER</span>
                </h1>
                <div className="mt-4 space-y-3">
                  <p className="text-2xl sm:text-3xl font-semibold text-gray-900">₹{totalSellPrice.toLocaleString()}</p>
                  <p className="text-lg text-gray-500 line-through">MRP: ₹{totalMrp.toLocaleString()}</p>
                  <p className="text-sm text-green-600 font-medium">Save ₹{discountAmount.toLocaleString()} ({discountPercentage}% Off)</p>
                </div>
              </motion.div>

              {/* Quantity Selector */}
              <motion.div className="flex items-center space-x-4" variants={fadeInUp}>
                <label className="text-sm font-medium text-gray-700" htmlFor="quantity">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                  <motion.button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Decrease quantity"
                  >
                    -
                  </motion.button>
                  <span className="px-4 py-2 text-center font-medium w-12" id="quantity">{quantity}</span>
                  <motion.button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Increase quantity"
                  >
                    +
                  </motion.button>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div className="space-y-4" variants={fadeInUp}>
                <motion.button
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                  whileHover={{ scale: 1.05, ...glowEffect.visible }}
                  whileTap={{ scale: 0.95 }}
                >
                  ADD TO CART
                </motion.button>
                <motion.button
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold py-4 rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  BUY NOW
                </motion.button>
              </motion.div>

              {/* Product Description */}
              <motion.div variants={fadeInUp}>
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="w-full flex justify-between items-center bg-gray-100 p-5 rounded-t-xl text-xl font-bold hover:bg-gray-200 transition-colors shadow-sm focus:outline-none"
                  aria-expanded={isDescriptionOpen}
                  aria-controls="description-section"
                >
                  Product Description
                  {isDescriptionOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
                {isDescriptionOpen && (
                  <motion.div
                    id="description-section"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-b-xl p-6 shadow-lg border-t border-gray-200"
                  >
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      The AGRITECH 5000 Harvester is a pinnacle of modern agricultural innovation, blending cutting-edge technology with eco-conscious design. Available in Shadow Green and Steel Gray, it’s built for durability and peak performance.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-3 list-disc list-inside">
                      <li><strong>Precision Harvesting:</strong> Advanced sensors boost crop yield.</li>
                      <li><strong>Lightweight Build:</strong> High-grade steel alloy for agility.</li>
                      <li><strong>Eco-Friendly:</strong> Low-emission motor for sustainability.</li>
                      <li><strong>Ergonomic Comfort:</strong> Designed for all-day operator ease.</li>
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Reviews Section */}
          <motion.div className="mt-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <button
              onClick={() => setIsReviewsOpen(!isReviewsOpen)}
              className="w-full flex justify-between items-center bg-gray-100 p-5 rounded-t-xl text-2xl font-bold hover:bg-gray-200 transition-colors shadow-sm focus:outline-none"
              aria-expanded={isReviewsOpen}
              aria-controls="reviews-section"
            >
              Customer Reviews
              {isReviewsOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            {isReviewsOpen && (
              <motion.div
                id="reviews-section"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-b-xl p-6 shadow-lg border-t border-gray-200"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Filter Reviews</h2>
                  <select
                    value={reviewFilter}
                    onChange={(e) => setReviewFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                  >
                    <option>All Reviews</option>
                    <option>5 Stars</option>
                    <option>4 Stars</option>
                    <option>3 Stars</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredReviews.map((review, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 rounded-xl p-5 shadow-md border border-gray-200"
                      variants={zoomIn}
                      whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)" }}
                    >
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? "text-green-500" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 mb-3">{review.comment}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Related Products */}
          <motion.div className="mt-20 relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <div className="flex justify-between items-center mb-6 px-4">
              <h2 className="text-2xl font-bold text-gray-800">Related Products</h2>
              <div className="flex gap-3">
                <motion.button
                  onClick={scrollLeft}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Scroll left"
                >
                  <ChevronRight className="w-5 h-5 rotate-180" />
                </motion.button>
                <motion.button
                  onClick={scrollRight}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-green-500 text-white hover:bg-green-600 transition-colors shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scroll-smooth gap-6 pb-4 snap-x snap-mandatory px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {products.map((product) => {
                const discount = Math.round(((product.mrp - product.sellPrice) / product.mrp) * 100);
                return (
                  <motion.article
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex-shrink-0 w-[280px] snap-start"
                    variants={zoomIn}
                    whileHover={{ scale: 1.05 }}
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
                        className="w-full h-48 object-contain bg-gray-50 p-4 transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 truncate group-hover:text-green-600 transition-colors duration-200 uppercase">
                        AGRITECH {product.name}
                      </h3>
                      <p className="text-gray-600 mt-2 text-sm line-clamp-2">{product.description}</p>
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
                  </motion.article>
                );
              })}
            </div>
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;