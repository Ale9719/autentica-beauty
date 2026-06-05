'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiInstagramLine, RiFacebookLine, RiPinterestLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';

const menuItems = [
  { title: 'Home', url: '/rituali' },
  { title: 'Chi siamo', url: '/essenza' },
  { title: 'Servizi', url: '/studio' },
  { title: 'Contatti', url: '/contatti' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 lg:px-24 py-6 lg:py-8 transition-colors duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-ab-tortora lg:bg-ab-cream/80 lg:backdrop-blur-md lg:text-ab-tortora text-ab-cream' 
          : 'bg-ab-tortora text-ab-cream'
      }`}
    >
      {/* Logo */}
      <div className="font-serif text-xl tracking-widest z-50">Autentica Beauty</div>

      <button 
        className="lg:hidden z-50 text-2xl focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <RiCloseLine /> : <RiMenuLine />}
      </button>

      {/* Menu Overlay / Desktop Menu */}
      <div className={`
        fixed inset-0 bg-ab-tortora lg:bg-transparent lg:static flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-12 
        transition-all duration-300 ease-in-out 
        ${isOpen 
          ? 'translate-x-0 opacity-100 pointer-events-auto' 
          : 'translate-x-full opacity-0 pointer-events-none lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto'
        }
      `}>
        <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link 
                href={item.url} 
                onClick={() => setIsOpen(false)}
                className={`text-sm lg:text-[10px] uppercase tracking-[0.3em] hover:text-ab-gold transition-colors 
                  ${isScrolled ? 'text-ab-cream lg:text-ab-tortora-dark' : 'text-ab-cream'}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Separatore */}
        <div className={`w-px h-4 hidden lg:block ${isScrolled ? 'bg-ab-tortora-dark/20' : 'bg-ab-cream/20'}`} />

        {/* Social */}
        <div className={`flex gap-6 opacity-70 transition-opacity hover:opacity-100 ${isScrolled ? 'text-ab-cream lg:text-ab-tortora-dark' : 'text-ab-cream'}`}>
          <a href="#"><RiInstagramLine size={20} /></a>
          <a href="#"><RiFacebookLine size={20} /></a>
          <a href="#"><RiPinterestLine size={20} /></a>
        </div>
      </div>
    </nav>
  );
}