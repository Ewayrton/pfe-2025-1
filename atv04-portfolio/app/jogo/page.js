"use client"
import { useState, useEffect } from "react"
import { RefreshCw, Eye, Trophy, Target } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function JogoDaSenha() {
  const [secretCode, setSecretCode] = useState("")
  const [guess, setGuess] = useState("")
  const [attempts, setAttempts] = useState([])
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [showSecret, setShowSecret] = useState(false)

  const generateSecretCode = () => {
    const digits = []
    while (digits.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString()
      if (!digits.includes(digit)) {
        digits.push(digit)
      }
    }
    return digits.join("")
  }

  const initGame = () => {
    setSecretCode(generateSecretCode())
    setGuess("")
    setAttempts([])
    setGameOver(false)
    setWon(false)
    setShowSecret(false)
  }

  const calculateBullsAndCows = (secret, guess) => {
    let bulls = 0
    let cows = 0
    const secretArray = secret.split("")
    const guessArray = guess.split("")
    const usedSecret = new Array(4).fill(false)
    const usedGuess = new Array(4).fill(false)

    for (let i = 0; i < 4; i++) {
      if (secretArray[i] === guessArray[i]) {
        bulls++
        usedSecret[i] = true
        usedGuess[i] = true
      }
    }

    for (let i = 0; i < 4; i++) {
      if (!usedGuess[i]) {
        for (let j = 0; j < 4; j++) {
          if (!usedSecret[j] && secretArray[j] === guessArray[i]) {
            cows++
            usedSecret[j] = true
            break
          }
        }
      }
    }

    return { bulls, cows }
  }

  const isValidGuess = (input) => {
    if (input.length !== 4) return false
    if (!/^\d+$/.test(input)) return false
    const digits = input.split("")
    return new Set(digits).size === 4
  }

  const makeGuess = () => {
    if (!isValidGuess(guess)) {
      alert("Digite 4 dígitos únicos (0-9)")
      return
    }

    const result = calculateBullsAndCows(secretCode, guess)
    const newAttempt = {
      guess,
      bulls: result.bulls,
      cows: result.cows,
      attemptNumber: attempts.length + 1,
    }

    const newAttempts = [newAttempt, ...attempts]
    setAttempts(newAttempts)

    if (result.bulls === 4) {
      setWon(true)
      setGameOver(true)
    } else if (newAttempts.length >= 10) {
      setGameOver(true)
    }

    setGuess("")
  }

  const revealSecret = () => {
    setShowSecret(true)
    alert(`Código secreto: ${secretCode}`)
  }

  useEffect(() => {
    initGame()
  }, [])

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
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-green-400">🎯 Jogo da Senha</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Descubra o código secreto de 4 dígitos únicos! Acertos = dígito correto na posição correta. Semi-acertos = dígito
            correto na posição errada.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="card-dark p-8" variants={itemVariants}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-400">Sua Tentativa</h2>
              <div className="flex space-x-2">
                <motion.button
                  onClick={revealSecret}
                  className="btn-secondary text-sm py-2 px-4"
                  disabled={gameOver}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="mr-2" size={16} />
                  Ver Código
                </motion.button>
                <motion.button
                  onClick={initGame}
                  className="btn-primary text-sm py-2 px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RefreshCw className="mr-2" size={16} />
                  Novo Jogo
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {["Tentativas", "Restantes", "Dígitos"].map((label, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-800 p-4 rounded-lg text-center border border-gray-700"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl font-bold text-green-400">
                    {label === "Tentativas" && attempts.length}
                    {label === "Restantes" && 10 - attempts.length}
                    {label === "Dígitos" && 4}
                  </div>
                  <div className="text-sm text-gray-400">{label}</div>
                </motion.div>
              ))}
            </div>

            {!gameOver && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Digite 4 dígitos únicos:</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value.slice(0, 4))}
                    onKeyPress={(e) => e.key === "Enter" && makeGuess()}
                    className="flex-1 px-4 py-3 input-dark rounded-lg text-center text-2xl font-mono"
                    placeholder="0123"
                    maxLength={4}
                  />
                  <motion.button
                    onClick={makeGuess}
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Tentar
                  </motion.button>
                </div>
                <p className="text-sm text-gray-500 mt-2">Exemplo: 1234 (todos os dígitos devem ser diferentes)</p>
              </div>
            )}

            <AnimatePresence>
              {gameOver && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`p-6 rounded-lg text-center border-2 ${
                    won ? "bg-green-900/50 border-green-500" : "bg-red-900/50 border-red-500"
                  }`}
                >
                  <div className="text-4xl mb-4">{won ? "🎉" : "😞"}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${won ? "text-green-400" : "text-red-400"}`}>
                    {won ? "Parabéns! Você venceu!" : "Fim de Jogo!"}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {won
                      ? `Você descobriu o código em ${attempts.length} tentativa${attempts.length > 1 ? "s" : ""}!`
                      : `O código secreto era: ${secretCode}`}
                  </p>
                  <motion.button
                    onClick={initGame}
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Jogar Novamente
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div className="card-dark p-8" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6 flex items-center text-green-400">
              <Target className="mr-2" />
              Histórico de Tentativas
            </h2>

            {attempts.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <Trophy className="mx-auto mb-4 text-gray-600" size={48} />
                <p className="text-gray-400">Nenhuma tentativa ainda.</p>
                <p className="text-sm text-gray-500">Faça sua primeira tentativa!</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                <AnimatePresence>
                  {attempts.map((attempt, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-4 rounded-lg border-2 ${
                        attempt.bulls === 4 ? "bg-green-900/50 border-green-500" : "bg-gray-800 border-gray-700"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                            {attempt.attemptNumber}
                          </span>
                          <span className="text-2xl font-mono font-bold text-gray-200">{attempt.guess}</span>
                        </div>
                        <div className="flex space-x-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-400">{attempt.bulls}</div>
                            <div className="text-xs text-gray-500">Acertos</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-orange-400">{attempt.cows}</div>
                            <div className="text-xs text-gray-500">Semi-acertos</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 card-dark p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-green-400">📋 Como Jogar</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-300">Objetivo:</h3>
              <p className="text-gray-300 mb-4">Descobrir o código secreto de 4 dígitos únicos em até 10 tentativas.</p>
              <h3 className="text-lg font-semibold mb-3 text-green-300">Regras:</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• O código tem 4 dígitos diferentes (0-9)</li>
                <li>• Você tem 10 tentativas para acertar</li>
                <li>• Cada tentativa deve ter 4 dígitos únicos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-300">Feedback:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="bg-green-900 text-green-300 px-4 py-1 rounded font-semibold border border-green-700">
                    Acertos
                  </span>
                  <span className="text-gray-300">Dígito correto na posição correta</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-orange-900 text-orange-300 px-4 py-1 rounded font-semibold border border-orange-700 whitespace-nowrap">
                    Semi-Acertos
                  </span>

                  <span className="text-gray-300">Dígito correto na posição errada</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-green-900/30 rounded border border-green-700">
                <p className="text-sm text-green-300">
                  <strong>Exemplo:</strong> Se o código é 1234 e você chuta 1324, você terá 2 Acertos (1 e 4) e 2 Semi-acertos (3 e 2).
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}