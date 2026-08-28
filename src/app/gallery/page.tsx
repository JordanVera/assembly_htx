import type { Metadata } from 'next';
import Image from 'next/image';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { getGalleryImages, getSiteSettings } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const company = await getSiteSettings();
  return {
    title: `Gallery | ${company.name}`,
    description: `Browse photos of ${company.name} — ${company.tagline} in Houston, TX.`,
  };
}

export default async function GalleryPage() {
  const [company, images] = await Promise.all([
    getSiteSettings(),
    getGalleryImages(),
  ]);

  const heroSrc = images[0]?.src || '/gallery/gallery-01.jpg';

  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src={heroSrc}
          alt={`${company.name} gallery`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#D4849A] text-[10px] tracking-[0.4em] uppercase mb-4">Our Space</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Gallery</h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <GalleryGrid images={images} />
      </section>
    </>
  );
}
