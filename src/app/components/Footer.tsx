'use client';

import React from "react";
import { useCalendlyDialog } from "../hooks/useCalendlyDialog";

export default function Footer() {
  const { openCalendly, CalendlyModal } = useCalendlyDialog();

  return (
    <footer className="bg-[#0b1120] text-white pt-0">
      {/* Top CTA Bar */}
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <div className="bg-gradient-to-r from-maabit-blue/80 via-purple-500/60 to-blue-900/80 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 -translate-y-1/2 shadow-lg">
          <div className="text-lg md:text-xl font-bold mb-2 md:mb-0">Ready to transform your digital presence?</div>
          <button
            className="bg-white text-maabit-blue font-bold px-8 py-3 rounded-xl shadow hover:bg-blue-50 transition text-base"
            onClick={openCalendly}
          >
            Book a Free Consultation
          </button>
          <CalendlyModal />
        </div>
      </div>
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 py-12 grid md:grid-cols-5 gap-10 border-b border-white/10">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="text-2xl font-extrabold text-maabit-blue mb-2">Maabit</div>
          <p className="text-gray-300 mb-4 text-sm">We craft innovative software, web, and mobile solutions that transform businesses and accelerate growth.</p>
          <div className="text-gray-400 text-sm mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            contact@maabit.com
          </div>
          <div className="text-gray-400 text-sm mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 008.48 19h7.04a2 2 0 001.83-1.3L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" /></svg>
            +1 (123) 456-7890
          </div>
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <svg className="w-5 h-5 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a8 8 0 10-1.414 1.414l4.243 4.243a1 1 0 001.414-1.414z" /></svg>
            123 Tech Street, Silicon Valley, CA
          </div>
        </div>
        {/* Services */}
        <div>
          <div className="font-bold mb-3 text-white">Services</div>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Custom Software Development</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>AI Solutions</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <div className="font-bold mb-3 text-white">Company</div>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <div className="font-bold mb-3 text-white">Resources</div>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Free Assessments</li>
            <li>Solution Comparisons</li>
          </ul>
        </div>
        {/* Connect */}
        <div>
          <div className="font-bold mb-3 text-white">Connect</div>
          <div className="flex gap-3 mt-2">
            <a href="#" className="text-gray-400 hover:text-maabit-blue"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM20.452 20.452h-3.56v-5.605c0-1.336-.025-3.057-1.865-3.057-1.867 0-2.153 1.457-2.153 2.963v5.699h-3.56V9h3.418v1.561h.049c.476-.899 1.637-1.847 3.37-1.847 3.602 0 4.267 2.37 4.267 5.455v6.283z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-maabit-blue"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-maabit-blue"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-maabit-blue"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0z"/></svg></a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 md:px-0 py-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs">
        <div>&copy; 2025 Maabit. All rights reserved.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-maabit-blue">Privacy Policy</a>
          <a href="#" className="hover:text-maabit-blue">Terms of Service</a>
          <a href="#" className="hover:text-maabit-blue">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}