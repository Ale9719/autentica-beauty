import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Goal from '../components/Goal';
import PillarCard from '../components/PillarCard';
import TestimonialSection from '../components/TestimonialSection';
import Gallery from '@/components/Gallery';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Autentica Beauty | Centro Estetico a Borore, Sardegna',
  description: 'Autentica Beauty è il centro estetico di Borore specializzato in epilazione laser MeDioStar®, trattamenti viso e corpo personalizzati. Analisi dermo-visiva e rituali su misura. Prenota la tua consulenza.',
  keywords: 'centro estetico Borore, epilazione laser Borore, epilazione laser Sardegna, trattamenti estetici Nuoro, MeDioStar Sardegna, estetica avanzata Borore, centro benessere Borore',
  openGraph: {
    title: 'Autentica Beauty | Centro Estetico a Borore, Sardegna',
    description: 'Epilazione laser MeDioStar®, trattamenti viso e corpo personalizzati a Borore, Sardegna. Prenota la tua consulenza.',
    url: 'https://autenticabeauty.it',
    siteName: 'Autentica Beauty',
    locale: 'it_IT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://autenticabeauty.it',
  }
};
async function getHomeData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}/pages/121`,
      { cache: 'no-store' }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.acf_fields || null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const acf = await getHomeData();

  return (
    <main className="min-h-screen bg-ab-cream"> 
      <Navbar />
      <Hero 
        titolo={acf?.hero_titolo}
        sottotitolo={acf?.hero_sottotitolo}
        immagine={acf?.hero_immagine}
      />
      <PillarCard
        titoloSezione={acf?.pillar_titolo_sezione}
        pillar1Titolo={acf?.pillar_1_titolo}
        pillar1Testo={acf?.pillar_1_testo}
        pillar2Titolo={acf?.pillar_2_titolo}
        pillar2Testo={acf?.pillar_2_testo}
        pillar3Titolo={acf?.pillar_3_titolo}
        pillar3Testo={acf?.pillar_3_testo}
      />
      <Goal
        titolo={acf?.filosofia_titolo}
        testo={acf?.filosofia_testo}
        immagine1={acf?.filosofia_immagine_1}
        immagine2={acf?.filosofia_immagine_2}
      />
      <ServiceCard />  
      <Gallery immagini={[
        acf?.gallery_immagine_1,
        acf?.gallery_immagine_2,
        acf?.gallery_immagine_3,
        acf?.gallery_immagine_4,
        acf?.gallery_immagine_5,
        acf?.gallery_immagine_6,
      ]} />
      <TestimonialSection />
      <ContactCTA
        titolo={acf?.cta_titolo}
        testo={acf?.cta_testo}
      />
      <Footer />
    </main>
  );
}