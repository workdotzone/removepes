import type { MetadataRoute } from 'next';

const locationSlugs = [
  'airoli', 'akola', 'ambernath', 'ambivali', 'andheri-midc', 'andheri-seepz',
  'andheri', 'asalpha', 'asangaon', 'bandra', 'bhandup', 'bhayandar', 'bhayander',
  'bhiwandi', 'boisar', 'borivali', 'byculla', 'charni-road', 'chembur', 'churchgate',
  'cst', 'dadar', 'dahisar', 'diva', 'dombivali', 'ghansoli', 'ghatkopar', 'goregaon',
  'govandi', 'grant-road', 'jogeshwari', 'kalva', 'kamothe', 'kandivali', 'kanjurmarg',
  'khar-road', 'kharghar', 'kurla', 'lokhandwala', 'lower-parel', 'mahalaxmi', 'mahim',
  'malad', 'mankhurd', 'marine-line', 'matunga', 'mira-road', 'mulund', 'mumbai-central',
  'mumbai-cst', 'nahur', 'naigaon', 'nalasopara', 'navi-mumbai', 'neral', 'nerul',
  'parel', 'powai', 'prabhadevi', 'rabale', 'ram-mandir', 'sakinaka', 'santacruz',
  'sion', 'thane', 'titwala', 'trombe', 'turbhe', 'ulwe', 'wadala', 'vasai', 'vashi',
  'vasind', 'versova', 'vidya-vihar', 'vikhroli', 'vile-parle', 'virar',
  'colaba', 'fort', 'worli',
];

const serviceSlugs = [
  'cockroach-control', 'termite-control', 'rodent-control', 'bed-bugs-control',
  'mosquito-control', 'fly-control', 'ants-control', 'spider-control',
  'wood-borer-control', 'honey-bee-control', 'bird-nesting-control',
  'weed-control', 'sanitization', 'general-pest-control', 'rats-control',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://removepest.in';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
