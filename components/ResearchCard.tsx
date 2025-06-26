type ResearchCardProps = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link?: string;
};

export default function ResearchCard({ title, authors, journal, year, link }: ResearchCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow mb-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{authors}</p>
      <p className="text-gray-500">{journal} &middot; {year}</p>
      {link && (
        <a href={link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          Read Paper
        </a>
      )}
    </div>
  );
}
