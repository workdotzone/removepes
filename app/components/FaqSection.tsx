'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our pest control services.',
}: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const half = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, half);
  const right = faqs.slice(half);

  const FaqItem = ({ item, idx }: { item: FaqItem; idx: number }) => {
    const isOpen = openIdx === idx;
    return (
      <div
        className={`rounded-xl border transition-all duration-200 overflow-hidden ${
          isOpen
            ? 'border-blue-500 bg-blue-950/60 shadow-lg shadow-blue-900/30'
            : 'border-slate-700 bg-slate-800/60 hover:border-slate-500'
        }`}
      >
        <button
          onClick={() => setOpenIdx(isOpen ? null : idx)}
          className="w-full flex items-start gap-4 p-5 text-left"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${idx}`}
          aria-label={item.q}
        >
          {/* Number badge */}
          <span
            className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 ${
              isOpen ? 'bg-yellow-400 text-blue-950' : 'bg-slate-700 text-slate-300'
            }`}
          >
            {(idx + 1).toString().padStart(2, '0')}
          </span>
          {/* Question */}
          <span className={`flex-grow font-semibold text-sm leading-snug ${isOpen ? 'text-white' : 'text-slate-200'}`}>
            {item.q}
          </span>
          {/* Chevron */}
          <svg
            className={`flex-shrink-0 w-5 h-5 mt-0.5 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-yellow-400' : 'text-slate-500'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Answer */}
        <div
          id={`faq-answer-${idx}`}
          role="region"
          aria-label={item.q}
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-5 pb-5 pt-0 pl-16 text-slate-300 text-sm leading-relaxed border-t border-blue-700/30">
            {item.a}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.07),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left */}
          <div className="space-y-3">
            {left.map((item, i) => (
              <FaqItem key={i} item={item} idx={i} />
            ))}
          </div>
          {/* Right */}
          <div className="space-y-3">
            {right.map((item, i) => (
              <FaqItem key={i + half} item={item} idx={i + half} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-blue-950/50 border border-blue-800">
          <p className="text-slate-300 mb-4">
            Still have questions? We&apos;re here to help — call or WhatsApp us anytime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+919420300006"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-2.5 px-6 rounded-xl transition text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01L6.62 10.79z"/>
              </svg>
              Call: +91-94203 00006
            </a>
            <a
              href="https://wa.me/919420300006?text=Hello%2C%20I%20have%20a%20question%20about%20pest%20control."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2.5 px-6 rounded-xl transition text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
