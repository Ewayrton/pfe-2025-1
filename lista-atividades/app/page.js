export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Atividades Programação Front-end</h1>
      <ul className="list-disc">
        <li>
          <a href="https://pfe-2025-1-345y.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            Atividade 1: Componente Dado
          </a>
        </li>
        <li>
        <a href="https://dadosss-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            Atividade 2: Jogo de dados
          </a>
        </li>
        <li>
          <a href="https://atv03-conversores-git-main-ewayrtons-projects.vercel.app/"  target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline">
            Atividade 3: Conversores
          </a>
        </li>
      </ul>
    </div>
  );
}