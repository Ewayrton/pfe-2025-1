'use client'

import { useState } from 'react'

export default function FormularioMetros() {
  const [metros, setMetros] = useState('')
  const [pes, setPes] = useState('')
  const [polegadas, setPolegadas] = useState('')

  const FATOR_PES = 3.28084
  const FATOR_POLEGADAS = 39.3701

  function alterarMetros(e) {
    const v = e.target.value
    setMetros(v)
    const m = parseFloat(v)
    if (!isNaN(m)) {
      setPes((m * FATOR_PES).toFixed(4))
      setPolegadas((m * FATOR_POLEGADAS).toFixed(3))
    } else {
      setPes('')
      setPolegadas('')
    }
  }

  function alterarPes(e) {
    const v = e.target.value
    setPes(v)
    const p = parseFloat(v)
    if (!isNaN(p)) {
      const m = p / FATOR_PES
      setMetros(m.toFixed(4))
      setPolegadas((m * FATOR_POLEGADAS).toFixed(3))
    } else {
      setMetros('')
      setPolegadas('')
    }
  }

  function alterarPolegadas(e) {
    const v = e.target.value
    setPolegadas(v)
    const i = parseFloat(v)
    if (!isNaN(i)) {
      const m = i / FATOR_POLEGADAS
      setMetros(m.toFixed(4))
      setPes((m * FATOR_PES).toFixed(4))
    } else {
      setMetros('')
      setPes('')
    }
  }

  return (
    <>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Metros (m):</label>
        <input
          type="number"
          step="any"
          className="w-full border rounded px-3 py-2"
          value={metros}
          onChange={alterarMetros}
          placeholder="Digite em metros"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Pés (ft):</label>
        <input
          type="number"
          step="any"
          className="w-full border rounded px-3 py-2"
          value={pes}
          onChange={alterarPes}
          placeholder="Digite em pés"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Polegadas (in):</label>
        <input
          type="number"
          step="any"
          className="w-full border rounded px-3 py-2"
          value={polegadas}
          onChange={alterarPolegadas}
          placeholder="Digite em polegadas"
        />
      </div>
    </>
  )
}
