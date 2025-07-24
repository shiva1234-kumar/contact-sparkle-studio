import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <section id="contact-form" className="py-16 bg-gradient-secondary">
        <ContactForm />
      </section>
    </div>
  );
};

export default Index;
