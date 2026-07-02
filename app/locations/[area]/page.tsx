import HeroSection from '../../components/HeroSection';
import ServiceCard from '../../components/ServiceCard';
import type { Metadata } from 'next';

const mumbaiLocations: Record<string, { name: string; description: string }> = {
  'airoli': { name: 'Airoli', description: 'Serving Airoli, Ghansoli, Rabale, and Mahape in Navi Mumbai.' },
  'akola': { name: 'Akola', description: 'Providing pest control services in Akola and surrounding Maharashtra regions.' },
  'ambernath': { name: 'Ambernath', description: 'Serving Ambernath East, Ambernath West, and nearby Badlapur areas.' },
  'ambivali': { name: 'Ambivali', description: 'Covering Ambivali and surrounding areas on the Central railway line.' },
  'andheri-midc': { name: 'Andheri MIDC', description: 'Specialized industrial pest control for Andheri MIDC, Chakala, and SEEPZ industrial zones.' },
  'andheri-seepz': { name: 'Andheri SEEPZ', description: 'Covering SEEPZ Special Economic Zone and Andheri East IT and industrial corridors.' },
  'andheri': { name: 'Andheri', description: 'Serving East and West Andheri, including MIDC, Chakala, Lokhandwala, and Versova.' },
  'asalpha': { name: 'Asalpha', description: 'Covering Asalpha, Ghatkopar West border, and Kurla West nearby areas.' },
  'asangaon': { name: 'Asangaon', description: 'Serving Asangaon and surrounding areas on the Central railway line near Thane.' },
  'bandra': { name: 'Bandra', description: 'Covering Bandra East, Bandra West, BKC, Khar, and Santacruz areas.' },
  'bhandup': { name: 'Bhandup', description: 'Serving Bhandup East, Bhandup West, and Nahur areas on the Central line.' },
  'bhayandar': { name: 'Bhayandar', description: 'Covering Bhayandar East, Bhayandar West, Naigaon, and Mira Road borders.' },
  'bhayander': { name: 'Bhayander', description: 'Serving Bhayander East, Bhayander West, and Mira-Bhayandar Municipal limits.' },
  'bhiwandi': { name: 'Bhiwandi', description: 'Covering Bhiwandi city, industrial hubs, warehouses, and nearby Thane areas.' },
  'boisar': { name: 'Boisar', description: 'Serving Boisar, Tarapur MIDC, and surrounding North Maharashtra coastal areas.' },
  'borivali': { name: 'Borivali', description: 'Serving Borivali East, Borivali West, Dahisar, Kandivali borders and Eksar areas.' },
  'byculla': { name: 'Byculla', description: 'Covering Byculla, Mazgaon, Dockyard Road, and Chinchpokli in Central Mumbai.' },
  'charni-road': { name: 'Charni Road', description: 'Serving Charni Road, Girgaon, Marine Lines, and Grant Road nearby areas.' },
  'chembur': { name: 'Chembur', description: 'Covering Chembur, Govandi, Mankhurd, Ghatkopar border, and Sion areas.' },
  'churchgate': { name: 'Churchgate', description: 'Serving Churchgate, Nariman Point, Backbay, and South Mumbai business district.' },
  'cst': { name: 'CST', description: 'Covering CST, Fort, Ballard Estate, and the heritage South Mumbai area.' },
  'dadar': { name: 'Dadar', description: 'Covering Dadar, Shivaji Park, Parel, Lower Parel, and Worli areas.' },
  'dahisar': { name: 'Dahisar', description: 'Our base location! Serving Dahisar East, Dahisar West, Mira Road and surrounding areas.' },
  'diva': { name: 'Diva', description: 'Serving Diva, Mumbra, Kalwa, and areas along the Central railway line near Thane.' },
  'dombivali': { name: 'Dombivali', description: 'Covering Dombivali East, Dombivali West, and Kalyan-Dombivali Municipal Corporation areas.' },
  'ghansoli': { name: 'Ghansoli', description: 'Serving Ghansoli, Rabale, Airoli, and nearby Navi Mumbai industrial areas.' },
  'ghatkopar': { name: 'Ghatkopar', description: 'Serving Ghatkopar East, Ghatkopar West, Asalpha, and Rajawadi areas.' },
  'goregaon': { name: 'Goregaon', description: 'Serving Goregaon East, Goregaon West, NESCO, Film City, and Aarey Colony areas.' },
  'govandi': { name: 'Govandi', description: 'Covering Govandi, Shivaji Nagar, Cheeta Camp, and Mankhurd nearby areas.' },
  'grant-road': { name: 'Grant Road', description: 'Serving Grant Road, Tardeo, Nana Chowk, and Byculla adjacent areas.' },
  'jogeshwari': { name: 'Jogeshwari', description: 'Covering Jogeshwari East, Jogeshwari West, Andheri border, and Western Express Highway areas.' },
  'kalva': { name: 'Kalva', description: 'Serving Kalva, Mumbra, Diva, and Thane Creek industrial belt areas.' },
  'kamothe': { name: 'Kamothe', description: 'Covering Kamothe, Khandeshwar, and Panvel belt in Navi Mumbai.' },
  'kandivali': { name: 'Kandivali', description: 'Covering Kandivali East, Kandivali West, Thakur Village, and Poisar areas.' },
  'kanjurmarg': { name: 'Kanjurmarg', description: 'Serving Kanjurmarg East, Kanjurmarg West, and Bhandup-Vikhroli borders.' },
  'khar-road': { name: 'Khar Road', description: 'Covering Khar West, Khar Danda, Santacruz, and Bandra nearby areas.' },
  'kharghar': { name: 'Kharghar', description: 'Serving Kharghar, Kalamboli, Kamothe, and CBD Belapur in Navi Mumbai.' },
  'kurla': { name: 'Kurla', description: 'Serving Kurla East, Kurla West, BKC periphery, Nehru Nagar, and LBS Marg areas.' },
  'lokhandwala': { name: 'Lokhandwala', description: 'Covering Lokhandwala Complex, Andheri West, Four Bungalows, and DN Nagar.' },
  'lower-parel': { name: 'Lower Parel', description: 'Serving Lower Parel, Worli, Phoenix Mills, Kamala Mills, and Prabhadevi areas.' },
  'mahalaxmi': { name: 'Mahalaxmi', description: 'Covering Mahalaxmi, Haji Ali, Worli, and Central Mumbai western coastal areas.' },
  'mahim': { name: 'Mahim', description: 'Serving Mahim, Matunga, Dharavi, Sion, and Bandra nearby areas.' },
  'malad': { name: 'Malad', description: 'Serving Malad East, Malad West, Mindspace, Marve, and Orlem areas.' },
  'mankhurd': { name: 'Mankhurd', description: 'Covering Mankhurd, Govandi, Chembur, and Trombay nearby areas.' },
  'marine-line': { name: 'Marine Lines', description: 'Serving Marine Lines, Churchgate, Charni Road, and South Mumbai areas.' },
  'matunga': { name: 'Matunga', description: 'Covering Matunga East, Matunga West, Sion, King Circle, and Dharavi areas.' },
  'mira-road': { name: 'Mira Road', description: 'Serving Mira Road East, Bhayandar, Kashimira, and surrounding MMR areas.' },
  'mulund': { name: 'Mulund', description: 'Covering Mulund East, Mulund West, LBS Marg, and Thane border areas.' },
  'mumbai-central': { name: 'Mumbai Central', description: 'Serving Mumbai Central, Nagpada, Byculla, and Central Mumbai areas.' },
  'mumbai-cst': { name: 'Mumbai CST', description: 'Covering CST, Fort, Churchgate, and the South Mumbai heritage district.' },
  'nahur': { name: 'Nahur', description: 'Serving Nahur, Bhandup, Mulund, and Kanjurmarg nearby areas.' },
  'naigaon': { name: 'Naigaon', description: 'Covering Naigaon East, Naigaon West, Vasai, and Virar nearby areas.' },
  'nalasopara': { name: 'Nalasopara', description: 'Serving Nalasopara East, Nalasopara West, and Virar-Vasai belt.' },
  'navi-mumbai': { name: 'Navi Mumbai', description: 'Covering Vashi, Nerul, Belapur, Kharghar, Panvel, Airoli, and Ghansoli areas.' },
  'neral': { name: 'Neral', description: 'Serving Neral, Karjat, and the hill-station gateway areas near Mumbai.' },
  'nerul': { name: 'Nerul', description: 'Covering Nerul, Seawoods, Belapur, and CBD areas in Navi Mumbai.' },
  'parel': { name: 'Parel', description: 'Serving Parel, Lower Parel, Currey Road, and Elphinstone Road areas.' },
  'powai': { name: 'Powai', description: 'Covering Powai, Hiranandani, IIT Bombay, Chandivali, and Vikhroli areas.' },
  'prabhadevi': { name: 'Prabhadevi', description: 'Serving Prabhadevi, Worli, Dadar, and Siddhivinayak Temple area.' },
  'rabale': { name: 'Rabale', description: 'Covering Rabale MIDC, Ghansoli, Airoli, and Thane Creek industrial belt.' },
  'ram-mandir': { name: 'Ram Mandir', description: 'Serving Ram Mandir, Goregaon West, and Western line suburban areas.' },
  'sakinaka': { name: 'Sakinaka', description: 'Covering Sakinaka, Andheri East, Chandivali, and MIDC nearby areas.' },
  'santacruz': { name: 'Santacruz', description: 'Serving Santacruz East, Santacruz West, Vakola, Kalina, and Airport areas.' },
  'sion': { name: 'Sion', description: 'Covering Sion, Dharavi, Matunga, King Circle, and Chembur areas.' },
  'thane': { name: 'Thane', description: 'Serving Thane City, Wagle Estate, Kopri, Manpada, Majiwada, and Ghodbunder Road.' },
  'titwala': { name: 'Titwala', description: 'Covering Titwala and the Kalyan-Badlapur belt on the Central railway line.' },
  'trombe': { name: 'Trombay', description: 'Serving Trombay, Mankhurd, Govandi, and Chembur nearby industrial areas.' },
  'turbhe': { name: 'Turbhe', description: 'Covering Turbhe MIDC, Sanpada, Juinagar, and Nerul in Navi Mumbai.' },
  'ulwe': { name: 'Ulwe', description: 'Serving Ulwe, Dronagiri, Panvel, and the new NAINA township areas.' },
  'wadala': { name: 'Wadala', description: 'Serving Wadala, Antop Hill, GTB Nagar, and Sewri areas.' },
  'vasai': { name: 'Vasai', description: 'Covering Vasai East, Vasai West, Nalasopara, and Virar nearby areas.' },
  'vashi': { name: 'Vashi', description: 'Serving Vashi, Turbhe, Juinagar, and Sanpada in Navi Mumbai.' },
  'vasind': { name: 'Vasind', description: 'Covering Vasind and the Shahapur-Asangaon industrial and residential belt.' },
  'versova': { name: 'Versova', description: 'Serving Versova, Andheri West, Four Bungalows, and the coastal fishing village area.' },
  'vidya-vihar': { name: 'Vidya Vihar', description: 'Covering Vidya Vihar East, Vidya Vihar West, Ghatkopar, and Kurla nearby areas.' },
  'vikhroli': { name: 'Vikhroli', description: 'Serving Vikhroli East, Vikhroli West, Kanjurmarg, and Powai nearby areas.' },
  'vile-parle': { name: 'Vile Parle', description: 'Serving Vile Parle East, Vile Parle West, Airport zone, and Navpada areas.' },
  'virar': { name: 'Virar', description: 'Covering Virar East, Virar West, Vasai, and the Virar-Nalasopara belt.' },
  'colaba': { name: 'Colaba', description: 'Serving Colaba, Cuffe Parade, Navy Nagar, and Backbay Reclamation areas.' },
  'fort': { name: 'Fort', description: 'Covering Fort, Churchgate, Nariman Point, Marine Lines, and South Mumbai areas.' },
  'worli': { name: 'Worli', description: 'Serving Worli, Lower Parel, Prabhadevi, Curry Road, and Elphinstone areas.' },
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
    description: `Professional pest control services in ${location.name}, Mumbai. Cockroach, termite, rodent, bedbug & mosquito control. Certified experts, eco-friendly. Call +91-94203 00006.`,
    keywords: `pest control ${location.name}, pest control in ${location.name} Mumbai, ${location.name} pest management, cockroach control ${location.name}, termite control ${location.name}`,
  };
}

