import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <PortfolioSection />
      <TestimonialSection />
      <CTASection />
      {/* Optionally keep Services, Features, Process if needed */}
      {/* <Services />
      <Features />
      <Process /> */}
      <Footer />
      </main>
  );
}
