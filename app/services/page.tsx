import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Services in Mumbai | Cockroach, Termite, Rodent & More",
  description: "Complete pest control services in Mumbai. Cockroach, termite, rodent, bedbug, mosquito control & more. Professional, safe, eco-friendly. Call +91-94203 00006.",
  keywords: "pest control services Mumbai, cockroach control, termite control, rodent control, bedbug treatment, mosquito control, professional pest management",
};

export default function Services() {
  const allServices = [
    {
      title: 'Cockroach Control',
      description: 'Eliminate cockroaches completely with our safe and effective treatment.',
      features: ['German & American Cockroaches', '100% Safe for Family', 'Guaranteed Results', '24/7 Support'],
      image: '/images/services/cockroach-control.png',
    },
    {
      title: 'Bed Bugs Treatment',
      description: 'Complete bedbug elimination for homes and commercial spaces.',
      features: ['Heat Treatment', 'Chemical Treatment', 'Follow-up Visits', 'Prevention Tips'],
      image: '/images/services/bed-bugs.png',
    },
    {
      title: 'Fly Control',
      description: 'Protect from disease-carrying flies with our specialized treatment.',
      features: ['Larval Control', 'Adult Fly Treatment', 'Sanitation Guidance', 'Prevention Methods'],
      image: '/images/services/fly-control.png',
    },
    {
      title: 'Rodent Control',
      description: 'Get rid of rats and mice permanently with eco-friendly methods.',
      features: ['Trapping & Removal', 'Prevention Strategies', 'Waste Management', 'Sealing & Exclusion'],
      image: '/images/services/rodent-control.png',
    },
    {
      title: 'Mosquito Control',
      description: 'Protect from dengue and malaria with our mosquito control program.',
      features: ['Fogging Service', 'Larvae Control', 'Seasonal Spray', 'Disease Prevention'],
      image: '/images/services/mosquito-control.png',
    },
    {
      title: 'Rats Control',
      description: 'Professional rat removal and exclusion services for complete protection.',
      features: ['Rat Trapping', 'Exclusion Services', 'Monitoring Systems', 'Prevention Tips'],
      image: '/images/services/rats-control.png',
    },
    {
      title: 'Spider Control',
      description: 'Safe removal of spiders and other crawling insects.',
      features: ['Spider Web Removal', 'Preventive Spray', 'Safe Methods', 'Family-Friendly'],
      image: '/images/services/spider-control.png',
    },
    {
      title: 'Ants Control',
      description: 'Eliminate ant colonies completely with targeted treatment.',
      features: ['Colony Elimination', 'Nest Location', 'Prevention Barriers', 'Long-Lasting Results'],
      image: '/images/services/ants-control.png',
    },
    {
      title: 'Wood Borer Control',
      description: 'Protect wooden structures from wood-boring insects.',
      features: ['Pre-Treatment', 'Post-Treatment', 'Wood Inspection', 'Annual Checks'],
      image: '/images/services/wood-borer-control.png',
    },
    {
      title: 'Termite & Fly Treatment',
      description: 'Combined solution for termite and fly infestations.',
      features: ['Dual Treatment', 'Chemical & Baiting', 'Regular Monitoring', 'Warranty Included'],
      image: '/images/services/fly-termite.png',
    },
    {
      title: 'Honey Bee Control',
      description: 'Safe relocation of honey bees and hive management.',
      features: ['Bee Relocation', 'Hive Removal', 'Eco-Friendly', 'Professional Team'],
      image: '/images/services/honey-bee-control.png',
    },
    {
      title: 'Sanitization Services',
      description: 'Complete sanitization and disinfection for homes and offices.',
      features: ['Disinfection Spray', 'Surface Treatment', 'Health & Safety', 'Professional Grade'],
      image: '/images/services/sanitaisation.png',
    },
    {
      title: 'General Pest Control',
      description: 'Comprehensive pest management for all types of pests.',
      features: ['Multi-Pest Treatment', 'Customized Plans', 'Regular Maintenance', 'Expert Assessment'],
      image: '/images/services/genral-pest-control.png',
    },
    {
      title: 'Weed Control',
      description: 'Remove weeds and unwanted vegetation safely.',
      features: ['Herbicide Application', 'Manual Removal', 'Prevention Methods', 'Environmentally Safe'],
      image: '/images/services/weed-control.png',
    },
    {
      title: 'Bird Control',
      description: 'Manage bird infestations on residential and commercial properties.',
      features: ['Bird Netting', 'Spike Installation', 'Humane Methods', 'Preventive Measures'],
      image: '/images/services/bird-control.png',
    },
  ];

  return (
    <>
      <HeroSection
        title="Our Complete Services"
        subtitle="Comprehensive pest control solutions for every type of pest and situation."
      />

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              All 15 Pest Control Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional solutions for all types of pest problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We follow a systematic approach to ensure complete pest elimination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">1</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                Free Inspection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Thorough assessment of your property
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">2</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                Custom Quote
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored solution and transparent pricing
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">3</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                Treatment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional pest control service
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">4</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                Follow-up
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Guarantee and ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-900 dark:to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Professional Pest Control?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free inspection!
          </p>
          <a href="tel:+919420300006" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition">
            Call +91-94203 00006
          </a>
        </div>
      </section>
    </>
  );
}
