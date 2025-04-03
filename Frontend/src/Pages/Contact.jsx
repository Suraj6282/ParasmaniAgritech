import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapError, setMapError] = useState(false);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleMapError = () => {
    setMapError(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Parasmani Agritech | Farming Solutions Gujarat</title>
        <meta
          name="description"
          content="Contact Parasmani Agritech in Siddhpur, Gujarat for agricultural solutions."
        />
      </Helmet>

      <main className="min-h-screen font-sans bg-gray-100">
        <Header />

        <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-pattern opacity-10 animate-subtle-move"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/leaf.png')",
            }}
          ></div>
          <motion.div
            className="max-w-6xl mx-auto text-center relative z-10 px-4"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight"
              variants={fadeInUp}
            >
              Contact <span className="text-[#F0A04B]">Parasmani Agritech</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Your Partner in Sustainable Farming Solutions
            </motion.p>
          </motion.div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-green-700 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-base sm:text-lg">
                    Parasmani Agritech
                    <br />
                    27, Yoganjali Society, Dethli Road,
                    <br />
                    Siddhpur, Patan, Gujarat - 384151
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-green-700 mr-3 flex-shrink-0" />
                  <a href="tel:+919909632139" className="text-gray-700 text-base sm:text-lg hover:text-green-700">
                    +91 99096 32139
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-green-700 mr-3 flex-shrink-0" />
                  <a href="mailto:info@parasmaniagritech.com" className="text-gray-700 text-base sm:text-lg hover:text-green-700">
                    parasmaniagritech@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-green-800">
                  Send Us a Message
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                      rows="4"
                      required
                      placeholder="How can we assist you?"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition-colors duration-300"
                >
                  {isSubmitted ? "Message Sent!" : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </section>

        {/* Updated Map Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {!mapError ? (
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.056038891204!2d72.358613!3d23.9167434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf542957e3113%3A0x102acf4fd0c6a4d3!2sParasmani%20Agritech!5e0!3m2!1sen!2sin!4v1712090134892!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            allowFullScreen=""
            loading="lazy"
            title="Parasmani Agritech Location"
            className="w-full"
          ></iframe>
          
            ) : (
              <div className="w-full h-[450px] bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600 text-center">
                  Map failed to load. Please use this address:
                  <br />
                  27, Yoganjali Society, Dethli Road,
                  <br />
                  Siddhpur, Patan, Gujarat - 384151
                </p>
              </div>
            )}
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;