'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-900 dark:to-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="RemovePest Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-white hidden sm:inline">RemovePest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800 transition">
              Home
            </Link>
            <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800 transition">
              Services
            </Link>
            <Link href="/gallery" className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800 transition">
              Gallery
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800 transition">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <a href="tel:+919453394533" className="hidden sm:inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-2 px-4 rounded-lg transition">
            +91-94533 94533
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800">
              Home
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800">
              Services
            </Link>
            <Link href="/gallery" className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800">
              Gallery
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-800">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
