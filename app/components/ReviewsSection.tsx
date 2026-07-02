const reviews = [
  {
    name: 'Rajesh Kumar',
    role: 'Software Engineer',
    location: 'Andheri West',
    service: 'Cockroach Control',
    message: 'Professional service and very responsive. They solved our cockroach problem in just 2 visits. The technician was thorough and the gel treatment worked brilliantly. Highly recommend!',
    rating: 5,
    color: 'from-blue-600 to-blue-800',
    initials: 'RK',
    source: 'Google Review',
  },
  {
    name: 'Priya Sharma',
    role: 'Business Owner',
    location: 'Bandra West',
    service: 'Termite Control',
    message: 'Best pest control in Mumbai! They are prompt, efficient, and use safe methods. Got a 1-year warranty too. Our entire office building is now termite-free after their treatment.',
    rating: 5,
    color: 'from-green-600 to-green-800',
    initials: 'PS',
    source: 'Google Review',
  },
  {
    name: 'Amit Patel',
    role: 'Restaurant Owner',
    location: 'Dadar',
    service: 'AMC Program',
    message: 'Regular service provider for our restaurant. No issues with pests since we started with them 2 years ago. FSSAI-compliant certificates provided. Essential for any food business!',
    rating: 5,
    color: 'from-purple-600 to-purple-800',
    initials: 'AP',
    source: 'Google Review',
  },
  {
    name: 'Sunita Desai',
    role: 'Homemaker',
    location: 'Malad West',
    service: 'Bed Bugs Treatment',
    message: 'Had a terrible bedbug infestation that ruined our sleep for weeks. RemovePest sorted it in 3 visits. Very professional team, safe chemicals, and they even followed up to make sure it worked!',
    rating: 5,
    color: 'from-orange-500 to-orange-700',
    initials: 'SD',
    source: 'Google Review',
  },
  {
    name: 'Vikram Singh',
    role: 'Hotel Manager',
    location: 'Powai',
    service: 'General Pest Control',
    message: 'Managing a 80-room hotel, pest control is critical. RemovePest\'s AMC program is the best investment we\'ve made. Zero guest complaints since we signed up. Exceptional service!',
    rating: 5,
    color: 'from-teal-600 to-teal-800',
    initials: 'VS',
    source: 'Google Review',
  },
  {
    name: 'Meera Nair',
    role: 'Teacher',
    location: 'Borivali East',
    service: 'Rodent Control',
    message: 'Rats were destroying our kitchen. One call to RemovePest and within 2 days the problem was gone. They sealed all entry points too so the rats never came back. 5 stars for sure!',
    rating: 5,
    color: 'from-rose-600 to-rose-800',
    initials: 'MN',
    source: 'Google Review',
  },
];

export default function ReviewsSection({ locationName }: { locationName?: string }) {
  return (
    <section className="py-16 bg-slate-900 dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Customer Reviews
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our {locationName ? `${locationName}` : 'Mumbai'} Customers Say
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Trusted by 5,000+ satisfied customers. Rated 4.9 ⭐ on Google.
          </p>
          {/* Aggregate stars */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white font-bold ml-2">4.9</span>
            <span className="text-slate-400 text-sm ml-1">(500+ reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
            >
              {/* Big quote mark */}
              <span className="absolute top-4 right-5 text-7xl font-serif text-slate-700 leading-none select-none">&ldquo;</span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-slate-300 text-sm leading-relaxed flex-grow mb-6 relative z-10">
                &ldquo;{review.message}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-slate-700 pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {review.initials}
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-white font-semibold text-sm truncate">{review.name}</p>
                    <p className="text-slate-400 text-xs truncate">{review.role} · {review.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2.5 py-1 rounded-full font-medium">
                    {review.service}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    {review.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?kgmid=/g/11z92g4fpc&q=Remove+Pest+Control+Mumbai#lrd=0x3be7c9dc1e7c469f:0x474b841eeff38d99,1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-xl transition shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
