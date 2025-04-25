import Link from 'next/link';

export default function Voltar() {
  return (
    <div className="w-full flex justify-center my-8">
      <Link href="/">
        <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
          Voltar
        </span>
      </Link>
    </div>
  );
}
