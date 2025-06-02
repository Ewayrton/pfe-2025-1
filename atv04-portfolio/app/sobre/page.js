"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Database, Cloud } from "lucide-react"

export default function Sobre() {
  const technologies = [
  {
    category: "Frontend",
    icon: Code,
    items: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: Cpu,
    items: ["Node.js", "Express", "API REST"],
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["PostgreSQL"],
  },
  {
    category: "DevOps & Ferramentas",
    icon: Cloud,
    items: ["Git", "Vercel", "VS Code"],
  },
  {
    category: "APIs Integradas",
    icon: Cloud,
    items: ["Quotable API", "Argos Translate API (LibreTranslate)"],
  },
  {
    category: "Bibliotecas",
    icon: Code,
    items: ["Lucide React"],
  },
  ];

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
    <div className="min-h-screen py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-green-400">Sobre Mim</h1>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
            <p>
              Sou um desenvolvedor Full Stack Jr., atualmente cursando o 3º período de <strong className="text-green-400">Sistemas para Internet</strong> na <strong className="text-green-400">Universidade Católica de Pernambuco</strong>.
            </p>
            <p>
              Apaixonado por tecnologia e inovação, busco constantemente aprender novas ferramentas e criar soluções eficientes, escaláveis e bem projetadas, tanto no frontend quanto no backend.
            </p>
            <p>
              Este portfólio é uma demonstração prática do meu progresso e dedicação à carreira em desenvolvimento web.
            </p>
          </div>
        </motion.div>

        {/* Tecnologias */}
        <motion.div className="mb-24" variants={containerVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Tecnologias Utilizadas no Projeto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="card-dark p-6 card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center mb-4 gap-3">
                  <tech.icon className="text-green-400" size={24} />
                  <h3 className="text-xl font-bold text-green-400">{tech.category}</h3>
                </div>
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

        {/* Sobre o Projeto */}
        <motion.div
          className="card-dark p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10 text-green-400">Sobre Este Projeto</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">Características Técnicas</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Desenvolvido com Next.js 14 e React</li>
                <li>Estilização com Tailwind CSS</li>
                <li>Design responsivo e moderno</li>
                <li>Integração com APIs externas</li>
                <li>Componentes reutilizáveis</li>
                <li>Navegação fluida com rotas dinâmicas</li>
                <li>Animações com Framer Motion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-300">Funcionalidades</h3>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>Portfólio completo e interativo</li>
                <li>Jogo da Senha com lógica de validação</li>
                <li>Citações inspiracionais diárias</li>
                <li>Modal de contato com integração ao WhatsApp</li>
                <li>Interface intuitiva e acessível</li>
                <li>Otimizado para performance e responsividade</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
