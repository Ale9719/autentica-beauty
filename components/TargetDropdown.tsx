'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function TargetDropdown({ 
  targets, 
  activeAreaSlug, 
  activeTargetSlug 
}: { 
  targets: any[], 
  activeAreaSlug?: string, 
  activeTargetSlug?: string 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const activeLabel = targets.find(t => t.slug === activeTargetSlug)?.name || "SELEZIONA FILTRO";

  return (
    <div className="relative w-full max-w-xs mx-auto mb-12 px-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 border border-ab-tortora/20 text-[10px] uppercase tracking-[0.2em] text-ab-tortora-dark hover:border-ab-gold transition-all"
      >
        <span>{activeLabel}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-6 right-6 mt-1 bg-white border border-ab-tortora/10 shadow-lg z-50">
          <Link 
            href={`/servizi?area=${activeAreaSlug || ''}`} 
            onClick={() => setIsOpen(false)}
            className="block px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-ab-tortora hover:bg-ab-cream"
          >
            TUTTI
          </Link>
          {targets.map((t: any) => (
            <Link 
              key={t.id} 
              href={`/servizi?area=${activeAreaSlug || ''}&target=${t.slug}`} 
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-3 text-[10px] uppercase tracking-[0.2em] ${activeTargetSlug === t.slug ? 'text-ab-gold bg-ab-gold/5' : 'text-ab-tortora hover:bg-ab-cream'}`}
            >
              {t.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}