import InteractiveNeuralVortex from '@/components/InteractiveNeuralVortex';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhoWeServe from '@/components/WhoWeServe';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import WhatWeBuild from '@/components/WhatWeBuild';
import ServicesCarousel from '@/components/ServicesCarousel';
import Pricing from '@/components/Pricing';
import BeforeAfter from '@/components/BeforeAfter';
import Workflows from '@/components/Workflows';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ContactForm from '@/components/ContactForm';
import TrustedByMarquee from '@/components/TrustedByMarquee';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <InteractiveNeuralVortex />
      <Header />
      <main>
        <Hero />
        <WhoWeServe />
        <PainPoints />
        <HowItWorks />
        <WhatWeBuild />
        <ServicesCarousel />
        <Pricing />
        <BeforeAfter />
        <Workflows />
        <Partners />
        <ContactForm />
        <section className="relative z-10 py-12">
          <div className="section-container text-center mb-6">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Trusted by forward-thinking businesses & technology partners</p>
          </div>
          <TrustedByMarquee />
        </section>
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
