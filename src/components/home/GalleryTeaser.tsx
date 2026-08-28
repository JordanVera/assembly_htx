'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export default function GalleryTeaser() {
  const images = GALLERY_IMAGES.filter(
    (img) => 'featured' in img && img.featured,
  );

  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D4849A] text-[10px] tracking-[0.35em] uppercase mb-3"
            >
              Our Space
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-foreground text-4xl sm:text-5xl"
            >
              Gallery
            </motion.h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[#D4849A] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all duration-200"
          >
            View All Photos <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative overflow-hidden group ${
                i === 0 || i === 3 ? 'md:row-span-2' : ''
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  i === 0 || i === 3 ? 'h-full min-h-[400px]' : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
