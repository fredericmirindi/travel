import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-4">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
