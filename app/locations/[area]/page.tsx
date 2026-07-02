import HeroSection from '../../components/HeroSection';
import ServiceCard from '../../components/ServiceCard';
import type { Metadata } from 'next';

const mumbaiLocations: Record<string, { name: string; description: string }> = {
  'andheri': { name: 'Andheri', description: 'Serving East and West Andheri, including MIDC, Chakala, Lokhandwala, and Versova.' },
  'bandra': { name: 'Bandra', description: 'Covering Bandra East, Bandra West, BKC, Khar, and Santacruz areas.' },
  'borivali': { name: 'Borivali', description: 'Serving Borivali East, Borivali West, Dahisar, Kandivali borders and Eksar areas.' },
  'dahisar': { name: 'Dahisar', description: 'Our base location! Serving Dahisar East, Dahisar West, Mira Road and surrounding areas.' },
  'dadar': { name: 'Dadar', description: 'Covering Dadar, Shivaji Park, Parel, Lower Parel, and Worli areas.' },
  'malad': { name: 'Malad', description: 'Serving Malad East, Malad West, Mindspace, Marve, and Orlem areas.' },
  'kandivali': { name: 'Kandivali', description: 'Covering Kandivali East, Kandivali West, Thakur Village, and Poisar areas.' },
  'goregaon': { name: 'Goregaon', description: 'Serving Goregaon East, Goregaon West, NESCO, Film City, and Aarey Colony areas.' },
  'jogeshwari': { name: 'Jogeshwari', description: 'Covering Jogeshwari East, Jogeshwari West, Andheri border, and Western Express Highway areas.' },
  'vile-parle': { name: 'Vile Parle', description: 'Serving Vile Parle East, Vile Parle West, Airport zone, and Navpada areas.' },
  'santa-cruz': { name: 'Santa Cruz', description: 'Covering Santa Cruz East, Santa Cruz West, Vakola, and Kalina areas.' },
  'kurla': { name: 'Kurla', description: 'Serving Kurla East, Kurla West, BKC periphery, Nehru Nagar, and LBS Marg areas.' },
  'powai': { name: 'Powai', description: 'Covering Powai, Hiranandani, IIT Bombay, Chandivali, and Vikhroli areas.' },
  'ghatkopar': { name: 'Ghatkopar', description: 'Serving Ghatkopar East, Ghatkopar West, Asalpha, and Rajawadi areas.' },
  'mulund': { name: 'Mulund', description: 'Covering Mulund East, Mulund West, LBS Marg, and Thane border areas.' },
  'thane': { name: 'Thane', description: 'Serving Thane City, Wagle Estate, Kopri, Manpada, Majiwada, and Ghodbunder Road.' },
  'navi-mumbai': { name: 'Navi Mumbai', description: 'Covering Vashi, Nerul, Belapur, Kharghar, Panvel, Airoli, and Ghansoli areas.' },
  'worli': { name: 'Worli', description: 'Serving Worli, Lower Parel, Prabhadevi, Curry Road, and Elphinstone areas.' },
  'fort': { name: 'Fort', description: 'Covering Fort, Churchgate, Nariman Point, Marine Lines, and South Mumbai areas.' },
  'colaba': { name: 'Colaba', description: 'Serving Colaba, Cuffe Parade, Navy Nagar, and Backbay Reclamation areas.' },
  'chembur': { name: 'Chembur', description: 'Covering Chembur, Govandi, Mankhurd, Ghatkopar border, and Sion areas.' },
  'wadala': { name: 'Wadala', description: 'Serving Wadala, Antop Hill, GTB Nagar, and Sewri areas.' },
  'sion': { name: 'Sion', description: 'Covering Sion, Dharavi, Matunga, King Circle, and Chembur areas.' },
  'mira-road': { name: 'Mira Road', description: 'Serving Mira Road East, Bhayandar, Kashimira, and surrounding MMR areas.' },
};

