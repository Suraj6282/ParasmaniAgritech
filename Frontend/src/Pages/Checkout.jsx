import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../component/Header"; // Adjust path as needed
import Footer from "../component/Footer"; // Adjust path as needed

const CheckoutPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    landmark: "",
    phone: "",
    paymentOption: "online", // "online" or "cod"
    newsletter: false,
    ageConfirmation: true,
    billingSame: true,
  });

  // Multiple products in order details
  const orderDetailsList = [
    {
      name: "AGRITECH 5000 HARVESTER",
      description: "Agricultural Machinery",
      size: "N/A",
      quantity: 1,
      price: 10500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbniCCSl7pm_E22Yeao5DaUhjosP5MWvmkwygPDG0Q&s",
    },
    {
      name: "AGRITECH 3000 PLANTER",
      description: "Agricultural Machinery",
      size: "N/A",
      quantity: 2,
      price: 7200,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbniCCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s",
    },
    {
      name: "AGRITECH 6000 TRACTOR",
      description: "Agricultural Machinery",
      size: "N/A",
      quantity: 1,
      price: 12500,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbniCCSb-DIRZRncSXh6K6UIeaU2mX2a6gcnExrgew&s",
    },
  ];

  // Calculate total base price from all products
  const totalBasePrice = orderDetailsList.reduce((total, product) => total + product.price * product.quantity, 0);

  // Calculate price adjustments based on payment option
  const discountRate = formData.paymentOption === "online" ? 0.05 : 0; // 5% discount for online payment
  const codAdvance = formData.paymentOption === "cod" ? 500 : 0; // ₹500 advance for COD
  const discountAmount = totalBasePrice * discountRate;
  const adjustedTotalPrice = totalBasePrice - discountAmount - codAdvance;

  // Order summary data
  const orderSummary = {
    itemCount: orderDetailsList.length,
    itemPrice: totalBasePrice,
    discount: discountAmount,
    codAdvance: codAdvance,
    salesTax: 0.00, // Assuming no tax for simplicity
    total: adjustedTotalPrice,
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation for required fields
    if (!formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.pincode || !formData.state || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Checkout data submitted:", formData);
    alert("Order placed successfully!"); // Replace with actual submission logic
  };

  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AGRITECH Checkout",
    description: "Complete your purchase of AGRITECH agricultural machinery with secure payment options including online payment (5% discount) and cash on delivery (₹500 advance).",
    url: window.location.href,
    mainEntity: {
      "@type": "Order",
      orderNumber: "12345",
      orderDate: new Date().toISOString(),
      acceptedOffer: {
        "@type": "Offer",
        price: orderSummary.total,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      orderedItem: orderDetailsList.map((product) => ({
        "@type": "Product",
        name: product.name,
        image: product.image,
      })),
    },
  };

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen p-4 sm:p-8 font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Login and Form */}
          <motion.div
            className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">Checkout</h1>
              <p className="text-sm text-gray-500 mt-1">Login & Checkout faster</p>
            </div>

            {/* Contact Details */}
            <motion.div className="mb-8" variants={staggerContainer}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Contact Details</h2>
              <p className="text-sm text-gray-600 mb-4">We will use these details to keep you informed about your order.</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (Optional)"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              />
            </motion.div>

            {/* Shipping Address */}
            <motion.div className="mb-8" variants={staggerContainer}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name*"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  required
                />
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address*"
                className="w-full p-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City*"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode*"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  required
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State*"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                  required
                />
              </div>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="Landmark (Optional)"
                className="w-full p-3 mb-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                required
              />
            </motion.div>

            {/* Additional Options */}
            <motion.div className="mb-8 space-y-4" variants={staggerContainer}>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="billingSame"
                    checked={formData.billingSame}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">My billing and delivery information are correct</span>
                </label>
              </div>
            </motion.div>

            {/* Submit Button and Disclaimer */}
            <div>
              <motion.button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Review and Pay
              </motion.button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                By clicking "Review and Pay," you agree to our{" "}
                <a href="/terms" className="text-green-600 hover:underline">Terms & Conditions</a>. For Cash on Delivery, ₹500 will be deducted as an advance, and the remaining amount must be paid upon delivery.
              </p>
            </div>
          </motion.div>

          {/* Right Section - Order Summary and Details */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Order Summary */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">{orderSummary.itemCount} {orderSummary.itemCount === 1 ? "Item" : "Items"}</p>
                <p className="flex justify-between text-sm text-gray-700">
                  <span>Item Price</span>
                  <span>₹{orderSummary.itemPrice.toLocaleString()}</span>
                </p>
                {formData.paymentOption === "online" && (
                  <p className="flex justify-between text-sm text-green-600 font-medium">
                    <span>Online Payment Discount (5%)</span>
                    <span>-₹{orderSummary.discount.toLocaleString()}</span>
                  </p>
                )}
                {formData.paymentOption === "cod" && (
                  <p className="flex justify-between text-sm text-blue-600 font-medium">
                    <span>COD Advance Payment</span>
                    <span>-₹{orderSummary.codAdvance.toLocaleString()}</span>
                  </p>

                )}
                <p className="flex justify-between text-sm text-gray-700">
                  <span>Sales Tax</span>
                  <span>₹{orderSummary.salesTax.toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-base font-semibold text-gray-800 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{orderSummary.total.toLocaleString()}</span>
                </p>
              </div>
            </div>

            {/* Order Details - Horizontal Layout with Scroll */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
              <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {orderDetailsList.map((orderDetails, index) => {
                  // Calculate adjusted price for each product
                  const productDiscount = orderDetails.price * discountRate;
                  const productCodAdvance = formData.paymentOption === "cod" ? 500 / orderSummary.itemCount : 0; // Distribute COD advance across products
                  const adjustedPrice = orderDetails.price - productDiscount - productCodAdvance;

                  return (
                    <div
                      key={index}
                      className="flex items-center mb-4 last:mb-0 border-b border-gray-200 pb-4 last:border-b-0"
                    >
                      <motion.img
                        src={orderDetails.image}
                        alt={orderDetails.name}
                        className="w-20 h-20 object-contain rounded-lg shadow-sm mr-4"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900">{orderDetails.name}</h3>
                        <p className="text-xs text-gray-600">{orderDetails.description}</p>
                        <p className="text-xs text-gray-600">Size: {orderDetails.size}</p>
                        <p className="text-xs text-gray-600">Quantity: {orderDetails.quantity}</p>
                        <p className="text-sm font-medium text-gray-900 mt-1">₹{adjustedPrice.toLocaleString()}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Options</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-700">Online Payment</span>
                    <span className="text-xs text-green-600 font-semibold">(5% Discount)</span>
                  </div>
                  <input
                    type="radio"
                    name="paymentOption"
                    value="online"
                    checked={formData.paymentOption === "online"}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300"
                  />
                </label>
                <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <span className="text-sm font-medium text-gray-700">Cash on Delivery (₹500 Advance)</span>
                  <input
                    type="radio"
                    name="paymentOption"
                    value="cod"
                    checked={formData.paymentOption === "cod"}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300"
                  />
                </label>
                <p className="text-sm font-bold text-black text-center">
                  Deliver Product in 5 To 7 Days
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;