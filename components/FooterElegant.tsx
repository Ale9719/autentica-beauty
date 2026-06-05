'use client';
import { RiInstagramLine, RiFacebookLine, RiPinterestLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="bg-ab-cream pt-16 md:pt-20 pb-10 px-8 md:px-24 border-t border-ab-tortora-dark/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 justify-items-center">
        
        {/* Colonna 1: Brand */}
        <div className="space-y-4 text-center w-full">
          <h3 className="font-serif text-2xl text-ab-tortora-dark">Autentica Beauty</h3>
          <p className="text-[10px] uppercase tracking-[0.2em] text-ab-tortora/70">
            Centro di estetica avanzata<br />
            Sardegna, Italia
          </p>
        </div>

        {/* Colonna 2: Link rapidi */}
        <div className="space-y-4 text-center w-full">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-ab-gold">Esplora</h4>
          <ul className="space-y-3">
            {['Home', 'Chi siamo', 'Studio', 'Contatti'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase()}`} className="text-sm font-light text-ab-tortora-dark hover:text-ab-gold transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonna 3: Social */}
        <div className="space-y-4 flex flex-col items-center w-full">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-ab-gold">Seguici</h4>
          <div className="flex gap-6">
            <a href="#" className="text-ab-tortora-dark hover:text-ab-gold transition-colors opacity-70 hover:opacity-100">
              <RiInstagramLine size={20} />
            </a>
            <a href="#" className="text-ab-tortora-dark hover:text-ab-gold transition-colors opacity-70 hover:opacity-100">
              <RiFacebookLine size={20} />
            </a>
            <a href="#" className="text-ab-tortora-dark hover:text-ab-gold transition-colors opacity-70 hover:opacity-100">
              <RiPinterestLine size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-ab-tortora-dark/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-ab-tortora/50 text-center">
        <p>© 2026 Autentica Beauty. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="/privacy" className="hover:text-ab-gold transition-colors">Privacy</a>
          <a href="/cookies" className="hover:text-ab-gold transition-colors">Cookie</a>
        </div>
      </div>
    </footer>
  );
}