"use client"

import { Github, ExternalLink, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from 'react'

export default function Projetos() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const projects = [
    {
      title: "Meu Portfólio",
      description: "Meu portfólio pessoal desenvolvido com Next.js, mostrando meus projetos e habilidades.",
      image: "/img-projetos/portfolio.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Ewayrton/pfe-2025-1/tree/main/atv04-portfolio",
      demo: "https://portfolio-tan-omega-45.vercel.app/",
      date: "2024",
      category: "Frontend",
    },
    {
      title: "Dashboard",
      description: "Projeto final (DASHBOARD) da disciplina de Programação Web, demonstrando conceitos aprendidos.",
      image: "/img-projetos/projetoFinal.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Ewayrton/projetoFinal-programacaoWeb-2024.2/tree/main/DASHBOARD",
      demo: "https://projeto-final-programacao-web-2024-2-six.vercel.app/",
      date: "2024",
      category: "Frontend",
    },
    {
      title: "Jogo de Dados",
      description: "Projeto para resolução de atividade da disciplina de programação frontEnd.",
      image: "/img-projetos/jogoDeDados.png",
      technologies: ["Next.js", "React", "Node.js"],
      github: "https://github.com/Ewayrton/pfe-2025-1/tree/main/atv02-dados",
      demo: "https://dadosss-nine.vercel.app/",
      date: "2024",
      category: "Full Stack",
    },
    {
      title: "Sorteador",
      description: "Aplicação para sorteio de números ou nomes com configurações personalizáveis.",
      image: "/img-projetos/sorteador.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/deivysonjds/sorteador",
      demo: "https://sorteador-indol.vercel.app/index.html",
      date: "2023",
      category: "Frontend",
    },  
    {
      title: "Calculadora de Imposto",
      description: "Ferramenta para cálculo de impostos com diferentes parâmetros e alíquotas.",
      image: "/img-projetos/calculadoraIR.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Ewayrton/Programacao-Para-Web-2024.2/tree/main/atv-imposto-de-renda",
      demo: "https://calculadoraimposto2024.vercel.app/",
      date: "2024",
      category: "Frontend",
    },
    {
      title: "Conversores",
      description: "Aplicação web para conversão de unidades e moedas com interface intuitiva.",
      image: "/img-projetos/conversores.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Ewayrton/pfe-2025-1/tree/main/atv03-conversores",
      demo: "https://atv03-conversores.vercel.app/",
      date: "2023",
      category: "Frontend",
    },
  ]

  const categories = ["Todos", "Full Stack", "Frontend", "Backend", "Mobile"]

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
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
          <h1 className="text-4xl font-bold mb-8 text-green-400">Projetos Desenvolvidos</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Uma seleção dos meus principais projetos, demonstrando diferentes tecnologias e habilidades de desenvolvimento.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full border-2 ${
                  selectedCategory === category
                    ? "bg-green-500 text-black border-green-500"
                    : "border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          key={selectedCategory}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden card-hover"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = '/img-projetos/default.png'
                  e.target.alt = 'Imagem não disponível'
                }}
              />

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-green-300">{project.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="mr-1" size={14} />
                    {project.date}
                  </div>
                </div>

                <span className="inline-block bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {project.category}
                </span>

                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-green-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-1" size={16} />
                    Código
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-green-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1" size={16} />
                      Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-gray-400">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </motion.div>
        )}

        <motion.div
          className="bg-gray-900 p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Estatísticas dos Projetos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-400 mb-2">{projects.length}+</div>
              <div className="text-gray-300">Projetos Concluídos</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-400 mb-2">8+</div>
              <div className="text-gray-300">Tecnologias Dominadas</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Commits no GitHub</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-400 mb-2">2+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-green-400">Quer ver mais projetos?</h2>
          <p className="text-gray-400 mb-6">
            Confira meu GitHub para ver todos os projetos e contribuições open source.
          </p>
          <a
            href="https://github.com/Ewayrton"
            className="inline-flex items-center bg-gray-900 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors border border-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2" size={20} />
            Ver GitHub Completo
          </a>
        </motion.div>
      </div>
    </div>
  )
}