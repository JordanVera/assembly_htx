import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { SiteSettings } from '@/sanity/types';

export default function SocialLinks({
  company,
  className,
  iconSize = 18,
  linkClassName,
  iconClassName,
}: {
  company: SiteSettings;
  className?: string;
  iconSize?: number;
  linkClassName?: string;
  iconClassName?: string;
}) {
  const links = [
    company.facebook && { label: 'Facebook', href: company.facebook, icon: '/facebook.svg' },
    company.instagram && { label: 'Instagram', href: company.instagram, icon: '/instagram.svg' },
  ].filter(Boolean) as Array<{ label: string; href: string; icon: string }>;
  if (!links.length) return null;
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map(({ label, href, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            'opacity-80 transition-opacity hover:opacity-100',
            linkClassName,
          )}
        >
          <Image
            src={icon}
            alt=""
            width={iconSize}
            height={iconSize}
            aria-hidden
            className={cn('brightness-0 invert', iconClassName)}
          />
        </a>
      ))}
    </div>
  );
}
