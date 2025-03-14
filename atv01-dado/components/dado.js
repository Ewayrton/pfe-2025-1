"use client";

export default function Dado({ valor }) {
  return (
    <div>
      <img 
        src={`/dado${valor}.png`} 
        alt={`Dado com valor ${valor}`} 
        width={100} 
        height={100} 
      />
    </div>
  );
}