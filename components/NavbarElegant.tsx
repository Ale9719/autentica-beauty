'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { RiInstagramLine, RiFacebookLine, RiPinterestLine } from 'react-icons/ri';

interface MenuItem {
  title: string;
  url: string;
}

const menuItems: MenuItem[] = [
  { title: 'Home', url: '/' },
  { title: 'Chi siamo', url: '/chi-siamo' },
  { title: 'Servizi', url: '/servizi' },
  { title: 'Contatti', url: '/contatti' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-24 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-white/85 backdrop-blur-md shadow-sm py-4 border-b border-ab-tortora/5' 
            : 'bg-transparent py-6 lg:py-8'
        }`}
      >
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="relative z-50 block transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image 
            src="/logo-autentica.png" 
            alt="Autentica Beauty Logo"
            width={160}     
            height={50}     
            priority        
            className="w-32 lg:w-40 h-auto object-contain" 
          />
        </Link>

        {/* Hamburger Button */}
        <button 
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-end justify-center gap-1 focus:outline-none group" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-px bg-ab-tortora-dark transition-all duration-300 ease-out ${isOpen ? 'w-6 rotate-45 translate-y-1.5' : 'w-7'}`} />
          <span className={`h-px bg-ab-tortora-dark transition-all duration-300 ease-out ${isOpen ? 'opacity-0 w-0' : 'w-5 group-hover:w-7'}`} />
          <span className={`h-px bg-ab-tortora-dark transition-all duration-300 ease-out ${isOpen ? 'w-6 -rotate-45 -translate-y-1.5' : 'w-7'}`} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {menuItems.map((item) => {
              const isActive = pathname === item.url;
              return (
                <li key={item.title}>
                  <Link 
                    href={item.url} 
                    className={`group relative text-[11px] uppercase tracking-[0.2em] font-sans font-medium transition-colors duration-300 ${isActive ? 'text-ab-gold' : 'text-ab-tortora-dark hover:text-ab-gold'}`}
                  >
                    {item.title}
                    <span className={`absolute -bottom-2 left-0 h-px bg-ab-gold transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="w-px h-4 bg-ab-tortora-dark/20" />

          <div className="flex gap-5 text-ab-tortora-dark">
            <a href="#" className="hover:text-ab-gold hover:-translate-y-0.5 transition-all"><RiInstagramLine size={18} /></a>
            <a href="#" className="hover:text-ab-gold hover:-translate-y-0.5 transition-all"><RiFacebookLine size={18} /></a>
          </div>
        </div>
      </nav>

      {/* Menu Overlay Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#FAF6F2] flex flex-col items-center justify-center px-6 lg:hidden"
          >
            <ul className="flex flex-col items-center gap-8 mb-12">
              {menuItems.map((item, i) => {
                const isActive = pathname === item.url;
                return (
                  <motion.li 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  >
                    <Link 
                      href={item.url} 
                      onClick={() => setIsOpen(false)}
                      className={`font-serif text-4xl transition-colors ${isActive ? 'text-ab-gold' : 'text-ab-tortora-dark hover:text-ab-gold'}`}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
        </AnimatePresence>
      </>
  );
}
    