import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-blue-950 font-bold text-lg">🏠 Need Pest Control Today?</p>
            <p className="text-blue-900 text-sm">Free inspection available. Same-day service across Mumbai.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:+919420300006" className="bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-lg transition text-sm">
              📞 Call Now
            </a>
            <a href="https://wa.me/919420300006" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg transition text-sm">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/images/logo.png" alt="RemovePest Logo" width={140} height={56} className="h-14 w-auto" unoptimized />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Mumbai&apos;s most trusted pest control company since 2008. Certified experts, eco-friendly methods, 99.8% success rate.
            </p>
            <div className="flex gap-3">
              <a href="tel:+919420300006" className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm transition">
                <span>📞</span> <span>+91-94203 00006</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-blue-800 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-yellow-400 transition text-sm flex items-center gap-2">
                    <span className="text-yellow-500">›</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-blue-800 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Cockroach Control', 'Termite Control', 'Rodent Control',
                'Bed Bugs Treatment', 'Mosquito Control', 'Fly Control',
                'Spider Control', 'Ants Control',
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-gray-400 hover:text-yellow-400 transition text-sm flex items-center gap-2">
                    <span className="text-yellow-500">›</span> {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 pb-2 border-b border-blue-800 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">📞</span>
                <div>
                  <p className="text-gray-300 font-medium">Phone / WhatsApp</p>
                  <a href="tel:+919420300006" className="text-gray-400 hover:text-yellow-400 transition">+91-94203 00006</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">📧</span>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a href="mailto:info@removepest.in" className="text-gray-400 hover:text-yellow-400 transition">info@removepest.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">📍</span>
                <div>
                  <p className="text-gray-300 font-medium">Address</p>
                  <p className="text-gray-400">Flat 09, Sarita CHS, Building 24,<br />Reclamation, Bandra West,<br />Mumbai - 400050</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">⏰</span>
                <div>
                  <p className="text-gray-300 font-medium">Working Hours</p>
                  <p className="text-gray-400">24/7 — All Days Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Map + GMB Section */}
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-blue-950/40 rounded-2xl border border-blue-800">
          {/* GMB Info */}
          <div className="flex flex-col justify-between gap-5">
            <div>
              <h4 className="text-white font-bold text-base mb-3 flex items-center gap-2">
                <span className="text-yellow-400">📍</span> Find Us on Google Maps
              </h4>
              <p className="text-gray-400 text-sm mb-1">Remove Pest Control Mumbai</p>
              <p className="text-gray-400 text-sm mb-4">
                Flat 09, Sarita CHS, Building 24,<br />
                Reclamation, Bandra West,<br />
                Mumbai, Maharashtra — 400050
              </p>
              <p className="text-gray-400 text-sm mb-1">
                📞 <a href="tel:+919420300006" className="hover:text-yellow-400 transition">+91-94203 00006</a>
              </p>
              <p className="text-gray-400 text-sm">⏰ Open 24/7</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/search?kgmid=/g/11z92g4fpc&q=Remove+Pest+Control+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-2 px-4 rounded-lg transition text-sm"
              >
                🗺️ View on Google
              </a>
              <a
                href="https://wa.me/919420300006?text=Hello%2C%20I%20need%20pest%20control%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition text-sm"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden h-56 lg:h-auto min-h-[220px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4655.136205488381!2d72.83225259999999!3d19.052761099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9dc1e7c469f%3A0x474b841eeff38d99!2sRemove%20Pest%20Control%20Mumbai!5e1!3m2!1sen!2sin!4v1782973578313!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Remove Pest Control Mumbai - Google Maps"
            />
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-6 bg-blue-950/50 rounded-xl">
          <div className="text-center">
            <p className="text-yellow-400 text-2xl font-bold">15+</p>
            <p className="text-gray-400 text-xs mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-400 text-2xl font-bold">5000+</p>
            <p className="text-gray-400 text-xs mt-1">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-400 text-2xl font-bold">99.8%</p>
            <p className="text-gray-400 text-xs mt-1">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-yellow-400 text-2xl font-bold">24/7</p>
            <p className="text-gray-400 text-xs mt-1">Emergency Support</p>
          </div>
        </div>

        {/* Divider + Bottom Bar */}
        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">RemovePest</span>. All rights reserved. | Professional Pest Control Services in Mumbai
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs">
            <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
            <Link href="/services" className="hover:text-yellow-400 transition">Services</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            <Link href="/gallery" className="hover:text-yellow-400 transition">Gallery</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
