import { Cog } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const backgroundImages = [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=3870&auto=format&fit=crop',
    'https://plus.unsplash.com/premium_photo-1661812961696-be6b69f861ed?q=80&w=2966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=3870&auto=format&fit=crop',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] lg:min-h-[100dvh] bg-gray-900 text-white overflow-hidden mt-2 mx-2 sm:mx-4 md:mx-6 rounded-2xl">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* SEO-friendly image fallback */}
            <img
              src={image}
              alt={`Agricultural landscape ${index + 1}`}
              className="hidden"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for contrast */}
      </div>

      {/* Content Section */}
      <main className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8">
        {/* Main Heading */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[10vw] xs:text-[8vw] sm:text-[6vw] md:text-[5vw] lg:text-8xl font-bold flex flex-col sm:flex-row items-center justify-center sm:gap-4"
        >
          <div className="flex items-center sm:flex-row">
            <span className="text-green-500">B</span>
            <Cog className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-white animate-spin-slow" />
            <Cog className="h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-green-500 animate-spin-slow reverse" />
            <span className="text-green-500">ST</span>
          </div>
          <span className="text-white ml-5">Farming</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-[4vw] xs:text-[3.5vw] sm:text-[2.5vw] md:text-[1.5vw] lg:text-2xl max-w-md xs:max-w-lg sm:max-w-xl md:max-w-2xl mt-4 sm:mt-6"
        >
          Empowering agriculture with innovative tools and sustainable solutions.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/products"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6 sm:mt-8 bg-green-600 hover:bg-green-700 text-white px-4 py-2 xs:px-6 xs:py-2 sm:px-8 sm:py-3 text-[4vw] xs:text-[3vw] sm:text-lg rounded-lg shadow-lg transition-all duration-300"
        >
          Explore Now
        </motion.a>
      </main>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 xs:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? 'bg-green-500 scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
   
    </>
  );
};

export default Hero;