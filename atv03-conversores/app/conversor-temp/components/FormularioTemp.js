'use client'

import { useState } from 'react'

export default function FormularioTemp() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')

  function alterarCelsius(e) {
    const valor = e.target.value
    setCelsius(valor)
    const num = parseFloat(valor)
    if (!isNaN(num)) {
      // F = C * 9/5 + 32
      setFahrenheit((num * 9 / 5 + 32).toFixed(2))
    } else {
      setFahrenheit('')
    }
  }

  function alterarFahrenheit(e) {
    const valor = e.target.value
    setFahrenheit(valor)
    const num = parseFloat(valor)
    if (!isNaN(num)) {
      // C = (F - 32) * 5/9
      setCelsius(((num - 32) * 5 / 9).toFixed(2))
    } else {
      setCelsius('')
    }
  }

  return (
    <>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Celsius (ºC):</label>
        <input
          type="number"
          step="any"
          className="w-full border rounded px-3 py-2"
          value={celsius}
          onChange={alterarCelsius}
          placeholder="Digite em ºC"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Fahrenheit (ºF):</label>
        <input
          type="number"
          step="any"
          className="w-full border rounded px-3 py-2"
          value={fahrenheit}
          onChange={alterarFahrenheit}
          placeholder="Digite em ºF"
        />
      </div>
    </>
  )
}
