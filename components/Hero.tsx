export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 mt-8">
      <img
        src="/profile.jpg"
        alt="Frederic Mirindi"
        className="w-40 h-40 rounded-full shadow-lg"
      />
      <div>
        <h1 className="text-4xl font-bold mb-2">Frederic Mirindi</h1>
        <h2 className="text-xl text-blue-700 mb-4">Ph.D. Student in Economics</h2>
        <p className="mb-4">
          Welcome to my academic website. I am a Ph.D. student in Economics with research interests in development economics, econometrics, and policy evaluation.
        </p>
        <div className="flex gap-4">
          <a href="/cv.pdf" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700" download>
            Download CV
          </a>
          <a href="/research" className="bg-gray-200 text-blue-700 px-4 py-2 rounded shadow hover:bg-blue-100">
            See My Research
          </a>
        </div>
      </div>
    </section>
  );
}
