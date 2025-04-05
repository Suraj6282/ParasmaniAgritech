import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Truck, Home } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmed = () => {
  // Sample order data (replace with actual data from your app)
  const orderDetails = {
    orderId: "ORD123456",
    date: "April 04, 2025",
    items: [
      { id: 1, name: "Power Weeder Pro", quantity: 1, price: 299.99 },
      { id: 2, name: "Hand Trowel", quantity: 2, price: 19.99 },
    ],
    total: 339.97,
    shippingAddress: "123 Green Fields, Agritech City, AT 12345",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        style={{ boxShadow: "0 15px 40px rgba(0,0,0,0.1), 0 0 30px rgba(255,215,0,0.2)" }} // Sunlight shadow
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-white text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
          </motion.div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            Order Confirmed!
          </h1>
          <p className="mt-2 text-sm md:text-base opacity-90">
            Thank you for your purchase. Your order is on its way!
          </p>
        </div>

        {/* Order Details Section */}
        <div className="p-6 md:p-8">
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-green-800">
              Order #{orderDetails.orderId}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Placed on: {orderDetails.date}
            </p>
          </motion.div>

          {/* Order Items */}
          <motion.div variants={itemVariants} className="border-t border-b border-gray-200 py-4 mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Items Ordered</h3>
            <div className="space-y-4">
              {orderDetails.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://via.placeholder.com/60?text=${item.name.split(" ")[0]}`} // Replace with actual image
                      alt={item.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/60?text=No+Image")}
                    />
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <p className="text-lg font-semibold text-green-800">
                Total: ${orderDetails.total.toFixed(2)}
              </p>
            </div>
          </motion.div>

          {/* Shipping Info */}
          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2 flex items-center gap-2">
              <Truck className="w-5 h-5 text-green-600" /> Shipping To
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{orderDetails.shippingAddress}</p>
            <p className="text-sm text-gray-500 mt-1">Estimated Delivery: 3-5 Business Days</p>
          </motion.div>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 text-sm md:text-base"
            >
              <Home className="w-5 h-5" /> Continue Shopping
            </Link>
            <Link
              to="/profile"
              className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 text-sm md:text-base"
            >
              View Profile
            </Link>
          </motion.div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-600">
          <p>Need help? Contact us at <a href="mailto:support@parshmani.com" className="text-green-600 hover:underline">support@parshmani.com</a></p>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmed;