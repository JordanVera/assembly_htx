import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SiteChrome from '@/components/layout/SiteChrome';
import { getSiteSettings } from '@/lib/content';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export async function generateMetadata(): Promise<Metadata> {
  const company = await getSiteSettings();
  return {
    title: company.seoTitle || `${company.name} — Houston Event Venue`,
    description:
      company.seoDescription ||
      `${company.tagline} in Houston. Celebrations for up to ${company.maxGuests} guests.`,
    keywords: `${company.name}, event venue Houston, boutique venue Houston, bridal shower venue Houston`,
    openGraph: {
      title: `${company.name} | ${company.tagline}`,
      description:
        company.seoDescription ||
        `${company.tagline} — boutique celebrations for up to ${company.maxGuests} guests.`,
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const company = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteChrome company={company}>{children}</SiteChrome>
      </body>
    </html>
  );
}
