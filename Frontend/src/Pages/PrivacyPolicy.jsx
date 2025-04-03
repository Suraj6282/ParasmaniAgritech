import React from "react";
import { motion } from "framer-motion";
import Header from "../component/Header"; // Adjust path as needed
import Footer from "../component/Footer"; // Adjust path as needed

const PrivacyPolicyPage = () => {
  // Animation Variants
  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen p-4 sm:p-8 font-poppins">
        <div className="max-w-4xl mx-auto">
          <motion.div className="mb-8" initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 text-center">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mt-2 text-center">Last Updated: April 03, 2025</p>
          </motion.div>

          <motion.div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">1. Introduction</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                At AGRITECH ("we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, purchase agricultural machinery, or interact with our services. By using our website, you consent to the practices described in this policy.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>
                  <strong>Personal Information:</strong> When you place an order, we collect details such as your name, email address (optional), phone number, shipping address (including city, pincode, state, and landmark), and payment information.
                </li>
                <li>
                  <strong>Non-Personal Information:</strong> We may collect data such as your IP address, browser type, device information, and browsing behavior on our website through cookies and similar technologies.
                </li>
                <li>
                  <strong>Order Information:</strong> Details about the products you purchase, including product names, quantities, and prices.
                </li>
              </ul>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>To process and fulfill your orders, including shipping and delivery.</li>
                <li>To communicate with you about your order status, updates, or customer support inquiries.</li>
                <li>
                  To send promotional emails or newsletters about our products, offers, and services (if you opt-in). You can unsubscribe at any time.
                </li>
                <li>To improve our website, products, and services by analyzing user behavior and preferences.</li>
                <li>To comply with legal obligations and protect against fraudulent activities.</li>
              </ul>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">4. How We Share Your Information</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We do not sell or rent your personal information to third parties. However, we may share your information in the following cases:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>
                  <strong>Service Providers:</strong> We may share your information with trusted third-party service providers (e.g., payment processors, shipping companies) to facilitate order fulfillment and payment processing.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                </li>
              </ul>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">5. Cookies and Tracking Technologies</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use cookies and similar technologies to enhance your experience on our website. Cookies help us:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>Remember your preferences and cart items.</li>
                <li>Analyze website traffic and user behavior.</li>
                <li>Deliver personalized content and advertisements.</li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                You can manage your cookie preferences through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">6. Data Security</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse. This includes encryption for payment transactions and secure storage of your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">7. Data Retention</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, or resolve disputes. Once your data is no longer needed, we will securely delete or anonymize it.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">8. Your Rights</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Opt-out of marketing communications at any time by clicking the "unsubscribe" link in our emails.
                </li>
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">
                To exercise these rights, please contact us at support@agritech.com.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">9. Third-Party Links</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites, such as payment gateways. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">10. Children's Privacy</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">11. Changes to This Privacy Policy</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Updates will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>
            </motion.section>

            <motion.section className="mb-6" variants={fadeInUp}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">12. Contact Us</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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

export default PrivacyPolicyPage;