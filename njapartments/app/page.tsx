import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Announcements from '@/components/sections/Announcements';
import Events from '@/components/sections/Events';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Announcements />
        <Events />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
