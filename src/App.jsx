import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';
import ParallaxShowcase from './components/ParallaxShowcase';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedEvents />
        <ParallaxShowcase />
        <footer className="py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/60">
            © {new Date().getFullYear()} eventeye — Made for campus communities.
          </div>
        </footer>
      </main>
    </div>
  );
}
