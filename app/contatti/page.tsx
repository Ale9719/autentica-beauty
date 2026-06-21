import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineClockCircle } from 'react-icons/ai';

export default function ContattiPage() {
  const orari = [
    { giorno: "Lunedì", orario: "10 - 19" },
    { giorno: "Martedì", orario: "10 - 19" },
    { giorno: "Mercoledì", orario: "10 - 19" },
    { giorno: "Giovedì", orario: "10 - 19" },
    { giorno: "Venerdì", orario: "10 - 19" },
    { giorno: "Sabato", orario: "9 - 13" },
    { giorno: "Domenica", orario: "Chiuso" },
  ];

  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />

      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h1 className="font-serif text-5xl lg:text-8xl text-ab-tortora-dark tracking-tighter mb-6">
              Entriamo in <span className="italic text-ab-gold">contatto.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-serif text-2xl text-ab-tortora-dark mb-6 flex items-center gap-3">
                    <AiOutlineEnvironment className="text-ab-gold"/> Il Centro
                  </h3>
                  <p className="font-sans text-base text-ab-tortora-dark leading-relaxed">
                    Via Solferino, 1<br /> 08016 Borore (NU)
                  </p>
                  <div className="mt-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.7412202871756!2d8.802480400000002!3d40.214819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ddb79608e31f5d%3A0xa9940da8fa4d31d1!2sAutentica%20Beauty%20FP!5e0!3m2!1sit!2sit!4v1782038807292!5m2!1sit!2sit"
                      width="100%"
                      height="220"
                      style={{ border: 'none' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-ab-tortora-dark mb-6 flex items-center gap-3">
                    <AiOutlineClockCircle className="text-ab-gold"/> Orari
                  </h3>
                  <div className="space-y-2">
                    {orari.map((item) => (
                      <div key={item.giorno} className="flex justify-between text-base font-sans">
                        <span className="text-ab-tortora">{item.giorno}</span>
                        <span className="font-medium text-ab-tortora-dark">{item.orario}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-ab-tortora/10 pt-10">
                <h3 className="font-serif text-2xl text-ab-tortora-dark mb-8">Contatti</h3>
                <div className="space-y-6">
                  <Link href="tel:+393447761787" className="flex items-center gap-4 text-base text-ab-tortora-dark hover:text-ab-gold transition-colors">
                    <AiOutlinePhone className='text-ab-tortora' size={24}/> <span>+39 344 776 1787</span>
                  </Link>
                  <Link href="mailto:info@autenticabeauty.it" className="flex items-center gap-4 text-base text-ab-tortora-dark hover:text-ab-gold transition-colors">
                    <AiOutlineMail className='text-ab-tortora' size={24}/> <span>info@autenticabeauty.it</span>
                  </Link>
                </div>
                <div className="flex gap-8 mt-12">
                  <Link href="#" className="text-ab-tortora-dark hover:text-ab-gold transition-all hover:scale-110"><AiOutlineInstagram size={32} /></Link>
                  <Link href="#" className="text-ab-tortora-dark hover:text-ab-gold transition-all hover:scale-110"><AiOutlineFacebook size={32} /></Link>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="bg-ab-cream/30 p-10 lg:p-14 space-y-8 border border-ab-tortora/10">
              <h3 className="font-serif text-2xl text-ab-tortora-dark mb-4">Inviaci un messaggio</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <input type="text" placeholder="NOME" className="w-full bg-transparent border-b border-ab-tortora/50 py-4 outline-none focus:border-ab-gold transition-all text-base placeholder:text-ab-tortora/50 text-ab-tortora-dark" required />
                <input type="text" placeholder="COGNOME" className="w-full bg-transparent border-b border-ab-tortora/50 py-4 outline-none focus:border-ab-gold transition-all text-base placeholder:text-ab-tortora/50 text-ab-tortora-dark" required />
              </div>
              
              <input type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-ab-tortora/50 py-4 outline-none focus:border-ab-gold transition-all text-base placeholder:text-ab-tortora/50 text-ab-tortora-dark" required />
              
              <textarea placeholder="MESSAGGIO" rows={4} className="w-full bg-transparent border-b border-ab-tortora/50 py-4 outline-none focus:border-ab-gold transition-all text-base placeholder:text-ab-tortora/50 text-ab-tortora-dark"></textarea>

              <div className="flex items-start gap-4">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  className="mt-1.5 h-4 w-4 accent-ab-gold cursor-pointer" 
                  required 
                />
                <label htmlFor="privacy" className="text-sm text-ab-tortora-dark leading-relaxed cursor-pointer">
                  Accetto la condivisione dei miei dati personali ai fini della gestione della richiesta.
                </label>
              </div>

              <button type="submit" className="w-full bg-ab-tortora-dark text-white py-6 uppercase tracking-[0.2em] text-sm hover:bg-ab-gold transition-all duration-500">
                Invia Richiesta
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="w-full relative pointer-events-none mt-20">
        <svg 
          className="w-full h-37.5 text-ab-tortora/30 fill-current" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none">
          <path d="M0,160C320,300,420,300,720,200C1020,100,1200,50,1440,150L1440,320L0,320Z"></path>
        </svg>
        <svg 
          className="w-full h-30 text-ab-cream fill-current -mt-30" 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none">
          <path d="M0,220C320,350,480,250,720,200C960,150,1200,200,1440,250L1440,320L0,320Z"></path>
        </svg>
      </div>

      <Footer />
    </main>
  );
}