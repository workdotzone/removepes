import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Pest Control Services in Mumbai | RemovePest — 24/7 Emergency",
  description: "Top-rated pest control in Mumbai. Cockroach, termite, rodent & bedbug control. 15+ years, 5000+ customers, certified experts, eco-friendly. Free inspection. Call +91-94203 00006.",
  keywords: "pest control services Mumbai, cockroach control, termite control, rodent control, bedbug treatment, mosquito control, professional pest control Mumbai",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Best Pest Control Services in Mumbai | RemovePest",
    description: "Professional pest control in Mumbai. 15+ years experience. Free inspection. Call +91-94203 00006.",
    url: "https://removepest.in",
    siteName: "RemovePest",
    type: "website",
    locale: "en_IN",
    images: [{ url: "https://removepest.in/images/hero/banner.png", width: 1200, height: 630, alt: "RemovePest — Professional Pest Control Services in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control Services in Mumbai | RemovePest",
    description: "Professional pest control in Mumbai. Free inspection. Call +91-94203 00006.",
    images: ["https://removepest.in/images/hero/banner.png"],
  },
  alternates: {
    canonical: "https://removepest.in",
  },
  verification: {
    google: "YTRGfuhoQONpT-huBkGhrjXjoVX38-WG0953Vj4IZpY",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://removepest.in/#business',
  name: 'RemovePest',
  description:
    'Professional pest control services in Mumbai. Cockroach, termite, rodent, bedbug, mosquito control and more. 15+ years experience, eco-friendly solutions.',
  url: 'https://removepest.in',
  telephone: '+91-94203-00006',
  email: 'info@removepest.in',
  image: 'https://removepest.in/images/hero/banner.png',
  logo: 'https://removepest.in/images/hero/banner.png',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI, Online Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mumbai',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.076,
    longitude: 72.8777,
  },
  areaServed: [
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Navi Mumbai' },
    { '@type': 'City', name: 'Thane' },
  ],
  serviceType: [
    'Cockroach Control',
    'Termite Control',
    'Rodent Control',
    'Bed Bug Control',
    'Mosquito Control',
    'Fly Control',
    'Ants Control',
    'Spider Control',
    'Wood Borer Control',
    'Honey Bee Control',
    'Bird Nesting Control',
    'Sanitization',
    'General Pest Control',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  hasMap: 'https://maps.google.com/?q=Mumbai,Maharashtra,India',
  sameAs: [
    'https://removepest.in',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '5000',
    bestRating: '5',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-900">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-yellow-400 text-blue-950 font-bold px-4 py-2 rounded z-[9999]">Skip to main content</a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
