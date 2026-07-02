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
  title: "Best Pest Control Services in Mumbai | RemovePest - 24/7 Emergency",
  description: "Professional pest control services in Mumbai with 15+ years experience. Cockroach, termite, rodent & bedbug control. Certified experts, eco-friendly methods, 99.8% success rate. Call +91-94203 00006 for free inspection.",
  keywords: "pest control services in Mumbai, pest control Mumbai, cockroach control, termite control, rodent control, bedbug treatment, mosquito control, professional pest control, pest management Mumbai",
  openGraph: {
    title: "Best Pest Control Services in Mumbai | RemovePest",
    description: "Professional pest control services in Mumbai. Safe, effective, 24/7 available. Get free inspection now!",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
