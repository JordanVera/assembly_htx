import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MapPin, Camera, Globe, Clock, Mail } from 'lucide-react';
import InquiryForm from '@/components/contact/InquiryForm';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Contact | ${COMPANY.name}`,
  description:
    'Contact Charming Occasions to book a tour or inquire about venue availability and packages in Webster, TX.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-08.jpeg"
          alt="Contact Charming Occasions"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#D4849A] text-[10px] tracking-[0.4em] uppercase mb-4">Book a Tour</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Contact Us</h1>
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
                Schedule Your Tour
              </h2>
              <p className="text-foreground/60 mt-4 leading-relaxed">
                Text us or fill out the form to inquire about availability, tour
                our venue, and receive our pricing guide.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              <li>
                <a href={`tel:${COMPANY.phoneHref}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 border border-[#D4849A]/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-[#D4849A]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Text Us</p>
                    <p className="text-foreground group-hover:text-[#D4849A] transition-colors">{COMPANY.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 border border-[#D4849A]/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-[#D4849A]" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Email</p>
                    <p className="text-foreground group-hover:text-[#D4849A] transition-colors">{COMPANY.email}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#D4849A]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#D4849A]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Location</p>
                  <p className="text-foreground">{COMPANY.address}<br />{COMPANY.city}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#D4849A]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-[#D4849A]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Hours</p>
                  <p className="text-foreground">Mon–Fri, 9:00 AM – 6:00 PM</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-3">
              <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#D4849A]/50 text-foreground/60 hover:text-[#D4849A] text-xs transition-all">
                <Camera size={13} /> Instagram
              </a>
              <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#D4849A]/50 text-foreground/60 hover:text-[#D4849A] text-xs transition-all">
                <Globe size={13} /> Facebook
              </a>
            </div>
          </div>

          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-serif text-foreground text-2xl mb-2">Send an Inquiry</h3>
            <p className="text-foreground/50 text-sm mb-8">
              Tell us about your event and we&apos;ll share availability and pricing details.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
