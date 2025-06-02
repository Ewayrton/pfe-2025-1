"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperienciaProfissional() {
  const experiences = [
    {
      position: "Residente em Software (Banco de Dados)",
      company: "Ferreira Costa",
      period: "Jan 2025 - Jun 2025",
      location: "Recife, PE",
      type: "Residência Técnica",
      description:
        "Participação em programa de residência em software com foco em SQL e PL/SQL, colaborando na manutenção e otimização de bases de dados corporativas.",
      responsibilities: [
        "Criação e manutenção de procedimentos armazenados com PL/SQL",
        "Consultas e manipulação de dados em SQL",
        "Análise de desempenho e otimização de queries",
        "Colaboração com equipe de TI para integração de sistemas",
        "Documentação técnica de processos de banco de dados",
      ],
      technologies: ["SQL", "PL/SQL", "Oracle", "Git", "Linux"],
    },
    {
      position: "Recepcionista Hospitalar",
      company: "Hospital Memorial São José (Rede D'Or São Luiz)",
      period: "2019 - 2022",
      location: "Recife, PE",
      type: "CLT",
      description:
        "Atendimento ao público, organização de prontuários e suporte a processos administrativos em ambiente hospitalar de alta demanda.",
      responsibilities: [
        "Atendimento presencial e telefônico de pacientes",
        "Agendamento de exames e encaminhamentos",
        "Organização de documentos e registros",
        "Apoio à equipe de enfermagem e triagem",
        "Controle de fluxo de entrada e saída de visitantes",
      ],
      technologies: ["Sistema Interno Hospitalar", "Excel", "Comunicação", "Organização"],
    },
    {
      position: "Recepcionista",
      company: "SEOPE - Serviço de Olhos de Pernambuco",
      period: "2017 - 2019",
      location: "Recife, PE",
      type: "CLT",
      description:
        "Recepção de pacientes, atualização de fichas médicas e suporte administrativo em clínica oftalmológica.",
      responsibilities: [
        "Recepção e cadastro de pacientes",
        "Organização de fichas médicas",
        "Controle de agendas médicas",
        "Auxílio na triagem e atendimento humanizado",
        "Comunicação com convênios e operadoras de saúde",
      ],
      technologies: ["Sistemas Clínicos", "Comunicação", "Atendimento ao Cliente"],
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
            Um panorama da minha experiência profissional em tecnologia e atendimento, destacando competências técnicas e habilidades interpessoais desenvolvidas ao longo do tempo.
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
