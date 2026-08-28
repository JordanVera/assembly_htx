import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Star } from 'lucide-react';
import { COMPANY, REVIEWS } from '@/lib/data';

export const metadata: Metadata = {
  title: `Reviews | ${COMPANY.name}`,
  description: `${COMPANY.googleRating} stars from ${COMPANY.reviewCount} Google reviews for ${COMPANY.name} in Houston.`,
};

export default function ReviewsPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image src="/hero.jpg" alt="Reviews" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#0D4F3D] text-[10px] tracking-[0.4em] uppercase mb-4">Guest Love</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Reviews</h1>
          <p className="mt-4 text-white/70 text-sm">{COMPANY.googleRating} ★ · {COMPANY.reviewCount} Google reviews</p>
        </div>
      </section>
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <blockquote key={review.id} className="bg-card border border-border p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, n) => (
                  <Star key={n} size={14} className="fill-[#0D4F3D] text-[#0D4F3D]" />
                ))}
              </div>
              <p className="font-serif text-lg leading-relaxed text-foreground">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-6">
                <p className="font-serif text-foreground">{review.name}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mt-1">{review.event}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a href={COMPANY.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0D4F3D] text-white text-xs tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity">
            Read & Review on Google <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
