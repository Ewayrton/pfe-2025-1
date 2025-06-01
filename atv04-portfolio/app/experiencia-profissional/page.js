"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperienciaProfissional() {
  const experiences = [
    {
      position: "Desenvolvedor Full Stack Jr.",
      company: "TechSolutions Ltda",
      period: "Jan 2024 - Presente",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      description:
        "Desenvolvimento de aplicações web utilizando React, Next.js e Node.js. Responsável pela criação de interfaces modernas e APIs robustas.",
      responsibilities: [
        "Desenvolvimento de componentes React reutilizáveis",
        "Criação de APIs REST com Node.js e Express",
        "Integração com bancos de dados PostgreSQL",
        "Implementação de testes unitários e de integração",
        "Colaboração em equipe usando metodologias ágeis",
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Git", "AWS"],
    },
    {
      position: "Estagiário em Desenvolvimento Web",
      company: "StartupTech",
      period: "Jun 2023 - Dez 2023",
      location: "São Paulo, SP",
      type: "Estágio",
      description:
        "Primeiro contato profissional com desenvolvimento web, focando em frontend com React e aprendendo boas práticas de desenvolvimento.",
      responsibilities: [
        "Desenvolvimento de interfaces com React",
        "Manutenção e correção de bugs",
        "Participação em code reviews",
        "Documentação de código e processos",
        "Suporte técnico para usuários internos",
      ],
      technologies: ["React", "JavaScript", "CSS3", "Git", "Figma"],
    },
    {
      position: "Freelancer - Desenvolvedor Web",
      company: "Autônomo",
      period: "Mar 2023 - Mai 2023",
      location: "Remoto",
      type: "Freelance",
      description: "Desenvolvimento de sites institucionais e landing pages para pequenas empresas locais.",
      responsibilities: [
        "Criação de sites responsivos",
        "Otimização para SEO",
        "Integração com formulários de contato",
        "Hospedagem e manutenção de sites",
        "Atendimento direto ao cliente",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
    },
  ]

  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Git", level: 85 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "Python", level: 70 },
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
    <div className="min-h-screen py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-green-400">Experiência Profissional</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Minha trajetória profissional no desenvolvimento de software, desde os primeiros passos até as experiências mais recentes.
          </p>
        </motion.div>

        <motion.div className="mb-16" variants={containerVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Trajetória Profissional</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card-dark p-8 card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="ml-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-green-300 mb-2">{exp.position}</h3>
                      <h4 className="text-xl font-semibold text-gray-300 mb-2">{exp.company}</h4>
                      <span className="inline-block bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="mr-2" size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="mr-2" size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-green-300">Principais Responsabilidades:</h5>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <Briefcase className="mr-2 mt-1 text-green-500 flex-shrink-0" size={16} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-green-300">Tecnologias Utilizadas:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gray-900 p-8 rounded-lg mb-16" variants={containerVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-2 text-gray-300">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-green-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center bg-green-900 text-white p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Interessado em trabalhar comigo?</h2>
          <p className="mb-6">Estou sempre aberto a novas oportunidades e desafios interessantes.</p>
          <div className="flex justify-center space-x-4">
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Projetos
            </motion.button>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Entrar em Contato
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
