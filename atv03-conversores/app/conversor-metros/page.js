import Voltar from "@/components/Voltar";
import FormularioMetros from "./components/FormularioMetros";

export const metadata = {
  title: 'Conversor Metros - Conversões Online',
  description: 'Conversores de medidas PFE 2025.1'
}

export default function ConversorMetros() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Conversor de Metros ↔ Pés e Polegadas</h1>
      <FormularioMetros />
      <Voltar />
    </div>
  )
}
