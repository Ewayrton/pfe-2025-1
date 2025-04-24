"use client";

import { useState } from "react";
import Dado from "../components/dado";

export default function Home() {
  const [valor, setValor] = useState(1);

  const jogarDado = () => {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    setValor(numeroAleatorio);
  };

  return (
    <div className="container">
      <h1 className="titulo">Jogo de Dados 🎲</h1>
      <Dado valor={valor} />
      <button onClick={jogarDado} className="botao-jogar">
        Jogar Dado
      </button>
    </div>
  );

}