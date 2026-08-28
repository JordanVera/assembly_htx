import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import PricingPreview from '@/components/home/PricingPreview';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaStrip from '@/components/home/CtaStrip';
import {
  getFeaturedGalleryImages,
  getHomePage,
  getPricingPackages,
  getReviews,
  getSiteSettings,
} from '@/lib/content';

export default async function HomePage() {
  const [company, home, packages, featuredGallery, reviews] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getPricingPackages(),
    getFeaturedGalleryImages(),
    getReviews(),
  ]);

  return (
    <>
      <Hero company={company} content={home} />
      <Welcome company={company} content={home} />
      <PricingPreview packages={packages} />
      <GalleryTeaser images={featuredGallery} />
      <TestimonialsSection company={company} reviews={reviews.slice(0, 3)} />
      <CtaStrip
        company={company}
        content={{
          ctaEyebrow: home.ctaEyebrow,
          ctaHeadline: home.ctaHeadline,
          ctaHeadlineAccent: home.ctaHeadlineAccent,
          ctaBody: home.ctaBody,
          ctaBackgroundSrc: home.ctaBackgroundSrc,
        }}
      />
    </>
  );
}
