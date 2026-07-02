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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      data.append('access_key', 'ed52b2f5-6cd1-4aa2-96ed-f647fffc21ad');
      data.append('subject', `New Lead: ${formData.service} — ${formData.name} (${formData.phone})`);
      data.append('from_name', 'RemovePest Website');
      data.append('redirect', 'false');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message || 'Failed');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: 'Cockroach Control' });
    } catch {
      setError('Something went wrong. Please call us directly at +91-94203 00006.');
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            className="w-full bg-blue-950 hover:bg-blue-900 disabled:opacity-60 text-white font-bold py-2 px-4 rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <><svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Sending...</>
            ) : 'Get Free Quote'}
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      )}
    </div>
  );
}
