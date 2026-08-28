import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/data';
import SocialLinks from '@/components/layout/SocialLinks';
import Logo from '@/components/layout/Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex" aria-label={COMPANY.name}>
              <Logo className="scale-125 origin-left sm:scale-[1.35]" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              All-inclusive intimate event venue in Webster, Texas — bridal
              showers, baby showers, and celebrations for up to{' '}
              {COMPANY.maxGuests} guests.
            </p>
            <SocialLinks linkClassName="text-white/80 hover:text-white" />
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
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone size={14} className="shrink-0 text-white" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail size={14} className="shrink-0 text-white" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white" />
                <span>
                  {COMPANY.address}
                  <br />
                  {COMPANY.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <p>{COMPANY.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
