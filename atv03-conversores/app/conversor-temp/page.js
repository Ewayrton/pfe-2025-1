import Voltar from "@/components/Voltar";
import FormularioTemp from "./components/FormularioTemp";

export const metadata = {
  title: 'Conversor Temp - Conversões Online',
  description: 'Conversores de medidas PFE 2025.1'
}

export default function ConversorTemp() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Conversor de Temperatura</h1>
      <FormularioTemp />
      <Voltar />
    </div>
  )
}
