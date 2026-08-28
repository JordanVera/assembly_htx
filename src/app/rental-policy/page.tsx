import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, FileText } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import {
  getHomePage,
  getRentalPolicy,
  getSiteSettings,
} from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const company = await getSiteSettings();
  return {
    title: `Rental Policy | ${company.name}`,
    description: `${company.name} rental contract and policy — payments, cancellation, time guidelines, decor protocol, cleaning, and liability waiver.`,
  };
}

export default async function RentalPolicyPage() {
  const [company, rentalPolicy, home] = await Promise.all([
    getSiteSettings(),
    getRentalPolicy(),
    getHomePage(),
  ]);

  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src={rentalPolicy.heroImageSrc}
          alt={`${company.name} rental policy`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#D4849A] uppercase">
            Before You Book
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Rental Policy
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            {rentalPolicy.summary}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={rentalPolicy.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D4849A] px-8 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#B86B82]"
            >
              <FileText size={14} />
              View Full Contract (PDF)
              <ExternalLink size={12} className="opacity-70" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#D4849A] px-8 py-3.5 text-xs tracking-[0.2em] text-[#D4849A] uppercase transition-colors duration-200 hover:bg-[#D4849A] hover:text-black"
            >
              Book a Tour
            </Link>
          </div>
        </div>

        <div className="space-y-10">
          {rentalPolicy.sections.map((section) => (
            <article
              key={section.title}
              className="border border-border bg-card p-6 sm:p-8"
            >
              <h2 className="font-serif text-2xl text-foreground">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/70"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#D4849A]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm leading-relaxed text-foreground/55">
          This page is a summary only. The official rental contract is the{' '}
          <a
            href={rentalPolicy.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4849A] underline-offset-4 hover:underline"
          >
            signed PDF document
          </a>
          . Questions?{' '}
          <Link
            href="/contact"
            className="text-[#D4849A] underline-offset-4 hover:underline"
          >
            Contact us
          </Link>{' '}
          before booking.
        </p>
      </section>

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
