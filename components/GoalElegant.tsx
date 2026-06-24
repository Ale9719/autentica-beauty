'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function FilosofiaCollage() {
  return (
    <section className="relative px-6 lg:px-24 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center bg-ab-cream overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-end">
        
        {/* Onda 1 */}
        <svg 
          className="absolute bottom-4 lg:bottom-8 left-0 w-full h-auto text-ab-tortora/10" 
          viewBox="0 0 1440 320" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        {/* Onda 2 */}
        <svg 
          className="absolute -bottom-px left-0 w-full h-auto text-white" 
          viewBox="0 0 1440 320" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,186.7C960,171,1056,181,1152,202.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* --- CONTENITORE IMMAGINI --- */}
      <div className="relative z-10 w-full max-w-125 mx-auto h-137.5 lg:h-162.5 mt-8 lg:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-0 top-0 w-[75%] h-[80%] rounded-4xl overflow-hidden shadow-md bg-ab-tortora/10"
        >
          <Image src="/placeholder-2.jpg" alt="Oasi Benessere" fill className="object-cover" />
          <div className="absolute inset-4 border border-white/50 rounded-2xl pointer-events-none"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute right-0 bottom-8 lg:bottom-0 w-[55%] h-[50%] rounded-3xl overflow-hidden shadow-2xl border-8 border-ab-cream bg-ab-tortora/10"
        >
          <Image src="/placeholder-3.jpg" alt="Dettaglio Rituale" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className="absolute left-[-5%] lg:left-[-10%] bottom-[25%] lg:bottom-[20%] w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#D4B3A5] flex items-center justify-center shadow-lg border-4 border-ab-cream"
        >
          <span className="text-white font-serif text-[10px] lg:text-xs uppercase tracking-widest text-center px-2">
            Autentica<br/>Beauty
          </span>
        </motion.div>
      </div>

      {/* --- CONTENUTO TESTUALE --- */}
      <div className="relative z-10 space-y-6 md:space-y-8 text-center lg:text-left pb-16 lg:pb-0">
        <span className="inline-block text-ab-gold tracking-[0.3em] uppercase text-[11px] md:text-xs font-semibold border-b border-ab-gold/30 pb-2">
          La Nostra Filosofia
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-ab-tortora-dark">
          Equilibrio biologico,<br />
          <em className="text-ab-gold italic font-light">cura scientifica.</em>
        </h2>
        <p className="text-ab-tortora-dark/80 text-base md:text-lg leading-relaxed font-sans font-light max-w-lg mx-auto lg:mx-0">
          Nel nostro spazio l'estetica si spoglia della fretta. Ogni seduta inizia con un'analisi dermo-visiva accurata e si sviluppa in un'atmosfera calma, studiata per far rigenerare i tessuti nel profondo.
        </p>
        <div className="pt-6">
          <button className="group text-ab-tortora-dark uppercase tracking-[0.2em] text-[11px] md:text-xs font-semibold inline-flex items-center gap-4 transition-colors hover:text-ab-gold">
            <span>Scopri i Nostri Servizi</span>
            
            <span className="flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-2">
              <ArrowRight size={16} strokeWidth={1.5} />
            </span>
          </button>
        </div>
      </div>
      
    </section>
  );
}