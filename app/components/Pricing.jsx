"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Pemula",
      price: {
        monthly: "Rp750.000",
        annual: "Rp600.000",
      },
      description: "Cocok untuk profesional individu dan tim kecil",
      features: [
        "Hingga 5 pengguna",
        "Analitik dasar",
        "Dukungan email",
        "Penyimpanan 10GB",
        "Akses API"
      ],
      cta: "Mulai Sekarang",
      featured: false
    },
    {
      name: "Profesional",
      price: {
        monthly: "Rp1.500.000",
        annual: "Rp1.200.000",
      },
      description: "Ideal untuk bisnis yang sedang berkembang dengan kebutuhan lanjutan",
      features: [
        "Hingga 20 pengguna",
        "Analitik lanjutan",
        "Dukungan email prioritas",
        "Penyimpanan 100GB",
        "Akses API + webhooks",
        "Integrasi kustom"
      ],
      cta: "Coba Gratis",
      featured: true
    },
    {
      name: "Perusahaan",
      price: {
        monthly: "Rp3.000.000",
        annual: "Rp2.400.000",
      },
      description: "Untuk organisasi besar dengan kebutuhan khusus",
      features: [
        "Pengguna tanpa batas",
        "Analitik lanjutan + AI",
        "Dukungan telepon 24/7",
        "Penyimpanan 1TB",
        "Manajer akun khusus",
        "Integrasi kustom",
        "SLA uptime 99,9%"
      ],
      cta: "Hubungi Penjualan",
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Bagian */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Harga yang <span className="font-medium">sederhana</span> & transparan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.
          </p>
          
          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className={`mr-4 text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Bulanan</span>
            <button
              type="button"
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span
                className={`${
                  isAnnual ? 'translate-x-6 bg-gray-900' : 'translate-x-1 bg-white'
                } inline-block h-4 w-4 transform rounded-full transition-transform`}
              />
            </button>
            <span className={`ml-4 text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Tahunan <span className="text-green-600">(Hemat 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Kartu Harga */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border ${
                plan.featured 
                  ? 'border-gray-900 shadow-lg' 
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full bg-gray-900 text-xs font-medium text-white">
                    Paling Populer
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className={`text-lg font-medium ${
                  plan.featured ? 'text-gray-900' : 'text-gray-700'
                }`}>
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                
                <div className="mt-6">
                  <p className="text-4xl font-light tracking-tight text-gray-900">
                    {isAnnual ? plan.price.annual : plan.price.monthly}
                    <span className="text-base font-medium text-gray-500">
                      {isAnnual ? '/tahun' : '/bulan'}
                    </span>
                  </p>
                </div>
                
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`mt-8 w-full px-6 py-3 border text-base font-medium rounded-md transition-all ${
                    plan.featured
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Enterprise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium text-gray-500 mb-4">
            BUTUH SOLUSI KUSTOM?
          </p>
          <button className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all">
            Hubungi Tim Enterprise
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
