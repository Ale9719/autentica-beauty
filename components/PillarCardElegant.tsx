'use client';
import { motion } from 'framer-motion';

export default function PillarCard({ num, title, text }: { num: string, title: string, text: string }) {
  return (
    <motion.div 
      className="group relative px-8 py-16 h-full flex flex-col items-center text-center border border-ab-gold/20 hover:border-ab-gold/40 transition-all duration-700 bg-ab-cream/30"
    >
      <span className="text-[11px] uppercase tracking-[0.4em] text-ab-gold font-medium mb-6 block">
        Fase {num}
      </span>
      
      <h3 className="text-3xl lg:text-4xl font-serif text-ab-tortora-dark mb-6 group-hover:text-ab-gold transition-colors duration-500">
        {title}
      </h3>
      
      <p className="text-ab-tortora-dark/80 font-light text-lg leading-relaxed max-w-[90%]">
        {text}
      </p>

      <div className="mt-12 w-16 h-px bg-ab-gold transition-all duration-700 group-hover:w-32" />
    </motion.div>
  );
}