import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-ab-cream overflow-hidden py-30">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg 
          className="absolute bottom-0 left-0 w-full h-auto text-ab-tortora/20" 
          viewBox="0 0 1440 320" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <svg 
          className="absolute -bottom-2.5 left-0 w-full h-auto text-white/40" 
          viewBox="0 0 1440 320" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,186.7C960,171,1056,181,1152,202.7C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <span className="text-ab-gold font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-6 border-b border-ab-gold/30 pb-2">
            Autentica Beauty
          </span>
          
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ab-tortora-dark leading-[1.1] mb-6">
            Riscopri la tua <br />
            <span className="text-ab-gold">Autentica</span> Bellezza
          </h1>
          
          <p className="font-sans text-ab-tortora-dark/80 text-base sm:text-lg max-w-md lg:max-w-lg mb-10 leading-relaxed">
            Epilazione laser avanzata con tecnologia MeDioStar® e trattamenti personalizzati per il benessere di viso e corpo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contatti"
              className="border border-ab-gold text-ab-gold font-sans font-medium py-3.5 px-8 rounded-full shadow-lg shadow-ab-gold/20 hover:bg-ab-gold hover:text-white hover:shadow-none hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              Prenota ora
            </Link>
            <Link
              href="/servizi"
              className="bg-white/80 backdrop-blur-sm border border-ab-tortora text-ab-tortora font-sans font-medium py-3.5 px-8 rounded-full hover:border-ab-tortora hover:bg-ab-tortora hover:text-white transition-all duration-300 text-center"
            >
              I nostri percorsi
            </Link>
          </div>
        </div>

        <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-100max-w-[500px] aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl bg-ab-tortora/10">
            <Image
              src="/placeholder-2.jpg" 
              alt="Trattamento estetico presso Autentica Beauty"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center relative z-10"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-ab-tortora-dark/30 to-transparent mix-blend-multiply pointer-events-none z-20"></div>
          </div>
        </div>

      </div>
    </section>
  );
}