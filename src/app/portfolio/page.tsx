"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

const EcommerceServicePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-gray-50 text-gray-800 font-sans">
        <div className="relative overflow-hidden bg-gray-50 text-gray-800 font-sans">
          {/* Header */}
          <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pt-20 pb-40 mt-14 mb-14 text-center">
            <h1 className="text-4xl font-bold">E-Commerce Solutions</h1>
            <p className="mt-2 text-lg">Build scalable online stores with modern features</p>
          </header>

          {/* Hero / Banner Image */}
          <section className="max-w-6xl mx-auto absolute inset-x-0 -mt-40 z-10 px-6">
            <img
              src="/images/cropped-Screenshot 2025-09-20 at 6.03.15 PM.png"
              alt="E-Commerce Platform Preview"
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </section>
          {/* Service Overview */}
          <section className="max-w-6xl mx-auto pb-16 px-6 mt-80">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Our E-Commerce solution empowers businesses to sell products online with a seamless
              shopping experience. From advanced product filtering to secure payments and inventory
              management, we provide everything needed to grow and scale in today’s competitive
              digital marketplace.
            </p>
          </section>
        </div>

        {/* Key Features */}
        <section className="bg-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🔍",
                  title: "Advanced Product Filtering",
                  desc: "Help customers quickly find what they’re looking for with smart filtering and search options.",
                  color: "text-blue-600",
                },
                {
                  icon: "💳",
                  title: "Secure Payments",
                  desc: "Multiple payment gateway integrations to ensure smooth and safe transactions.",
                  color: "text-green-600",
                },
                {
                  icon: "📦",
                  title: "Inventory Management",
                  desc: "Track stock levels, manage SKUs, and get alerts for low inventory automatically.",
                  color: "text-purple-600",
                },
                {
                  icon: "📈",
                  title: "Scalable Architecture",
                  desc: "Built to handle growing traffic, product catalogs, and business expansion effortlessly.",
                  color: "text-yellow-600",
                },
                {
                  icon: "📊",
                  title: "Analytics & Reports",
                  desc: "Gain insights into sales, customers, and products with built-in analytics tools.",
                  color: "text-red-600",
                },
                {
                  icon: "📱",
                  title: "Mobile-Friendly",
                  desc: "Fully responsive design to provide a smooth shopping experience across devices.",
                  color: "text-indigo-600",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow hover:shadow-lg transition bg-gray-50"
                >
                  <div className={`${feature.color} text-3xl mb-3`}>{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
};

export default EcommerceServicePage;
