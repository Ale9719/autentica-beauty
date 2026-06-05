'use client';
import { useRef } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Ogni seduta è un momento di sospensione. La mia pelle ha ritrovato un equilibrio che non credevo più possibile.",
    name: "Marta P.",
    service: "Percorso Viso",
    initial: "M"
  },
  {
    id: 2,
    text: "Un'attenzione ai dettagli rara da trovare. I risultati del trattamento corpo sono stati evidenti fin da subito.",
    name: "Lisa M.",
    service: "Trattamento Corpo",
    initial: "L"
  },
  {
    id: 3,
    text: "L'epilazione laser non è mai stata così confortevole. Un servizio davvero premium in un'atmosfera rilassante.",
    name: "Giulia C.",
    service: "Laser MeDioStar",
    initial: "G"
  },
  {
    id: 4,
    text: "La laminazione ha cambiato completamente il mio sguardo. Le ragazze sono super professionali e l'ambiente è stupendo.",
    name: "Sara T.",
    service: "Ciglia e Sopracciglia",
    initial: "S"
  }
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative px-0 py-24 lg:py-32 bg-ab-cream overflow-hidden group/section">
      
      <div className="text-center mb-12 lg:mb-16 px-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-ab-gold font-semibold block mb-4">
          Dicono di Noi
        </span>
        <h2 className="font-serif text-3xl lg:text-4xl text-ab-tortora-dark">
          Le Vostre Esperienze
        </h2>
      </div>

      <div className="relative w-full max-w-350 mx-auto">
        
        <div className="absolute top-0 left-0 bottom-0 w-8 lg:w-32 bg-linear-to-r from-ab-cream to-transparent pointer-events-none z-20"></div>
        <div className="absolute top-0 right-0 bottom-0 w-8 lg:w-32 bg-linear-to-l from-ab-cream to-transparent pointer-events-none z-20"></div>

        <button 
          onClick={() => scroll('left')}
          className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg border border-ab-tortora/10 text-ab-tortora-dark hover:text-ab-gold hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100"
          aria-label="Scorri a sinistra"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>

        <button 
          onClick={() => scroll('right')}
          className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg border border-ab-tortora/10 text-ab-tortora-dark hover:text-ab-gold hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100"
          aria-label="Scorri a destra"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>

+        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-12 pt-4 px-6 lg:px-24 gap-6 lg:gap-10 snap-x snap-mandatory hide-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {testimonials.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              key={item.id}
              className="relative snap-center shrink-0 w-[85vw] md:w-[calc(50vw-2.5rem)] lg:w-[calc(50%-2.5rem)] max-w-125 min-h-100 bg-white rounded-[2.5rem] shadow-lg shadow-ab-tortora/5 border border-ab-tortora/5 flex flex-col items-center justify-center p-8 lg:p-12 text-center group transition-transform duration-500 hover:-translate-y-2"
            >
              
              <div className="absolute inset-4 border border-ab-tortora/10 rounded-4xl pointer-events-none transition-colors duration-500 group-hover:border-ab-gold/30"></div>

              <div className="relative z-10 mb-6">
                <Quote size={32} className="text-ab-gold opacity-50" strokeWidth={1} />
              </div>

              <p className="relative z-10 font-serif text-xl lg:text-2xl text-ab-tortora-dark font-light leading-relaxed italic mb-10 px-2">
                "{item.text}"
              </p>
              
              <div className="relative z-10 flex flex-col items-center gap-3 mt-auto">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAF4EE] border border-ab-gold/30 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <span className="font-serif text-ab-gold text-base">{item.initial}</span>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ab-tortora-dark font-semibold">
                    {item.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-ab-tortora-dark/50">
                    {item.service}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}