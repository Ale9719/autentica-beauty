'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FilosofiaCollage() {
  return (
    <section className="px-8 md:px-24 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center bg-ab-cream">
      
      <div className="relative w-full h-125 md:h-150">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-0 top-0 w-[80%] h-[70%] border-2 border-ab-gold/30"
        >
          <Image 
            src="/placeholder-2.jpg" 
            alt="Oasi Benessere" 
            fill 
            className="object-cover shadow-lg"
          />
        </motion.div>s
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-0 bottom-0 w-[40%] h-[40%] md:w-[45%] md:h-[50%] border-4 md:border-8 border-ab-cream shadow-xl"
        >
          <Image 
            src="/placeholder-3.jpg" 
            alt="Dettaglio Rituale" 
            fill 
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Contenuto Testuale */}
      <div className="space-y-6 md:space-y-8 text-center lg:text-left">
        <span className="text-ab-gold tracking-[0.3em] uppercase text-[12px] md:text-xs">
          La Nostra Filosofia
        </span>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-ab-tortora-dark">
          Equilibrio biologico,<br />
          <em className="text-ab-gold italic">cura scientifica.</em>
        </h2>
        <p className="text-ab-tortora-dark/70 text-base md:text-lg leading-relaxed font-light">
          Nel nostro spazio l'estetica si spoglia della fretta. Ogni seduta inizia con un'analisi dermo-visiva accurata e si sviluppa in un'atmosfera calma, studiata per far rigenerare i tessuti nel profondo.
        </p>
        <div className="pt-4">
          <button className="text-ab-tortora-dark uppercase tracking-widest text-[12px] md:text-xs border-b border-ab-gold pb-1 hover:text-ab-gold transition-colors">
            Scopri i Nostri Servizi →
          </button>
        </div>
      </div>
    </section>
  );
}