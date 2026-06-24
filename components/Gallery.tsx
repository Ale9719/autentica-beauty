'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  immagini: (string | { url: string } | null)[];
}

function getUrl(img: string | { url: string } | null): string | null {
  if (!img) return null;
  if (typeof img === 'string') return img;
  return img.url || null;
}

export default function Gallery({ immagini }: GalleryProps) {
  const urls = immagini.map(getUrl).filter(Boolean) as string[];
  const scrollRef = useRef<HTMLDivElement>(null);

  if (urls.length === 0) return null;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full relative bg-ab-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 mb-12">
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ab-gold font-semibold block mb-4">
            Il Centro
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-ab-tortora-dark">
            Scopri <em className="italic font-light text-ab-gold">Autentica Beauty</em>.
          </h2>
        </div>
      </div>

      {/* Mobile — carosello */}
      <div className="relative group/carousel lg:hidden">
        <button aria-label="Scorri a sinistra"
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-md text-ab-tortora-dark hover:text-ab-gold transition-all"
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>
        <button aria-label="Scorri a destra"
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-md text-ab-tortora-dark hover:text-ab-gold transition-all"
        >
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-3 px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {urls.map((url, index) => (
            <div
              key={index}
              className="relative snap-start shrink-0 w-[35vw] h-[47vw] overflow-hidden rounded-2xl"
            >
              <Image
                src={url}
                alt={`Autentica Beauty — immagine ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — masonry */}
      <div className="hidden lg:block max-w-7xl mx-auto px-24">
        <div className="columns-3 gap-4 space-y-4">
          {urls.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative break-inside-avoid overflow-hidden rounded-2xl group"
            >
              <Image
                src={url}
                alt={`Autentica Beauty — immagine ${index + 1}`}
                width={600}
                height={750}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ab-tortora-dark/0 group-hover:bg-ab-tortora-dark/10 transition-all duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}