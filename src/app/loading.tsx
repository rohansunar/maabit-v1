'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center">
      <div className="text-center">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-t-maabit-blue border-r-purple-500 border-b-blue-600 border-l-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-maabit-blue"
              animate={{ rotate: -180 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
        
        <motion.h2
          className="text-2xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Loading
        </motion.h2>
        
        <motion.div
          className="flex space-x-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-maabit-blue rounded-full"
              animate={{ y: ["0%", "-50%", "0%"] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                delay: dot * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
