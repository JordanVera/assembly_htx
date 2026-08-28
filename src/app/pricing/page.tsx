import type { Metadata } from 'next';
import Image from 'next/image';
import PricingContent from '@/components/pricing/PricingContent';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Pricing | ${COMPANY.name}`,
  description:
    'Venue packages from $1,150 to $1,600 plus bartending add-on. All-inclusive bridal and baby shower packages at Charming Occasions in Webster, TX.',
};

export default function PricingPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-06.jpeg"
          alt="Charming Occasions venue packages"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#D4849A] text-[10px] tracking-[0.4em] uppercase mb-4">
            All-Inclusive Packages
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Pricing</h1>
        </div>
      </section>

      <PricingContent />
    </>
  );
}
