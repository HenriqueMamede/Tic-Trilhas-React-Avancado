import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input.tsx";

function ExibirBusca() {
  const [busca, setBusca] = useState('');
  const [buscaDebounced, setBuscaDebounced] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setBuscaDebounced(busca); // Atualiza o valor com debounce
    }, 500);

    return () => clearTimeout(timer); // Limpa o temporizador anterior
  }, [busca]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-5 p-4 border border-gray-500 rounded-lg w-sm">
        <h1 className="text-2xl self-center mb-2">Busca com Debounce</h1>
        <Input
          type="text"
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite para buscar..."
        />
        <p>Resultado da busca: {buscaDebounced}</p>
      </div>
    </div>
  );
}

export default ExibirBusca;