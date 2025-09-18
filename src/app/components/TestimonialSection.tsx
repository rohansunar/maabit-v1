"use client";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Working with Maabit has been transformative for our business. Their team delivered a custom software solution that streamlined our operations and reduced processing time by 40%. Their technical expertise and commitment to quality are unmatched.",
    author: "Sarah Johnson",
    title: "CTO, TechVision Inc.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    quote:
      "Maabit helped us develop a mobile app that exceeded our expectations. They took the time to understand our vision and translated it into a user-friendly solution that our customers love. Our user engagement has increased by 60% since launch.",
    author: "Michael Chen",
    title: "Founder, GrowthHub",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    quote:
      "The Maabit team was incredibly responsive and proactive throughout our project. Their attention to detail and ability to solve complex problems made a huge difference for us.",
    author: "Priya Patel",
    title: "Product Manager, FinEdge",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    quote:
      "We saw a significant boost in productivity after implementing Maabit's cloud solutions. The migration was seamless and the support was top-notch.",
    author: "David Kim",
    title: "COO, Cloudify",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5,
  },
  {
    quote:
      "From start to finish, Maabit delivered on every promise. Their creative approach and technical skills helped us launch our new platform ahead of schedule.",
    author: "Emily Nguyen",
    title: "CEO, MarketLeap",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  // Always show two testimonials side by side, loop if more
  const visible = testimonials.length > 1 ? [index, (index + 1) % testimonials.length] : [0];
  return (
    <section className="bg-gradient-to-b from-[#0b1120] to-[#1a237e] py-24 px-4 md:px-0 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* <div className="mb-2 text-sm font-bold text-maabit-blue tracking-widest uppercase">TESTIMONIALS</div> */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 flex flex-col items-center justify-center">
          What <span className="relative inline-block"><span className="text-maabit-blue">Our Clients Say</span>
            <span className="block h-1 bg-maabit-blue rounded-full w-24 mx-auto mt-1 absolute left-1/2 -translate-x-1/2"></span>
          </span>
        </h2>
        <p className="text-gray-200 mb-12 max-w-2xl mx-auto">
          Discover how we've helped businesses across industries achieve their digital transformation goals and drive measurable results.
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-8">
            {visible.map((i) => {
              const t = testimonials[i];
              return (
                <div
                  key={i}
                  className="relative flex-1 min-w-[320px] max-w-xl bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col justify-between text-left transition-all duration-300"
                >
                  {/* Blue quote icon */}
                  <svg className="w-8 h-8 text-maabit-blue mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 0 0 2 11v1a5 5 0 0 0 5 5h.17A3.001 3.001 0 0 1 10 14v-1a3 3 0 0 0-2.83-3zM17.17 6A5.001 5.001 0 0 0 12 11v1a5 5 0 0 0 5 5h.17A3.001 3.001 0 0 1 20 14v-1a3 3 0 0 0-2.83-3z"/></svg>
                  <p className="text-lg font-medium mb-8 text-white">{t.quote}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full object-cover border-2 border-maabit-blue" />
                    <div>
                      <div className="font-extrabold text-gray-900 text-base dark:text-white">{t.author}</div>
                      <div className="text-xs text-gray-400 dark:text-blue-100">{t.title}</div>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 0 0-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z"/></svg>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Navigation */}
          <div className="flex items-center gap-4 justify-center">
            <button
              className="w-12 h-12 rounded-full bg-gradient-to-br from-maabit-blue via-blue-400 to-blue-700 shadow-lg flex items-center justify-center text-white text-2xl transition transform hover:scale-110 hover:shadow-xl border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-maabit-blue/40"
              onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="w-3 h-3 rounded-full bg-maabit-blue mx-2"></span>
            <button
              className="w-12 h-12 rounded-full bg-gradient-to-br from-maabit-blue via-blue-400 to-blue-700 shadow-lg flex items-center justify-center text-white text-2xl transition transform hover:scale-110 hover:shadow-xl border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-maabit-blue/40"
              onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next testimonials"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 