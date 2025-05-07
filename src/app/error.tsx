'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Error Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-7xl font-extrabold text-white tracking-widest">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-600">
              Oops!
            </span>
          </h1>
        </motion.div>

        {/* Animated Line */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 mx-auto bg-gradient-to-r from-red-500 via-orange-500 to-red-600 my-6 max-w-md"
        />

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Something went wrong
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
          </p>
        </motion.div>

        {/* Animated Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={reset}
            className="bg-maabit-blue text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-bold shadow-lg hover:shadow-maabit-blue/30 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Again
          </button>
          <Link href="/" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold shadow-lg flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8 p-4 bg-gray-800/50 rounded-lg text-left max-w-2xl mx-auto"
          >
            <h3 className="text-red-400 font-mono font-bold mb-2">Error Details:</h3>
            <p className="text-gray-300 font-mono text-sm overflow-auto max-h-40">
              {error.message}
            </p>
            {error.stack && (
              <details className="mt-2">
                <summary className="text-gray-400 cursor-pointer">Stack trace</summary>
                <pre className="text-xs text-gray-400 mt-2 overflow-auto max-h-60 p-2 bg-black/30 rounded">
                  {error.stack}
                </pre>
              </details>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
