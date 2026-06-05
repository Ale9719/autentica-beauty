'use client';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="relative px-12 lg:px-24 py-32 bg-ab-cream border-t border-ab-gold/10 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 0.3, pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-150 h-150 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-ab-gold fill-none">
          <path d="M0 200 Q 100 0 200 0" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, pathLength: 0 }}
        whileInView={{ opacity: 0.3, pathLength: 1 }}
        transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-32 w-150 h-150 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-ab-gold fill-none">
          <path d="M200 0 Q 100 200 0 200" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="relative max-w-2xl mx-auto text-center z-10">
        <h2 className="font-serif text-5xl lg:text-6xl text-ab-tortora leading-tight mb-12">
          Il primo passo verso <br />
          <span className="italic text-ab-tortora/60">il tuo equilibrio.</span>
        </h2>
        
        <p className="text-ab-tortora/70 font-light mb-12 leading-relaxed text-lg">
          Ogni percorso nasce da un ascolto profondo. Prenota la tua prima consulenza 
          e iniziamo a disegnare il tuo rituale su misura.
        </p>

        <button className="group relative border border-ab-gold px-12 py-5 uppercase tracking-[0.3em] text-[10px] text-ab-tortora transition-all duration-700 hover:text-white">
          <span className="relative z-10">Prenota una Consulenza</span>
          <div className="absolute inset-0 bg-ab-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </button>
      </div>
    </section>
  );
}
