"use client"; // Add this directive to mark the component as a Client Component

import React, { useState } from "react";
import DadoVisual from "./components/JogoDados";

const CompeticaoDados = () => {
  const [turno, setTurno] = useState(1);
  const [pontuacaoA, setPontuacaoA] = useState(0);
  const [pontuacaoB, setPontuacaoB] = useState(0);
  const [resultadoA, setResultadoA] = useState(1);
  const [resultadoB, setResultadoB] = useState(1);
  const [statusFinal, setStatusFinal] = useState("");

  const proximoTurno = () => {
    if (turno <= 5) {
      const novoValorA = Math.floor(Math.random() * 6) + 1;
      const novoValorB = Math.floor(Math.random() * 6) + 1;

      setResultadoA(novoValorA);
      setResultadoB(novoValorB);

      if (novoValorA > novoValorB) {
        setPontuacaoA(pontuacaoA + 1);
      } else if (novoValorB > novoValorA) {
        setPontuacaoB(pontuacaoB + 1);
      }

      setTurno(turno + 1);
    }

    if (turno === 5) {
      if (pontuacaoA > pontuacaoB) {
        setStatusFinal("Competidor A é o campeão!");
      } else if (pontuacaoB > pontuacaoA) {
        setStatusFinal("Competidor B é o campeão!");
      } else {
        setStatusFinal("Houve um empate técnico!");
      }
    }
  };

  const reiniciarCompeticao = () => {
    setTurno(1);
    setPontuacaoA(0);
    setPontuacaoB(0);
    setResultadoA(1);
    setResultadoB(1);
    setStatusFinal("");
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#e0f7fa",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#00796b", fontSize: "2.2rem", marginBottom: "20px" }}>Competição de Dados 🎲</h1>
      <h2 style={{ color: "#004d40", fontSize: "1.6rem", marginBottom: "20px" }}>Turno Atual: {turno <= 5 ? turno : "Fim da competição"}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginBottom: "30px" }}>
        <div
          style={{
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "200px",
          }}
        >
          <h3 style={{ color: "#00796b", fontWeight: "bold" }}>Competidor A</h3>
          <DadoVisual valor={resultadoA} />
          <p style={{ color: "#004d40", fontSize: "1.2rem", fontWeight: "bold" }}>Pontuação: {pontuacaoA}</p>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "200px",
          }}
        >
          <h3 style={{ color: "#d32f2f", fontWeight: "bold" }}>Competidor B</h3>
          <DadoVisual valor={resultadoB} />
          <p style={{ color: "#b71c1c", fontSize: "1.2rem", fontWeight: "bold" }}>Pontuação: {pontuacaoB}</p>
        </div>
      </div>

      {turno <= 5 ? (
        <button
          onClick={proximoTurno}
          style={{
            padding: "12px 24px",
            fontSize: "1rem",
            backgroundColor: "#00796b",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#004d40")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#00796b")}
        >
          Próximo Turno 🎲
        </button>
      ) : (
        <>
          <h2 style={{ color: "#004d40", fontSize: "1.8rem", marginTop: "20px" }}>{statusFinal}</h2>
          <button
            onClick={reiniciarCompeticao}
            style={{
              padding: "12px 24px",
              fontSize: "1rem",
              backgroundColor: "#ff5722",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e64a19")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff5722")}
          >
            Reiniciar Competição 🔄
          </button>
        </>
      )}
    </div>
  );
};

export default CompeticaoDados;