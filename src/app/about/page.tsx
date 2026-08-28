import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { ABOUT_CONTENT, COMPANY, VENUE_HIGHLIGHTS } from '@/lib/data';

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description:
    'Learn about Charming Occasions — an all-inclusive intimate event venue in Webster, Texas for bridal showers, baby showers, and celebrations.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Charming Occasions event venue"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#D4849A] text-[10px] tracking-[0.4em] uppercase mb-4">Our Story</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">About Us</h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-foreground">
            All-inclusive intimate venue in{' '}
            <em className="italic text-[#D4849A]">Webster, Texas.</em>
          </h2>
          <p className="text-foreground/65 text-lg leading-relaxed">{ABOUT_CONTENT.intro}</p>
          <p className="text-foreground/65 text-lg leading-relaxed">{ABOUT_CONTENT.body}</p>
          <p className="text-foreground/65 text-lg leading-relaxed">{ABOUT_CONTENT.evolution}</p>
          <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            {[
              { number: `${COMPANY.maxGuests}`, label: 'Max Guests' },
              { number: 'NASA Pkwy', label: 'Webster Location' },
              { number: '5★', label: `${COMPANY.reviewCount}+ Reviews` },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-[#D4849A]">{stat.number}</p>
                <p className="text-sm text-foreground/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-[#F5EDE4]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6">
          {VENUE_HIGHLIGHTS.map((item) => (
            <div key={item.title} className="bg-white border border-border p-8">
              <h3 className="font-serif text-2xl text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 px-6 text-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-[#D4849A] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all"
        >
          View Venue Packages <ArrowRight size={12} />
        </Link>
      </section>

      <CtaStrip />
    </>
  );
}
