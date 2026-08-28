'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { HomePageContent, SiteSettings } from '@/sanity/types';

const anim = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Welcome({
  company,
  content,
}: {
  company: SiteSettings;
  content: HomePageContent;
}) {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
          <motion.div {...anim(0)} className="flex flex-col gap-4">
            <span className="text-[#D4849A] text-[10px] tracking-[0.35em] uppercase">
              {content.welcomeEyebrow}
            </span>
            <div className="h-px w-16 bg-[#D4849A]" />
            <p className="text-xs tracking-[0.2em] uppercase text-foreground/40 mt-4">
              {company.serviceArea}
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.h2
              {...anim(0.1)}
              className="font-serif text-4xl sm:text-5xl leading-tight text-foreground"
            >
              {content.welcomeHeadline}{' '}
              <em className="italic text-[#D4849A]">
                {content.welcomeHeadlineAccent}
              </em>
            </motion.h2>
            <motion.p {...anim(0.2)} className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {content.intro} {content.body}
            </motion.p>
            <motion.p {...anim(0.3)} className="text-foreground/65 leading-relaxed text-base sm:text-lg">
              {content.evolution}
            </motion.p>
            <motion.div {...anim(0.4)} className="flex gap-8 pt-4 border-t border-border">
              {[
                { number: `${company.maxGuests}`, label: 'Max Guests' },
                { number: `${company.googleRating}★`, label: 'Google Rating' },
                { number: `${company.reviewCount}+`, label: 'Reviews' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-2xl text-[#D4849A]">{stat.number}</p>
                  <p className="text-xs text-foreground/50 tracking-wide mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            <motion.div {...anim(0.5)}>
              <Link
                href="/about"
                className="inline-flex items-center text-[#D4849A] text-xs tracking-[0.2em] uppercase hover:underline underline-offset-4"
              >
                Learn More About Our Venue
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-20">
          {content.highlights.map((item, i) => (
            <motion.div
              key={item.title}
              {...anim(0.1 * i)}
              className="border border-border p-6"
            >
              <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
