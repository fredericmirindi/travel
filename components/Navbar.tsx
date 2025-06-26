import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-xl font-bold text-blue-800">Frederic Mirindi</Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-blue-500">CV</Link>
          <Link href="/research" className="hover:text-blue-500">Research</Link>
          <Link href="/blog" className="hover:text-blue-500">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
