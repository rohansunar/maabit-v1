'use client';

import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your needs, goals, and vision through detailed consultation.',
      icon: '🎯'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and interactive prototypes to visualize the solution.',
      icon: '✏️'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Building your solution with clean code and thorough testing at every stage.',
      icon: '💻'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'Deploying your solution and providing ongoing maintenance and support.',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Bring
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Your Vision to Life</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our proven development process ensures high-quality results and complete client satisfaction at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                  {step.number}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 