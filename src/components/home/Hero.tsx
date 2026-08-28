'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { COMPANY } from '@/lib/data';

const SLIDE_DURATION_MS = 7000;

const HERO_SLIDES = [
  { src: '/hero.jpg', alt: 'Venue hero' },
  { src: '/gallery/gallery-02.jpg', alt: 'Assembly venue photo 2' },
  { src: '/gallery/gallery-03.jpg', alt: 'Assembly venue photo 3' },
  { src: '/gallery/gallery-04.jpg', alt: 'Assembly venue photo 4' },
] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentIndex];

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeInOut' },
              scale: { duration: SLIDE_DURATION_MS / 1000, ease: 'linear' },
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={currentIndex === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#D4849A] text-xs tracking-[0.4em] uppercase mb-6"
        >
          Houston, Texas · Up to {COMPANY.maxGuests} Guests
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-4xl"
        >
          Boho-Chic Boutique Event Space <em className="italic text-[#D4849A]">Assembly</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 text-white/75 text-base sm:text-lg max-w-xl leading-relaxed"
        >
          Welcome to Assembly — a boho-chic, sun-laden boutique event space in central Houston. Essentially appointed and perfect for your next intimate celebration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-[#D4849A] text-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#B86B82] transition-colors duration-200"
          >
            Book a Tour
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-3.5 border border-white/50 text-white text-xs tracking-[0.2em] uppercase hover:border-[#D4849A] hover:text-[#D4849A] transition-all duration-200"
          >
            View Pricing
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={22} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
