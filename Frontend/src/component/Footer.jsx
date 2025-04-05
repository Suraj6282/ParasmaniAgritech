import { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// Custom WhatsApp Icon
export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const iconSwing = {
    visible: {
      rotate: [0, 5, -5, 0],
      y: [0, -2, 2, 0],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen font-poppins">
      {/* Top Section with Gradient Background */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 flex flex-col md:flex-row justify-between items-center lg:min-h-[70vh] sm:min-h-[30vh] rounded-t-[30px] sm:rounded-t-[50px] relative overflow-hidden">
        <motion.div
          className="mb-6 md:mb-0 w-full md:w-1/2 max-w-lg"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight"
            variants={fadeInUp}
          >
            SUB<span className="text-[#F0A04B]">SCRIBE</span>
            <br />
            PARASMANI
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 font-light"
            variants={fadeInUp}
          >
            Subscribe for free! Empower your farming journey.
          </motion.p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 sm:px-6 sm:py-4 rounded-full border border-white/40 bg-white/10 text-white w-full sm:w-64 md:w-72 lg:w-80 focus:outline-none focus:ring-2 focus:ring-[#F0A04B] transition-all"
              required
              variants={fadeInUp}
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="bg-[#F0A04B] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#e08e3a] transition-colors"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SUBSCRIBE
            </motion.button>
          </form>
          {subscribed && (
            <motion.p
              className="text-green-300 mt-3 sm:mt-4 text-sm sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              Thank you for subscribing!
            </motion.p>
          )}
        </motion.div>

        <motion.div
          className="lg:left-12 w-full md:left-8 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative mt-5">
            <motion.h2
              className="text-3xl flex-col flex sm:text-5xl md:text-6xl lg:text-8xl xl:text-[8rem] font-black text-white drop-shadow-lg text-center md:text-right"
              initial={{ opacity: 0.7, scale: 0.95 }}
              animate={{
                opacity: [0.7, 1, 0.7], // Pulsing opacity
                scale: [0.95, 1, 0.95], // Subtle scale animation
                filter: [
                  "drop-shadow(4px 4px 20px rgba(255, 255, 224, 0.8))", // Light yellow glow
                  "drop-shadow(4px 4px 20px rgba(255, 193, 7, 0.6))", // Dark yellow glow
                  "drop-shadow(4px 4px 20px rgba(255, 255, 224, 0.8))", // Back to light yellow
                ],
              }}
              transition={{
                duration: 2.5, // Animation duration
                ease: "easeInOut",
                repeat: Infinity, // Loops indefinitely
                times: [0, 0.5, 1], // Timing for keyframes
              }}
            >
              PARASMANI
              <p className="text-sm text-zinc-300">Agritech</p>
            </motion.h2>
            {/* Small static div with yellow background */}
            <motion.span
              className="absolute left-45 bottom-14 w-8 h-6 text-md font-bold shadow-md lg:bottom-33 lg:left-170 md:bottom-20 md:text-md bg-[#F0A04B] cursor-pointer text-white rounded-full sm:w-10 sm:h-8 sm:left-65 sm:bottom-16 md:w-20 md:h-10 flex items-center justify-center sm:text-lg"
              initial={{ y: 0 }}
              animate={{ y: [-1, 1, 0] }} // Subtle bounce effect
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 5, -5, 0] }} // Slight wobble
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="text-black font-bold"
              >
                TM
              </motion.span>
            </motion.span>
          </div>
        </motion.div>
      </section>

      {/* Footer Section with Dark Theme */}
      <footer className="bg-[#343333] text-white px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-16 relative overflow-hidden">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-24 lg:mb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F0A04B] mb-4 sm:mb-6">
              About Us
            </h3>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Parasmani is your trusted source for premium farming tools,
              offering innovative solutions for modern agriculture.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F0A04B] mb-4 sm:mb-6">
              Categories
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base md:text-lg">
              {[
                "Hand Tools",
                "Irrigation",
                "Machinery",
                "Soil Care",
                "Planting",
                "Harvesting",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#F0A04B] transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F0A04B] mb-4 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base md:text-lg">
              {["About", "Contact", "Terms", "Privacy"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-[#F0A04B] transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center pb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F0A04B] mb-6">
              Follow Us
            </h3>
            <div className="relative flex justify-between items-center gap-4 sm:gap-6 md:gap-5 max-w-xl mx-auto">
              {/* Rope Background */}
              <div 
                className="absolute h-1 bg-[#8B4513]  rounded-full top-[-20px] z-5" 
                style={{ 
                  backgroundImage: "linear-gradient(to right, #8B4513, #D2691E)",
                  width: "calc(100% + 10px)", // Slightly wider than icons
                  left: "-8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)" // Subtle shadow for depth
                }}
              ></div>
              
              {[
                { Icon: Facebook, name: "Facebook", color: "#1877F2", link: "https://www.facebook.com/parasmaniagritech" },
                { Icon: Instagram, name: "Instagram", color: "#E4405F", link: "https://www.instagram.com/parasmani_agritech_" },
                { Icon: FaWhatsapp, name: "WhatsApp", color: "#25D366", link: "https://wa.me/9909632139" },
                { Icon: Youtube, name: "YouTube", color: "#FF0000", link: "https://www.youtube.com/@Parasmaniagritech" },
              ].map(({ Icon, name, color, link }) => (
                <motion.div
                  key={name}
                  variants={iconSwing}
                  animate="visible"
                  className="relative flex flex-col items-center z-0"
                >
                  {/* Rope Hook - Realistic Design */}
                  <div 
                    className="w-1 h-8 bg-[#8B4513] absolute top-[-20px] z-10 rounded-t-sm" 
                    style={{ 
                      backgroundImage: "linear-gradient(to bottom, #8B4513, #A0522D)",
                      boxShadow: "1px 1px 2px rgba(0,0,0,0.2)" // Slight shadow for realism
                    }}
                  ></div>
                  <Link
                    to={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors z-20"
                  >
                    <motion.div
                      whileHover={{ y: -5, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={24} color={color} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                    </motion.div>
                    <span className="sr-only">{name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Large PARASMANI Logo - Half Visible */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[12rem] font-black text-white absolute -bottom-10 sm:-bottom-12 md:-bottom-20 lg:-bottom-30 xl:-bottom-30"
            initial={{ opacity: 0.2, scale: 0.95 }}
            animate={{
              opacity: [0.2, 0.4, 0.2], // Pulsing opacity
              scale: [0.95, 1, 0.95], // Subtle scale animation
              filter: [
                "drop-shadow(4px 4px 40px rgba(255, 255, 260, 0.8))", // Light yellow
                "drop-shadow(4px 4px 40px rgba(255, 200, 100, 0.6))", // Dark yellow
                "drop-shadow(4px 4px 40px rgba(255, 255, 224, 0.8))", // Back to light yellow
              ],
            }}
            transition={{
              duration: 3, // Animation duration
              ease: "easeInOut",
              repeat: Infinity, // Loops indefinitely
              times: [0, 0.5, 1], // Timing for the keyframes
            }}
          >
            PARASMANI
          </motion.h2>
        </motion.div>
      </footer>
    </main>
  );
}
