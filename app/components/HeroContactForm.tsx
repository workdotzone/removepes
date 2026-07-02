'use client';

import { useState } from 'react';

export default function HeroContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Cockroach Control',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hero Form Submitted:', formData);
    alert(`Thank you ${formData.name}! We will contact you soon at ${formData.phone}`);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Cockroach Control',
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-6">Get Free Inspection</h3>
      {submitted ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">✓</div>
          <p className="text-green-600 dark:text-green-400 font-semibold">Thank you! We'll contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91-98765 43210"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Service *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Cockroach Control</option>
              <option>Termite Control</option>
              <option>Rodent Control</option>
              <option>Bedbugs Treatment</option>
              <option>Mosquito Control</option>
              <option>Spider & Insect Control</option>
              <option>Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Get Free Quote
          </button>
        </form>
      )}
    </div>
  );
}
