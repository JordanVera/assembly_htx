'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '@/lib/data';
import { cn } from '@/lib/utils';
import SocialLinks from '@/components/layout/SocialLinks';
import Logo from '@/components/layout/Logo';
import type { SiteSettings } from '@/sanity/types';

export default function Navbar({ company }: { company: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex items-center justify-between rounded-full border bg-black px-3 py-2 transition-all duration-300 sm:px-4',
          scrolled
            ? 'max-w-5xl border-white/15 shadow-lg shadow-black/40'
            : 'max-w-6xl border-transparent',
        )}
      >
        <Link href="/" className="flex shrink-0 items-center pl-1" aria-label={company.name}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors xl:px-3',
                  isActive ? 'text-white' : 'text-white/80 hover:text-white',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-3.5 -bottom-0.5 h-px bg-white transition-transform duration-300',
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <SocialLinks
            company={company}
            className="mr-4 md:mr-2"
            iconSize={18}
            linkClassName="text-white/80 hover:text-white"
          />
          <Link
            href="/contact"
            className="hidden items-center rounded-full border border-white px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase text-white transition-all duration-200 hover:bg-white hover:text-primary sm:inline-flex"
          >
            Book a Tour
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={cn(
              'mx-auto mt-2 overflow-hidden rounded-3xl border border-white/15 bg-black p-4 shadow-xl lg:hidden',
              scrolled ? 'max-w-5xl' : 'max-w-6xl',
            )}
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-white/10',
                      isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white',
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold tracking-[0.15em] uppercase text-primary"
              >
                Book a Tour
              </Link>
              <a
                href={`tel:${company.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/40 px-4 py-3 text-center text-sm font-medium text-white"
              >
                <Phone size={14} />
                {company.phone}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
