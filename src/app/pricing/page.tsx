import type { Metadata } from 'next';
import PricingContent from '@/components/pricing/PricingContent';
import {
  getHomePage,
  getPricingAddons,
  getPricingPackages,
  getPricingPage,
  getSiteSettings,
} from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const company = await getSiteSettings();
  return {
    title: `Pricing | ${company.name}`,
    description: `Venue packages and pricing for ${company.name} in Houston.`,
  };
}

export default async function PricingPage() {
  const [company, page, packages, addons, home] = await Promise.all([
    getSiteSettings(),
    getPricingPage(),
    getPricingPackages(),
    getPricingAddons(),
    getHomePage(),
  ]);

  return (
    <PricingContent
      company={company}
      page={page}
      packages={packages}
      addons={addons}
      cta={{
        ctaEyebrow: home.ctaEyebrow,
        ctaHeadline: home.ctaHeadline,
        ctaHeadlineAccent: home.ctaHeadlineAccent,
        ctaBody: home.ctaBody,
        ctaBackgroundSrc: home.ctaBackgroundSrc,
      }}
    />
  );
}
