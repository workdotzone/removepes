import HeroSection from '../components/HeroSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Project Gallery | Before & After | RemovePest Mumbai",
  description: "See our successful pest control projects in Mumbai. Before and after photos of cockroach, termite, rodent & bedbug treatment. 99.8% success rate.",
  keywords: "pest control gallery, before after pest control, pest control projects Mumbai, successful pest treatment",
};

export default function Gallery() {
  const projects = [
    {
      title: 'Residential Cockroach Control',
      location: 'Andheri, Mumbai',
      category: 'Cockroach',
      description: 'Complete cockroach elimination in a residential apartment.',
      before: '🪳 Infestation Found',
      after: '✓ Pest Free',
    },
    {
      title: 'Commercial Termite Treatment',
      location: 'Bandra, Mumbai',
      category: 'Termite',
      description: 'Pre-construction termite barrier installation for office building.',
      before: '⚠️ Risk Identified',
      after: '✓ Protected',
    },
    {
      title: 'Restaurant Pest Management',
      location: 'Fort, Mumbai',
      category: 'Multi-Pest',
      description: 'Complete pest management system for commercial kitchen.',
      before: '🦟 Multiple Pests',
      after: '✓ Clean & Safe',
    },
    {
      title: 'Warehouse Rodent Control',
      location: 'Chembur, Mumbai',
      category: 'Rodent',
      description: 'Rodent trapping and exclusion for storage facility.',
      before: '🐭 Active Infestation',
      after: '✓ Controlled',
    },
    {
      title: 'Hospital Bedbug Eradication',
      location: 'Dadar, Mumbai',
      category: 'Bedbug',
      description: 'Heat treatment for complete bedbug elimination.',
      before: '🛏️ Problem Area',
      after: '✓ Eradicated',
    },
    {
      title: 'School Mosquito Control',
      location: 'Powai, Mumbai',
      category: 'Mosquito',
      description: 'Regular mosquito control program for safety.',
      before: '🦟 High Activity',
      after: '✓ Safe Zone',
    },
    {
      title: 'Home Bedbug Treatment',
      location: 'Worli, Mumbai',
      category: 'Bedbug',
      description: 'Chemical and heat treatment for bedbug elimination.',
      before: '🛏️ Severe Infestation',
      after: '✓ Completely Clear',
    },
    {
      title: 'Office Spider Control',
      location: 'Nariman Point, Mumbai',
      category: 'Spider',
      description: 'Professional spider and insect removal in office premises.',
      before: '🕷️ Spider Webs',
      after: '✓ Clean',
    },
    {
      title: 'Factory Pest Management',
      location: 'Thane, Mumbai',
      category: 'Industrial',
      description: 'Comprehensive pest control for manufacturing facility.',
      before: '⚠️ Risk Assessment',
      after: '✓ Pest Free',
    },
  ];

  return (
    <>
      <HeroSection
        title="Our Work Gallery"
        subtitle="Before and after project showcase - See our successful pest control results."
      />

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Our Successful Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See the transformation in our completed pest control projects across Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">{project.before.split(' ')[0]}</div>
                    <p className="text-white font-semibold text-sm">{project.before}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    📍 {project.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Result */}
                  <div className="bg-white dark:bg-slate-600 p-3 rounded-lg text-center">
                    <p className="text-green-600 dark:text-green-400 font-bold">
                      ✓ {project.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Our Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Proven track record of successful pest control solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                5000+
              </div>
              <p className="text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                99.8%
              </div>
              <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                15+
              </div>
              <p className="text-gray-600 dark:text-gray-300">Years Experience</p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                ⭐ 4.9
              </div>
              <p className="text-gray-600 dark:text-gray-300">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-900 dark:to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Make Your Home Pest-Free
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers. Schedule your free inspection today!
          </p>
          <a href="tel:+919453394533" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition">
            Call +91-94533 94533
          </a>
        </div>
      </section>
    </>
  );
}
