import Voltar from "@/components/Voltar";
import Image from "next/image";

export const metadata = {
  title: 'Sobre - Conversões Online',
  description: 'Conversores de medidas PFE 2025.1'
}

export default function Sobre() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Sobre</h2>
      <div className="mb-4">
        <Image
          src="/foto_perfil.jpg" 
          alt="Foto de Ewayrton Oliveira" 
          width={128}  
          height={128} 
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
      </div>
        <p className="mb-4">
             Olá! Meu nome é <strong>Ewayrton Oliveira</strong> e sou estudante de <strong>Sistemas para Internet</strong> na <strong>UNICAP</strong>.
        </p>
        <p className="mb-4">
             Este aplicativo foi desenvolvido como parte da disciplina de <strong>Programação Front-End</strong>, com o objetivo de aplicar na prática os conceitos aprendidos em aula. Utilizei <strong>Next.js</strong> e <strong>Tailwind CSS</strong>, duas tecnologias modernas que tornam o desenvolvimento web mais eficiente, organizado e responsivo.
        </p>
        <p>
            Acredito que aprender colocando a mão no código é essencial, e este projeto reflete minha dedicação em evoluir como desenvolvedor e buscar soluções criativas e funcionais.
        </p>

      {/* ... resto do seu código ... */}
      <Voltar />
    </div>
  );
}