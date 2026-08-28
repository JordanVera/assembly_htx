'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import {
  ADD_ONS,
  PRICING_NOTES,
  VENUE_PACKAGES,
} from '@/lib/pricing';

export default function PricingContent() {
  return (
    <>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            All-inclusive venue packages designed to simplify your celebration.
            Choose the level of décor and amenities that fits your event — from
            essential rental to fully styled packages.
          </p>
        </div>

        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
          {VENUE_PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col border p-8 ${
                pkg.highlighted
                  ? 'border-[#D4849A] bg-[#F5EDE4] shadow-lg shadow-[#D4849A]/10'
                  : 'border-border bg-card'
              }`}
            >
              {pkg.highlighted ? (
                <span className="self-start bg-[#D4849A] px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-black mb-4">
                  Most Popular
                </span>
              ) : null}
              <p className="text-[#D4849A] text-[10px] tracking-[0.3em] uppercase">
                {pkg.name}
              </p>
              <p className="font-serif text-5xl text-foreground mt-2">
                {pkg.price}
              </p>
              <p className="text-foreground/60 text-sm leading-relaxed mt-4 mb-6">
                {pkg.description}
              </p>
              <ul className="flex flex-col gap-3 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm text-foreground/70">
                    <Check size={14} className="text-[#D4849A] flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex justify-center bg-[#D4849A] px-6 py-3 text-xs tracking-[0.2em] uppercase text-black hover:bg-[#B86B82] transition-colors"
              >
                Inquire About {pkg.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 bg-[#0e0c08]">
        <div className="mx-auto max-w-7xl">
          <p className="text-[#D4849A] text-[10px] tracking-[0.35em] uppercase mb-4 text-center">
            Add-Ons
          </p>
          <h2 className="font-serif text-white text-3xl text-center mb-12">
            Bartending Service
          </h2>
          <div className="grid md:grid-cols-1 max-w-xl mx-auto">
            {ADD_ONS.map((addon) => (
              <article
                key={addon.id}
                className="border border-white/10 bg-[#161410] p-8"
              >
                <p className="font-serif text-4xl text-[#D4849A]">{addon.price}</p>
                <h3 className="font-serif text-2xl text-white mt-3">{addon.name}</h3>
                <p className="text-white/55 text-sm mt-3 mb-6">{addon.description}</p>
                <ul className="flex flex-col gap-2">
                  {addon.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-white/65">
                      <Check size={14} className="text-[#D4849A] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8 border-t border-border">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl text-foreground mb-6 text-center">
            Good to Know
          </h2>
          <ul className="flex flex-col gap-3">
            {PRICING_NOTES.map((note) => (
              <li key={note} className="flex gap-2.5 text-sm text-foreground/65">
                <Check size={14} className="text-[#D4849A] flex-shrink-0 mt-0.5" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
