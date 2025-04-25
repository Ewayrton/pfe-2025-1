import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold">Bem-vindo ao App de Conversões!</h1>
        <p>
          Este aplicativo permite converter valores entre diferentes unidades.
        </p>
        <ul className="space-y-2">
          <li>
            <Link className="text-blue-500 underline" href="/sobre">
              Sobre
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" href="/conversor-dolar">
              Conversor Dólar/Real
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" href="/conversor-temp">
              Conversor Temperatura
            </Link>
          </li>
          <li>
            <Link className="text-blue-500 underline" href="/conversor-metros">
              Conversor Metros
            </Link>
          </li>
        </ul>
      </main>
  );
}
