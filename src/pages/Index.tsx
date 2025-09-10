import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import DomainsSection from '@/components/DomainsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutSection />
        <DomainsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
