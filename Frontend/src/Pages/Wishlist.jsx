import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, ShoppingCart } from "lucide-react";
import Header from "../component/Header"; // Adjust path as needed
import Footer from "../component/Footer"; // Adjust path as needed

const WishlistPage = () => {
  // Sample wishlist data (all products with discount tags)
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "AGRITECH 5000 HARVESTER", price: 1050000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbniCCSl7pm_E22Yeao5DaUhjosP5MWvmkwygPDG0Q&s", badge: { type: "discount", value: 10 } },
    { id: 2, name: "AGRITECH 3000 PLANTER", price: 720000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbniCCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 15 } },
    { id: 3, name: "AGRITECH 6000 TRACTOR", price: 1250000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbniCCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 20 } },
    { id: 4, name: "AGRITECH 7000 CULTIVATOR", price: 875000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbniCCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s", badge: { type: "discount", value: 25 } },
  ]);

  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const zoomIn = { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };

  // Remove item from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Add item to cart (placeholder function)
  const addToCart = (product) => {
    console.log(`${product.name} added to cart!`); // Replace with actual cart logic
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(product.id);
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AGRITECH Wishlist",
    description: "View and manage your wishlist of AGRITECH agricultural machinery with exclusive discounts. Add to cart or remove items easily.",
    url: window.location.href,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: wishlist.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.name,
          image: product.image,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  };

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen p-4 sm:p-6 font-poppins">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">Your Wishlist</h1>
            <p className="text-sm text-gray-600 mt-2 text-center">{wishlist.length} {wishlist.length === 1 ? "item" : "items"}</p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" initial="hidden" animate="visible" variants={staggerContainer}>
            {wishlist.length > 0 ? (
              wishlist.map((product) => (
                <WishlistCard
                  key={product.id}
                  {...product}
                  removeFromWishlist={removeFromWishlist}
                  addToCart={addToCart}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-white rounded-lg shadow-md">
                <p className="text-lg text-gray-600 font-medium">Your wishlist is empty</p>
                <a
                  href="/product"
                  className="mt-4 inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-lg"
                >
                  Start Shopping
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

// Smaller Wishlist Card Component with Improved Design
const WishlistCard = ({ id, image, name, price, badge, removeFromWishlist, addToCart }) => {
  const zoomIn = { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
      variants={zoomIn}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative">
        {badge && badge.type === "discount" && (
          <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-orange-400 text-white z-10">
            {badge.value}% OFF
          </span>
        )}
        <img src={image} alt={name} className="w-full h-40 object-contain bg-gray-50 p-2" loading="lazy" />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 uppercase line-clamp-1" title={name}>{name}</h3>
        <p className="text-green-600 font-medium text-base mt-1">₹{price.toLocaleString()}</p>
      </div>
      <div className="flex justify-between items-center p-3 pt-0">
        <motion.button
          onClick={() => addToCart({ id, name, price, image, badge })}
          className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-medium py-1.5 px-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCart className="h-4 w-4" />
          Add
        </motion.button>
        <motion.button
          onClick={() => removeFromWishlist(id)}
          className="text-gray-500 hover:text-red-500 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Remove ${name} from wishlist`}
        >
          <Trash2 className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WishlistPage;