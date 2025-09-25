"use client";

import { useState } from "react";

interface PortfolioFormProps {
  serviceName: string;
}

export default function PortfolioForm({ serviceName }: PortfolioFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            Your request for {serviceName} has been submitted successfully. We'll contact you within
            24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      <div className="lg:flex">
        {/* Form Side */}
        <div className="lg:w-2/3 p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black"
                    placeholder="Your business name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black">
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
                      Project Scale
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black">
                      <option>Small (1-3 months)</option>
                      <option>Medium (3-6 months)</option>
                      <option>Large (6-12 months)</option>
                      <option>Enterprise (12+ months)</option>
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
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black"
                    placeholder="Tell us about your project requirements and goals..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black">
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
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-black">
                      <option>1-3 months</option>
                      <option>3-6 months</option>
                      <option>6-12 months</option>
                      <option>12+ months</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-black transform hover:scale-[1.02] shadow-lg"
            >
              Get Started with {serviceName}
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
                desc: "Quick project turnaround times",
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
                desc: "Successful projects delivered",
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
  );
}
