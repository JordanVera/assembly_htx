import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Thank You | ${COMPANY.name}`,
  description: 'Thank you for contacting Charming Occasions.',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-[#D4849A] text-[10px] tracking-[0.4em] uppercase mb-6">Message Received</p>
      <h1 className="font-serif text-foreground text-4xl sm:text-5xl mb-6">Thank You</h1>
      <p className="text-foreground/60 max-w-md leading-relaxed mb-10">
        We&apos;ve received your inquiry and will be in touch soon. We look forward
        to helping you plan a stress-free, unforgettable celebration.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="px-8 py-3.5 bg-[#D4849A] text-black text-xs tracking-[0.2em] uppercase hover:bg-[#B86B82] transition-colors">
          Back to Home
        </Link>
        <Link href="/pricing" className="px-8 py-3.5 border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:border-[#D4849A] hover:text-[#D4849A] transition-colors">
          View Pricing
        </Link>
      </div>
    </section>
  );
}
