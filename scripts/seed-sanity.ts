/**
 * Seed Sanity with current site content.
 *
 * 1. Create a token at https://www.sanity.io/manage/project/0pu2ddv1/api#tokens
 *    with Editor permissions.
 * 2. Add to .env.local: SANITY_API_WRITE_TOKEN=...
 * 3. Run: npm run sanity:seed
 */

import { createClient } from '@sanity/client';
import { createReadStream, existsSync } from 'node:fs';
import { basename, join } from 'node:path';
import { config as loadEnv } from 'dotenv';
import {
  ABOUT_CONTENT,
  AMENITIES,
  COMPANY,
  FAQS,
  GALLERY_IMAGES,
  RENTAL_POLICY,
  REVIEWS,
  VENUE_HIGHLIGHTS,
} from '../src/lib/data';
import { PRICING_NOTES, VENUE_PACKAGES } from '../src/lib/pricing';

loadEnv({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';

if (!projectId) throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
if (!token) {
  throw new Error(
    'Missing SANITY_API_WRITE_TOKEN. Create an Editor token in Sanity Manage and add it to .env.local',
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

async function uploadImage(relativePath: string) {
  const absolute = join(process.cwd(), 'public', relativePath.replace(/^\//, ''));
  if (!existsSync(absolute)) {
    console.warn(`  skip missing file: ${relativePath}`);
    return null;
  }
  const asset = await client.assets.upload('image', createReadStream(absolute), {
    filename: basename(absolute),
  });
  return {
    _type: 'image' as const,
    asset: { _type: 'reference' as const, _ref: asset._id },
  };
}

async function main() {
  console.log(`Seeding Sanity project ${projectId}/${dataset}...`);

  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    ...COMPANY,
    seoTitle: `${COMPANY.name} — Houston Event Venue`,
    seoDescription: `${COMPANY.tagline} in Houston. Celebrations for up to ${COMPANY.maxGuests} guests.`,
  });
  console.log('✓ siteSettings');

  const heroSlides = [];
  for (const slide of [
    { src: '/gallery/gallery-03.jpg', alt: 'Assembly venue photo 3' },
    { src: '/hero.jpg', alt: 'Venue hero' },
    { src: '/gallery/gallery-02.jpg', alt: 'Assembly venue photo 2' },
    { src: '/gallery/gallery-04.jpg', alt: 'Assembly venue photo 4' },
  ]) {
    const image = await uploadImage(slide.src);
    if (image) {
      heroSlides.push({
        _type: 'object',
        _key: slide.src,
        alt: slide.alt,
        image,
      });
    }
  }

  const ctaBackground = await uploadImage('/gallery/gallery-06.jpg');

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroHeadline: 'Boho-Chic Boutique Event Space',
    heroHeadlineAccent: 'Assembly',
    heroSubhead: ABOUT_CONTENT.intro,
    heroSlides,
    welcomeEyebrow: 'Welcome',
    welcomeHeadline: 'Your premier venue for',
    welcomeHeadlineAccent: 'memorable celebrations.',
    intro: ABOUT_CONTENT.intro,
    body: ABOUT_CONTENT.body,
    evolution: ABOUT_CONTENT.evolution,
    highlights: VENUE_HIGHLIGHTS.map((h, i) => ({
      _type: 'object',
      _key: `h${i}`,
      ...h,
    })),
    ctaEyebrow: 'Plan Your Celebration',
    ctaHeadline: "Let's Make It",
    ctaHeadlineAccent: 'Unforgettable',
    ctaBody:
      "Text us to schedule a tour or inquire about availability. We'd love to host your next shower or celebration.",
    ...(ctaBackground ? { ctaBackground } : {}),
  });
  console.log('✓ homePage');

  const aboutHero = await uploadImage('/about-hero.jpg');
  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    eyebrow: 'Our Story',
    headline: 'All-inclusive intimate venue in',
    headlineAccent: 'Houston, Texas.',
    intro: ABOUT_CONTENT.intro,
    body: ABOUT_CONTENT.body,
    evolution: ABOUT_CONTENT.evolution,
    highlights: VENUE_HIGHLIGHTS.map((h, i) => ({
      _type: 'object',
      _key: `h${i}`,
      ...h,
    })),
    amenities: [...AMENITIES],
    ...(aboutHero ? { heroImage: aboutHero } : {}),
  });
  console.log('✓ aboutPage');

  const contactHero = await uploadImage('/gallery/gallery-08.jpg');
  await client.createOrReplace({
    _id: 'contactPage',
    _type: 'contactPage',
    eyebrow: 'Book a Tour',
    headline: 'Contact Us',
    introTitle: 'Schedule Your Tour',
    introBody:
      'Text us or fill out the form to inquire about availability, tour our venue, and receive our pricing guide.',
    hours: 'Mon–Fri, 9:00 AM – 6:00 PM',
    formTitle: 'Send an Inquiry',
    formSubtitle: "Tell us about your event and we'll share availability and pricing details.",
    ...(contactHero ? { heroImage: contactHero } : {}),
  });
  console.log('✓ contactPage');

  await client.createOrReplace({
    _id: 'pricingPage',
    _type: 'pricingPage',
    intro:
      'All-inclusive venue packages designed to simplify your celebration. Choose the level of décor and amenities that fits your event — from essential rental to fully styled packages.',
    notes: [...PRICING_NOTES],
    addonsHeading: 'Bartending Service',
  });
  console.log('✓ pricingPage');

  const policyHero = await uploadImage('/gallery/gallery-12.jpg');
  await client.createOrReplace({
    _id: 'rentalPolicy',
    _type: 'rentalPolicy',
    title: RENTAL_POLICY.title,
    summary: RENTAL_POLICY.summary,
    pdfUrl: RENTAL_POLICY.pdfUrl,
    sections: RENTAL_POLICY.sections.map((section, i) => ({
      _type: 'object',
      _key: `s${i}`,
      title: section.title,
      items: [...section.items],
    })),
    ...(policyHero ? { heroImage: policyHero } : {}),
  });
  console.log('✓ rentalPolicy');

  for (const [index, pkg] of VENUE_PACKAGES.entries()) {
    await client.createOrReplace({
      _id: `pricingPackage-${pkg.id}`,
      _type: 'pricingPackage',
      kind: 'package',
      name: pkg.name,
      slug: { _type: 'slug', current: pkg.id },
      price: pkg.price,
      description: pkg.description,
      features: [...pkg.features],
      highlighted: Boolean(pkg.highlighted),
      sortOrder: index,
    });
  }
  console.log(`✓ ${VENUE_PACKAGES.length} pricing packages`);

  for (const [index, faq] of FAQS.entries()) {
    await client.createOrReplace({
      _id: `faq-${index + 1}`,
      _type: 'faq',
      question: faq.question,
      answer: faq.answer,
      ...(faq.link
        ? { linkHref: faq.link.href, linkLabel: faq.link.label }
        : {}),
      sortOrder: index,
    });
  }
  console.log(`✓ ${FAQS.length} FAQs`);

  for (const [index, review] of REVIEWS.entries()) {
    await client.createOrReplace({
      _id: `review-${review.id}`,
      _type: 'review',
      name: review.name,
      event: review.event,
      rating: review.rating,
      text: review.text,
      sortOrder: index,
    });
  }
  console.log(`✓ ${REVIEWS.length} reviews`);

  for (const [index, img] of GALLERY_IMAGES.entries()) {
    const image = await uploadImage(img.src);
    if (!image) continue;
    await client.createOrReplace({
      _id: `galleryImage-${img.id}`,
      _type: 'galleryImage',
      image,
      alt: img.alt,
      category: img.category,
      featured: img.featured,
      sortOrder: index,
    });
    process.stdout.write('.');
  }
  console.log(`\n✓ ${GALLERY_IMAGES.length} gallery images`);

  console.log('\nDone. Open /studio to edit content.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
