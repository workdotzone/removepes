'use client';

import HeroSection from '../components/HeroSection';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    area: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', area: '', message: '' });
  };

  const serviceAreas = [
    { name: 'Andheri', slug: 'andheri' }, { name: 'Bandra', slug: 'bandra' },
    { name: 'Borivali', slug: 'borivali' }, { name: 'Dahisar', slug: 'dahisar' },
    { name: 'Dadar', slug: 'dadar' }, { name: 'Malad', slug: 'malad' },
    { name: 'Kandivali', slug: 'kandivali' }, { name: 'Goregaon', slug: 'goregaon' },
    { name: 'Jogeshwari', slug: 'jogeshwari' }, { name: 'Vile Parle', slug: 'vile-parle' },
    { name: 'Santacruz', slug: 'santacruz' }, { name: 'Kurla', slug: 'kurla' },
    { name: 'Powai', slug: 'powai' }, { name: 'Ghatkopar', slug: 'ghatkopar' },
    { name: 'Mulund', slug: 'mulund' }, { name: 'Thane', slug: 'thane' },
    { name: 'Navi Mumbai', slug: 'navi-mumbai' }, { name: 'Worli', slug: 'worli' },
    { name: 'Fort', slug: 'fort' }, { name: 'Colaba', slug: 'colaba' },
    { name: 'Chembur', slug: 'chembur' }, { name: 'Wadala', slug: 'wadala' },
    { name: 'Sion', slug: 'sion' }, { name: 'Mira Road', slug: 'mira-road' },
    { name: 'Virar', slug: 'virar' }, { name: 'Vasai', slug: 'vasai' },
    { name: 'Nalasopara', slug: 'nalasopara' }, { name: 'Bhiwandi', slug: 'bhiwandi' },
    { name: 'Dombivali', slug: 'dombivali' }, { name: 'Kharghar', slug: 'kharghar' },
    { name: 'Nerul', slug: 'nerul' }, { name: 'Vashi', slug: 'vashi' },
  ];

  return (
    <>
      <HeroSection
        title="Contact RemovePest Mumbai"
        subtitle="Get a free pest inspection today. Same-day service available across Mumbai. Call, WhatsApp, or fill the form below."
      />

      {/* Quick Contact Bar */}
      <div className="bg-blue-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <a href="tel:+919420300006" className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-6 rounded-xl transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01L6.62 10.79z"/></svg>
              Call: +91-94203 00006
            </a>
            <a href="https://wa.me/919420300006?text=Hello%2C%20I%20need%20pest%20control%20services%20in%20Mumbai." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
            <a href="mailto:info@removepest.in" className="flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@removepest.in
            </a>
          </div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-2">Book a Free Inspection</h2>
                <p className="text-gray-600 dark:text-gray-300">Fill the form and our expert will call you back within 30 minutes.</p>
              </div>

              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-2xl p-10 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">Thank You\!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">We&apos;ve received your request. Our team will call you back within 30 minutes.</p>
                  <button onClick={() => setSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1.5 text-sm">Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:bg-slate-700 dark:text-white text-sm"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1.5 text-sm">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:bg-slate-700 dark:text-white text-sm"
                        placeholder="+91-98765 43210" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1.5 text-sm">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:bg-slate-700 dark:text-white text-sm"
                      placeholder="your@email.com" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1.5 text-sm">Select Service *</label>
                      <select name="service" value={formData.service} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-slate-700 dark:text-white text-sm">
                        <option value="">-- Choose Service --</option>
                        <option value="cockroach">Cockroach Control</option>
                        <option value="termite">Termite Control</option>
                        <option value="rodent">Rodent / Rats Control</option>
                        <option value="bedbug">Bed Bugs Treatment</option>
                        <option value="mosquito">Mosquito Control</option>
                        <option value="fly">Fly Control</option>
                        <option value="ants">Ants Control</option>
                        <option value="spider">Spider Control</option>
                        <option value="wood-borer">Wood Borer Control</option>
                        <option value="honeybee">Honey Bee Removal</option>
                        <option value="bird">Bird Nesting Control</option>
                        <option value="weed">Weed Control</option>
                        <option value="sanitization">Sanitization</option>
                        <option value="general">General Pest Control</option>
                        <option value="amc">AMC Program</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1.5 text-sm">Your Area / Location</label>
                      <input type="text" name="area" value={formData.area} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:bg-slate-700 dark:text-white text-sm"
                        placeholder="e.g. Andheri, Bandra..." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1.5 text-sm">Message / Problem Description</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:bg-slate-700 dark:text-white text-sm resize-none"
                      placeholder="Describe your pest problem briefly..."></textarea>
                  </div>

                  <button type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3.5 px-6 rounded-xl transition text-base shadow-lg shadow-blue-200 dark:shadow-none">
                    📩 Submit — Get Free Inspection
                  </button>
                  <p className="text-center text-gray-500 dark:text-gray-400 text-xs">We respond within 30 minutes · No spam, ever.</p>
                </form>
              )}
            </div>

            {/* Right: Contact Info + Map */}
            <div className="space-y-6">
              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:+919420300006" className="flex items-center gap-4 bg-blue-950 hover:bg-blue-900 text-white p-5 rounded-2xl transition">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-950" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01L6.62 10.79z"/></svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-medium mb-0.5">Call / WhatsApp</p>
                    <p className="text-white font-bold">+91-94203 00006</p>
                    <p className="text-blue-300 text-xs">Available 24/7</p>
                  </div>
                </a>

                <a href="mailto:info@removepest.in" className="flex items-center gap-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-blue-400 p-5 rounded-2xl transition">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium mb-0.5">Email Us</p>
                    <p className="text-gray-800 dark:text-white font-bold text-sm">info@removepest.in</p>
                    <p className="text-gray-400 text-xs">Reply within 24hrs</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-5 rounded-2xl sm:col-span-2">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium mb-0.5">Office Address</p>
                    <p className="text-gray-800 dark:text-white font-bold">Flat 09, Sarita CHS, Building 24</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Reclamation, Bandra West, Mumbai — 400050</p>
                    <a href="https://www.google.com/search?kgmid=/g/11z92g4fpc&q=Remove+Pest+Control+Mumbai"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-semibold mt-2 transition">
                      View on Google Maps ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="bg-blue-950 px-4 py-3 flex items-center justify-between">
                  <p className="text-white font-semibold text-sm flex items-center gap-2">
                    <span>📍</span> Remove Pest Control — Bandra West, Mumbai
                  </p>
                  <a href="https://www.google.com/search?kgmid=/g/11z92g4fpc&q=Remove+Pest+Control+Mumbai"
                    target="_blank" rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 text-xs font-semibold transition">
                    Open in Google ↗
                  </a>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=\!1m18\!1m12\!1m3\!1d4655.136205488381\!2d72.83225259999999\!3d19.052761099999998\!2m3\!1f0\!2f0\!3f0\!3m2\!1i1024\!2i768\!4f13.1\!3m3\!1m2\!1s0x3be7c9dc1e7c469f%3A0x474b841eeff38d99\!2sRemove%20Pest%20Control%20Mumbai\!5e1\!3m2\!1sen\!2sin\!4v1782973578313\!5m2\!1sen\!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Remove Pest Control Mumbai Location"
                />
              </div>

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white p-6 rounded-2xl">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><span>⏰</span> Working Hours</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Friday', time: '8:00 AM – 9:00 PM' },
                    { day: 'Saturday – Sunday', time: '9:00 AM – 7:00 PM' },
                    { day: 'Emergency Service', time: '24/7 Available' },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between border-b border-blue-800 pb-2 last:border-0 last:pb-0">
                      <span className="text-blue-200">{row.day}</span>
                      <span className="text-yellow-400 font-semibold">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-14 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-3">Areas We Serve in Mumbai</h2>
            <p className="text-gray-600 dark:text-gray-300">Same-day pest control service available across all Mumbai areas.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {serviceAreas.map((area) => (
              <a key={area.slug} href={`/locations/${area.slug}`}
                className="bg-white dark:bg-slate-700 border border-gray-100 dark:border-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-gray-700 dark:text-gray-300 px-3 py-2.5 rounded-xl text-center text-sm font-medium transition block">
                📍 {area.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300">Have a question? We&apos;ve got answers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { q: 'How quickly can you respond?', a: 'We offer same-day and next-day service across Mumbai. Emergency bookings are attended within a few hours of calling.' },
              { q: 'Is pest control safe for children and pets?', a: 'Yes. All chemicals are WHO-approved and government-certified. We advise vacating for 2–4 hours post-treatment for safety.' },
              { q: 'Do you provide a service guarantee?', a: 'Yes. All services come with a warranty (3 months to 1 year). If pests return within the warranty period, we re-treat for free.' },
              { q: 'How much does pest control cost?', a: 'Pricing starts from ₹500 and varies by service type and property size. Contact us for a free inspection and customized quote.' },
              { q: 'Do I need to vacate my home?', a: 'For most treatments, vacating for 2–4 hours is sufficient. For intensive treatments, we may advise 4–8 hours. We provide full pre-treatment guidance.' },
              { q: 'Do you serve commercial properties?', a: 'Yes. We specialize in commercial pest control for restaurants, hotels, offices, hospitals, and warehouses with FSSAI-compliant documentation.' },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 p-5 rounded-xl">
                <h3 className="font-bold text-blue-950 dark:text-white mb-2 text-sm">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Rid of Pests?</h2>
          <p className="text-blue-100 text-lg mb-8">Free inspection · Same-day service · 100% guaranteed results</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919420300006" className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-xl transition">
              📞 Call: +91-94203 00006
            </a>
            <a href="https://wa.me/919420300006?text=Hello%2C%20I%20need%20pest%20control%20services%20in%20Mumbai." target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition">
              💬 WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
