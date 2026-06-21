'use client';
import { useRef, useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import macroareeData from '../app/data/macroaree.json';


interface WP_Macroarea_Term {
  id: number;
  slug: string;
  name: string;
  description: string;
}

interface MappedMacroarea {
  id: number;
  slug: string;
  name: string;
  circleText: string;
}

function MacroareeContent() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const activeArea = searchParams.get('area');

  const [macroareas, setMacroareas] = useState<MappedMacroarea[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchMacroaree = async () => {
    try {
      let data: WP_Macroarea_Term[];

      if (process.env.NEXT_PUBLIC_DEMO_MODE === 'true') {
        data = macroareeData as WP_Macroarea_Term[];
      } else {
        const WP_TAX_URL = `${process.env.NEXT_PUBLIC_WP_URL}/macroaree?per_page=20`;
        const res = await fetch(WP_TAX_URL);
        if (!res.ok) throw new Error("Errore nel recupero delle macroaree");
        data = await res.json();
      }

      const mappedAreas = data.map((term) => ({
        id: term.id,
        slug: term.slug,
        name: term.name.toUpperCase(),
        circleText: term.description ? term.description : term.name.toUpperCase()
      }));

      setMacroareas(mappedAreas);
      setLoading(false);
    } catch (error) {
      console.error("Errore fetch macroaree:", error);
      setLoading(false);
    }
  };

  fetchMacroaree();
}, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="w-full py-12 text-center bg-white">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ab-tortora/60 animate-pulse">
          Preparazione Atelier...
        </span>
      </div>
    );
  }

  return (
    <section className="relative w-full pb-24 pt-4 bg-white overflow-hidden group/section">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl text-ab-tortora-dark mb-2">
            I Nostri Trattamenti
          </h2>
          <div className="flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.3em] text-ab-gold/80 animate-pulse lg:hidden mt-4">
            <span>←</span>
            <span>Scorri per scoprire</span>
            <span>→</span>
          </div>
        </div>

        <div className="relative w-full">
          <button 
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-0 top-[40%] -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-md border border-ab-tortora/10 text-ab-tortora-dark hover:text-ab-gold hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100 -translate-x-4"
            aria-label="Scorri a sinistra"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          <button 
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-0 top-[40%] -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-md border border-ab-tortora/10 text-ab-tortora-dark hover:text-ab-gold hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100 translate-x-4"
            aria-label="Scorri a destra"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-12 pt-10 gap-6 lg:gap-10 px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
          >
            {macroareas.map((item) => {
              const isSelected = activeArea === item.slug;

              return (
                <Link 
                  href={`/servizi?area=${item.slug}`} 
                  key={item.id}
                  className="flex flex-col items-center gap-4 snap-start shrink-0 group w-32 lg:w-40"
                >
                  <div className={`relative flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-ab-cream p-1 border transition-transform duration-300 group-hover:scale-105 group-hover:border-ab-gold ${
                    isSelected ? 'border-ab-gold scale-105' : 'border-ab-tortora/30'
                  }`}>
                    <div className="flex items-center justify-center w-full h-full rounded-full bg-[#D4B3A5] shadow-inner text-center px-2">
                      <span className="font-serif text-[9px] lg:text-[11px] text-white font-semibold tracking-wider leading-tight whitespace-pre-line">
                        {item.circleText}
                      </span>
                    </div>
                    <div className={`absolute -inset-1 rounded-full border border-ab-gold transition-opacity duration-300 ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></div>
                  </div>

                  <span className={`text-center font-sans text-[9px] lg:text-[10px] tracking-wide transition-colors duration-300 ${
                    isSelected ? 'text-ab-gold' : 'text-ab-tortora-dark group-hover:text-ab-gold'
                  }`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
            
            <div className="w-1 lg:w-8 shrink-0"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 320" className="relative block w-full h-12 md:h-20 text-ab-cream fill-current" preserveAspectRatio="none">
          <path d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default function ServiceHighlights() {
  return (
    <Suspense fallback={
      <div className="w-full py-12 text-center bg-white">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ab-tortora/60 animate-pulse">
          Caricamento...
        </span>
      </div>
    }>
      <MacroareeContent />
    </Suspense>
  );
}