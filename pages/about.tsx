import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto my-12 p-4">
        <h1 className="text-3xl font-bold mb-6">Curriculum Vitae</h1>
        <p className="mb-4">
          Download my full CV <a href="/cv.pdf" className="text-blue-700 underline" download>here</a>.
        </p>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="list-disc ml-8 mb-4">
            <li>Ph.D. in Economics, University Name, 2022–Present</li>
            <li>M.A. in Economics, University Name, 2020–2022</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Research Interests</h2>
          <ul className="list-disc ml-8 mb-4">
            <li>Development Economics</li>
            <li>Econometrics</li>
            <li>Policy Evaluation</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <ul className="list-disc ml-8 mb-4">
            <li>Teaching Assistant, University, 2022–2025</li>
            <li>Research Assistant, Project XYZ, 2021–2022</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
