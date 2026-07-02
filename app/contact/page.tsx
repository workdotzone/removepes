'use client';

import HeroSection from '../components/HeroSection';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'cockroach',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: 'cockroach', message: '' });
  };

  return (
    <>
      <HeroSection
        title="Get In Touch"
        subtitle="Contact us for a free inspection and personalized pest control solution."
      />

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                Phone
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <a href="tel:+919420300006" className="hover:text-blue-600 transition">
                  +91-94203 00006
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Available 24/7
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                <a href="mailto:info@removepest.in" className="hover:text-blue-600 transition">
                  info@removepest.in
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Response within 24 hours
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
                Flat 09, Sarita CHS, Building 24, Reclamation<br/>
                Bandra West, Mumbai - 400050
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Serving all areas
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-6 text-center">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                  placeholder="+91-98765 43210"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Select Service *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                >
                  <option value="cockroach">Cockroach Control</option>
                  <option value="termite">Termite Control</option>
                  <option value="rodent">Rodent Control</option>
                  <option value="bedbug">Bedbugs Treatment</option>
                  <option value="mosquito">Mosquito Control</option>
                  <option value="spider">Spider & Insect Control</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                  placeholder="Tell us about your pest problem..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
              >
                Send Message
              </button>

              <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Service Areas in Mumbai
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We serve all areas of Mumbai and suburbs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'Andheri',
              'Bandra',
              'Dadar',
              'Fort',
              'Powai',
              'Worli',
              'Malad',
              'Navi Mumbai',
              'Thane',
              'Borivali',
              'Kandivali',
              'Vile Parle',
            ].map((area, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-700 p-4 rounded-lg text-gray-700 dark:text-gray-300 font-semibold hover:bg-blue-100 dark:hover:bg-slate-600 transition"
              >
                📍 {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Is your pest control service safe for children and pets?',
                a: 'Yes, we use eco-friendly and safe methods that are suitable for families and pets. All chemicals used are approved and safe when applied by professionals.',
              },
              {
                q: 'How long does the pest control treatment take?',
                a: 'The duration depends on the type of pest and size of the property. Usually, it takes 30 minutes to 2 hours. We will inform you during the inspection.',
              },
              {
                q: 'Do you provide a warranty or guarantee?',
                a: 'Yes, we provide a guarantee on our services. If pests return within the specified period, we will provide free follow-up treatment.',
              },
              {
                q: 'How often should I get pest control treatment?',
                a: 'It depends on your location and the type of pest. Generally, monthly or quarterly maintenance treatments are recommended to keep your property pest-free.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-3">
                  Q: {faq.q}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  A: {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-900 dark:to-slate-800 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-6">
              Ready to Eliminate Your Pest Problem?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Call us now or fill the form above for immediate assistance!
            </p>
            <a href="tel:+919420300006" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition text-lg">
              📞 Call Now: +91-94203 00006
            </a>
          </div>
      </section>
    </>
  );
}
