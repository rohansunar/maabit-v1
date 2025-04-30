'use client';

import React from "react";
import { useCalendlyDialog } from "../hooks/useCalendlyDialog";

export default function CTASection() {
  const { openCalendly, CalendlyModal } = useCalendlyDialog('https://calendly.com/dipuraj-thapa/15min');

  return (
    <section className="relative py-20 px-4 md:px-0">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/cta-bg.jpg"
          alt="Team working together"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maabit-blue/80 via-purple-500/60 to-blue-900/80" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center text-white z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Transform Your Digital Presence?</h2>
        <p className="text-lg md:text-xl mb-8 text-white/90">
          Book a free consultation with our experts to discuss your project requirements and explore how we can help you achieve your business goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-maabit-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-50 transition text-lg"
            onClick={openCalendly}
          >
            Schedule Free Consultation
          </button>
          <CalendlyModal />
          <button className="bg-white/10 border border-white/30 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-white/20 transition text-lg flex items-center gap-2">
            Contact Us
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}