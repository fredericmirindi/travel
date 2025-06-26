import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResearchCard from '../components/ResearchCard';
import publications from '../data/publications.json';

export default function Research() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold mb-6">Research & Publications</h1>
        {publications.map((pub, idx) => (
          <ResearchCard key={idx} {...pub} />
        ))}
      </main>
      <Footer />
    </>
  );
}
