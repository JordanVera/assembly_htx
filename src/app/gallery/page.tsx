import type { Metadata } from 'next';
import Image from 'next/image';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Gallery | ${COMPANY.name}`,
  description:
    'Browse photos of bridal showers, baby showers, and celebrations at Charming Occasions event venue in Webster, TX.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-01.jpg"
          alt="Charming Occasions gallery"
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
        <GalleryGrid />
      </section>
    </>
  );
}
