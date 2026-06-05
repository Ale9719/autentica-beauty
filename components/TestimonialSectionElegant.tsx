'use client';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialSection() {
  return (
    <section className="px-12 lg:px-24 py-32 bg-ab-cream border-t border-ab-gold/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Colonna sinistra: Titolo e Icona */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <span className="text-[12px] uppercase tracking-[0.5em] text-ab-gold block">Voci</span>
          <div className="text-ab-gold/30">
            <Quote size={60} strokeWidth={0.5} />
          </div>
        </div>

        {/* Colonna destra: recensione */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-9"
        >
          <p className="font-serif text-3xl lg:text-4xl text-ab-tortora font-light leading-relaxed italic mb-8">
            "Ogni seduta è un momento di sospensione. La mia pelle ha ritrovato un equilibrio che non credevo più possibile."
          </p>
          
          <div className="flex items-center gap-6">
            <div className="h-px w-12 bg-ab-gold" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-ab-tortora font-medium">Marta P.</span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}