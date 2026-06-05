'use client';
import { Sparkles, Leaf, Waves } from 'lucide-react';

interface ServicesCardsProps {
  title: string;
  description: string;
  type: 'viso' | 'corpo' | 'rituali'; 
}

export default function ServiceCard({ title, description, type }: ServicesCardsProps) {
  const icons = {
    viso: Sparkles,
    corpo: Leaf,
    rituali: Waves
  };
  
  const Icon = icons[type];

  return (
    <div className="group h-112.5 relative flex flex-col items-center justify-center p-10 border border-ab-tortora/10 bg-ab-cream hover:border-ab-gold/50 transition-all duration-700 cursor-pointer shadow-sm hover:shadow-xl">
      
      <div className="mb-8 text-ab-tortora/60 group-hover:text-ab-gold transition-all duration-700">
        <Icon size={48} strokeWidth={1} />
      </div>
      
      <div className="text-center">
        <span className="block text-[11px] uppercase tracking-[0.4em] text-ab-gold font-bold mb-4 font-sans">
          Rituale
        </span>
        
        <h3 className="font-serif text-3xl md:text-4xl text-ab-tortora-dark mb-6 leading-tight">
          {title}
        </h3>
        
        <p className="font-sans text-ab-tortora/80 font-light leading-relaxed max-w-55 mx-auto transition-colors duration-500">
          {description}
        </p>
      </div>

      <div className="absolute bottom-10 w-12 h-px bg-ab-gold group-hover:w-24 transition-all duration-700" />
    </div>
  );
}