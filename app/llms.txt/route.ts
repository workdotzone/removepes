import { NextResponse } from 'next/server';

const content = `# RemovePest — Professional Pest Control Services in Mumbai

> RemovePest provides certified, eco-friendly pest control services across Mumbai, Navi Mumbai, and Thane. 15+ years of experience, 5000+ satisfied customers, 24/7 emergency service available.

## About

RemovePest is Mumbai's trusted pest management company offering safe, effective, and affordable pest control solutions for homes, offices, and commercial establishments.

- Phone: +91-94203-00006
- Email: info@removepest.in
- Website: https://removepest.in
- Service Area: Mumbai, Navi Mumbai, Thane (Maharashtra, India)
- Operating Hours: 24/7, 365 days a year

## Services

- [Cockroach Control](https://removepest.in/services/cockroach-control)
- [Termite Control](https://removepest.in/services/termite-control)
- [Rodent Control](https://removepest.in/services/rodent-control)
- [Bed Bug Control](https://removepest.in/services/bed-bugs-control)
- [Mosquito Control](https://removepest.in/services/mosquito-control)
- [Fly Control](https://removepest.in/services/fly-control)
- [Ants Control](https://removepest.in/services/ants-control)
- [Spider Control](https://removepest.in/services/spider-control)
- [Wood Borer Control](https://removepest.in/services/wood-borer-control)
- [Honey Bee Control](https://removepest.in/services/honey-bee-control)
- [Bird Nesting Control](https://removepest.in/services/bird-nesting-control)
- [Sanitization Services](https://removepest.in/services/sanitization)
- [General Pest Control](https://removepest.in/services/general-pest-control)
- [Weed Control](https://removepest.in/services/weed-control)

## Key Pages

- [Home](https://removepest.in/)
- [All Services](https://removepest.in/services)
- [About Us](https://removepest.in/about)
- [Gallery](https://removepest.in/gallery)
- [Contact Us](https://removepest.in/contact)

## Coverage Areas in Mumbai

Andheri, Bandra, Borivali, Chembur, Dadar, Dahisar, Ghatkopar, Goregaon,
Jogeshwari, Kandivali, Kurla, Malad, Mulund, Powai, Santacruz, Thane,
Navi Mumbai, Vile Parle, Vikhroli, Worli, Colaba, Fort, Bhandup, Bhiwandi,
Vasai, Virar, Nalasopara, Mira Road, Dombivali, Kalyan, and 70+ more areas.

## Why Choose RemovePest

- 15+ years of professional experience
- Government certified and licensed pest controllers
- Eco-friendly, child and pet safe treatments
- Free inspection and site assessment
- 30-day service guarantee
- Trained and uniformed technicians
- ISO certified processes

## Sitemap

Full sitemap available at: https://removepest.in/sitemap.xml
`;

export async function GET() {
  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
