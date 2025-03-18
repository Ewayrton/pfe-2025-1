import React from "react";

const DadoVisual = ({ valor }) => {
  // Mapeando os valores para as imagens corretas na pasta public
  const facesDado = {
    1: "/dado1.png",
    2: "/dado2.png",
    3: "/dado3.png",
    4: "/dado4.png",
    5: "/dado5.png",
    6: "/dado6.png",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px 0" }}>
      <img
        src={facesDado[valor]}
        alt={`Face ${valor}`}
        style={{
          width: "90px",
          height: "90px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "12px",
          border: "2px solid #f0f0f0",
        }}
      />
    </div>
  );
};

export default DadoVisual;
