import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import PricingPreview from '@/components/home/PricingPreview';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaStrip from '@/components/home/CtaStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <PricingPreview />
      <GalleryTeaser />
      <TestimonialsSection />
      <CtaStrip />
    </>
  );
}
