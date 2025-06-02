"use client"

import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ExperienciaAcademica() {
  const education = [
    {
      degree: "Curso Superior de Tecnologia em Sistemas para Internet",
      institution: "Universidade Católica de Pernambuco (UNICAP)",
      period: "2024 - Atual",
      location: "Recife, PE",
      description:
        "Curso focado em desenvolvimento web full stack, com ênfase em tecnologias modernas, banco de dados, segurança e práticas de desenvolvimento ágil.",
      highlights: [
        "Projetos acadêmicos utilizando React, Next.js e Java com Springboot",
        "Desenvolvimento de APIs REST com Spring Boot",
        "Práticas de versionamento com Git e GitHub",
        "Metodologias ágeis e boas práticas de codificação",
      ],
    },
    {
      degree: "Curso Backend Java com Spring Boot",
      institution: "Curso Livre - Plataforma online",
      period: "2025",
      location: "Remoto",
      description: "Formação prática no desenvolvimento de APIs RESTful com Java e Spring Boot.",
      highlights: [
        "Criação de APIs seguras com autenticação JWT",
        "Integração com banco de dados PostgreSQL",
        "Deploy de aplicações Java com Docker",
        "Uso de Spring Data e Spring Security",
      ],
    },
    {
      degree: "Curso de Frontend com React, Next.js e JavaScript",
      institution: "Softex Recife",
      period: "2025 - Atual",
      location: "Recife, PE",
      description: "Capacitação em desenvolvimento frontend moderno, com foco em componentização, rotas dinâmicas e consumo de APIs.",
      highlights: [
        "Criação de interfaces com React e Tailwind CSS",
        "Navegação com Next.js e SSR",
        "Consumo de APIs REST",
        "Boas práticas em JavaScript moderno",
      ],
    },
    {
      degree: "Curso de Digitação",
      institution: "Curso Livre",
      period: "Concluído",
      location: "Recife, PE",
      description: "Curso de aperfeiçoamento em velocidade e precisão de digitação.",
      highlights: [
        "Melhoria de produtividade com teclado",
        "Prática de ergonomia digital",
        "Treinamentos com foco em fluidez",
        "Exercícios diários de agilidade",
      ],
    },
  ]

  const courses = [
    "React e NextJs: The Complete Guide - Softex",
    "Node.js: The Complete Guide - RocketSeat",
    "Git e GitHub - Curso em Vídeo",
    "Java e Springboot - Alura",
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
          <h1 className="text-4xl font-bold mb-8 text-green-400">Formação Acadêmica</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Uma visão geral da minha jornada educacional, destacando as formações técnicas e superiores que moldaram meu conhecimento em desenvolvimento de software.
          </p>
        </motion.div>

        <motion.div className="mb-16" variants={containerVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-green-400">Instituições & Certificações</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="card-dark p-8 card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-300 mb-2">{edu.degree}</h3>
                    <h4 className="text-xl font-semibold text-gray-300 mb-2">{edu.institution}</h4>
                  </div>
                  <div className="flex flex-col md:items-end space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="mr-2" size={16} />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="mr-2" size={16} />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">{edu.description}</p>

                <div>
                  <h5 className="font-semibold mb-2 text-green-300">Principais Atividades:</h5>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <GraduationCap className="mr-2 mt-1 text-green-500 flex-shrink-0" size={16} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bg-gray-900 p-8 rounded-lg mb-16" variants={containerVariants} initial="hidden" animate="visible">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Cursos e Certificações Adicionais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow card-hover"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center text-gray-300">
                  <GraduationCap className="mr-3 text-green-400" size={20} />
                  <span className="font-medium">{course}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center" variants={containerVariants} initial="hidden" animate="visible">
          {[
            { label: "Anos de Estudo", value: "2+" },
            { label: "Projetos Acadêmicos", value: "10+" },
            { label: "Certificações", value: "2+" },
            { label: "CRA Atual", value: "8.8" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
