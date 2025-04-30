'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCalendlyDialog } from "../hooks/useCalendlyDialog";

const headlineWords = [
  "Transform Your",
  "Digital Vision",
  "Into Reality",
];

export default function Hero() {
  const { openCalendly, CalendlyModal } = useCalendlyDialog('https://calendly.com/dipuraj-thapa/15min');

  return (
    <section
      className="relative text-white pt-32 pb-24 w-full min-h-[700px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1607799279861-4dd421887fb3)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80" />
      {/* Content */}
      <div className="max-w-7xl mx-auto relative w-full z-10 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="inline-block bg-gray-900/90 text-maabit-blue px-7 py-2 rounded-full text-lg font-bold shadow-xl backdrop-blur-md tracking-wide border border-white/10 animate-fade-in">
                Ultimate Software Development Agency
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {headlineWords.map((line, idx) => (
                <span key={idx} className="block">
                  {line === "Digital Vision" ? (
                    <motion.span
                      initial={{ backgroundPosition: "0% 50%" }}
                      animate={{ backgroundPosition: "100% 50%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="text-maabit-blue bg-gradient-to-r from-maabit-blue via-blue-400 to-blue-600 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,153,255,0.25)]"
                      style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
                    >
                      {line}
                    </motion.span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h1>
            <motion.p
              className="text-gray-200 mb-8 text-lg md:text-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              We craft innovative software, web, mobile, and AI solutions that help businesses grow, scale, and thrive in the digital landscape.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.07, boxShadow: "0 0 0 4px #0099FF44" }}
                whileTap={{ scale: 0.97 }}
                className="bg-maabit-blue text-white px-10 py-5 rounded-2xl hover:shadow-[0_8px_32px_0_rgba(0,153,255,0.25)] transition-all duration-300 font-extrabold flex items-center gap-3 text-xl shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 border-2 border-transparent hover:border-maabit-blue animate-glow"
                onClick={openCalendly}
              >
                Book a Discovery Call
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10m-9 8h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.button>
              <CalendlyModal />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-700/40 animate-float"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3"
                alt="Digital Solutions"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
                priority
              />
              {/* Modern Tech Stack label */}
              <motion.div
                className="absolute top-4 left-4 bg-gray-900/90 text-maabit-blue px-6 py-2 rounded-full text-lg font-bold shadow-lg backdrop-blur-md flex items-center gap-2 border border-white/10 animate-fade-in"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.1 }}
              >
                <span role="img" aria-label="code">&lt;/&gt;</span> Modern Tech Stack
              </motion.div>
              {/* Client Satisfaction badge */}
              <motion.div
                className="absolute bottom-4 right-4 bg-white/95 text-gray-900 px-7 py-4 rounded-2xl text-lg font-extrabold shadow-2xl flex items-center gap-3 border-2 border-maabit-blue animate-pulse"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
                transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <span className="bg-maabit-blue text-white rounded-full p-2 mr-1 flex items-center justify-center text-lg shadow-md">✔️</span>
                <span className="text-xs font-medium">Client Satisfaction</span>
                <span className="text-maabit-blue font-extrabold text-lg ml-1">98%</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* Bottom white wave/curve */}
        <div className="pointer-events-none select-none w-full -mt-12" aria-hidden="true">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[80px] md:h-[120px]">
            <path d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z" fill="#fff" />
          </svg>
        </div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <StatItem
              number="39+"
              text="Projects Completed"
              description="Successfully delivered projects"
            />
            <StatItem
              number="10+"
              text="Expert Developers"
              description="Skilled team members"
            />
            <StatItem
              number="3+"
              text="Years Experience"
              description="Industry expertise"
            />
            <StatItem
              number="21%"
              text="Satisfaction Boost"
              description="Client success rate"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface StatItemProps {
  number: string;
  text: string;
  description: string;
}

function CountUp({ end, duration = 1.2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    let frame: number;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);
  return <span>{count}{typeof end === 'number' && !Number.isInteger(end) ? '+' : ''}</span>;
}

function StatItem({ number, text, description }: StatItemProps) {
  // Extract numeric part for animation
  const match = number.match(/([\d]+)/);
  const end = match ? parseInt(match[1], 10) : 0;
  const hasPlus = number.includes('+') || number.includes('%');
  const suffix = number.replace(/[\d]/g, '');
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center p-4 hover:bg-white/5 rounded-xl transition-all duration-300"
    >
      <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
        <CountUp end={end} />{suffix}
      </div>
      <div className="text-xl font-semibold text-gray-900 mb-2">{text}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </motion.div>
  );
}