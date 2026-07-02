import type { MetadataRoute } from 'next';

const BASE_URL = 'https://removepest.in';
const LAST_MODIFIED = new Date('2026-07-02');

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
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
}
