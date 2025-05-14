"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate = "2025-05-31T23:59:59" }) => {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
          jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
          menit: Math.floor((diff / 1000 / 60) % 60),
          detik: Math.floor((diff / 1000) % 60)
        });
      } else {
        setTimeLeft({ hari: 0, jam: 0, menit: 0, detik: 0 });
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { label: "Hari", value: timeLeft.hari },
    { label: "Jam", value: timeLeft.jam },
    { label: "Menit", value: timeLeft.menit },
    { label: "Detik", value: timeLeft.detik }
  ];

  return (
    <section
      className="py-16 bg-white"
      role="timer"
      aria-label="Hitung mundur promo fashion"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2"
        >
          Promo Fashion Eksklusif
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-light text-gray-800 mb-10"
        >
          Waktu hampir habis!
        </motion.p>

        <div className="flex justify-center gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                <time
                  className="text-2xl sm:text-3xl font-semibold text-gray-900"
                  dateTime={item.value.toString()}
                >
                  {item.value.toString().padStart(2, "0")}
                </time>
              </div>
              <span className="mt-2 text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 text-sm text-gray-500"
        >
          Jangan lewatkan koleksi terbatas kami. Tampil beda di musim ini.
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownTimer;
