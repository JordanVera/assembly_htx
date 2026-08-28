'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import type { SiteSettings } from '@/sanity/types';

export default function SiteChrome({
  children,
  company,
}: {
  children: React.ReactNode;
  company: SiteSettings;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar company={company} />
      <main className="flex-1">{children}</main>
      <Footer company={company} />
    </>
  );
}
