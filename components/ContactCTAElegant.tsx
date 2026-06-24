'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactCTA() {
  return (
    
    <section className="relative w-full px-6 lg:px-24 py-32 bg-white flex flex-col items-center justify-center">
      
      {/* --- ONDA CONFINE SUPERIORE --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="relative block w-full h-16 md:h-24 text-ab-cream fill-current" preserveAspectRatio="none">
          <path d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center mt-8 lg:mt-12"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-ab-gold font-sans font-semibold block mb-6">
          Il tuo momento
        </span>

        <h2 className="font-serif text-5xl lg:text-6xl lg:leading-[1.1] text-ab-tortora-dark leading-tight mb-8">
          Il primo passo verso <br />
          <span className="italic text-ab-gold font-light">il tuo equilibrio.</span>
        </h2>

        <p className="text-ab-tortora-dark/70 font-sans font-light text-base lg:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
          Ogni percorso nasce da un ascolto profondo. Prenota la tua prima consulenza e iniziamo a disegnare il tuo rituale su misura.
        </p>

        <Link href="/contatti">
          <button className="group bg-ab-tortora-dark text-white px-12 py-4 rounded-full uppercase tracking-widest text-[11px] font-medium transition-all duration-300 hover:bg-ab-gold hover:-translate-y-1 hover:shadow-lg hover:shadow-ab-gold/20">
            Prenota la tua Consulenza
          </button>
        </Link>

      </motion.div>
      
    </section>
  );
}
