'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import type { HomePageContent, SiteSettings } from '@/sanity/types';

export default function CtaStrip({
  company,
  content,
}: {
  company: SiteSettings;
  content: Pick<
    HomePageContent,
    | 'ctaEyebrow'
    | 'ctaHeadline'
    | 'ctaHeadlineAccent'
    | 'ctaBody'
    | 'ctaBackgroundSrc'
  >;
}) {
  return (
    <section className="relative overflow-hidden py-24 px-6 lg:px-8">
      <Image
        src={content.ctaBackgroundSrc}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-[10px] tracking-[0.4em] text-[#D4849A] uppercase"
        >
          {content.ctaEyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {content.ctaHeadline}{' '}
          <em className="italic">{content.ctaHeadlineAccent}</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-base text-white/75 sm:text-lg"
        >
          {content.ctaBody}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="bg-[#D4849A] px-8 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#B86B82]"
          >
            Book a Tour
          </Link>
          <a
            href={`tel:${company.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 border border-white/50 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-all duration-200 hover:border-[#D4849A] hover:text-[#D4849A]"
          >
            <Phone size={13} />
            Text {company.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
