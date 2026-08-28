import {
  ABOUT_CONTENT,
  AMENITIES,
  COMPANY,
  FAQS,
  GALLERY_IMAGES,
  RENTAL_POLICY,
  REVIEWS,
  VENUE_HIGHLIGHTS,
} from '@/lib/data';
import { ADD_ONS, PRICING_NOTES, VENUE_PACKAGES } from '@/lib/pricing';
import { client } from '@/sanity/lib/client';
import {
  aboutPageQuery,
  contactPageQuery,
  faqsQuery,
  featuredGalleryQuery,
  galleryImagesQuery,
  homePageQuery,
  pricingAddonsQuery,
  pricingPackagesQuery,
  pricingPageQuery,
  rentalPolicyQuery,
  reviewsQuery,
  siteSettingsQuery,
} from '@/sanity/lib/queries';
import type {
  AboutPageContent,
  ContactPageContent,
  FaqContent,
  GalleryImageContent,
  HomePageContent,
  PricingPackageContent,
  PricingPageContent,
  RentalPolicyContent,
  ReviewContent,
  SiteSettings,
} from '@/sanity/types';

async function fetchOrNull<T>(query: string): Promise<T | null> {
  try {
    return await client.fetch<T>(query, {}, { next: { revalidate: 60 } });
  } catch (error) {
    console.warn('[sanity] fetch failed, using static fallback', error);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await fetchOrNull<Partial<SiteSettings>>(siteSettingsQuery);
  return {
    ...COMPANY,
    ...Object.fromEntries(
      Object.entries(data ?? {}).filter(([, value]) => value !== null && value !== undefined && value !== ''),
    ),
  } as SiteSettings;
}

const defaultHome: HomePageContent = {
  heroHeadline: 'Boho-Chic Boutique Event Space',
  heroHeadlineAccent: 'Assembly',
  heroSubhead: ABOUT_CONTENT.intro,
  heroSlides: [
    { src: '/gallery/gallery-03.jpg', alt: 'Assembly venue photo 3' },
    { src: '/hero.jpg', alt: 'Venue hero' },
    { src: '/gallery/gallery-02.jpg', alt: 'Assembly venue photo 2' },
    { src: '/gallery/gallery-04.jpg', alt: 'Assembly venue photo 4' },
  ],
  welcomeEyebrow: 'Welcome',
  welcomeHeadline: 'Your premier venue for',
  welcomeHeadlineAccent: 'memorable celebrations.',
  intro: ABOUT_CONTENT.intro,
  body: ABOUT_CONTENT.body,
  evolution: ABOUT_CONTENT.evolution,
  highlights: [...VENUE_HIGHLIGHTS],
  ctaEyebrow: 'Plan Your Celebration',
  ctaHeadline: "Let's Make It",
  ctaHeadlineAccent: 'Unforgettable',
  ctaBody:
    "Text us to schedule a tour or inquire about availability. We'd love to host your next shower or celebration.",
  ctaBackgroundSrc: '/gallery/gallery-06.jpg',
};

export async function getHomePage(): Promise<HomePageContent> {
  const data = await fetchOrNull<{
    heroEyebrow?: string;
    heroHeadline?: string;
    heroHeadlineAccent?: string;
    heroSubhead?: string;
    heroSlides?: Array<{ src?: string; alt?: string } | null>;
    welcomeEyebrow?: string;
    welcomeHeadline?: string;
    welcomeHeadlineAccent?: string;
    intro?: string;
    body?: string;
    evolution?: string;
    highlights?: AboutPageContent['highlights'];
    ctaEyebrow?: string;
    ctaHeadline?: string;
    ctaHeadlineAccent?: string;
    ctaBody?: string;
    ctaBackgroundSrc?: string;
  }>(homePageQuery);

  if (!data) return defaultHome;

  const slides =
    data.heroSlides
      ?.filter((slide): slide is { src: string; alt?: string } => Boolean(slide?.src))
      .map((slide) => ({ src: slide.src, alt: slide.alt || 'Venue photo' })) ?? [];

  return {
    heroEyebrow: data.heroEyebrow || defaultHome.heroEyebrow,
    heroHeadline: data.heroHeadline || defaultHome.heroHeadline,
    heroHeadlineAccent: data.heroHeadlineAccent || defaultHome.heroHeadlineAccent,
    heroSubhead: data.heroSubhead || defaultHome.heroSubhead,
    heroSlides: slides.length ? slides : defaultHome.heroSlides,
    welcomeEyebrow: data.welcomeEyebrow || defaultHome.welcomeEyebrow,
    welcomeHeadline: data.welcomeHeadline || defaultHome.welcomeHeadline,
    welcomeHeadlineAccent: data.welcomeHeadlineAccent || defaultHome.welcomeHeadlineAccent,
    intro: data.intro || defaultHome.intro,
    body: data.body || defaultHome.body,
    evolution: data.evolution || defaultHome.evolution,
    highlights: data.highlights?.length ? data.highlights : defaultHome.highlights,
    ctaEyebrow: data.ctaEyebrow || defaultHome.ctaEyebrow,
    ctaHeadline: data.ctaHeadline || defaultHome.ctaHeadline,
    ctaHeadlineAccent: data.ctaHeadlineAccent || defaultHome.ctaHeadlineAccent,
    ctaBody: data.ctaBody || defaultHome.ctaBody,
    ctaBackgroundSrc: data.ctaBackgroundSrc || defaultHome.ctaBackgroundSrc,
  };
}

const defaultAbout: AboutPageContent = {
  eyebrow: 'Our Story',
  headline: 'All-inclusive intimate venue in',
  headlineAccent: 'Houston, Texas.',
  intro: ABOUT_CONTENT.intro,
  body: ABOUT_CONTENT.body,
  evolution: ABOUT_CONTENT.evolution,
  highlights: [...VENUE_HIGHLIGHTS],
  amenities: [...AMENITIES],
  heroImageSrc: '/about-hero.jpg',
};

export async function getAboutPage(): Promise<AboutPageContent> {
  const data = await fetchOrNull<Partial<AboutPageContent>>(aboutPageQuery);
  if (!data) return defaultAbout;
  return {
    eyebrow: data.eyebrow || defaultAbout.eyebrow,
    headline: data.headline || defaultAbout.headline,
    headlineAccent: data.headlineAccent || defaultAbout.headlineAccent,
    intro: data.intro || defaultAbout.intro,
    body: data.body || defaultAbout.body,
    evolution: data.evolution || defaultAbout.evolution,
    highlights: data.highlights?.length ? data.highlights : defaultAbout.highlights,
    amenities: data.amenities?.length ? data.amenities : defaultAbout.amenities,
    heroImageSrc: data.heroImageSrc || defaultAbout.heroImageSrc,
  };
}

const defaultContact: ContactPageContent = {
  eyebrow: 'Book a Tour',
  headline: 'Contact Us',
  introTitle: 'Schedule Your Tour',
  introBody:
    'Text us or fill out the form to inquire about availability, tour our venue, and receive our pricing guide.',
  hours: 'Mon–Fri, 9:00 AM – 6:00 PM',
  formTitle: 'Send an Inquiry',
  formSubtitle: "Tell us about your event and we'll share availability and pricing details.",
  heroImageSrc: '/gallery/gallery-08.jpg',
};

export async function getContactPage(): Promise<ContactPageContent> {
  const data = await fetchOrNull<Partial<ContactPageContent>>(contactPageQuery);
  if (!data) return defaultContact;
  return {
    eyebrow: data.eyebrow || defaultContact.eyebrow,
    headline: data.headline || defaultContact.headline,
    introTitle: data.introTitle || defaultContact.introTitle,
    introBody: data.introBody || defaultContact.introBody,
    hours: data.hours || defaultContact.hours,
    formTitle: data.formTitle || defaultContact.formTitle,
    formSubtitle: data.formSubtitle || defaultContact.formSubtitle,
    heroImageSrc: data.heroImageSrc || defaultContact.heroImageSrc,
  };
}

const defaultPricingPage: PricingPageContent = {
  intro:
    'All-inclusive venue packages designed to simplify your celebration. Choose the level of décor and amenities that fits your event — from essential rental to fully styled packages.',
  notes: [...PRICING_NOTES],
  addonsHeading: 'Bartending Service',
};

export async function getPricingPage(): Promise<PricingPageContent> {
  const data = await fetchOrNull<Partial<PricingPageContent>>(pricingPageQuery);
  if (!data) return defaultPricingPage;
  return {
    intro: data.intro || defaultPricingPage.intro,
    notes: data.notes?.length ? data.notes : defaultPricingPage.notes,
    addonsHeading: data.addonsHeading || defaultPricingPage.addonsHeading,
  };
}

const defaultRental: RentalPolicyContent = {
  title: RENTAL_POLICY.title,
  summary: RENTAL_POLICY.summary,
  pdfUrl: RENTAL_POLICY.pdfUrl,
  heroImageSrc: '/gallery/gallery-12.jpg',
  sections: RENTAL_POLICY.sections.map((section) => ({
    title: section.title,
    items: [...section.items],
  })),
};

export async function getRentalPolicy(): Promise<RentalPolicyContent> {
  const data = await fetchOrNull<{
    title?: string;
    summary?: string;
    pdfUrl?: string;
    pdfFileUrl?: string;
    heroImageSrc?: string;
    sections?: RentalPolicyContent['sections'];
  }>(rentalPolicyQuery);

  if (!data) return defaultRental;

  return {
    title: data.title || defaultRental.title,
    summary: data.summary || defaultRental.summary,
    pdfUrl: data.pdfFileUrl || data.pdfUrl || defaultRental.pdfUrl,
    heroImageSrc: data.heroImageSrc || defaultRental.heroImageSrc,
    sections: data.sections?.length ? data.sections : defaultRental.sections,
  };
}

export async function getGalleryImages(): Promise<GalleryImageContent[]> {
  const data = await fetchOrNull<GalleryImageContent[]>(galleryImagesQuery);
  if (data?.length) {
    return data.filter((img) => Boolean(img.src));
  }
  return GALLERY_IMAGES.map((img) => ({ ...img }));
}

export async function getFeaturedGalleryImages(): Promise<GalleryImageContent[]> {
  const data = await fetchOrNull<GalleryImageContent[]>(featuredGalleryQuery);
  if (data?.length) {
    return data.filter((img) => Boolean(img.src));
  }
  return GALLERY_IMAGES.filter((img) => img.featured).map((img) => ({ ...img }));
}

export async function getPricingPackages(): Promise<PricingPackageContent[]> {
  const data = await fetchOrNull<PricingPackageContent[]>(pricingPackagesQuery);
  if (data?.length) return data;
  return VENUE_PACKAGES.map((pkg) => ({ ...pkg }));
}

export async function getPricingAddons(): Promise<PricingPackageContent[]> {
  const data = await fetchOrNull<PricingPackageContent[]>(pricingAddonsQuery);
  if (data?.length) return data;
  return ADD_ONS.map((pkg) => ({ ...pkg }));
}

export async function getFaqs(): Promise<FaqContent[]> {
  const data = await fetchOrNull<FaqContent[]>(faqsQuery);
  if (data?.length) {
    return data.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
      link: faq.link?.href && faq.link?.label ? faq.link : undefined,
    }));
  }
  return FAQS.map((faq) => ({ ...faq }));
}

export async function getReviews(): Promise<ReviewContent[]> {
  const data = await fetchOrNull<ReviewContent[]>(reviewsQuery);
  if (data?.length) return data;
  return REVIEWS.map((review) => ({ ...review }));
}
