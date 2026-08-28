export const COMPANY = {
  name: 'Assembly HTX',
  shortName: 'Assembly',
  tagline: 'Boho-Chic Boutique Event Space',
  phone: '(832) 581-0516',
  phoneHref: '+18325810516',
  email: '',
  address: '2015 Berry St',
  city: 'Houston, TX 77004',
  serviceArea: 'Central Houston · Museum District Area',
  maxGuests: 50,
  instagram: 'https://www.instagram.com/assemblyhtx/',
  instagramHandle: '@assemblyhtx',
  facebook: '',
  website: 'https://www.assemblyhtx.com/',
  googleUrl:
    'https://www.google.com/maps/search/?api=1&query=Assembly+HTX+2015+Berry+St+Houston+TX+77004',
  googleReviewsUrl:
    'https://www.google.com/maps/search/Assembly+HTX+2015+Berry+Street+Houston+reviews',
  googleRating: 4.7,
  reviewCount: 32,
};

export const RENTAL_POLICY = {
  pdfUrl:
    'https://www.assemblyhtx.com/_files/ugd/cd3368_12a6660adeee4600bd311a5b7c87b3d3.pdf',
  title: 'Rental Contract & Policy',
  summary:
    'Please read this document in its entirety. Your signature is required on your booking form to confirm you have read and agree to these terms.',
  sections: [
    {
      title: 'Payments',
      items: [
        'Credit card only — card must be saved on file at time of initial invoice payment.',
        'Events within 45 days must pay the full amount.',
        'Events booked outside 45 days pay a 50% deposit; final balance is auto-deducted 30 days prior.',
      ],
    },
    {
      title: 'Cancellation Policy',
      items: [
        'All payments are non-refundable — no exceptions.',
        'Payments are transferable only; new date must be booked within 6 months of the original event date.',
        '45 business days notice required for cancellation; $100 penalty for cancellations with date change.',
      ],
    },
    {
      title: 'Time Guidelines',
      items: [
        'Your booked time slot includes setup and cleanup — access and exit times are strict.',
        'Time extensions are not available on the day of your event.',
        'Late exit penalties apply in 15-minute increments ($50); PM parties must exit by 11 PM.',
      ],
    },
    {
      title: 'Decor & Cleaning',
      items: [
        'No screws, nails, or staples; no glitter or confetti ($50 cleanup fee).',
        'Do not move plants or damage walls, floors, beams, or property.',
        'Renter cleaning protocol required — leave the space as found or pre-arrange a $175 cleaning fee at booking.',
        '$200 security deposit required 48 hours before your event.',
      ],
    },
    {
      title: 'Liability & Waiver',
      items: [
        'Renter assumes all risks and releases Assembly Event Space, LLC from liability.',
        'Renter indemnifies Assembly HTX for claims arising from the event or use of the facility.',
        'You authorize Assembly HTX to charge the credit card on file per booking terms.',
      ],
    },
  ],
} as const;

export const ACCENT = '#D4849A';
export const ACCENT_HOVER = '#B86B82';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Interior' },
  { id: 'patio', label: 'Patio' },
  { id: 'events', label: 'Events' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export { GALLERY_IMAGES, type GalleryImage } from './gallery-images';

export const ABOUT_CONTENT = {
  intro:
    'Welcome to Assembly — a boho-chic, sun-laden boutique event space in central Houston. Essentially appointed and perfect for your next intimate celebration.',
  body: 'Assembly provides a light-filled mid-century bohemian inspired room with a lush shaded private patio. Centrally located with keyless entry, WiFi, Bluetooth speaker, and an essential kitchen — ideal for boutique weddings, dinner parties, showers, and corporate gatherings.',
  evolution:
    'We keep it simple: BYOB, BYO catering, BYO DJ. No cleaning fee on weekend rentals. Truly boutique with limited occupancy of 50 guests seated or standing — perfect for day events and early evening occasions ending by 11:30 PM.',
};

export const VENUE_HIGHLIGHTS = [
  {
    title: 'Boho & Bright',
    description:
      '900 sq ft open room with natural aesthetic, lots of greenery, chic decor, and two sets of French doors flooding the space with light.',
  },
  {
    title: 'Private Patio',
    description:
      '400 sq ft lush shaded outdoor patio — perfect for cocktail hour, ceremonies, or al fresco dining.',
  },
  {
    title: 'Essentially Appointed',
    description:
      'Includes 50 chairs, 5 folding tables, 5 bar highs, essential kitchen, convection oven, and marble counters.',
  },
  {
    title: 'Boutique & Central',
    description:
      '15 private parking spaces plus street parking, keyless entry, wheelchair accessible — in the heart of Houston.',
  },
];

export const AMENITIES = [
  '900 sq ft Main Room',
  '400 sq ft Private Patio',
  '50 Guest Capacity',
  '50 Folding Chairs + Tables',
  'Essential Kitchen',
  'BYOB & BYO Catering',
  'Bluetooth Speaker & WiFi',
  '15 Private Parking Spaces',
  'Keyless Entry',
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Google Reviewer',
    event: 'Wedding · Google Review',
    rating: 5,
    text: 'Assembly HTX was the perfect boutique venue for our celebration. The boho-chic space is sun-filled and beautiful, and the private patio was a hit with our guests. Exactly what we hoped for.',
  },
  {
    id: 2,
    name: 'Google Reviewer',
    event: 'Baby Shower · Google Review',
    rating: 5,
    text: 'Gorgeous mid-century bohemian space with lush greenery and great natural light. Easy to decorate, centrally located, and the owners were responsive and professional throughout booking.',
  },
  {
    id: 3,
    name: 'Google Reviewer',
    event: 'Corporate Event · Google Review',
    rating: 5,
    text: 'We hosted a dinner party for our team and Assembly was ideal — intimate, stylish, and well appointed. BYOB and BYO catering made it flexible and affordable.',
  },
  {
    id: 4,
    name: 'Google Reviewer',
    event: 'Graduation Party · Google Review',
    rating: 5,
    text: 'There were about 50 of us and the space felt perfect — not too big, not too small. Everything was sparkling clean and the rates were very reasonable for a Houston event venue.',
  },
  {
    id: 5,
    name: 'Google Reviewer',
    event: 'Google Review',
    rating: 5,
    text: 'A hidden gem in Houston! The French doors, private patio, and boho aesthetic photographs beautifully. No cleaning fee on weekends was a great bonus.',
  },
  {
    id: 6,
    name: 'Google Reviewer',
    event: 'Google Review',
    rating: 4,
    text: 'Lovely boutique event space with essential amenities done right. Quiet time policy keeps things neighborhood-friendly. Would book again for an daytime or early evening event.',
  },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'What are your rental rates?',
    answer:
      'Mon–Thu from $85/hr (4-hr min) · Fri–Sun from $675 · Full day packages up to $1,200',
  },
  {
    question: 'What is your guest capacity?',
    answer:
      'Our venue accommodates up to 50 guests depending on layout and event type.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 2015 Berry St, Houston, TX 77004.',
  },
  {
    question: 'How do I book a tour?',
    answer:
      'Contact us through the inquiry form or call us directly to schedule a private tour of the space.',
  },
  {
    question: 'Do you offer parking?',
    answer:
      'Yes — on-site and/or street parking is available. Contact us for details specific to your event date.',
  },
];

export { VIDEOS_DATA as VIDEOS, EMBEDS_DATA as EMBEDS } from './videos';
