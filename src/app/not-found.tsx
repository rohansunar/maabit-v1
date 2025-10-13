'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    setMounted(true);

    // Handle window resize for responsiveness
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) {
    return null;
  }

  // Responsive text size based on screen width
  const getResponsiveSize = (base: number, min: number, max: number) => {
    if (!windowSize.width) return base;
    const size = Math.max(min, Math.min(max, base * (windowSize.width / 1440)));
    return `${size}rem`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Background animated circles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${['#0099ff', '#9c27b0', '#ff6b6b', '#51cf66', '#fcc419', '#0099ff'][i % 6]} 0%, transparent 70%)`,
              width: `${Math.random() * 40 + 10}vw`,
              height: `${Math.random() * 40 + 10}vw`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="font-extrabold text-white tracking-widest" style={{ fontSize: getResponsiveSize(9, 5, 12) }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-maabit-blue via-purple-500 to-blue-600">
              404
            </span>
          </h1>

          {/* Animated Glitch Effect */}
          <motion.div
            className="absolute -top-1 left-0 right-0 font-extrabold text-white tracking-widest opacity-20"
            style={{ fontSize: getResponsiveSize(9, 5, 12) }}
            animate={{
              x: [0, -4, 6, -8, 0],
              color: ["#ff0000", "#0000ff", "#00ff00", "#ffffff"]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: "reverse"
            }}
          >
            404
          </motion.div>

          {/* Digital noise effect */}
          <motion.div
            className="absolute inset-0 z-0 opacity-10"
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 0.2, repeat: Infinity }}
          >
            {[...Array(20)].map((_, i) => (
              <div
                key={`noise-${i}`}
                className="absolute bg-white"
                style={{
                  width: `${Math.random() * 5 + 1}px`,
                  height: `${Math.random() * 5 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 mx-auto bg-gradient-to-r from-maabit-blue via-purple-500 to-blue-600 my-6 max-w-md"
        />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            <span className="relative">
              Oops! Page Not Found
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-maabit-blue"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
            Don't worry, let's get you back on track.
          </p>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link href="/" className="group bg-maabit-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-bold shadow-lg hover:shadow-maabit-blue/30 flex items-center justify-center gap-2 relative overflow-hidden">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </span>
          </Link>
          <Link href="/contact" className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold shadow-lg flex items-center justify-center gap-2 relative overflow-hidden">
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 group-hover:w-full transition-all duration-500"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
