"use client"; // Adicione esta diretiva para marcar o componente como um Componente do Cliente

import React, { useState } from "react";
import DadoVisual from "./components/JogoDados";

const CompeticaoDados = () => {
  const [rodada, setRodada] = useState(1);
  const [pontuacaoA, setPontuacaoA] = useState(0);
  const [pontuacaoB, setPontuacaoB] = useState(0);
  const [resultadoA, setResultadoA] = useState(1);
  const [resultadoB, setResultadoB] = useState(1);
  const [statusFinal, setStatusFinal] = useState("");
  const [botaoTexto, setBotaoTexto] = useState("Jogar Dados"); // Estado para controlar o texto do botão

  const jogarDados = () => {
    if (rodada <= 5) {
      const novoValorA = Math.floor(Math.random() * 6) + 1;
      const novoValorB = Math.floor(Math.random() * 6) + 1;

      setResultadoA(novoValorA);
      setResultadoB(novoValorB);

      if (novoValorA > novoValorB) {
        setPontuacaoA(pontuacaoA + 1);
      } else if (novoValorB > novoValorA) {
        setPontuacaoB(pontuacaoB + 1);
      }

      setRodada(rodada + 1);

      // Muda o texto do botão para "Jogar Novamente" após o primeiro clique
      if (rodada === 1) {
        setBotaoTexto("Jogar Novamente");
      }
    }

    if (rodada === 5) {
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
    setRodada(1);
    setPontuacaoA(0);
    setPontuacaoB(0);
    setResultadoA(1);
    setResultadoB(1);
    setStatusFinal("");
    setBotaoTexto("Jogar Dados"); // Reseta o texto do botão para "Jogar Dados"
  };

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "2.5rem", marginBottom: "30px", fontWeight: "600" }}>Competição de Dados 🎲</h1>
      <h2 style={{ color: "#555", fontSize: "1.8rem", marginBottom: "40px", fontWeight: "500" }}>Rodada Atual: {rodada <= 5 ? rodada : "Fim da competição"}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "60px", marginBottom: "40px" }}>
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            width: "220px",
          }}
        >
          <h3 style={{ color: "#00796b", fontWeight: "600", marginBottom: "15px" }}>Competidor A</h3>
          <DadoVisual valor={resultadoA} />
          <p style={{ color: "#00796b", fontSize: "1.3rem", fontWeight: "500", marginTop: "15px" }}>Pontuação: {pontuacaoA}</p>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            width: "220px",
          }}
        >
          <h3 style={{ color: "#d32f2f", fontWeight: "600", marginBottom: "15px" }}>Competidor B</h3>
          <DadoVisual valor={resultadoB} />
          <p style={{ color: "#d32f2f", fontSize: "1.3rem", fontWeight: "500", marginTop: "15px" }}>Pontuação: {pontuacaoB}</p>
        </div>
      </div>

      {rodada <= 5 ? (
        <button
          onClick={jogarDados}
          style={{
            padding: "15px 30px",
            fontSize: "1.1rem",
            backgroundColor: "#00796b",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
            fontWeight: "500",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#004d40";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#00796b";
            e.target.style.transform = "scale(1)";
          }}
        >
          {botaoTexto} 🎲
        </button>
      ) : (
        <>
          <h2 style={{ color: "#333", fontSize: "2rem", marginTop: "30px", fontWeight: "600" }}>{statusFinal}</h2>
          <button
            onClick={reiniciarCompeticao}
            style={{
              padding: "15px 30px",
              fontSize: "1.1rem",
              backgroundColor: "#ff5722",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.2s",
              fontWeight: "500",
              marginTop: "20px",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#e64a19";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#ff5722";
              e.target.style.transform = "scale(1)";
            }}
          >
            Reiniciar Competição 🔄
          </button>
        </>
      )}
    </div>
  );
};

export default CompeticaoDados;