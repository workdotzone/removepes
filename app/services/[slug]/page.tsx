import HeroSection from '../../components/HeroSection';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

const serviceData: Record<string, {
  name: string;
  slug: string;
  image: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}> = {
  'cockroach-control': {
    name: 'Cockroach Control',
    slug: 'cockroach-control',
    image: '/images/services/cockroach-control.png',
    tagline: 'Eliminate Cockroaches Permanently',
    description: 'Professional cockroach control in Mumbai. German & American cockroach elimination using safe, eco-friendly methods. 100% guaranteed results.',
    longDescription: 'Cockroaches are one of the most common and dangerous pests found in Mumbai homes and commercial establishments. They spread diseases like salmonella, typhoid, and dysentery, and can trigger asthma and allergies. Our professional cockroach control service uses a combination of gel baiting, spray treatment, and follow-up visits to ensure complete elimination.',
    features: ['German & American Cockroach Treatment', 'Gel Baiting Technique', 'Spray & Dust Treatment', '100% Safe for Family & Pets', 'Guaranteed Results', '3-Month Warranty', 'Follow-up Visits Included', '24/7 Support'],
    benefits: [
      { title: 'Eliminates All Species', desc: 'Treatment effective against German, American, Brown-banded, and Oriental cockroaches.' },
      { title: 'No Odour Gel Treatment', desc: 'Our gel baiting is odourless and safe — no need to vacate your kitchen for long.' },
      { title: 'Child & Pet Safe', desc: 'All chemicals used are WHO-approved and safe for children and pets after 2-hour drying time.' },
      { title: '3-Month Warranty', desc: 'If cockroaches return within 3 months, we treat again at absolutely no extra cost.' },
    ],
    process: [
      { step: '01', title: 'Free Inspection', desc: 'Our expert visits your property to assess the level of infestation and identify hotspots.' },
      { step: '02', title: 'Customized Treatment Plan', desc: 'We design a treatment plan based on property size, infestation level, and your requirements.' },
      { step: '03', title: 'Gel Baiting & Spray', desc: 'We apply gel bait in cracks, crevices, and behind appliances along with targeted spray treatment.' },
      { step: '04', title: 'Follow-up & Warranty', desc: 'We conduct a follow-up visit to ensure complete elimination and provide a 3-month warranty.' },
    ],
    faq: [
      { q: 'How long does cockroach treatment take?', a: 'A standard cockroach treatment takes 1–2 hours depending on property size. Gel baiting treatments are faster and less disruptive.' },
      { q: 'How long should I stay out after treatment?', a: 'For spray treatment, stay out for 2–4 hours. For gel baiting, you can stay in — just avoid the treated areas for 1–2 hours.' },
      { q: 'Is the treatment safe for my kitchen?', a: 'Yes. We use food-grade safe gel baits in kitchens and only apply sprays to non-food contact surfaces.' },
      { q: 'How many treatments are needed?', a: 'Usually 1–2 treatments are sufficient. A follow-up visit is included to ensure complete elimination.' },
    ],
  },
  'termite-control': {
    name: 'Termite Control',
    slug: 'termite-control',
    image: '/images/services/fly-termite.png',
    tagline: 'Protect Your Home from Termites',
    description: 'Complete termite control in Mumbai. Pre & post-construction treatment, baiting systems, wood treatment. 1-year warranty included.',
    longDescription: 'Termites (white ants) cause billions of rupees of damage to wooden structures, furniture, and buildings across Mumbai every year. Silent destroyers, they work from inside and are often detected only after significant damage. Our certified termite control experts use a multi-pronged approach including soil treatment, wood treatment, and baiting systems for complete and permanent elimination.',
    features: ['Pre-Construction Soil Treatment', 'Post-Construction Treatment', 'Wood Treatment & Polishing', 'Termite Baiting System', 'Annual Maintenance Available', '1-Year Warranty', 'PCIS Certified Technicians', 'Documentation Provided'],
    benefits: [
      { title: 'Protects Wooden Structures', desc: 'Safeguards furniture, doors, windows, flooring, and wooden beams from termite damage.' },
      { title: 'Baiting System Technology', desc: 'Modern termite baiting systems eliminate the entire colony without disruption to your home.' },
      { title: '1-Year Warranty', desc: 'Comprehensive warranty with free re-treatment if termites return within 12 months.' },
      { title: 'FSSAI Compliant', desc: 'Treatment documentation provided for commercial kitchens and food processing units.' },
    ],
    process: [
      { step: '01', title: 'Termite Inspection', desc: 'Thorough inspection of walls, flooring, wooden structures, and soil to detect termite activity.' },
      { step: '02', title: 'Treatment Plan', desc: 'Customized plan using soil treatment, wood treatment, or baiting system based on infestation level.' },
      { step: '03', title: 'Chemical Application', desc: 'Certified chemicals injected into walls, soil, and wood through drilling and injection technique.' },
      { step: '04', title: 'Monitoring & Warranty', desc: 'Regular monitoring visits and 1-year warranty for complete peace of mind.' },
    ],
    faq: [
      { q: 'What is the difference between pre and post-construction termite treatment?', a: 'Pre-construction treatment is done during building construction by treating the soil foundation. Post-construction treatment is done in existing buildings through drilling and injection.' },
      { q: 'How long does termite treatment last?', a: 'Chemical treatments last 5–10 years. Baiting systems require quarterly monitoring and are effective ongoing. We provide a 1-year service warranty.' },
      { q: 'Will I need to vacate during termite treatment?', a: 'For most post-construction treatments, you can stay in — we work room by room. Some intensive treatments may require 4–8 hours away from treated areas.' },
      { q: 'Can termites damage concrete buildings?', a: 'Yes. Termites can travel through cracks in concrete, mortar, and expansion joints to reach wooden elements inside the building.' },
    ],
  },
  'rodent-control': {
    name: 'Rodent Control',
    slug: 'rodent-control',
    image: '/images/services/rodent-control.png',
    tagline: 'Get Rid of Rats & Mice Permanently',
    description: 'Professional rodent control in Mumbai. Trapping, exclusion, baiting, and sealing services for homes and businesses. Safe, eco-friendly methods.',
    longDescription: 'Rodents like rats and mice are not just a nuisance — they contaminate food, spread diseases like leptospirosis and plague, cause fire hazards by chewing wires, and damage property. Mumbai\'s dense urban environment makes rodent infestations particularly challenging. Our expert rodent control team uses integrated pest management with trapping, baiting, and exclusion to permanently solve rodent problems.',
    features: ['Rat & Mouse Trapping', 'Rodenticide Baiting', 'Entry Point Sealing', 'Sanitation Advisory', 'Exclusion Services', 'Monitoring Systems', 'Commercial & Residential', '3-Month Warranty'],
    benefits: [
      { title: 'Permanent Exclusion', desc: 'We identify and seal all entry points to prevent rodents from re-entering your property.' },
      { title: 'Disease Prevention', desc: 'Eliminates disease vectors including leptospirosis, salmonella, and rat-bite fever carriers.' },
      { title: 'Protects Wiring & Property', desc: 'Rodents chew electrical wiring causing fire hazards. Our treatment protects your property.' },
      { title: 'Monitoring Systems', desc: 'We install monitoring bait stations for early detection and ongoing protection.' },
    ],
    process: [
      { step: '01', title: 'Site Assessment', desc: 'Inspection of entry points, nesting areas, droppings, and gnaw marks to map infestation.' },
      { step: '02', title: 'Trapping & Baiting', desc: 'Strategic placement of traps and rodenticide bait stations in high-activity areas.' },
      { step: '03', title: 'Exclusion & Sealing', desc: 'All gaps, holes, and entry points sealed to prevent future entry.' },
      { step: '04', title: 'Follow-up & Monitoring', desc: 'Regular monitoring visits to check bait stations and ensure the property stays rodent-free.' },
    ],
    faq: [
      { q: 'What is the best way to get rid of rats in Mumbai?', a: 'A combination of trapping, rodenticide baiting, and entry-point exclusion is the most effective approach. Professional treatment is far more effective than DIY methods.' },
      { q: 'Are rodenticides safe for children and pets?', a: 'Our rodenticide bait stations are tamper-resistant and placed in inaccessible areas. We use second-generation anticoagulants in secure bait boxes for maximum safety.' },
      { q: 'How long does rodent control take?', a: 'Initial treatment takes 2–3 hours. Full elimination typically takes 1–2 weeks with monitoring. A 3-month warranty is provided.' },
      { q: 'Can rodents return after treatment?', a: 'With our exclusion service, re-entry is very unlikely. We seal all entry points and provide a warranty. If rodents return within 3 months, we re-treat for free.' },
    ],
  },
  'bed-bugs-control': {
    name: 'Bed Bugs Treatment',
    slug: 'bed-bugs-control',
    image: '/images/services/bed-bugs.png',
    tagline: 'Complete Bed Bug Elimination',
    description: 'Professional bed bug treatment in Mumbai. Heat treatment, chemical spray, steam treatment. Complete elimination guaranteed with follow-up visits.',
    longDescription: 'Bed bugs are small, blood-sucking insects that infest mattresses, furniture, and cracks in walls. Their bites cause itching, sleeplessness, and skin reactions. Bed bug infestations have surged across Mumbai hotels, hostels, and residences. Our certified bed bug treatment combines chemical spraying, steam treatment, and follow-up visits for complete, guaranteed elimination.',
    features: ['Chemical Spray Treatment', 'Steam Heat Treatment', 'Mattress & Furniture Treatment', 'Crack & Crevice Treatment', '2 Follow-up Visits Included', 'Prevention Guidance', '45-Day Warranty', 'Hotel & Hostel Specialists'],
    benefits: [
      { title: 'Complete Elimination', desc: 'Multi-treatment approach targeting eggs, nymphs, and adult bed bugs for 100% elimination.' },
      { title: 'No Harsh Odours', desc: 'We use low-odour, safe chemical formulations that are effective without strong smells.' },
      { title: 'Furniture Safe', desc: 'Treatments are specifically designed to be safe for mattresses, sofas, and wooden furniture.' },
      { title: '2 Follow-up Visits', desc: 'Two follow-up visits are included to treat any newly hatched eggs from the first cycle.' },
    ],
    process: [
      { step: '01', title: 'Inspection', desc: 'Thorough inspection of mattresses, bed frames, sofas, wardrobes, and wall cracks for bed bug activity.' },
      { step: '02', title: 'Preparation Guidance', desc: 'We advise on pre-treatment preparation including washing bedding and clearing clutter.' },
      { step: '03', title: 'Chemical & Steam Treatment', desc: 'Targeted chemical spray to all infested areas plus steam treatment for immediate kill.' },
      { step: '04', title: 'Follow-up Visits', desc: 'Two scheduled follow-up visits at 10-day intervals to eliminate newly hatched bed bugs.' },
    ],
    faq: [
      { q: 'How do I know if I have bed bugs?', a: 'Signs include small red bite marks on skin, tiny blood stains on sheets, dark/rusty spots on mattress edges, and a musty sweet odour in severely infested rooms.' },
      { q: 'How many treatments are needed for bed bugs?', a: 'Typically 2–3 treatments spaced 10–14 days apart are needed to break the egg-to-adult cycle. Two follow-up visits are included in our standard package.' },
      { q: 'Do I need to throw away my mattress?', a: 'No. Our treatment is effective on mattresses. Throwing away a mattress without treatment often spreads the infestation further.' },
      { q: 'How long does bed bug treatment take?', a: 'A standard treatment takes 2–3 hours for a 1-2 BHK. Larger properties require more time. You should stay out for 4–6 hours after treatment.' },
    ],
  },
  'mosquito-control': {
    name: 'Mosquito Control',
    slug: 'mosquito-control',
    image: '/images/services/mosquito-control.png',
    tagline: 'Protect Your Family from Mosquitoes',
    description: 'Professional mosquito control in Mumbai. Fogging, larvae treatment, and seasonal spray programs. Prevents dengue, malaria, and chikungunya.',
    longDescription: 'Mumbai\'s tropical climate makes it a breeding ground for mosquitoes. Diseases like dengue, malaria, and chikungunya cause thousands of illnesses each year in Mumbai. Our comprehensive mosquito control program targets both adult mosquitoes through fogging and larvae through anti-larval treatment, providing complete protection for your home, office, or society.',
    features: ['ULV Fogging Treatment', 'Larval Source Reduction', 'Anti-Larval Treatment', 'Seasonal Spray Programs', 'Society & Housing Complex Programs', 'AMC Available', 'Disease Prevention Focused', 'Eco-Friendly Chemicals'],
    benefits: [
      { title: 'Prevents Dengue & Malaria', desc: 'Effective treatment significantly reduces the mosquito population that spreads dengue, malaria, and chikungunya.' },
      { title: 'Targets Breeding Sources', desc: 'We identify and treat all breeding sources including stagnant water, drains, and planters.' },
      { title: 'Society-Wide Programs', desc: 'Comprehensive AMC programs for housing societies, schools, hospitals, and commercial complexes.' },
      { title: 'Safe Outdoor Fogging', desc: 'Our fogging equipment uses low-concentration, WHO-approved chemicals safe for outdoor environments.' },
    ],
    process: [
      { step: '01', title: 'Survey', desc: 'Inspection of premises to identify mosquito resting areas, breeding sources, and infestation level.' },
      { step: '02', title: 'Larval Treatment', desc: 'Anti-larval chemicals applied to all water bodies, drains, tanks, and breeding sites.' },
      { step: '03', title: 'Fogging', desc: 'ULV cold fogging of gardens, open areas, and building perimeters to eliminate adult mosquitoes.' },
      { step: '04', title: 'Residual Spray', desc: 'Residual spray on walls, ceilings, and resting surfaces for extended protection.' },
    ],
    faq: [
      { q: 'How often should mosquito fogging be done?', a: 'For effective control, fogging is recommended monthly during monsoon (June–September) and quarterly in other seasons. AMC programs offer cost-effective regular treatment.' },
      { q: 'Is mosquito fogging safe for children?', a: 'Yes. We ask residents to stay indoors during fogging and for 1–2 hours after. The chemicals disperse quickly and are safe after that period.' },
      { q: 'Can you treat my housing society for mosquitoes?', a: 'Yes. We specialize in society-wide mosquito control programs with regular visits, anti-larval treatment, and fogging. Contact us for AMC pricing.' },
      { q: 'What is the difference between fogging and larviciding?', a: 'Fogging kills adult mosquitoes instantly. Larviciding treats breeding sources to prevent larvae from developing into adult mosquitoes. Both together provide complete control.' },
    ],
  },
  'fly-control': {
    name: 'Fly Control',
    slug: 'fly-control',
    image: '/images/services/fly-control.png',
    tagline: 'Effective Fly Control for Homes & Businesses',
    description: 'Professional fly control in Mumbai. Larval treatment, fly traps, chemical spray, ILTs. FSSAI-compliant solutions for restaurants and food businesses.',
    longDescription: 'Flies are major carriers of diseases including cholera, typhoid, salmonella, and dysentery. They contaminate food and surfaces wherever they land. For restaurants, food businesses, and hospitals, fly control is not just a comfort issue — it\'s a legal and hygiene requirement. Our fly control solutions include fly traps, insect light traps (ILTs), larviciding, and chemical treatment.',
    features: ['Insect Light Traps (ILT)', 'Fly Bait Stations', 'Larval Control', 'Chemical Spray', 'Fly Screen Advisory', 'FSSAI Compliant', 'Restaurant Specialists', 'AMC Available'],
    benefits: [
      { title: 'FSSAI Compliance', desc: 'Our treatments meet FSSAI and health department standards for food businesses and restaurants.' },
      { title: 'ILT Installation', desc: 'Insect Light Traps installed in kitchens and food prep areas for continuous fly monitoring and control.' },
      { title: 'Disease Prevention', desc: 'Reduces risk of food contamination and disease transmission in kitchens and food service areas.' },
      { title: 'Odourless Treatment', desc: 'We use low-odour fly baits and gels ideal for kitchens, bakeries, and food processing units.' },
    ],
    process: [
      { step: '01', title: 'Inspection', desc: 'Identify fly species, breeding sources, entry points, and hot zones in the premises.' },
      { step: '02', title: 'Larval Treatment', desc: 'Larvicide applied to drains, waste areas, and organic matter to eliminate breeding sources.' },
      { step: '03', title: 'Trapping & Spraying', desc: 'Fly bait stations and ILTs installed; residual spray applied to resting surfaces.' },
      { step: '04', title: 'Prevention Advisory', desc: 'Guidance on sanitation practices, waste management, and fly screening to prevent recurrence.' },
    ],
    faq: [
      { q: 'Why are there so many flies in my restaurant?', a: 'Flies are attracted to food waste, drains, garbage bins, and organic matter. Regular larviciding of drains and proper waste management combined with ILTs provides effective control.' },
      { q: 'What is an Insect Light Trap (ILT)?', a: 'ILTs are electric devices that attract flies using UV light and trap them on glue boards or kill them electrically. They are essential for food businesses and provide continuous protection.' },
      { q: 'How long does fly treatment take?', a: 'Initial treatment takes 1–2 hours. ILT installation takes additional time based on the number of units. We recommend monthly or quarterly maintenance for commercial properties.' },
      { q: 'Is fly control treatment safe in my kitchen?', a: 'Yes. We only use food-safe chemicals in kitchen areas and prefer mechanical methods like ILTs and baits for active kitchen zones.' },
    ],
  },
  'ants-control': {
    name: 'Ants Control',
    slug: 'ants-control',
    image: '/images/services/ants-control.png',
    tagline: 'Eliminate Ant Colonies Completely',
    description: 'Professional ant control in Mumbai. Gel baiting, spray treatment, colony elimination. Long-lasting results for homes and businesses.',
    longDescription: 'Ant infestations are among the most persistent pest problems in Mumbai. From tiny sugar ants in kitchens to large carpenter ants damaging wood, different ant species require different treatment approaches. Our integrated ant control program identifies the ant species, locates the colony, and uses targeted gel baiting and chemical treatment to eliminate the entire colony permanently.',
    features: ['Ant Colony Elimination', 'Gel Bait Treatment', 'Perimeter Spray', 'Nest Location Service', 'Prevention Barriers', 'Multi-Species Treatment', 'Kitchen-Safe Methods', 'Long-Lasting Results'],
    benefits: [
      { title: 'Colony Elimination', desc: 'Gel bait is carried back to the colony by worker ants, eliminating the queen and entire nest.' },
      { title: 'Multi-Species Effective', desc: 'Effective against sugar ants, carpenter ants, fire ants, pharaoh ants, and all common Mumbai species.' },
      { title: 'Non-Repellent Treatment', desc: 'Our treatments use non-repellent chemicals that ants walk through and spread to the colony.' },
      { title: 'Prevention Barriers', desc: 'Perimeter treatment creates a long-lasting barrier preventing new ant colonies from entering.' },
    ],
    process: [
      { step: '01', title: 'Species Identification', desc: 'Identify the ant species to determine the most effective treatment approach.' },
      { step: '02', title: 'Colony Location', desc: 'Track ant trails and locate nest entry points inside and outside the property.' },
      { step: '03', title: 'Gel Baiting', desc: 'Apply targeted gel bait along ant trails and near entry points for colony elimination.' },
      { step: '04', title: 'Perimeter Treatment', desc: 'Chemical perimeter spray around the building foundation to create a protective barrier.' },
    ],
    faq: [
      { q: 'Why do ants keep coming back after treatment?', a: 'Standard repellent sprays only kill visible ants and don\'t eliminate the colony. Our gel bait is carried to the colony, killing the queen and all workers for permanent results.' },
      { q: 'Are ant control chemicals safe in my kitchen?', a: 'Yes. We use food-grade gel baits in kitchens that are safe for food preparation areas. Perimeter sprays are applied to non-food-contact surfaces only.' },
      { q: 'How long does ant treatment take to work?', a: 'Gel baiting shows results within 3–7 days as worker ants carry the bait to the colony. Perimeter spray provides immediate knockdown of surface ants.' },
      { q: 'Can ants cause structural damage?', a: 'Carpenter ants can damage wooden structures by excavating galleries for nesting. Regular inspection and treatment is important for wooden buildings and furniture.' },
    ],
  },
  'spider-control': {
    name: 'Spider Control',
    slug: 'spider-control',
    image: '/images/services/spider-control.png',
    tagline: 'Safe & Effective Spider Removal',
    description: 'Professional spider control in Mumbai. Web removal, residual spray, and preventive treatment. Safe for families and pets.',
    longDescription: 'While most spiders in Mumbai are harmless, certain species like the yellow sac spider and redback spider can deliver painful bites. Spider infestations with extensive webs also create an unclean and unprofessional appearance. Our spider control service includes web removal, targeted chemical treatment, and preventive spray to keep your home and business spider-free.',
    features: ['Spider Web Removal', 'Residual Chemical Spray', 'Indoor & Outdoor Treatment', 'Preventive Barrier Spray', 'Safe Methods', 'Family-Friendly', 'Commercial & Residential', 'Follow-up Visit Included'],
    benefits: [
      { title: 'Complete Web Removal', desc: 'Physical removal of all spider webs from ceilings, corners, and outdoor areas.' },
      { title: 'Preventive Barrier', desc: 'Residual spray on walls, ceilings, and entry points creates a long-lasting preventive barrier.' },
      { title: 'Safe Chemicals', desc: 'Government-approved chemicals safe for families, children, and pets after 2-hour drying time.' },
      { title: 'Covers All Hiding Spots', desc: 'Treatment reaches cracks, crevices, storage areas, and other hidden spider harbourage points.' },
    ],
    process: [
      { step: '01', title: 'Inspection', desc: 'Identify spider species, web locations, and entry points inside and outside the property.' },
      { step: '02', title: 'Web Removal', desc: 'Physical removal of all existing spider webs using professional equipment.' },
      { step: '03', title: 'Chemical Treatment', desc: 'Residual spray applied to walls, ceilings, corners, and entry points.' },
      { step: '04', title: 'Prevention Advisory', desc: 'Guidance on reducing spider attractants like insect lights and clutter near entry points.' },
    ],
    faq: [
      { q: 'Are spiders in Mumbai dangerous?', a: 'Most Mumbai spiders are harmless. However, yellow sac spiders and some others can bite when threatened. Our treatment removes all spiders and prevents re-entry.' },
      { q: 'How long does spider treatment last?', a: 'Residual spray provides 2–3 months of protection. We recommend quarterly treatments for complete ongoing control, especially for outdoor areas.' },
      { q: 'Can I do spider control myself?', a: 'DIY sprays are often ineffective as they don\'t reach all harbourage points and don\'t include web removal. Professional treatment with residual chemicals provides much longer protection.' },
      { q: 'Do spiders come back after treatment?', a: 'They may try to return from outside. Our perimeter treatment and barrier spray significantly reduces this. A follow-up visit is included in our standard service.' },
    ],
  },
  'wood-borer-control': {
    name: 'Wood Borer Control',
    slug: 'wood-borer-control',
    image: '/images/services/wood-borer-control.png',
    tagline: 'Protect Your Wooden Furniture & Structures',
    description: 'Professional wood borer treatment in Mumbai. Pre & post-treatment for furniture, floors, and wooden structures. Annual maintenance available.',
    longDescription: 'Wood borers are insects whose larvae tunnel through wood, causing extensive damage to furniture, flooring, doors, and wooden structures. The telltale sign is small round exit holes and fine powder (frass) on wooden surfaces. In Mumbai\'s humid climate, wood borer infestations are very common. Our treatment uses specialized wood-penetrating chemicals that reach larvae deep inside the wood.',
    features: ['Pre-Treatment for New Wood', 'Post-Treatment for Infested Wood', 'Furniture Treatment', 'Flooring & Decking Treatment', 'Door & Window Frame Treatment', 'Injection & Spray Method', 'Annual Checks Available', '6-Month Warranty'],
    benefits: [
      { title: 'Deep Penetration Treatment', desc: 'Specialized chemicals penetrate deep into wood grain to kill larvae at all stages of development.' },
      { title: 'Preserves Wood Quality', desc: 'Treatment stops damage and preserves the structural integrity of your furniture and fittings.' },
      { title: 'Pre-Treatment for New Furniture', desc: 'Pre-treatment of new wooden furniture before assembly provides long-term protection from future infestation.' },
      { title: '6-Month Warranty', desc: 'We provide a 6-month warranty and annual maintenance checks for complete ongoing protection.' },
    ],
    process: [
      { step: '01', title: 'Wood Inspection', desc: 'Inspect all wooden items for exit holes, frass, tunneling sounds, and active infestation signs.' },
      { step: '02', title: 'Surface Preparation', desc: 'Clean affected wood surfaces and open any blocked exit holes for maximum chemical penetration.' },
      { step: '03', title: 'Chemical Application', desc: 'Apply specialized wood-penetrating chemical via brush, injection, and spray to all affected areas.' },
      { step: '04', title: 'Annual Maintenance', desc: 'Schedule annual inspection and re-treatment to protect wooden investments long-term.' },
    ],
    faq: [
      { q: 'How do I know if I have wood borers?', a: 'Look for small round holes (2–3mm) in wooden surfaces, fine powder or dust beneath furniture, and visible tunneling damage inside wood. You may also hear faint tapping sounds from larvae.' },
      { q: 'Can wood borer damage be repaired?', a: 'Mild to moderate damage can be treated and filled. Severely damaged wood may need replacement. Early detection and treatment prevents extensive damage.' },
      { q: 'Is wood borer treatment safe for furniture?', a: 'Yes. Our chemicals are specifically designed for wooden surfaces and will not stain, discolor, or damage your furniture finish when applied correctly.' },
      { q: 'How long does wood borer treatment take?', a: 'A single treatment session takes 1–3 hours depending on the amount of wood to be treated. Multiple sessions may be needed for severe infestations.' },
    ],
  },
  'honey-bee-control': {
    name: 'Honey Bee Control',
    slug: 'honey-bee-control',
    image: '/images/services/honey-bee-control.png',
    tagline: 'Safe Bee Removal & Hive Management',
    description: 'Humane honey bee removal and hive management in Mumbai. Safe relocation of bees without harm. Eco-friendly methods by trained professionals.',
    longDescription: 'Honey bees are vital pollinators and should be protected wherever possible. However, bee hives on balconies, AC units, walls, and trees pose a serious risk of stings — especially for children and those with allergies. Our bee removal service safely relocates honey bee colonies without harming them, using smoke and professional equipment. We also handle wasp nests and aggressive bee species.',
    features: ['Live Bee Relocation', 'Hive Removal & Cleaning', 'Wasp Nest Removal', 'Smoke Treatment', 'Balcony & AC Unit Removal', 'Tree Hive Removal', 'Eco-Friendly Methods', 'Trained Professional Team'],
    benefits: [
      { title: 'Humane Relocation', desc: 'We relocate honey bees alive rather than exterminating them, supporting ecological balance.' },
      { title: 'Safe for Families', desc: 'Professional equipment and bee suits ensure safe removal without risk of stings to residents.' },
      { title: 'Hive Cleaning Included', desc: 'After bee removal, we clean and seal the hive location to prevent future colonization.' },
      { title: 'All Locations Covered', desc: 'We handle hives in difficult locations including AC units, walls, rooftops, and high-rise balconies.' },
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'Evaluate hive size, location, accessibility, and bee species to plan the safest removal method.' },
      { step: '02', title: 'Protective Setup', desc: 'Our team arrives in full protective gear with smokers and professional removal equipment.' },
      { step: '03', title: 'Bee Relocation', desc: 'Bees are calmed with smoke and carefully relocated to a safe location away from your property.' },
      { step: '04', title: 'Hive Removal & Sealing', desc: 'Hive is completely removed and the area cleaned and sealed to prevent future colonization.' },
    ],
    faq: [
      { q: 'Is honey bee removal dangerous?', a: 'It can be dangerous without proper equipment and training. Our team uses full bee suits, smokers, and professional tools to safely remove bees without harm to you or them.' },
      { q: 'Will the bees return after removal?', a: 'We remove the entire hive including comb and seal the location. Without the hive structure and pheromones, bees are very unlikely to return to the same spot.' },
      { q: 'Can you remove a bee hive from inside a wall?', a: 'Yes. Wall bee hives require opening a section of the wall to access the hive. We work with you to minimize structural disruption and arrange for sealing after removal.' },
      { q: 'How quickly can you respond to a bee emergency?', a: 'We offer same-day emergency bee removal across Mumbai. Call +91-94533 94533 for immediate assistance.' },
    ],
  },
  'bird-nesting-control': {
    name: 'Bird Nesting Control',
    slug: 'bird-nesting-control',
    image: '/images/services/bird-control.png',
    tagline: 'Humane Bird Control for Buildings',
    description: 'Professional bird nesting control in Mumbai. Bird netting, anti-roosting spikes, and deterrents for pigeons, sparrows, and other birds.',
    longDescription: 'Bird infestations on buildings, warehouses, and commercial properties cause significant damage through droppings, nesting materials, and noise. Bird droppings are acidic and damage building facades, vehicles, and solar panels. They also carry diseases and block drainage systems. Our bird control solutions use humane, non-lethal methods including netting, spikes, and deterrents for permanent results.',
    features: ['Bird Netting Installation', 'Anti-Roosting Spikes', 'Electric Track Deterrents', 'Visual & Audio Deterrents', 'Pigeon & Sparrow Control', 'Building Facade Protection', 'Solar Panel Bird Proofing', 'Warehouse & Industrial Solutions'],
    benefits: [
      { title: 'Humane Methods Only', desc: 'We use only humane, non-lethal bird deterrents approved by wildlife protection guidelines.' },
      { title: 'Protects Building Facade', desc: 'Prevents corrosive bird droppings from damaging paintwork, stonework, and building materials.' },
      { title: 'Health Protection', desc: 'Bird droppings carry diseases including histoplasmosis and psittacosis. Our solutions protect building occupants.' },
      { title: 'Long-Lasting Solutions', desc: 'Our netting and spike installations are durable, weather-resistant, and effective for 5+ years.' },
    ],
    process: [
      { step: '01', title: 'Site Survey', desc: 'Identify bird species, roosting and nesting locations, entry points, and infestation level.' },
      { step: '02', title: 'Solution Design', desc: 'Design a customized bird proofing plan based on building type, bird species, and severity.' },
      { step: '03', title: 'Installation', desc: 'Install bird netting, spikes, electric tracks, or other deterrents as per the approved plan.' },
      { step: '04', title: 'Follow-up & Maintenance', desc: 'Post-installation inspection and annual maintenance to ensure all deterrents remain effective.' },
    ],
    faq: [
      { q: 'What is the most effective bird control method?', a: 'Bird netting is the most complete solution as it physically excludes birds from all areas. Anti-roosting spikes are ideal for ledges and parapets. We recommend a combination based on your building type.' },
      { q: 'Is bird control legal in India?', a: 'Yes, provided humane methods are used. We only use non-lethal deterrents. Chemical or lethal methods for protected bird species are illegal under the Wildlife Protection Act.' },
      { q: 'Can you install bird netting on high-rise buildings?', a: 'Yes. We have rope access and elevated work platform capabilities for high-rise installations across Mumbai.' },
      { q: 'How do I stop pigeons from nesting on my AC unit?', a: 'We install custom-fitted spikes or netting around AC units and outdoor equipment. This permanently prevents pigeons from roosting without affecting unit performance.' },
    ],
  },
  'weed-control': {
    name: 'Weed Control',
    slug: 'weed-control',
    image: '/images/services/weed-control.png',
    tagline: 'Remove Weeds & Protect Your Property',
    description: 'Professional weed control services in Mumbai. Herbicide application, manual removal, and prevention for gardens, compounds, and open areas.',
    longDescription: 'Uncontrolled weed growth damages gardens, invades pathways, reduces crop yields, and creates breeding grounds for pests and rodents. Our weed control service uses a combination of selective and non-selective herbicides along with manual removal to effectively eliminate all types of weeds from residential gardens, housing society compounds, industrial sites, and agricultural land.',
    features: ['Selective Herbicide Application', 'Non-Selective Weed Killer', 'Manual Weed Removal', 'Garden & Compound Treatment', 'Industrial Site Treatment', 'Pathway & Driveway Treatment', 'Pre-Emergent Treatment', 'Environmentally Responsible'],
    benefits: [
      { title: 'Targeted Treatment', desc: 'Selective herbicides kill weeds while protecting grass, plants, and crops from damage.' },
      { title: 'Prevents Pest Breeding', desc: 'Removing weed growth eliminates hiding spots and breeding grounds for insects and rodents.' },
      { title: 'Improves Aesthetics', desc: 'Clean, weed-free compounds and gardens improve the appearance and value of your property.' },
      { title: 'Pre-Emergent Protection', desc: 'Pre-emergent herbicides prevent new weed seeds from germinating for long-term control.' },
    ],
    process: [
      { step: '01', title: 'Weed Assessment', desc: 'Identify weed species, growth density, and the most appropriate treatment method.' },
      { step: '02', title: 'Selective Treatment', desc: 'Apply selective herbicides to kill specific weed species without harming desired plants.' },
      { step: '03', title: 'Manual Removal', desc: 'Physical removal of stubborn weeds, roots, and overgrown vegetation.' },
      { step: '04', title: 'Prevention Treatment', desc: 'Apply pre-emergent herbicide to prevent new weed seeds from germinating.' },
    ],
    faq: [
      { q: 'Is herbicide application safe for my garden plants?', a: 'We use selective herbicides that target specific weed species without harming grass, ornamental plants, and crops. Non-selective herbicides are only used in areas where complete vegetation removal is desired.' },
      { q: 'How long before weeds start dying after treatment?', a: 'Most weeds show visible effects within 3–7 days of herbicide application. Complete browning and die-off typically occurs within 2 weeks.' },
      { q: 'Can you do weed control for my housing society compound?', a: 'Yes. We provide weed control for housing societies, industrial compounds, schools, and institutional properties with AMC programs available.' },
      { q: 'How often should weed control be done?', a: 'We recommend quarterly weed control treatments for compounds and gardens. Pre-emergent treatment in spring/monsoon season provides the best prevention.' },
    ],
  },
  'sanitization': {
    name: 'Sanitization Services',
    slug: 'sanitization',
    image: '/images/services/sanitaisation.png',
    tagline: 'Complete Sanitization & Disinfection',
    description: 'Professional sanitization and disinfection services in Mumbai. Homes, offices, hospitals, restaurants, and commercial spaces. NABL-certified chemicals.',
    longDescription: 'In the post-COVID world, regular sanitization and disinfection has become essential for homes, offices, schools, hospitals, and commercial spaces. Our comprehensive sanitization service uses hospital-grade disinfectants and fogging technology to eliminate bacteria, viruses, fungi, and other pathogens from all surfaces and air spaces, creating a truly hygienic environment.',
    features: ['Hospital-Grade Disinfectants', 'ULV Fogging Technology', 'Surface Disinfection', 'Air Disinfection', 'NABL-Certified Chemicals', 'COVID-19 Protocols', 'Healthcare Facility Specialists', 'AMC Programs Available'],
    benefits: [
      { title: 'Hospital-Grade Protection', desc: 'We use the same disinfectants used in hospitals and healthcare facilities for maximum pathogen elimination.' },
      { title: 'ULV Fogging Technology', desc: 'Ultra-low volume foggers disperse disinfectant particles to reach all surfaces including hard-to-access areas.' },
      { title: 'Broad-Spectrum Efficacy', desc: 'Our disinfectants are effective against bacteria, viruses, fungi, mold, and spores.' },
      { title: 'Documentation Provided', desc: 'Certificates of sanitization provided for offices, healthcare facilities, and food businesses.' },
    ],
    process: [
      { step: '01', title: 'Pre-Sanitization Setup', desc: 'Clear the area and cover sensitive equipment. Residents advised to vacate during treatment.' },
      { step: '02', title: 'Surface Wiping', desc: 'High-touch surfaces including door handles, switches, desks, and countertops wiped with disinfectant.' },
      { step: '03', title: 'ULV Fogging', desc: 'Hospital-grade disinfectant fogged through the entire space to sanitize air and all surfaces.' },
      { step: '04', title: 'Certification', desc: 'Sanitization certificate issued confirming treatment date, chemicals used, and coverage area.' },
    ],
    faq: [
      { q: 'How often should sanitization be done?', a: 'For high-traffic areas like offices, restaurants, and schools, monthly sanitization is recommended. For residences, quarterly or as needed (post-illness, post-renovation) is sufficient.' },
      { q: 'Is the sanitization fogging safe for children?', a: 'Yes, after the recommended 2–3 hour ventilation period. We use WHO-listed disinfectants that leave no harmful residue after the recommended airing time.' },
      { q: 'Do you provide sanitization certificates?', a: 'Yes. We provide a certificate of sanitization with details of chemicals used, dilution rates, coverage area, and date of treatment — required by many regulatory authorities.' },
      { q: 'Can you do emergency sanitization same day?', a: 'Yes. We offer emergency sanitization services across Mumbai with same-day availability. Call +91-94533 94533 for immediate assistance.' },
    ],
  },
  'general-pest-control': {
    name: 'General Pest Control',
    slug: 'general-pest-control',
    image: '/images/services/genral-pest-control.png',
    tagline: 'Comprehensive Pest Management for All Pests',
    description: 'General pest control in Mumbai. Multi-pest treatment for cockroaches, ants, spiders, silverfish, and all crawling insects. AMC plans available.',
    longDescription: 'General pest control is a comprehensive treatment that addresses all common household and commercial pests in a single service. It\'s the most cost-effective solution for properties with multiple pest problems or for those wanting preventive protection against all types of pests. Our general pest control covers cockroaches, ants, silverfish, centipedes, spiders, and all crawling insects in one visit.',
    features: ['Multi-Pest Treatment', 'Cockroaches, Ants & Spiders', 'Silverfish & Centipedes', 'Crawling Insect Treatment', 'Indoor & Outdoor Coverage', 'Customized AMC Plans', 'Quarterly & Monthly Programs', 'Expert Assessment Included'],
    benefits: [
      { title: 'All-in-One Solution', desc: 'Single treatment addresses cockroaches, ants, spiders, silverfish, and all crawling pests.' },
      { title: 'Most Cost-Effective', desc: 'Multi-pest treatment is more economical than separate treatments for each pest type.' },
      { title: 'Preventive Protection', desc: 'Ideal for new homes and properties as a preventive treatment before pests become established.' },
      { title: 'AMC Programs', desc: 'Annual maintenance contracts with quarterly or monthly visits provide year-round pest-free protection.' },
    ],
    process: [
      { step: '01', title: 'Full Property Inspection', desc: 'Comprehensive inspection of all areas to identify current pests and potential problem areas.' },
      { step: '02', title: 'Customized Treatment', desc: 'Treatment plan customized based on property size, pest types found, and your specific needs.' },
      { step: '03', title: 'Multi-Chemical Application', desc: 'Targeted application of different chemicals for different pest types in appropriate areas.' },
      { step: '04', title: 'Prevention & Advisory', desc: 'Post-treatment advice on hygiene practices, entry point sealing, and monitoring for ongoing protection.' },
    ],
    faq: [
      { q: 'What does general pest control cover?', a: 'Our general pest control covers cockroaches, ants, spiders, silverfish, centipedes, earwigs, and all common crawling insects. It does not cover rodents, termites, or bedbugs (which require specialized treatment).' },
      { q: 'How often should I get general pest control done?', a: 'Quarterly treatment is recommended for most homes and businesses. Monthly visits are available for commercial kitchens, restaurants, and high-risk properties.' },
      { q: 'How long does general pest control last?', a: 'A standard treatment lasts 2–3 months. Our quarterly AMC program ensures continuous protection throughout the year.' },
      { q: 'Is general pest control the same as AMC?', a: 'General pest control is a single treatment visit. AMC (Annual Maintenance Contract) is a program with multiple scheduled visits throughout the year at a discounted rate.' },
    ],
  },
  'rats-control': {
    name: 'Rats Control',
    slug: 'rats-control',
    image: '/images/services/rats-control.png',
    tagline: 'Professional Rat Removal Services',
    description: 'Professional rats control in Mumbai. Trapping, baiting, exclusion, and monitoring. Complete rat elimination for homes, restaurants, and warehouses.',
    longDescription: 'Rats are a serious public health hazard in Mumbai, spreading diseases, contaminating food supplies, and causing property damage. Unlike mice, rats are larger, more aggressive, and harder to control. Our dedicated rats control service uses heavy-duty traps, professional-grade rodenticides, and comprehensive exclusion to permanently eliminate rat infestations from residential and commercial properties.',
    features: ['Heavy-Duty Rat Traps', 'Professional Rodenticide Baiting', 'Burrow Treatment', 'Exclusion & Sealing', 'CCTV Drain Inspection', 'Warehouse Specialists', 'Monitoring Bait Stations', '3-Month Warranty'],
    benefits: [
      { title: 'Large-Scale Elimination', desc: 'Heavy-duty traps and professional rodenticide effective for large rat populations in warehouses and buildings.' },
      { title: 'Burrow Treatment', desc: 'Treatment of rat burrows in outdoor areas, gardens, and under buildings for complete elimination.' },
      { title: 'Disease Control', desc: 'Eliminates the main carrier of leptospirosis, rat-bite fever, and food contamination in Mumbai.' },
      { title: 'Monitoring Stations', desc: 'Permanent monitoring bait stations installed for ongoing protection and early detection.' },
    ],
    process: [
      { step: '01', title: 'Infestation Assessment', desc: 'Map rat runways, entry points, burrows, droppings, and gnaw marks across the property.' },
      { step: '02', title: 'Trapping Setup', desc: 'Strategic placement of heavy-duty snap traps and glue boards in high-activity areas.' },
      { step: '03', title: 'Rodenticide Baiting', desc: 'Tamper-resistant bait stations placed along rat runways inside and outside the building.' },
      { step: '04', title: 'Exclusion & Monitoring', desc: 'Seal all entry points and install permanent monitoring stations for ongoing protection.' },
    ],
    faq: [
      { q: 'How do I know if I have rats vs mice?', a: 'Rats are larger (150–300g), leave bigger droppings (1.5–2cm), and cause more visible damage. Mice are smaller (15–25g) with smaller droppings (0.3–0.6cm) and are faster breeders.' },
      { q: 'How long does rat control take?', a: 'Initial treatment takes 2–4 hours. Full elimination typically requires 2–4 weeks of monitoring and bait replacement. A 3-month warranty is provided.' },
      { q: 'Are rat baits safe for my family and pets?', a: 'Our rodenticide bait stations are tamper-resistant and secured in locations inaccessible to children and pets. We advise on placement to ensure safety throughout the treatment period.' },
      { q: 'Can rats enter through the drainage system?', a: 'Yes. Rats commonly enter buildings through drain pipes and sewers. We can inspect and treat drain entry points and recommend drain guards to prevent future entry.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return {};
  return {
    title: `${service.name} in Mumbai | RemovePest — Professional Pest Control`,
    description: service.description,
    keywords: `${service.name.toLowerCase()} Mumbai, ${service.name.toLowerCase()} service, professional ${service.name.toLowerCase()}, pest control Mumbai`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-600">Service not found</h1>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        title={`${service.name} in Mumbai`}
        subtitle={`${service.tagline} — ${service.description}`}
        showContactForm={true}
        heroImage="/images/hero/banner.png"
      />

      {/* Service Overview */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4">
                Professional {service.name} in Mumbai
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={service.image}
                alt={service.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-3">
              Why Choose RemovePest for {service.name}?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Certified experts, proven methods, guaranteed results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, i) => (
              <div key={i} className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm border-t-4 border-blue-600">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">{b.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-3">Our {service.name} Process</h2>
            <p className="text-gray-600 dark:text-gray-300">Systematic, proven, guaranteed results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-3">
              Frequently Asked Questions — {service.name}
            </h2>
          </div>
          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-blue-950 dark:text-white mb-2">{item.q}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-blue-950 dark:text-white mb-6 text-center">Other Pest Control Services</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(serviceData).filter(s => s.slug !== slug).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="bg-gray-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Book {service.name} in Mumbai Today</h2>
          <p className="text-blue-100 text-lg mb-8">Free inspection · Same-day service · Guaranteed results</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919453394533" className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 px-8 rounded-lg transition">
              Call: +91-94533 94533
            </a>
            <a href="/contact" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-950 font-bold py-3 px-8 rounded-lg transition">
              Book Free Inspection
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
