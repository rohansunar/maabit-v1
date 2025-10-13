'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Features() {
  const features = [
    {
      title: 'Expert Developers',
      description: 'Our team of skilled developers brings years of experience in building robust solutions.',
      icon: '👨‍💻'
    },
    {
      title: 'Agile Methodology',
      description: 'We follow agile practices to ensure rapid development and continuous improvement.',
      icon: '🔄'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks at every stage of development.',
      icon: '✅'
    },
    {
      title: 'Industry Standards',
      description: 'We adhere to the latest industry standards and best practices.',
      icon: '🏆'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforming Ideas into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Powerful Digital Solutions</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Over 50+ satisfied clients and 200+ projects completed. Our track record speaks for itself.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Features"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 