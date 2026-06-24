'use client';
import { motion } from 'framer-motion';
import { Sparkles, Waves, Leaf } from 'lucide-react';

function SingleCard({ icon, title, text, delay = 0 }: { icon: React.ReactNode, title: string, text: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} 
      className="relative flex flex-col items-center px-6 lg:px-10 py-8 group last:border-r-0 lg:border-r lg:border-ab-tortora/10"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full border border-ab-gold text-ab-gold mb-8 group-hover:bg-ab-gold group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl lg:text-3xl font-serif text-ab-tortora-dark mb-5 text-center leading-tight group-hover:text-ab-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-ab-tortora-dark/70 font-sans font-light text-center leading-relaxed text-sm lg:text-base">
        {text}
      </p>
    </motion.div>
  );
}

export default function PillarCard() {
  return (
    <section className="relative z-10 pb-32 lg:pb-40 bg-white">
      
      <div className="absolute -top-px left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 320" className="relative block w-full h-24 md:h-32 text-[#f3ebe8] fill-current" preserveAspectRatio="none">
          <path d="M0,0L48,21.3C96,43,192,85,288,112C384,139,480,149,576,138.7C672,128,768,96,864,106.7C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-24 pt-32 lg:pt-40 relative z-10">
        
        <div className="mb-16 lg:mb-20 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ab-gold font-semibold block mb-4">
            Il Metodo
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-ab-tortora-dark leading-tight">
            I tre pilastri del <br/>
            <em className="italic font-light text-ab-gold">tuo benessere.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-y-0 relative z-20">
          <SingleCard delay={0.1} icon={<Sparkles size={28} strokeWidth={1.5} />} title="Analisi Dermo-visiva" text="Iniziamo ogni percorso con uno studio profondo dei tessuti per garantirti risultati reali e duraturi." />
          <SingleCard delay={0.3} icon={<Waves size={28} strokeWidth={1.5} />} title="Tecnologie Avanzate" text="Utilizziamo solo sistemi certificati MeDioStar® per un'epilazione laser efficace e sicura." />
          <SingleCard delay={0.5} icon={<Leaf size={28} strokeWidth={1.5} />} title="Rituali su Misura" text="Ogni trattamento è cucito sulle tue esigenze biologiche e sui tuoi ritmi di vita." />
        </div>

      </div>

      <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="relative block w-full h-24 md:h-32 text-ab-cream fill-current" preserveAspectRatio="none">
          <path d="M0,0L48,21.3C96,43,192,85,288,112C384,139,480,149,576,138.7C672,128,768,96,864,106.7C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

    </section>
  );
}