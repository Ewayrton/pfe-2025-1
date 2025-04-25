import Voltar from "@/components/Voltar";
import FormularioDolar from "./components/FormularioDolar";
import TaxaInfo from "./components/TaxaInfo";

export const metadata = {
  title: 'Conversor Dolar - Conversões Online',
  description: 'Conversores de medidas PFE 2025.1'
}

export default function ConversorDolar() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Conversor Dólar ↔ Real</h1>
      <FormularioDolar />
      <TaxaInfo />
      <Voltar />
    </div>
  )
}
