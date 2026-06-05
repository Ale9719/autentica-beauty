import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Goal from '../components/Goal';
import PillarCard from '../components/PillarCard';
import TestimonialSection from '../components/TestimonialSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

import { Sparkles, Leaf, Waves } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-ab-cream"> 
      <Navbar />
      <Hero />
      <PillarCard />
      <Goal />
      <ServiceCard />  
      <TestimonialSection />
      <ContactCTA />
      <Footer />
    </main>
  );
}