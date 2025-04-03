import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Trash2, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "AGRITECH 5000 HARVESTER",
      price: 1050000,
      quantity: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7pm_E22Yeao5DaUhjosP5MWvmkwygPDG0Q&s",
    },
    {
      id: 2,
      name: "AGRITECH 3000 PLANTER",
      price: 720000,
      quantity: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s",
    },
  ]);

  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const zoomIn = { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };

  // Cart Functions
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shipping = 5000; // Example shipping cost
  const total = calculateSubtotal() + shipping;

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Shopping Cart - AGRITECH",
    description: "Review and manage your cart with AGRITECH agricultural machinery. Proceed to checkout for fast delivery.",
    url: window.location.href,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: cartItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: item.name,
          image: item.image,
          offers: {
            "@type": "Offer",
            price: item.price,
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
      <main className="min-h-screen font-poppins bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
        <section className="container mx-auto px-4 py-16 sm:px-6 md:px-12 lg:px-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            {/* Breadcrumb */}
            <motion.div className="flex items-center mb-8" variants={fadeInUp}>
              <Link to="/" className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Continue Shopping</span>
              </Link>
            </motion.div>

            {/* Cart Header */}
            <motion.h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10" variants={fadeInUp}>
              Your Cart
            </motion.h1>

            {cartItems.length === 0 ? (
              <motion.div className="text-center py-20" variants={fadeInUp}>
                <p className="text-lg text-gray-600">Your cart is empty.</p>
                <Link
                  to="/products"
                  className="mt-4 inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-lg"
                >
                  Shop Now
                </Link>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart Items */}
                <motion.div className="lg:col-span-2 space-y-6" variants={staggerContainer}>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex flex-col sm:flex-row items-start bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl"
                      variants={zoomIn}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-32 h-32 object-contain bg-gray-50 rounded-lg mb-4 sm:mb-0 sm:mr-6"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900 uppercase">{item.name}</h2>
                        <p className="text-sm text-gray-600 mt-1">₹{item.price.toLocaleString()} / unit</p>
                        <div className="mt-4 flex items-center space-x-4">
                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              -
                            </motion.button>
                            <span className="px-4 py-1 text-center font-medium w-12">{item.quantity}</span>
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              +
                            </motion.button>
                          </div>
                          <motion.button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="w-5 h-5" />
                          </motion.button>
                        </div>
                        <p className="mt-3 text-green-700 font-bold text-lg">
                          Total: ₹{(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Order Summary */}
                <motion.div className="lg:col-span-1" variants={fadeInUp}>
                  <div className="bg-white rounded-2xl shadow-md p-6 sticky top-20">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Subtotal</span>
                        <span>₹{calculateSubtotal().toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Shipping</span>
                        <span>₹{shipping.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold text-gray-900">
                        <span>Total</span>
                        <span>₹{total.toLocaleString()}</span>
                      </div>
                    </div>
                    <motion.button
                      className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:from-green-600 hover:to-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Proceed to Checkout
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;