import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SectorsSection from '@/components/SectorsSection';
import CareersSection from '@/components/CareersSection';
import ContactSection from '@/components/ContactSection';
import SmallCTASection from '@/components/SmallCTASection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SectorsSection />
      <CareersSection />
      <ContactSection />
      <SmallCTASection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;