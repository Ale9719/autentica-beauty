import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import PillarCard from '@/components/PillarCard'; 

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-ab-cream flex flex-col">
      <Navbar />

      <section className="pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ab-gold font-semibold pb-2 border-b border-ab-gold/20 w-fit mx-auto block">
            La Nostra Filosofia
          </span>
        </div>
        <h1 className="font-serif text-5xl lg:text-7xl text-ab-tortora-dark mb-10 leading-[1.1]">
          L'arte di valorizzare <br /> la tua naturale bellezza
        </h1>
        <p className="text-ab-tortora text-lg leading-relaxed tracking-wide font-light italic">
          "Crediamo che la vera bellezza nasca dall'equilibrio profondo tra corpo e mente. 
          Autentica Beauty non è solo un centro estetico, ma un rifugio dedicato alla cura di sé."
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="relative w-full aspect-4/5 max-w-lg mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-ab-tortora/10 rounded-[2.5rem] transform translate-x-4 translate-y-4"></div>
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-ab-tortora/10 shadow-lg">
                <Image 
                    src="/placeholder-2.jpg" 
                    alt="Interno Autentica Beauty" 
                    fill 
                    className="object-cover"
                />
            </div>
        </div>

        <div className="space-y-8 text-center lg:text-left">
          <h2 className="font-serif text-4xl lg:text-5xl text-ab-tortora-dark">
            Autentica: <br/> un approccio su misura
          </h2>
          <div className="space-y-6 text-ab-tortora-dark/80 text-base leading-relaxed font-sans font-light">
            <p>
              Abbiamo creato uno spazio dove il tempo rallenta. Lontano dal caos cittadino, 
              ogni ambiente è studiato per avvolgerti in una sensazione di pace immediata.
            </p>
            <p>
              Il nostro approccio unisce l'alta tecnologia laser alla delicatezza dei rituali 
              manuali, garantendo che ogni trattamento sia un'esperienza unica, progettata 
              esclusivamente per le tue necessità.
            </p>
          </div>
        </div>
      </section>

      <div className="relative w-full -mb-1 z-10">
        <svg 
          className="w-full h-auto text-ab-tortora/20 fill-current" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,149.3C672,128,768,128,864,154.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L0,320Z"></path>
        </svg>

        <svg 
          className="absolute bottom-0 left-0 w-full h-auto text-white/40 fill-current" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none"
        >
          <path d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,250.7C672,245,768,203,864,186.7C960,171,1056,181,1152,202.7C1248,224,1344,256,1392,272L1440,288L1440,320L0,320Z"></path>
        </svg>
      </div>

      <PillarCard />

      <Footer />
    </main>
  );
}