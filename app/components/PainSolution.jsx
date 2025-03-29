"use client"
import React from 'react';
import { motion } from 'framer-motion';

const PainSolution = () => {
  const painPoints = [
    {
      pain: "Wasting resources on inefficient solutions",
      solution: "Our optimized platform delivers maximum output with minimal resource input, cutting costs by average 40%",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      pain: "Struggling with complex integrations",
      solution: "Seamless API-first design works out-of-the-box with your existing stack",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      pain: "Losing customers to poor experience",
      solution: "Elevate customer satisfaction with our intuitive, high-performance interface",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const solutionItem = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-20"
        >
          <motion.h2 variants={item} className="text-3xl font-light text-gray-900 sm:text-4xl">
            The <span className="font-medium">Problems</span> We Solve
          </motion.h2>
          <motion.p variants={item} className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Every great solution starts with understanding the pain. Here's how we transform your challenges into opportunities.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Pain Point */}
              <motion.div 
                variants={item}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-red-50 text-red-600">
                    {point.icon}
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Pain Point</h3>
                </div>
                <p className="text-gray-700 text-lg">{point.pain}</p>
              </motion.div>

              {/* Our Solution */}
              <motion.div 
                variants={solutionItem}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-60 z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-900">Our Solution</h3>
                  </div>
                  <p className="text-gray-700 text-lg">{point.solution}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-medium text-gray-500">
            DON'T JUST TAKE OUR WORD FOR IT
          </p>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-6 inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 cursor-pointer transition-all duration-300"
          >
            See Case Studies
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainSolution;