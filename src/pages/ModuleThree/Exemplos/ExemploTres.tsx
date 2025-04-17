import { useState } from "react";
import { Input } from "@/components/ui/input.tsx";

function ExemploTres() {
  const [busca, setBusca] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-5 p-4 border border-gray-500 rounded-lg w-sm">
        <h1 className="text-2xl self-center mb-2">Busca</h1>
        <Input
          type="text"
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite para buscar..."
        />
        <p>Resultado da busca: {busca}</p>
      </div>
    </div>
  )
}

export default ExemploTres;