const services = [
  { title: 'Cockroach Control', href: '/services/cockroach-control', description: 'Eliminate cockroaches completely with safe gel bait and spray treatment.', features: ['German & American Cockroaches', '100% Safe for Family', 'Guaranteed Results', '3-Month Warranty'], image: '/images/services/cockroach-control.png' },
  { title: 'Termite Control', href: '/services/termite-control', description: 'Complete termite elimination with soil treatment, baiting, and wood treatment.', features: ['Soil Treatment', 'Wood Treatment', 'Baiting System', '1 Year Warranty'], image: '/images/services/fly-termite.png' },
  { title: 'Rodent Control', href: '/services/rodent-control', description: 'Get rid of rats and mice permanently with trapping and exclusion.', features: ['Trapping & Removal', 'Exclusion & Sealing', 'Monitoring Systems', 'Prevention Tips'], image: '/images/services/rodent-control.png' },
  { title: 'Bed Bugs Treatment', href: '/services/bed-bugs-control', description: 'Complete bedbug elimination with heat and chemical treatment.', features: ['Heat Treatment', 'Chemical Treatment', '2 Follow-up Visits', '45-Day Warranty'], image: '/images/services/bed-bugs.png' },
  { title: 'Mosquito Control', href: '/services/mosquito-control', description: 'Protect from dengue and malaria with fogging and larviciding.', features: ['ULV Fogging', 'Larvae Control', 'Society Programs', 'Disease Prevention'], image: '/images/services/mosquito-control.png' },
  { title: 'Fly Control', href: '/services/fly-control', description: 'Fly elimination with ILTs, baiting, and larval control. FSSAI compliant.', features: ['Insect Light Traps', 'Fly Bait Stations', 'Larval Control', 'FSSAI Compliant'], image: '/images/services/fly-control.png' },
  { title: 'Ants Control', href: '/services/ants-control', description: 'Eliminate ant colonies completely with gel baiting and barrier spray.', features: ['Colony Elimination', 'Gel Bait Treatment', 'Prevention Barriers', 'Long-Lasting Results'], image: '/images/services/ants-control.png' },
  { title: 'Spider Control', href: '/services/spider-control', description: 'Safe removal of spiders with web removal and residual spray.', features: ['Web Removal', 'Residual Spray', 'Preventive Barrier', 'Family-Friendly'], image: '/images/services/spider-control.png' },
  { title: 'Wood Borer Control', href: '/services/wood-borer-control', description: 'Protect wooden furniture and structures from wood-boring insects.', features: ['Pre-Treatment', 'Post-Treatment', 'Wood Injection', '6-Month Warranty'], image: '/images/services/wood-borer-control.png' },
  { title: 'Honey Bee Control', href: '/services/honey-bee-control', description: 'Humane bee relocation and hive removal by trained professionals.', features: ['Live Bee Relocation', 'Hive Removal', 'Eco-Friendly', 'Emergency Service'], image: '/images/services/honey-bee-control.png' },
  { title: 'Bird Nesting Control', href: '/services/bird-nesting-control', description: 'Humane bird deterrents including netting, spikes, and exclusion.', features: ['Bird Netting', 'Anti-Roosting Spikes', 'Humane Methods', 'High-Rise Capable'], image: '/images/services/bird-control.png' },
  { title: 'Weed Control', href: '/services/weed-control', description: 'Remove weeds with selective herbicides, manual removal, and prevention.', features: ['Herbicide Application', 'Manual Removal', 'Pre-Emergent Treatment', 'Eco-Responsible'], image: '/images/services/weed-control.png' },
  { title: 'Sanitization Services', href: '/services/sanitization', description: 'Complete disinfection with ULV fogging and hospital-grade chemicals.', features: ['Hospital-Grade Chemicals', 'ULV Fogging', 'NABL Certified', 'Certificate Provided'], image: '/images/services/sanitaisation.png' },
  { title: 'General Pest Control', href: '/services/general-pest-control', description: 'Comprehensive multi-pest treatment for cockroaches, ants, spiders, and crawling insects.', features: ['Multi-Pest Treatment', 'Customized AMC Plans', 'Indoor & Outdoor', 'Expert Assessment'], image: '/images/services/genral-pest-control.png' },
  { title: 'Rats Control', href: '/services/rats-control', description: 'Professional rat removal with heavy-duty traps, baiting, and exclusion.', features: ['Heavy-Duty Traps', 'Rodenticide Baiting', 'Burrow Treatment', 'Monitoring Stations'], image: '/images/services/rats-control.png' },
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
        subtitle={`Professional pest management in ${location.name}. ${location.description} Same-day service available. Call +91-94203 00006 for a free inspection!`}
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

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">
              Frequently Asked Questions — Pest Control in {location.name}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Common questions about our pest control services in {location.name}, Mumbai.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Do you provide pest control in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes! We provide full pest control services across {location.name}, Mumbai. {location.description} Same-day and next-day appointments are available.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">How long does a pest control treatment take?</h3>
                <p className="text-gray-600 dark:text-gray-300">Most standard treatments take 1–3 hours depending on property size and pest type. Termite and bedbug treatments may require additional follow-up visits for complete elimination.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Are your chemicals safe for children and pets in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes. We use only government-approved, WHO-certified chemicals that are safe for families and pets after the recommended drying time of 2–4 hours post-treatment.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Do you offer a warranty on treatments in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, we provide a service warranty from 3 months to 1 year depending on treatment type. If pests return within the warranty period, we offer free re-treatment at no additional cost.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">How much does pest control cost in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Pricing starts from ₹500 for basic treatments and varies by property size, pest type, and treatment method. Contact us for a free inspection and customized quote with no hidden charges.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Do I need to vacate my home during treatment in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">For most treatments, we recommend staying out for 2–4 hours. For intensive treatments like termite or bed bug control, 4–8 hours may be required. Our team will provide full pre- and post-treatment instructions.</p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">How many treatments are needed to eliminate termites in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Termite control typically requires 2–3 sessions for complete elimination using soil treatment, baiting systems, and wood treatment. A long-term warranty is included.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Can pest control be done in a rented flat in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Absolutely. We regularly service rented flats and housing societies across {location.name}. We also work with building management offices for AMC and bulk bookings.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">What preparation is needed before pest control?</h3>
                <p className="text-gray-600 dark:text-gray-300">We recommend clearing kitchen cabinets, removing food items from countertops, covering drinking water, and keeping children and pets away. Our technicians provide a full pre-treatment checklist at booking.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Do you provide pest control for restaurants and offices in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes. We specialize in commercial pest control for restaurants, hotels, hospitals, warehouses, and food processing units in {location.name}. FSSAI-compliant with audit documentation provided.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Is a free inspection available in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, we offer a free pest inspection for all new customers in {location.name}. Our expert will assess the infestation level, identify entry points, and recommend the most effective and affordable treatment plan.</p>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">How do I book pest control in {location.name}?</h3>
                <p className="text-gray-600 dark:text-gray-300">Booking is easy! Call +91-94203 00006, fill out our online contact form, or send a WhatsApp message. We offer same-day and next-day appointments in {location.name} with flexible scheduling.</p>
              </div>
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
            <a href="tel:+919420300006" className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition inline-block">
              Call Now: +91-94203 00006
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
