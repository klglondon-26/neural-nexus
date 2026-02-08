import InteractiveNeuralVortex from '@/components/InteractiveNeuralVortex';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoWeServe from '@/components/WhoWeServe';
import HowItWorks from '@/components/HowItWorks';
import WhatWeBuild from '@/components/WhatWeBuild';
import ServicesCarousel from '@/components/ServicesCarousel';
import Pricing from '@/components/Pricing';
import Workflows from '@/components/Workflows';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';


const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <InteractiveNeuralVortex />
      <Header />
      <main>
        <Hero />
        <WhoWeServe />
        <HowItWorks />
        <WhatWeBuild />
        <ServicesCarousel />
        <Pricing />
        <Workflows />
        <Partners />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      
    </div>
  );
};

export default Index;
