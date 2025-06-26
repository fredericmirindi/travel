export default function Footer() {
  return (
    <footer className="mt-20 py-8 bg-gray-50 border-t text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Frederic Mirindi. Built with Next.js & TailwindCSS.
    </footer>
  );
}
