import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MapPin, Camera, Globe, Clock, Mail } from 'lucide-react';
import InquiryForm from '@/components/contact/InquiryForm';
import { getContactPage, getRentalPolicy, getSiteSettings } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const company = await getSiteSettings();
  return {
    title: `Contact | ${company.name}`,
    description: `Contact ${company.name} to book a tour or inquire about venue availability in Houston.`,
  };
}

export default async function ContactPage() {
  const [company, contact, rentalPolicy] = await Promise.all([
    getSiteSettings(),
    getContactPage(),
    getRentalPolicy(),
  ]);

  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src={contact.heroImageSrc}
          alt={`Contact ${company.name}`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#D4849A] text-[10px] tracking-[0.4em] uppercase mb-4">
            {contact.eyebrow}
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">{contact.headline}</h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#D4849A] text-[10px] tracking-[0.35em] uppercase mb-4">
                Inquiry &amp; Pricing
              </p>
              <h2 className="font-serif text-foreground text-3xl sm:text-4xl">
                {contact.introTitle}
              </h2>
              <p className="text-foreground/60 mt-4 leading-relaxed">
                {contact.introBody}
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              <li>
                <a href={`tel:${company.phoneHref}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 border border-[#D4849A]/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-[#D4849A]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Text Us</p>
                    <p className="text-foreground group-hover:text-[#D4849A] transition-colors">{company.phone}</p>
                  </div>
                </a>
              </li>
              {company.email ? (
                <li>
                  <a href={`mailto:${company.email}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-[#D4849A]/30 flex items-center justify-center flex-shrink-0">
                      <Mail size={14} className="text-[#D4849A]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Email</p>
                      <p className="text-foreground group-hover:text-[#D4849A] transition-colors">{company.email}</p>
                    </div>
                  </a>
                </li>
              ) : null}
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#D4849A]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#D4849A]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Location</p>
                  <p className="text-foreground">{company.address}<br />{company.city}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#D4849A]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-[#D4849A]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Hours</p>
                  <p className="text-foreground">{contact.hours}</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-3">
              {company.instagram ? (
                <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#D4849A]/50 text-foreground/60 hover:text-[#D4849A] text-xs transition-all">
                  <Camera size={13} /> Instagram
                </a>
              ) : null}
              {company.facebook ? (
                <a href={company.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#D4849A]/50 text-foreground/60 hover:text-[#D4849A] text-xs transition-all">
                  <Globe size={13} /> Facebook
                </a>
              ) : null}
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-serif text-foreground text-2xl mb-2">{contact.formTitle}</h3>
            <p className="text-foreground/50 text-sm mb-8">
              {contact.formSubtitle}
            </p>
            <InquiryForm pdfUrl={rentalPolicy.pdfUrl} />
          </div>
        </div>
      </section>
    </>
  );
}
