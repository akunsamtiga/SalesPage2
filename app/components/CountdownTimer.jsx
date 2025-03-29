"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate = '2025-05-31T23:59:59' }) => {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Memicu animasi
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
          menit: Math.floor((difference / 1000 / 60) % 60),
          detik: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Variasi animasi
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.3,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          <h2 className="text-lg font-medium text-gray-500 mb-2">
            PENAWARAN TERBATAS
          </h2>
          <p className="text-2xl font-light text-gray-700 mb-8">
            Promo berakhir dalam:
          </p>

          <div className="flex justify-center space-x-4 sm:space-x-6">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                custom={index}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm">
                    <span className="text-2xl sm:text-3xl font-medium text-gray-900">
                      {value.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <span className="mt-2 text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {unit}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-gray-500"
          >
            Jangan lewatkan kesempatan ini! Dapatkan sofa impian Anda sebelum waktu habis.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
