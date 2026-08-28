export type SiteSettings = {
  name: string;
  shortName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  city: string;
  serviceArea: string;
  maxGuests: number;
  instagram: string;
  instagramHandle: string;
  facebook: string;
  website: string;
  googleUrl: string;
  googleReviewsUrl: string;
  googleRating: number;
  reviewCount: number;
  seoTitle?: string;
  seoDescription?: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type HeroSlide = {
  src: string;
  alt: string;
};

export type HomePageContent = {
  heroEyebrow?: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubhead: string;
  heroSlides: HeroSlide[];
  welcomeEyebrow: string;
  welcomeHeadline: string;
  welcomeHeadlineAccent: string;
  intro: string;
  body: string;
  evolution: string;
  highlights: Highlight[];
  ctaEyebrow: string;
  ctaHeadline: string;
  ctaHeadlineAccent: string;
  ctaBody: string;
  ctaBackgroundSrc: string;
};

export type AboutPageContent = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  body: string;
  evolution: string;
  highlights: Highlight[];
  amenities: string[];
  heroImageSrc: string;
};

export type ContactPageContent = {
  eyebrow: string;
  headline: string;
  introTitle: string;
  introBody: string;
  hours: string;
  formTitle: string;
  formSubtitle: string;
  heroImageSrc: string;
};

export type PricingPageContent = {
  intro: string;
  notes: string[];
  addonsHeading: string;
};

export type RentalPolicyContent = {
  title: string;
  summary: string;
  pdfUrl: string;
  heroImageSrc: string;
  sections: { title: string; items: string[] }[];
};

export type GalleryImageContent = {
  id: string | number;
  src: string;
  alt: string;
  category: string;
  featured: boolean;
};

export type PricingPackageContent = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqContent = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export type ReviewContent = {
  id: string | number;
  name: string;
  event: string;
  rating: number;
  text: string;
};
