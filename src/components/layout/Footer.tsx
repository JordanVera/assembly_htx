import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import SocialLinks from '@/components/layout/SocialLinks';
import Logo from '@/components/layout/Logo';
import type { SiteSettings } from '@/sanity/types';

export default function Footer({ company }: { company: SiteSettings }) {
  return (
    <footer className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex" aria-label={company.name}>
              <Logo className="scale-125 origin-left sm:scale-[1.35]" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              {company.tagline} in Houston — celebrations for up to{' '}
              {company.maxGuests} guests.
            </p>
            <SocialLinks company={company} linkClassName="text-white/80 hover:text-white" />
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone size={14} className="shrink-0 text-white" />
                  {company.phone}
                </a>
              </li>
              {company.email ? (
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-3 transition-colors hover:text-white"
                  >
                    <Mail size={14} className="shrink-0 text-white" />
                    {company.email}
                  </a>
                </li>
              ) : null}
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white" />
                <span>
                  {company.address}
                  <br />
                  {company.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link
              href="/rental-policy"
              className="transition-colors hover:text-white"
            >
              Rental Policy
            </Link>
            <p>{company.serviceArea}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
