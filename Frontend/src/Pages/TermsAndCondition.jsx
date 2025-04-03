import React from "react";
import { motion } from "framer-motion";
import Header from "../component/Header"; // Adjust path as needed
import Footer from "../component/Footer"; // Adjust path as needed

const TermsAndConditionsPage = () => {
  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };


  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen p-4 sm:p-8 font-poppins">
        <div className="max-w-4xl mx-auto">
          <motion.div className="mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center">Terms and Conditions</h1>
            <p className="text-sm text-gray-600 mt-2 text-center">Last Updated: April 03, 2025</p>
          </motion.div>

          <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Introduction</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Welcome to AGRITECH ("we," "us," or "our"). These Terms and Conditions govern your use of our website and the purchase of agricultural machinery and related products from AGRITECH. By accessing our website or placing an order, you agree to be bound by these terms. If you do not agree, please do not use our services.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Eligibility</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                To place an order with AGRITECH, you must be at least 18 years of age and have the legal capacity to enter into a contract. By placing an order, you confirm that you meet these eligibility requirements.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">3. Product Information</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We strive to provide accurate descriptions, images, and specifications for all products listed on our website. However, we do not guarantee that all information is error-free. If a product does not match its description, you may return it in accordance with our Return Policy (see Section 7).
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">4. Pricing and Payment</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                All prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes unless otherwise stated. We reserve the right to change prices at any time without prior notice. However, the price at the time of your order confirmation will apply.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>
                  <strong>Online Payment:</strong> A 5% discount is applied to the total product price for orders paid via online payment methods. Payment must be completed at the time of checkout.
                </li>
                <li>
                  <strong>Cash on Delivery (COD):</strong> A ₹500 advance payment is required at the time of checkout. The remaining amount must be paid in cash upon delivery. Failure to pay the remaining amount may result in order cancellation and forfeiture of the advance payment.
                </li>
              </ul>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Order Confirmation</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Once you place an order, you will receive an order confirmation via email (if provided) or SMS. This confirmation does not guarantee product availability. If a product is out of stock, we will notify you and issue a refund for the unavailable item(s) within 7 business days.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Shipping and Delivery</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We aim to deliver your order within the estimated delivery time provided at checkout. However, delays may occur due to unforeseen circumstances such as weather, logistics issues, or other factors beyond our control. AGRITECH is not liable for any delays in delivery.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                You are responsible for providing accurate shipping information. If a delivery fails due to incorrect or incomplete address details, additional shipping charges may apply for re-delivery.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Returns and Refunds</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We accept returns within 15 days of delivery if the product is defective, damaged, or does not match the description provided on our website. To initiate a return, please contact our customer support team at support@agritech.com.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>Products must be returned in their original packaging with all accessories and documentation.</li>
                <li>Refunds will be processed within 7-10 business days after we receive and inspect the returned product.</li>
                <li>Shipping charges for returns are non-refundable unless the return is due to our error.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Warranty</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                All AGRITECH products come with a manufacturer’s warranty as specified on the product page. Warranty claims must be submitted with proof of purchase. The warranty does not cover damage due to misuse, improper maintenance, or unauthorized repairs.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Limitation of Liability</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                AGRITECH shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services, including but not limited to loss of profits, data, or business opportunities. Our total liability shall not exceed the amount paid for the product in question.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">10. Intellectual Property</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                All content on our website, including images, logos, and product descriptions, is the property of AGRITECH or its licensors. You may not reproduce, distribute, or use any content without our prior written consent.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">11. Governing Law</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be resolved in the courts of [Your City], India.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">12. Changes to Terms</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We reserve the right to update these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review these terms periodically.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">13. Contact Us</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>Email: support@agritech.com</li>
                <li>Phone: +91 123-456-7890</li>
                <li>Address: AGRITECH Headquarters, [Your Address], [Your City], [Your State], India</li>
              </ul>
            </motion.section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;