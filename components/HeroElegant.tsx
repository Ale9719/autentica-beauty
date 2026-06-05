'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-ab-cream pt-24 md:pt-0 flex flex-col-reverse md:grid md:grid-cols-2 min-h-screen items-center px-8 lg:px-24 py-12 lg:py-20 gap-12">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8 text-center lg:text-left"
      >
        <div className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold text-ab-gold mb-6">
          Centro di Estetica Avanzata
        </div>
        
        <h1 className="font-serif text-6xl lg:text-8xl leading-[1.1] text-ab-tortora">
          Svela la tua <br />
          <span className="italic text-ab-tortora/60 font-light">essenza</span> pura.
        </h1>
        
        <p className="font-sans text-ab-tortora/70 text-lg max-w-sm mx-auto lg:mx-0 leading-relaxed font-light">
          Rituali dermo-specifici calibrati sull'equilibrio biologico del tuo tessuto cutaneo.
        </p>

        <button className="font-sans border border-ab-gold/50 px-10 py-4 text-ab-tortora uppercase tracking-[0.3em] font-bold text-[10px] hover:bg-ab-gold hover:text-white transition-all duration-500">
          Riserva un Rituale
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="relative w-full aspect-4/5 lg:aspect-auto lg:h-[70vh] rounded-tl-[80px] lg:rounded-tl-[150px] overflow-visible"
      >
        <div className="absolute -top-3 -left-3 w-[20%] h-[20%] max-w-37.5 max-h-37.5 border-t-2 border-l-2 border-ab-gold rounded-tl-[80px] md:rounded-tl-[150px] pointer-events-none z-20" />
        <div className="absolute -bottom-3 -right-3 w-[20%] h-[20%] max-w-37.5 max-h-37.5 border-b-2 border-r-2 border-ab-gold pointer-events-none z-20" />
        
        <div className="w-full h-full rounded-tl-[80px] lg:rounded-tl-[150px] overflow-hidden relative z-10">
          <Image src="/placeholder-1.jpg" alt="Centro Estetico" fill priority className="object-cover" />
        </div>
      </motion.div>
    </section>
  );
}