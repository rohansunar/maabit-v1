import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Process from './components/Process';

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Process />
      </main>
  );
}
