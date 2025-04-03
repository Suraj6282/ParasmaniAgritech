import React from "react";
import { motion } from "framer-motion";
import Footer from "../component/Footer";
import Header from "../component/Header";

const AboutUs = () => {
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
  return (
    <>
      <Header />

      <main className="min-h-screen font-sans bg-gray-100">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-pattern opacity-10"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/leaf.png')",
            }}
          ></div>
          <motion.div
            className="max-w-6xl mx-auto text-center relative z-10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
              variants={fadeInUp}
            >
              About <span className="text-[#F0A04B]">Parasmani Agritech</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Innovating Agriculture for Small and Marginal Farmers
            </motion.p>
          </motion.div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              variants={fadeInUp}
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                  Who We Are
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Parasmani Agritech is a leading manufacturer and designer of
                  affordable farm equipment tailored to the needs of small and
                  marginal farmers. With over 20+ self-designed models of
                  agricultural machinery, we cover all major cultivation
                  operations, ensuring efficiency and productivity for every
                  farmer.
                </p>
              </div>
              <motion.img
                src="https://images.unsplash.com/photo-1500595046743-cd271d6942f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Parasmani Agritech farming equipment"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  desc: "Our motto is 'Quality is our Priority'",
                  icon: "🏆",
                },
                {
                  title: "Innovative Design",
                  desc: "Self-designed & field-tested tools",
                  icon: "⚙️",
                },
                {
                  title: "Lifetime Support",
                  desc: "Lifetime after-sales support",
                  icon: "🤝",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AboutUs;
