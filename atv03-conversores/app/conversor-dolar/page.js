// app/conversor-dolar/page.js

'use client'

import { useState } from 'react'
import Voltar from "@/components/Voltar";

export default function ConversorDolar() {
  // Taxa fixa de 14/04/2025
  const TAXA_CAMBIO = 6.10

  const [usd, setUsd] = useState('')
  const [brl, setBrl] = useState('')

  function alterarUsd(e) {
    const valor = e.target.value
    setUsd(valor)
    if (!isNaN(parseFloat(valor))) {
      setBrl((parseFloat(valor) * TAXA_CAMBIO).toFixed(2))
    } else {
      setBrl('')
    }
  }

  function alterarBrl(e) {
    const valor = e.target.value
    setBrl(valor)
    if (!isNaN(parseFloat(valor))) {
      setUsd((parseFloat(valor) / TAXA_CAMBIO).toFixed(2))
    } else {
      setUsd('')
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Conversor Dólar ↔ Real</h1>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Dólar (USD):</label>
        <input
          type="number"
          step="any"
          className="w-full border rounded px-3 py-2"
          value={usd}
          onChange={alterarUsd}
          placeholder="Digite em USD"
        />
      </div>

      <div className="mb-2">
        <label className="block mb-1 font-medium">Real (BRL):</label>
        <input
          type="number"
          step="any"
          className="w-full border rounded px-3 py-2"
          value={brl}
          onChange={alterarBrl}
          placeholder="Digite em BRL"
        />
      </div>

      <p className="text-sm text-gray-500 mt-4">
        Taxa fixa em 14/04/2025: <strong>1 USD = {TAXA_CAMBIO} BRL</strong>
      </p>
      <Voltar />
    </div>
  )
}