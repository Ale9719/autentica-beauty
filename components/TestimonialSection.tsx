'use client';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Recensione {
  id: number;
  nome: string;
  testo: string;
  servizio: string;
  initial: string;
}

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [testimonials, setTestimonials] = useState<Recensione[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Recensione | null>(null);

  useEffect(() => {
    const fetchRecensioni = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_WP_URL}/recensioni?per_page=20&acf_format=standard`,
          { cache: 'no-store' }
        );
        if (!res.ok) throw new Error('Errore fetch recensioni');
        const data = await res.json();

        const mapped = data.map((r: any) => ({
          id: r.id,
          nome: r.title.rendered,
          testo: r.acf_fields?.testo || '',
          servizio: r.acf_fields?.servizio || '',
          initial: r.title.rendered.charAt(0).toUpperCase()
        }));

        setTestimonials(mapped);
      } catch (error) {
        console.error('Errore:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecensioni();
  }, []);

  // Blocca scroll quando modal è aperto
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selected]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (loading) return (
    <div className="w-full py-12 text-center bg-ab-cream">
      <span className="text-[10px] uppercase tracking-[0.3em] text-ab-tortora/60 animate-pulse">
        Caricamento recensioni...
      </span>
    </div>
  );

  return (
    <>
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

          <button  aria-label="Scorri a sinistra"
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg border border-ab-tortora/10 text-ab-tortora-dark hover:text-ab-gold hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          <button aria-label="Scorri a destra"
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-lg border border-ab-tortora/10 text-ab-tortora-dark hover:text-ab-gold hover:scale-110 transition-all duration-300 opacity-0 group-hover/section:opacity-100"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>

          <div 
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
                onClick={() => setSelected(item)}
                className="relative snap-center shrink-0 w-[85vw] md:w-[calc(50vw-2.5rem)] lg:w-[calc(50%-2.5rem)] max-w-125 h-96 bg-white rounded-[2.5rem] shadow-lg shadow-ab-tortora/5 border border-ab-tortora/5 flex flex-col items-center justify-between p-8 lg:p-12 text-center group transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="absolute inset-4 border border-ab-tortora/10 rounded-4xl pointer-events-none transition-colors duration-500 group-hover:border-ab-gold/30"></div>

                <div className="relative z-10 mb-4">
                  <Quote size={32} className="text-ab-gold opacity-50" strokeWidth={1} />
                </div>

                <p className="relative z-10 font-serif text-lg lg:text-xl text-ab-tortora-dark font-light leading-relaxed italic px-2 line-clamp-4">
                  "{item.testo}"
                </p>
                
                <div className="relative z-10 flex flex-col items-center gap-3 mt-auto">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAF4EE] border border-ab-gold/30 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <span className="font-serif text-ab-gold text-base">{item.initial}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-ab-tortora-dark font-semibold">
                      {item.nome}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-ab-tortora-dark/50">
                      {item.servizio}
                    </span>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest text-ab-gold/60 mt-1">
                    Leggi tutto →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-ab-tortora-dark/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-[2.5rem] shadow-2xl max-w-lg w-full p-10 lg:p-14 text-center"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-ab-cream text-ab-tortora hover:text-ab-gold transition-colors"
              >
                <X size={16} strokeWidth={1.5} />
              </button>

              <div className="absolute inset-4 border border-ab-tortora/10 rounded-4xl pointer-events-none"></div>

              <div className="mb-6">
                <Quote size={32} className="text-ab-gold opacity-50 mx-auto" strokeWidth={1} />
              </div>

              <p className="font-serif text-xl lg:text-2xl text-ab-tortora-dark font-light leading-relaxed italic mb-10 px-2">
                "{selected.testo}"
              </p>

              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FAF4EE] border border-ab-gold/30 shadow-inner">
                  <span className="font-serif text-ab-gold text-base">{selected.initial}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ab-tortora-dark font-semibold">
                    {selected.nome}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-ab-tortora-dark/50">
                    {selected.servizio}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}