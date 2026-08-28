import { groq } from 'next-sanity';

const imageFields = groq`{
  ...,
  asset->
}`;

export const siteSettingsQuery = groq`*[_id == "siteSettings"][0]{
  name,
  shortName,
  tagline,
  phone,
  phoneHref,
  email,
  address,
  city,
  serviceArea,
  maxGuests,
  instagram,
  instagramHandle,
  facebook,
  website,
  googleUrl,
  googleReviewsUrl,
  googleRating,
  reviewCount,
  seoTitle,
  seoDescription
}`;

export const homePageQuery = groq`*[_id == "homePage"][0]{
  heroEyebrow,
  heroHeadline,
  heroHeadlineAccent,
  heroSubhead,
  heroSlides[]{
    alt,
    "src": image.asset->url,
    image ${imageFields}
  },
  welcomeEyebrow,
  welcomeHeadline,
  welcomeHeadlineAccent,
  intro,
  body,
  evolution,
  highlights[]{ title, description },
  ctaEyebrow,
  ctaHeadline,
  ctaHeadlineAccent,
  ctaBody,
  "ctaBackgroundSrc": ctaBackground.asset->url,
  ctaBackground ${imageFields}
}`;

export const aboutPageQuery = groq`*[_id == "aboutPage"][0]{
  eyebrow,
  headline,
  headlineAccent,
  intro,
  body,
  evolution,
  highlights[]{ title, description },
  amenities,
  "heroImageSrc": heroImage.asset->url,
  heroImage ${imageFields}
}`;

export const contactPageQuery = groq`*[_id == "contactPage"][0]{
  eyebrow,
  headline,
  introTitle,
  introBody,
  hours,
  formTitle,
  formSubtitle,
  "heroImageSrc": heroImage.asset->url
}`;

export const pricingPageQuery = groq`*[_id == "pricingPage"][0]{
  intro,
  notes,
  addonsHeading
}`;

export const rentalPolicyQuery = groq`*[_id == "rentalPolicy"][0]{
  title,
  summary,
  pdfUrl,
  "pdfFileUrl": pdfFile.asset->url,
  "heroImageSrc": heroImage.asset->url,
  sections[]{ title, items }
}`;

export const galleryImagesQuery = groq`*[_type == "galleryImage"] | order(sortOrder asc){
  "id": _id,
  alt,
  category,
  featured,
  sortOrder,
  "src": image.asset->url
}`;

export const featuredGalleryQuery = groq`*[_type == "galleryImage" && featured == true] | order(sortOrder asc){
  "id": _id,
  alt,
  category,
  featured,
  "src": image.asset->url
}`;

export const pricingPackagesQuery = groq`*[_type == "pricingPackage" && kind == "package"] | order(sortOrder asc){
  "id": coalesce(slug.current, _id),
  name,
  price,
  priceNote,
  description,
  features,
  highlighted
}`;

export const pricingAddonsQuery = groq`*[_type == "pricingPackage" && kind == "addon"] | order(sortOrder asc){
  "id": coalesce(slug.current, _id),
  name,
  price,
  priceNote,
  description,
  features,
  highlighted
}`;

export const faqsQuery = groq`*[_type == "faq"] | order(sortOrder asc){
  question,
  answer,
  "link": select(
    defined(linkHref) && defined(linkLabel) => { "href": linkHref, "label": linkLabel },
    null
  )
}`;

export const reviewsQuery = groq`*[_type == "review"] | order(sortOrder asc){
  "id": _id,
  name,
  event,
  rating,
  text
}`;
