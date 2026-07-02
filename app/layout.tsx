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
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
