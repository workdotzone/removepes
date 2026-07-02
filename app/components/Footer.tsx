import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-900 dark:to-slate-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">RemovePest</h3>
            <p className="text-blue-100 text-sm">
              Professional pest control services in Mumbai with 24/7 emergency support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li className="hover:text-white transition cursor-pointer">Cockroach Control</li>
              <li className="hover:text-white transition cursor-pointer">Termite Control</li>
              <li className="hover:text-white transition cursor-pointer">Rodent Control</li>
              <li className="hover:text-white transition cursor-pointer">Bedbugs Treatment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-400">Contact</h4>
            <div className="text-blue-100 text-sm space-y-2">
              <p>📞 <a href="tel:+919453394533" className="hover:text-white transition">+91-94533 94533</a></p>
              <p>📧 <a href="mailto:info@removepest.in" className="hover:text-white transition">info@removepest.in</a></p>
              <p>📍 D.N. Dube Road, Ratan Nagar, Dahisar (E), Mumbai - 400068</p>
              <p>⏰ 24/7 Available</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8">
          <p className="text-center text-blue-100 text-sm">
            © 2024 RemovePest. All rights reserved. | Professional Pest Control Services in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
