import Image from 'next/image';
import HeroContactForm from './HeroContactForm';

export default function HeroSection({ 
  title, 
  subtitle, 
  image,
  showContactForm = false,
  heroImage
}: {
  title: string;
  subtitle: string;
  image?: string;
  showContactForm?: boolean;
  heroImage?: string;
}) {
  return (
    <div className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 text-white py-20 sm:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showContactForm ? (
          // Hero with Contact Form Layout
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {subtitle}
              </p>
              {heroImage && (
                <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={heroImage}
                    alt="Pest Control Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
            <div className="sticky top-24">
              <HeroContactForm />
            </div>
          </div>
        ) : (
          // Standard Hero Layout
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {subtitle}
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">
                Get Free Inspection
              </button>
              {heroImage && (
                <div className="relative w-full h-64 sm:h-80 mt-8 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={heroImage}
                    alt="Pest Control Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center justify-center">
              {heroImage ? (
                <div className="relative w-80 h-80 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={heroImage}
                    alt="Pest Control Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="text-6xl">🛡️</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
