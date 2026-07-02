import HeroSection from './components/HeroSection';
import ServiceCard from './components/ServiceCard';

export default function Home() {
  const services = [
    {
      icon: '🪳',
      title: 'Cockroach Control',
      description: 'Eliminate cockroaches completely with our safe and effective treatment.',
      features: ['German & American Cockroaches', '100% Safe for Family', 'Guaranteed Results', '24/7 Support'],
      image: '/images/services/cockroach-control.png',
    },
    {
      icon: '🪳',
      title: 'Bed Bugs Treatment',
      description: 'Complete bedbug elimination for homes and commercial spaces.',
      features: ['Heat Treatment', 'Chemical Treatment', 'Follow-up Visits', 'Prevention Tips'],
      image: '/images/services/bed-bugs.png',
    },
    {
      icon: '🪰',
      title: 'Fly Control',
      description: 'Protect from disease-carrying flies with our specialized treatment.',
      features: ['Larval Control', 'Adult Fly Treatment', 'Sanitation Guidance', 'Prevention Methods'],
      image: '/images/services/fly-control.png',
    },
    {
      icon: '🐭',
      title: 'Rodent Control',
      description: 'Get rid of rats and mice permanently with eco-friendly methods.',
      features: ['Trapping & Removal', 'Prevention Strategies', 'Waste Management', 'Sealing & Exclusion'],
      image: '/images/services/rodent-control.png',
    },
    {
      icon: '🦟',
      title: 'Mosquito Control',
      description: 'Protect from dengue and malaria with our mosquito control program.',
      features: ['Fogging Service', 'Larvae Control', 'Seasonal Spray', 'Disease Prevention'],
      image: '/images/services/mosquito-control.png',
    },
    {
      icon: '🐀',
      title: 'Rats Control',
      description: 'Professional rat removal and exclusion services for complete protection.',
      features: ['Rat Trapping', 'Exclusion Services', 'Monitoring Systems', 'Prevention Tips'],
      image: '/images/services/rats-control.png',
    },
    {
      icon: '🕷️',
      title: 'Spider Control',
      description: 'Safe removal of spiders and other crawling insects.',
      features: ['Spider Web Removal', 'Preventive Spray', 'Safe Methods', 'Family-Friendly'],
      image: '/images/services/spider-control.png',
    },
    {
      icon: '🐜',
      title: 'Ants Control',
      description: 'Eliminate ant colonies completely with targeted treatment.',
      features: ['Colony Elimination', 'Nest Location', 'Prevention Barriers', 'Long-Lasting Results'],
      image: '/images/services/ants-control.png',
    },
    {
      icon: '🪵',
      title: 'Wood Borer Control',
      description: 'Protect wooden structures from wood-boring insects.',
      features: ['Pre-Treatment', 'Post-Treatment', 'Wood Inspection', 'Annual Checks'],
      image: '/images/services/wood-borer-control.png',
    },
    {
      icon: '🦟',
      title: 'Termite & Fly Treatment',
      description: 'Combined solution for termite and fly infestations.',
      features: ['Dual Treatment', 'Chemical & Baiting', 'Regular Monitoring', 'Warranty Included'],
      image: '/images/services/fly-termite.png',
    },
    {
      icon: '🍯',
      title: 'Honey Bee Control',
      description: 'Safe relocation of honey bees and hive management.',
      features: ['Bee Relocation', 'Hive Removal', 'Eco-Friendly', 'Professional Team'],
      image: '/images/services/honey-bee-control.png',
    },
    {
      icon: '🧹',
      title: 'Sanitization Services',
      description: 'Complete sanitization and disinfection for homes and offices.',
      features: ['Disinfection Spray', 'Surface Treatment', 'Health & Safety', 'Professional Grade'],
      image: '/images/services/sanitaisation.png',
    },
    {
      icon: '🚀',
      title: 'General Pest Control',
      description: 'Comprehensive pest management for all types of pests.',
      features: ['Multi-Pest Treatment', 'Customized Plans', 'Regular Maintenance', 'Expert Assessment'],
      image: '/images/services/genral-pest-control.png',
    },
    {
      icon: '🌾',
      title: 'Weed Control',
      description: 'Remove weeds and unwanted vegetation safely.',
      features: ['Herbicide Application', 'Manual Removal', 'Prevention Methods', 'Environmentally Safe'],
      image: '/images/services/weed-control.png',
    },
    {
      icon: '🪶',
      title: 'Bird Control',
      description: 'Manage bird infestations on residential and commercial properties.',
      features: ['Bird Netting', 'Spike Installation', 'Humane Methods', 'Preventive Measures'],
      image: '/images/services/bird-control.png',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Software Engineer',
      message: 'Professional service and very responsive. They solved our cockroach problem in just 2 visits.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Business Owner',
      message: 'Best pest control in Mumbai! They are prompt, efficient, and use safe methods.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'Restaurant Owner',
      message: 'Regular service provider for our restaurant. No issues with pests since we started with them.',
      rating: 5,
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RemovePest",
    "description": "Professional pest control services in Mumbai",
    "url": "https://removepest.in",
    "telephone": "+91-94533 94533",
    "email": "info@removepest.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "D.N. Dube Road, Ratan Nagar",
      "addressLocality": "Dahisar (E)",
      "addressRegion": "Mumbai",
      "postalCode": "400068",
      "addressCountry": "IN"
    },
    "areaServed": ["Mumbai", "Andheri", "Bandra", "Dadar", "Fort", "Powai", "Worli", "Malad", "Navi Mumbai", "Thane"],
    "priceRange": "₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <HeroSection 
        title="Professional Pest Control Services In Mumbai" 
        subtitle="Expert pest management solutions for homes and businesses. Safe, effective, and trusted by 5000+ customers. Call us for free inspection!"
        showContactForm={true}
        heroImage="/images/hero/banner.png"
      />

      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">Why Choose RemovePest for Pest Control Services in Mumbai?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">We provide comprehensive pest management with a focus on safety and results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">15+ Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">Our team is certified and trained with 15+ years of experience in professional pest control services in Mumbai.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">100% Safe & Eco-Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">We use eco-friendly and safe methods suitable for families and pets. No harmful chemicals.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">24/7 Emergency Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Emergency pest control services available 24 hours, 7 days a week throughout Mumbai.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">Our 15 Pest Control Services in Mumbai</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Complete pest management solutions for every type of pest problem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (<ServiceCard key={idx} {...service} />))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">What Our Mumbai Customers Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Trusted by thousands of satisfied customers across Mumbai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">{[...Array(testimonial.rating)].map((_, i) => (<span key={i} className="text-yellow-400">⭐</span>))}</div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">&quot;{testimonial.message}&quot;</p>
                <p className="font-bold text-blue-950 dark:text-white">{testimonial.name}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">Serving All Areas of Mumbai</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Professional pest control services across Mumbai and suburbs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {['Andheri', 'Bandra', 'Dadar', 'Fort', 'Powai', 'Worli', 'Malad', 'Navi Mumbai', 'Thane', 'Borivali', 'Kandivali', 'Dahisar'].map((area, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-700 p-4 rounded-lg text-center text-gray-700 dark:text-gray-300 font-semibold hover:bg-blue-100 dark:hover:bg-slate-600 transition">📍 {area}</div>
            ))}
          </div>
          <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-4">Our Location - D.N. Dube Road, Dahisar</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-3">📍 D.N. Dube Road, Ratan Nagar, Dahisar (E), Mumbai - 400068</p>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-3">📞 <a href="tel:+919453394533" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">+91-94533 94533</a></p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">📧 <a href="mailto:info@removepest.in" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">info@removepest.in</a></p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">Professional Pest Control Services in Mumbai</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">RemovePest is Mumbai&apos;s most trusted pest control company, serving residential and commercial clients since 2008. Our certified technicians use government-approved, eco-friendly treatments to eliminate all types of pests safely and permanently.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">Residential Pest Control</h3>
              <p className="text-gray-600 dark:text-gray-300">We provide complete home pest control services across all areas of Mumbai. From cockroaches and rodents to bedbugs and termites — our experts protect your family with safe, child-friendly treatments that deliver long-lasting results.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">Commercial Pest Control</h3>
              <p className="text-gray-600 dark:text-gray-300">Protect your restaurant, hotel, office, or warehouse with our scheduled commercial pest management programs. We comply with FSSAI and health department standards, ensuring your business stays pest-free and audit-ready year-round.</p>
            </div>
            <div className="p-6 bg-blue-50 dark:bg-slate-800 rounded-lg">
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">AMC (Annual Maintenance Contract)</h3>
              <p className="text-gray-600 dark:text-gray-300">Our Annual Maintenance Contract offers regular scheduled treatments at discounted rates. Ideal for housing societies, offices, and commercial kitchens. Get priority service, free re-treatments, and a dedicated pest control manager.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know about our pest control services in Mumbai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">How long does a pest control treatment take?</h3>
                <p className="text-gray-600 dark:text-gray-300">Most standard treatments take 1–3 hours depending on the size of your property and the type of pest. Termite treatments and AMC services may require additional visits for complete elimination.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Are your pest control chemicals safe for children and pets?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes. We use only government-approved, WHO-certified chemicals that are safe for humans and pets after the recommended drying time. We always advise vacating the treated area for 2–4 hours post-treatment.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Do you offer a warranty on pest control services?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, we provide a service warranty ranging from 3 months to 1 year depending on the type of treatment. If pests return within the warranty period, we offer free re-treatment at no additional cost.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">How much does pest control cost in Mumbai?</h3>
                <p className="text-gray-600 dark:text-gray-300">Our pricing starts from ₹500 for basic treatments and varies based on property size, pest type, and treatment method. Contact us for a free inspection and customized quote with no hidden charges.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Do I need to vacate my home during treatment?</h3>
                <p className="text-gray-600 dark:text-gray-300">For most treatments, we recommend staying out for 2–4 hours. For intensive treatments like termite or bed bug control, we may advise vacating for 4–8 hours. Our team will guide you with complete pre- and post-treatment instructions.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Which areas in Mumbai do you serve?</h3>
                <p className="text-gray-600 dark:text-gray-300">We serve all areas of Mumbai including Andheri, Bandra, Dadar, Borivali, Dahisar, Malad, Kandivali, Powai, Thane, Navi Mumbai, Worli, Fort, and all Western and Central line localities. Same-day service available.</p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">How many treatments are needed to eliminate termites?</h3>
                <p className="text-gray-600 dark:text-gray-300">Termite control typically requires 2–3 treatment sessions for complete elimination. We use a combination of soil treatment, baiting systems, and wood treatment to ensure 100% termite-free results with a long-term warranty.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Can pest control be done in a rented apartment?</h3>
                <p className="text-gray-600 dark:text-gray-300">Absolutely. We regularly service rented flats, societies, and commercial spaces across Mumbai. You can book directly as a tenant. We also work with housing societies and building management offices for bulk and AMC bookings.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">What preparation is needed before pest control?</h3>
                <p className="text-gray-600 dark:text-gray-300">We recommend clearing kitchen cabinets, removing food items from countertops, covering drinking water, and keeping children and pets out of the house. Our technicians will provide a complete pre-treatment checklist when you book.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Do you provide pest control for restaurants and hotels?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes. We specialize in commercial pest control for restaurants, hotels, hospitals, warehouses, and food processing units. Our treatments are FSSAI-compliant and we provide documentation for health inspections and audits.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">Is a free inspection available before treatment?</h3>
                <p className="text-gray-600 dark:text-gray-300">Yes, we offer a free pest inspection for all new customers. Our expert will visit your property, assess the level of infestation, identify pest entry points, and recommend the most effective and affordable treatment plan.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">How do I book a pest control service in Mumbai?</h3>
                <p className="text-gray-600 dark:text-gray-300">Booking is easy! Call us at +91-94533 94533, fill out our online contact form, or send a WhatsApp message. We offer same-day and next-day appointments across Mumbai with flexible scheduling to suit your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 dark:from-slate-900 dark:to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Professional Pest Control Services Today</h2>
          <p className="text-xl text-blue-100 mb-8">Contact RemovePest for a free inspection and quote. No obligation!</p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <a href="tel:+919453394533" className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition inline-block">Call Now: +91-94533 94533</a>
            <a href="/contact" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 font-bold py-3 px-8 rounded-lg transition inline-block">Book Inspection</a>
          </div>
        </div>
      </section>
    </>
  );
}
