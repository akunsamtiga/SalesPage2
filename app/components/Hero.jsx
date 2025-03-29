"use client";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative bg-white overflow-hidden"
      style={{ minHeight: '90vh' }}
    >
      {/* Background subtle animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"
      />
      
      {/* Mobile (default) and Medium (md) Product Image with Cover */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="block lg:hidden w-full px-6 pt-12 pb-8"
      >
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
          {/* Main Image with Cover Effect */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <img 
              src="/images/sofa.jpg"
              alt="Premium Sofa Collection"
              className="w-full h-full object-cover"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)'
              }}
            />
          </div>
          
          {/* Decorative Cover Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent h-1/3 bottom-0"></div>
          
          {/* Floating Label */}
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm">
            <span className="text-xs font-medium text-gray-800">NEW ARRIVAL</span>
          </div>
          
          {/* Bottom Decorative Border */}
          <div 
            className="absolute bottom-0 left-0 w-full h-4"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)'
            }}
          ></div>
        </div>
      </motion.div>
      
      {/* Desktop Product Image (existing implementation) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:block absolute right-0 top-0 h-full w-1/2 xl:w-2/5"
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/images/sofa.jpg"
              alt="Premium Sofa Collection"
              className="w-full h-full object-cover"
              style={{
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/10 to-transparent w-1/3"></div>
          <div className="absolute bottom-1/4 left-8 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md">
            <span className="text-xs font-medium text-gray-800">NEW COLLECTION</span>
          </div>
          <div 
            className="absolute left-0 top-0 h-full w-16"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)'
            }}
          ></div>
        </div>
      </motion.div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-10 text-center lg:text-left lg:w-1/2"
        >
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6"
          >
            <span className="block">Hadirkan Kenyamanan</span>
            <span className="block font-medium text-gray-800">Ruang Tamu Anda</span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-700 mb-8 md:mb-10"
          >
            Menyesuaikan dengan kenyamanan, desain, dan kualitas sofa.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <button className="px-6 md:px-8 py-2 md:py-3 border border-transparent text-sm md:text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 shadow-lg group relative overflow-hidden">
              <span className="relative z-10">Lihat Koleksi</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="px-6 md:px-8 py-2 md:py-3 border border-gray-300 text-sm md:text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 transition-all duration-300 relative group">
              <span className="relative z-10">Konsultasi Gratis</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </button>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 md:mt-16 flex flex-col items-center lg:items-start"
          >
            <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 flex items-center">
              <span className="mr-2">TRUSTED BY PREMIUM BRANDS</span>
              <span className="hidden md:inline-block w-16 h-px bg-gray-400"></span>
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              {['Architectural Digest', 'Elle Decor', 'Dwell', 'House & Garden'].map((logo) => (
                <span key={logo} className="text-sm md:text-base font-medium text-gray-800 relative">
                  {logo}
                  <span className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gray-600 rounded-full"></span>
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div 
        animate={{
          y: [0, -15, 0],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute top-1/4 left-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 opacity-20 blur-xl"
      />
      <motion.div 
        animate={{
          y: [-10, 10, -10],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute bottom-1/3 right-10 md:right-20 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-300 opacity-20 blur-xl"
      />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-gray-400 opacity-40"></div>
      <div className="absolute bottom-8 right-8 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-gray-400 opacity-40"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
          <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;