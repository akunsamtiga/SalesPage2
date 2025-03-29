"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah saya bisa mencoba sebelum membeli?",
      answer: "Ya! Kami menyediakan uji coba gratis selama 14 hari dengan akses penuh ke semua fitur premium. Tidak diperlukan kartu kredit."
    },
    {
      question: "Bagaimana sistem pembayaran tahunan bekerja?",
      answer: "Dengan pembayaran tahunan, Anda mendapatkan diskon 20% dibandingkan pembayaran bulanan. Anda akan dikenakan biaya satu kali dalam setahun dan dapat membatalkan kapan saja dengan pemberitahuan 30 hari sebelumnya."
    },
    {
      question: "Apakah saya bisa meng-upgrade atau menurunkan paket saya?",
      answer: "Tentu! Anda dapat mengubah paket kapan saja. Upgrade berlaku langsung dengan perhitungan biaya prorata, sedangkan penurunan paket akan berlaku pada siklus penagihan berikutnya."
    },
    {
      question: "Metode pembayaran apa yang diterima?",
      answer: "Kami menerima semua kartu kredit utama (Visa, Mastercard, American Express), PayPal, serta transfer bank untuk kontrak tahunan."
    },
    {
      question: "Bagaimana keamanan data saya terjamin?",
      answer: "Kami menggunakan enkripsi kelas enterprise, audit keamanan rutin, dan mematuhi regulasi GDPR. Data Anda disimpan di pusat data bersertifikasi SOC 2 Type II."
    },
    {
      question: "Bagaimana kebijakan pembatalan?",
      answer: "Anda dapat membatalkan kapan saja. Untuk paket bulanan, pembatalan berlaku di akhir siklus tagihan. Untuk paket tahunan, Anda akan menerima pengembalian dana prorata untuk bulan yang tidak terpakai."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Pertanyaan yang <span className="font-medium">sering diajukan</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Semua yang perlu Anda ketahui tentang layanan kami.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="overflow-hidden"
            >
              <div 
                className={`border border-gray-200 rounded-lg transition-all ${activeIndex === index ? 'bg-white shadow-sm' : 'bg-white hover:bg-gray-50'}`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ 
                    height: activeIndex === index ? 'auto' : 0,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-0 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium text-gray-500 mb-4">
            MASIH ADA PERTANYAAN?
          </p>
          <button className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all">
            Hubungi Kami
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
