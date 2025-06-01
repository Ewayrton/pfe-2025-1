"use client"

import { motion } from "framer-motion"

export default function Sobre() {
  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "FastAPI", "REST APIs"],
    },
    {
      category: "Banco de Dados",
      items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma ORM"],
    },
    {
      category: "DevOps & Ferramentas",
      items: ["Git", "Docker", "AWS", "Vercel", "Linux", "VS Code"],
    },
    {
      category: "APIs Integradas",
      items: ["OpenWeather API", "Quotable API", "GitHub API", "REST APIs", "GraphQL"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-green-400">Sobre Mim</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Sou um desenvolvedor full stack apaixonado por tecnologia e inovação. Com experiência em desenvolvimento
              web moderno, sempre busco criar soluções eficientes e escaláveis.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Este portfólio foi desenvolvido utilizando as mais modernas tecnologias do mercado, demonstrando minhas
              habilidades técnicas e criatividade.
            </p>
          </div>
        </motion.div>

        <motion.div className="mb-16" variants={containerVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Tecnologias Utilizadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="card-dark p-6 card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-bold mb-4 text-green-400">{tech.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="card-dark p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Sobre Este Projeto</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">Características Técnicas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Desenvolvido com Next.js 14 e React</li>
                <li>• Estilização com Tailwind CSS</li>
                <li>• Design responsivo e moderno</li>
                <li>• Integração com APIs externas</li>
                <li>• Componentes reutilizáveis</li>
                <li>• Navegação fluida entre páginas</li>
                <li>• Animações com Framer Motion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">Funcionalidades</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Portfólio completo e interativo</li>
                <li>• Jogo da Senha implementado</li>
                <li>• Informações meteorológicas em tempo real</li>
                <li>• Citações inspiracionais diárias</li>
                <li>• Interface intuitiva e acessível</li>
                <li>• Otimizado para performance</li>
                <li>• Tema escuro moderno</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
