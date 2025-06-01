"use client"

import { Github, ExternalLink, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Projetos() {
  const projects = [
    {
      title: "E-commerce Completo",
      description:
        "Plataforma de e-commerce desenvolvida com Next.js, incluindo carrinho de compras, sistema de pagamento e painel administrativo.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/usuario/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      date: "2024",
      category: "Full Stack",
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados com gráficos dinâmicos e relatórios em tempo real.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Chart.js", "Express", "MongoDB"],
      github: "https://github.com/usuario/dashboard",
      demo: "https://dashboard-demo.vercel.app",
      date: "2024",
      category: "Frontend",
    },
    {
      title: "API REST Completa",
      description: "API robusta com autenticação JWT, documentação Swagger e testes automatizados.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
      github: "https://github.com/usuario/api-rest",
      demo: null,
      date: "2023",
      category: "Backend",
    },
    {
      title: "App Mobile React Native",
      description: "Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Expo", "Firebase", "AsyncStorage"],
      github: "https://github.com/usuario/mobile-app",
      demo: null,
      date: "2023",
      category: "Mobile",
    },
    {
      title: "Sistema de Blog",
      description: "CMS personalizado para blogs com editor rich text e sistema de comentários.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "TinyMCE"],
      github: "https://github.com/usuario/blog-cms",
      demo: "https://blog-demo.vercel.app",
      date: "2023",
      category: "Full Stack",
    },
    {
      title: "Jogo da Senha",
      description: "Implementação do clássico jogo Bulls and Cows com interface moderna e sistema de pontuação.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      github: "https://github.com/usuario/jogo-senha",
      demo: "/jogo",
      date: "2024",
      category: "Frontend",
    },
  ]

  const categories = ["Todos", "Full Stack", "Frontend", "Backend", "Mobile"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
                className="px-6 py-2 rounded-full border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg shadow-lg overflow-hidden card-hover"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

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
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gray-900 p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Estatísticas dos Projetos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300">Projetos Concluídos</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-400 mb-2">8+</div>
              <div className="text-gray-300">Tecnologias Dominadas</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
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
            href="https://github.com/usuario"
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
