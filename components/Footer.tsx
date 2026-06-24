'use client';
import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiFacebookLine, RiPinterestLine } from 'react-icons/ri';

export default function Footer({ theme = "default" }: { theme?: "default" | "white" }) {
  const bgClass = theme === "white" ? "bg-white" : "bg-ab-cream";
  
  return (
    <footer className={`${bgClass} pt-20 lg:pt-28 pb-10 px-6 lg:px-24 transition-colors duration-500`}>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <Link href="/" className="group mb-4">
          <Image 
            src="/logo-autentica.png" 
            alt="Autentica Beauty Logo"
            width={160}     
            height={50}     
            priority        
            className="w-30 lg:w-70 h-auto object-contain" 
          />
        </Link>
        <p className="font-sans font-light text-ab-tortora-dark/70 tracking-[0.3em] uppercase text-[9px] lg:text-[10px] mb-12">
          Centro di estetica avanzata • Borore, Sardegna
        </p>

        <nav className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12">
          {['Home', 'Chi siamo', 'Servizi', 'Contatti'].map((item) => (
            <Link 
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`} 
              className="group relative text-xs lg:text-sm font-sans font-light text-ab-tortora-dark tracking-wide uppercase hover:text-ab-gold transition-colors duration-300"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-ab-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </nav>

        <div className="flex gap-5 mb-20">
          <a href="#" aria-label="Instagram" className="flex items-center justify-center w-12 h-12 rounded-full border border-ab-tortora/20 text-ab-tortora-dark hover:border-ab-gold hover:text-ab-gold hover:-translate-y-1 transition-all duration-300">
            <RiInstagramLine size={22} />
          </a>
          <a href="#" aria-label="Facebook" className="flex items-center justify-center w-12 h-12 rounded-full border border-ab-tortora/20 text-ab-tortora-dark hover:border-ab-gold hover:text-ab-gold hover:-translate-y-1 transition-all duration-300">
            <RiFacebookLine size={22} />
          </a>
          <a href="#" aria-label="Pinterest" className="flex items-center justify-center w-12 h-12 rounded-full border border-ab-tortora/20 text-ab-tortora-dark hover:border-ab-gold hover:text-ab-gold hover:-translate-y-1 transition-all duration-300">
            <RiPinterestLine size={22} />
          </a>
        </div>

        <div className="w-full pt-8 border-t border-ab-tortora/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.2em] text-ab-tortora-dark/50">
          <div className="flex gap-6 order-2 md:order-1">
            <Link href="/privacy" className="hover:text-ab-gold transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-ab-gold transition-colors">Cookie Policy</Link>
          </div>
          
          <p className="order-1 md:order-2">
            © {new Date().getFullYear()} Autentica Beauty.<br/>
            <span className="text-ab-tortora-dark/40">P.IVA 01670540911</span>
          </p>
          
          <p className="order-3 flex gap-1">
            Website by <a href="#" className="font-semibold text-ab-tortora-dark hover:text-ab-gold transition-colors">AP Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}