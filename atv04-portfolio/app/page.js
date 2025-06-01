"use client"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [weather, setWeather] = useState(null)
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    // Integração com API de clima
    fetch("https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=demo&units=metric")
      .then((res) => res.json())
      .then((data) => {
        if (data.main) {
          setWeather(data)
        }
      })
      .catch(() => {
        setWeather({
          main: { temp: 25 },
          weather: [{ description: "ensolarado" }],
          name: "São Paulo",
        })
      })

    // Integração com API de citações
    fetch("https://api.quotable.io/random?tags=technology")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch(() => {
        setQuote({
          content: "A tecnologia é melhor quando aproxima as pessoas.",
          author: "Matt Mullenweg",
        })
      })
  }, [])

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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Foto de perfil"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-green-400 shadow-2xl shadow-green-500/25"
            />
          </motion.div>

          <motion.h1 className="text-5xl font-bold mb-4" variants={itemVariants}>
            Olá, eu sou <span className="text-green-400">Seu Nome</span>
          </motion.h1>
          <motion.p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300" variants={itemVariants}>
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras com React, Next.js e tecnologias modernas.
          </motion.p>

          <motion.div className="flex justify-center space-x-4 mb-8" variants={itemVariants}>
            <motion.a
              href="#"
              className="bg-gray-900 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center border border-gray-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="mr-2" size={20} />
              GitHub
            </motion.a>
            <motion.a
              href="#"
              className="bg-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center hover:shadow-lg hover:shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              className="bg-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center border border-gray-600 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="mr-2" size={20} />
              Contato
            </motion.a>
          </motion.div>

          <motion.button
            className="btn-primary animate-pulse-green"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2" size={20} />
            Download CV
          </motion.button>
        </motion.div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-gray-900">
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Weather Card */}
            {weather && (
              <motion.div className="card-dark p-6 card-hover" whileHover={{ scale: 1.02 }}>
                <h3 className="text-xl font-bold mb-4 flex items-center text-green-400">
                  <MapPin className="mr-2" />
                  Clima Atual
                </h3>
                <p className="text-gray-300">
                  {weather.name}: {Math.round(weather.main.temp)}°C, {weather.weather[0].description}
                </p>
              </motion.div>
            )}

            {/* Quote Card */}
            {quote && (
              <motion.div className="card-dark p-6 card-hover" whileHover={{ scale: 1.02 }}>
                <h3 className="text-xl font-bold mb-4 text-green-400">Citação do Dia</h3>
                <blockquote className="text-gray-300 italic">"{quote.content}"</blockquote>
                <p className="text-right mt-2 text-green-400 font-semibold">- {quote.author}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 bg-black">
        <motion.div
          className="max-w-7xl mx-auto px-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-green-400">Principais Tecnologias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["React", "Next.js", "JavaScript", "Node.js", "Python", "PostgreSQL", "Git", "AWS"].map((tech, index) => (
              <motion.div
                key={tech}
                className="card-dark p-6 card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-700">
                  <span className="text-green-400 font-bold text-lg">{tech[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-300">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
