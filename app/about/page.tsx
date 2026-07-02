import HeroSection from '../components/HeroSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RemovePest | Professional Pest Control in Mumbai Since 2010",
  description: "Learn about RemovePest - 15+ years of professional pest control services in Mumbai. Certified experts, 5000+ happy customers, 99.8% success rate.",
  keywords: "about pest control, RemovePest Mumbai, pest control company, professional pest management",
};

export default function About() {
  return (
    <>
      <HeroSection
        title="About RemovePest"
        subtitle="Your trusted partner in pest management for over 15 years."
      />

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                RemovePest is a leading pest control service provider in Mumbai with a legacy of excellence and customer satisfaction. We have been serving the residents and businesses of Mumbai for over 15 years with professional and eco-friendly pest management solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Our team of certified pest control experts is trained to handle all types of pest infestations using the latest technology and eco-friendly methods. We believe in providing safe, effective, and affordable pest control solutions to every customer.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                With thousands of satisfied customers and a commitment to excellence, RemovePest is the name you can trust for all your pest control needs in Mumbai.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg p-8 text-white text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Our Achievement</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold">5000+</div>
                  <p className="text-blue-100">Happy Customers</p>
                </div>
                <div>
                  <div className="text-4xl font-bold">15+</div>
                  <p className="text-blue-100">Years of Service</p>
                </div>
                <div>
                  <div className="text-4xl font-bold">99.8%</div>
                  <p className="text-blue-100">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              What makes RemovePest the best choice for pest control in Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-4 flex items-center">
                <span className="text-3xl mr-4">🎓</span>
                Certified Professionals
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our team consists of certified and licensed pest control experts with extensive training and experience.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-4 flex items-center">
                <span className="text-3xl mr-4">🌿</span>
                Eco-Friendly Methods
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We use safe and eco-friendly pest control methods that are effective but harmless to families and pets.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-4 flex items-center">
                <span className="text-3xl mr-4">⚡</span>
                Quick Response
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We offer 24/7 emergency pest control services with quick response times to ensure your peace of mind.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-4 flex items-center">
                <span className="text-3xl mr-4">💰</span>
                Affordable Pricing
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We offer competitive and transparent pricing with no hidden costs. Free inspection and quote.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-4 flex items-center">
                <span className="text-3xl mr-4">✓</span>
                Guaranteed Results
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                We guarantee effective pest elimination with our proven methods and professional approach.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-4 flex items-center">
                <span className="text-3xl mr-4">🤝</span>
                Customer Support
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our dedicated customer support team is always available to answer your questions and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experienced professionals dedicated to your pest control needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Singh', role: 'Head of Operations', exp: '18+ years' },
              { name: 'Priya Sharma', role: 'Senior Technician', exp: '12+ years' },
              { name: 'Amit Kumar', role: 'Field Manager', exp: '10+ years' },
            ].map((member, idx) => (
              <div key={idx} className="text-center bg-gray-50 dark:bg-slate-800 p-6 rounded-lg">
                <div className="text-6xl mb-4">👤</div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Experience: {member.exp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-900 dark:to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Trust the Experts in Pest Control
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let RemovePest handle your pest control needs with professional expertise.
          </p>
          <a href="tel:+919453394533" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition">
            Call +91-94533 94533
          </a>
        </div>
      </section>
    </>
  );
}
