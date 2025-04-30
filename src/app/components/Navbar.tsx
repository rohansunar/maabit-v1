'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCalendlyDialog } from '../hooks/useCalendlyDialog';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCalendly, CalendlyModal } = useCalendlyDialog('https://calendly.com/dipuraj-thapa/15min');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#e5e7eb] backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-maabit-blue">Maa</span>
              <span className="text-maabit-black">bit</span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/career">Career</NavLink>
          </div>

          {/* Book an Appointment Button */}
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors hidden md:block"
            onClick={openCalendly}
            >
              Book an Appointment
            </button>
            <CalendlyModal />
            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="/services">Services</MobileNavLink>
              <MobileNavLink href="/projects">Projects</MobileNavLink>
              <MobileNavLink href="/blog">Blog</MobileNavLink>
              <MobileNavLink href="/career">Career</MobileNavLink>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4"
              onClick={openCalendly}
              >
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-800 hover:text-blue-700 transition-colors font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-gray-800 hover:text-blue-700 transition-colors py-2 font-medium"
    >
      {children}
    </Link>
  );
}