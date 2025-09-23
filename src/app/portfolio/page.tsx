import Image from "next/image";
import React from "react";
import MediaCarousel, { MediaItem } from "../components/MediaCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ECommercePlatformLayout from "./layout";

const EcommerceServicePage: React.FC = () => {
  const media: MediaItem[] = [
    { type: "image", src: "/images/ecommerce-dashboard.png", alt: "Dashboard" },
    { type: "image", src: "/images/ecommerce-checkout.jpg", alt: "Checkout" },
    { type: "video", src: "https://www.youtube.com/watch?v=zxzU2AQvlbI" },
    // Or explicitly specify as youtube:
    { type: "youtube", src: "https://www.youtube.com/watch?v=6FsYk9GIv2Y" },
  ];
  return (
    <ECommercePlatformLayout>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[600px] w-full">
          <Image
            src="/images/cropped-Screenshot 2025-09-20 at 6.03.15 PM.png"
            alt="E-Commerce Platform"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 text-white">
              <div className="max-w-2xl">
                {/* Badge */}
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
                  Premium E-Commerce Solution
                </span>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  Build Your Online Store With Excellence
                </h1>

                {/* Description */}
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  A complete e-commerce solution with advanced product filtering, secure payment
                  integration, and inventory management system designed to help businesses scale
                  online.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                    Start Your Project
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "5k+", label: "Products Managed", desc: "Average inventory size" },
                { number: "100k+", label: "Monthly Users", desc: "Platform performance" },
                { number: "99.9%", label: "Uptime Guarantee", desc: "Reliability assured" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wide">Features</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform provides all the tools and features necessary to build, manage, and
                grow your online business.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "🔍",
                  title: "Advanced Product Filtering",
                  desc: "Smart filtering and search options to help customers find products quickly.",
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  icon: "💳",
                  title: "Secure Payments",
                  desc: "Multiple payment gateway integrations for safe transactions.",
                  gradient: "from-green-500 to-green-600",
                },
                {
                  icon: "📦",
                  title: "Inventory Management",
                  desc: "Track stock levels and manage SKUs with automatic alerts.",
                  gradient: "from-purple-500 to-purple-600",
                },
                {
                  icon: "📈",
                  title: "Scalable Architecture",
                  desc: "Handles growing traffic and business expansion effortlessly.",
                  gradient: "from-orange-500 to-orange-600",
                },
                {
                  icon: "📊",
                  title: "Analytics & Reports",
                  desc: "Gain insights into sales, customers, and product performance.",
                  gradient: "from-red-500 to-red-600",
                },
                {
                  icon: "📱",
                  title: "Mobile-First Design",
                  desc: "Fully responsive design for seamless shopping on any device.",
                  gradient: "from-indigo-500 to-indigo-600",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wide">Gallery</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                See Our Platform in Action
              </h2>
            </div>
            <MediaCarousel media={media} />
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Built with Modern Technology
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                "Next.js",
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "Stripe",
                "Tailwind CSS",
                "AWS",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to ensure your e-commerce platform is fast,
              secure, and scalable.
            </p>
          </div>
        </section>

        {/* CTA Form Section */}
        <section className="py-20 bg-gray-50 mb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold uppercase tracking-wide">
                Get Started
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Ready to Launch Your Store?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll contact you within 24 hours to discuss your
                project.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="lg:flex">
                {/* Form Side */}
                <div className="lg:w-2/3 p-8 lg:p-12">
                  <form className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Business Information */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        Business Information
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Business Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="Your business name"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Industry *
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                              <option>Select Industry</option>
                              <option>Fashion & Apparel</option>
                              <option>Electronics</option>
                              <option>Home & Garden</option>
                              <option>Health & Beauty</option>
                              <option>Food & Beverage</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Product Count
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                              <option>1-50 products</option>
                              <option>51-200 products</option>
                              <option>201-1000 products</option>
                              <option>1000+ products</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Requirements */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                        Project Requirements
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-4">
                            Required Features
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                              "Payment Gateway",
                              "Inventory Management",
                              "Sales Analytics",
                              "Mobile App",
                              "SEO Optimization",
                              "Multi-language",
                            ].map((feature, i) => (
                              <label key={i} className="flex items-center space-x-3">
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                />
                                <span className="text-gray-700">{feature}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Project Budget
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                              <option>$1,000 - $5,000</option>
                              <option>$5,000 - $15,000</option>
                              <option>$15,000 - $30,000</option>
                              <option>$30,000+</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Timeline
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300">
                              <option>1-3 months</option>
                              <option>3-6 months</option>
                              <option>6-12 months</option>
                              <option>12+ months</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Additional Notes
                          </label>
                          <textarea
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                            placeholder="Tell us about your specific requirements..."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                    >
                      Submit Your Project Request
                    </button>
                  </form>
                </div>

                {/* Info Side */}
                <div className="lg:w-1/3 bg-gradient-to-b from-blue-600 to-blue-700 text-white p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                  <div className="space-y-6">
                    {[
                      {
                        icon: "🚀",
                        title: "Fast Delivery",
                        desc: "90-day average project completion",
                      },
                      {
                        icon: "💎",
                        title: "Premium Quality",
                        desc: "Enterprise-grade solutions",
                      },
                      {
                        icon: "🛡️",
                        title: "Ongoing Support",
                        desc: "24/7 technical assistance",
                      },
                      {
                        icon: "📈",
                        title: "Proven Results",
                        desc: "100+ successful stores launched",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-2xl flex-shrink-0">{item.icon}</div>
                        <div>
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                          <p className="text-blue-100 text-sm mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <h4 className="font-semibold mb-3">Next Steps</h4>
                    <ol className="space-y-2 text-sm text-blue-100">
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          1
                        </span>
                        Initial consultation call
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          2
                        </span>
                        Custom proposal & timeline
                      </li>
                      <li className="flex items-center">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          3
                        </span>
                        Project kickoff & development
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ECommercePlatformLayout>
  );
};

export default EcommerceServicePage;
