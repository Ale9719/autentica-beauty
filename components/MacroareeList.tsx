'use client';
import { useRef } from 'react';
import Link from 'next/link';

export default function MacroareeList({ 
  macroaree = [], 
  activeAreaSlug, 
  activeTargetSlug 
}: { 
  macroaree: any[], 
  activeAreaSlug?: string, 
  activeTargetSlug?: string 
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto mb-12 group/scroll">
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto pb-12 pt-6 gap-6 lg:gap-10 px-6 lg:px-8 snap-x snap-mandatory hide-scrollbar [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        
        <Link 
          href={`/servizi${activeTargetSlug ? `?target=${activeTargetSlug}` : ''}`} 
          className="flex flex-col items-center gap-4 shrink-0 group w-32 lg:w-40"
        >
          <div className={`relative flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-ab-cream p-1 border transition-transform duration-300 ${!activeAreaSlug ? 'border-ab-gold scale-105' : 'border-ab-tortora/30'}`}>
            <div className="flex items-center justify-center w-full h-full rounded-full bg-[#D4B3A5] text-center px-2">
              <span className="font-serif text-[9px] lg:text-[11px] text-white font-semibold">TUTTI</span>
            </div>
          </div>
          <span className={`text-center font-sans text-[9px] lg:text-[11px] font-semibold mt-2 ${!activeAreaSlug ? 'text-ab-gold' : 'text-ab-tortora-dark'}`}>TUTTI</span>
        </Link>

        {macroaree.map((area: any) => (
          <Link 
            key={area.id} 
            href={`/servizi?area=${area.slug}`} 
            className="flex flex-col items-center gap-4 shrink-0 group w-32 lg:w-40"
          >
            <div className={`relative flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-ab-cream p-1 border transition-transform duration-300 ${activeAreaSlug === area.slug ? 'border-ab-gold scale-105' : 'border-ab-tortora/30'}`}>
              <div className="flex items-center justify-center w-full h-full rounded-full bg-[#D4B3A5] text-center px-2">
                <span className="font-serif font-semibold text-[9px] lg:text-[11px] text-white">{area.name.toUpperCase()}</span>
              </div>
            </div>
            <span className={`text-center font-sans text-[9px] lg:text-[11px] font- mt-2 ${activeAreaSlug === area.slug ? 'text-ab-gold' : 'text-ab-tortora-dark'}`}>
              {area.name.toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