export async function generateStaticParams() {
  return Object.keys(mumbaiLocations).map((area) => ({ area }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const location = mumbaiLocations[area];
  if (!location) return {};
  return {
    title: `Pest Control Services in ${location.name} Mumbai | RemovePest`,
    description: `Professional pest control services in ${location.name}, Mumbai. Cockroach, termite, rodent, bedbug & mosquito control. Certified experts, eco-friendly. Call +91-94533 94533.`,
    keywords: `pest control ${location.name}, pest control in ${location.name} Mumbai, ${location.name} pest management, cockroach control ${location.name}, termite control ${location.name}`,
  };
}

const services = [
  { title: 'Cockroach Control', description: 'Eliminate cockroaches completely with our safe and effective treatment.', features: ['German & American Cockroaches', '100% Safe for Family', 'Guaranteed Results', '24/7 Support'], image: '/images/services/cockroach-control.png' },
  { title: 'Bed Bugs Treatment', description: 'Complete bedbug elimination for homes and commercial spaces.', features: ['Heat Treatment', 'Chemical Treatment', 'Follow-up Visits', 'Prevention Tips'], image: '/images/services/bed-bugs.png' },
  { title: 'Fly Control', description: 'Protect from disease-carrying flies with our specialized treatment.', features: ['Larval Control', 'Adult Fly Treatment', 'Sanitation Guidance', 'Prevention Methods'], image: '/images/services/fly-control.png' },
  { title: 'Rodent Control', description: 'Get rid of rats and mice permanently with eco-friendly methods.', features: ['Trapping & Removal', 'Prevention Strategies', 'Waste Management', 'Sealing & Exclusion'], image: '/images/services/rodent-control.png' },
  { title: 'Mosquito Control', description: 'Protect from dengue and malaria with our mosquito control program.', features: ['Fogging Service', 'Larvae Control', 'Seasonal Spray', 'Disease Prevention'], image: '/images/services/mosquito-control.png' },
  { title: 'Termite Control', description: 'Complete termite elimination with baiting and chemical treatment.', features: ['Soil Treatment', 'Wood Treatment', 'Baiting System', '1 Year Warranty'], image: '/images/services/fly-termite.png' },
  { title: 'Spider Control', description: 'Safe removal of spiders and other crawling insects.', features: ['Spider Web Removal', 'Preventive Spray', 'Safe Methods', 'Family-Friendly'], image: '/images/services/spider-control.png' },
  { title: 'Ants Control', description: 'Eliminate ant colonies completely with targeted treatment.', features: ['Colony Elimination', 'Nest Location', 'Prevention Barriers', 'Long-Lasting Results'], image: '/images/services/ants-control.png' },
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area } = await params;
  const location = mumbaiLocations[area];

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Location not found</h1>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={`Pest Control Services in ${location.name}, Mumbai`}
        subtitle={`Professional pest management in ${location.name}. ${location.description} Same-day service available. Call +91-94533 94533 for a free inspection!`}
        showContactForm={true}
        heroImage="/images/hero/banner.png"
      />

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Why Choose RemovePest in {location.name}?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trusted by hundreds of families and businesses in {location.name} for pest-free living.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">15+ Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">Certified and trained professionals serving {location.name} with 15+ years of expertise in pest control.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">100% Safe & Eco-Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">Eco-friendly and government-approved methods safe for families and pets in {location.name}.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">Same-Day Service</h3>
              <p className="text-gray-600 dark:text-gray-300">Emergency and same-day pest control available across {location.name} — 24 hours, 7 days a week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Pest Control Services in {location.name}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Complete pest management solutions for every type of pest problem in {location.name}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Professional Pest Control in {location.name}, Mumbai
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              RemovePest provides certified, eco-friendly pest control services in {location.name}. {location.description} Our expert technicians use WHO-approved treatments to permanently eliminate cockroaches, termites, rodents, bedbugs, mosquitoes, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">Residential Pest Control in {location.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">Complete home pest control for flats, bungalows, and housing societies in {location.name}. Child-safe, pet-friendly treatments with long-lasting results.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">Commercial Pest Control in {location.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">FSSAI-compliant pest management for restaurants, offices, hotels, and warehouses in {location.name}. Documentation provided for health audits.</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">AMC Services in {location.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">Annual Maintenance Contracts available for {location.name} residents and businesses. Scheduled visits, priority service, and free re-treatments included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-900 dark:to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Book Pest Control in {location.name} Today</h2>
          <p className="text-xl text-blue-100 mb-8">Free inspection available. Same-day service across {location.name}, Mumbai.</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <a href="tel:+919453394533" className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition inline-block">
              Call Now: +91-94533 94533
            </a>
            <a href="/contact" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 font-bold py-3 px-8 rounded-lg transition inline-block">
              Book Free Inspection
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
