
import { useState, useMemo, useDeferredValue } from "react";
import { Input } from "@/components/ui/input.tsx";

interface Item {
  nome: string;
}

// Função que realiza uma busca na lista de Itens
const buscaItens = (busca: string, itens: Item[]) => {
  return itens.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()));
};

function BuscaDeItens() {
  // Lista de itens (simulando uma lista grande de dados)
  const itens: Item[] = useMemo(() => {
    return Array.from({ length: 10000 }, (_, indice) => ({ nome: `Item ${indice}` }));
  }, []);

  // Estado para armazenar o termo de busca
  const [busca, setBusca] = useState('');

  // Usando useDeferredValue para suavizar a renderização do termo de busca
  const buscaAdiada = useDeferredValue(busca);

  // Filtrando os itens com o termo de busca
  const itensFiltrados = useMemo(() => buscaItens(buscaAdiada, itens), [buscaAdiada, itens]);

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <div className="flex flex-col gap-4 grow-0 shrink-0 w-md">
        <h1 className="text-center text-2xl">Busca de Itens</h1>
        <Input
          type="text"
          placeholder="Buscar..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-4 max-h-[50%] w-md">
        <h2 className="text-center text-2xl">Resultados</h2>
        {itensFiltrados.length > 0 && (
          <>
            <div className="overflow-auto">
              <ul>
                {itensFiltrados.map((item, indice) => (<li key={indice}>{item.nome}</li>))}
              </ul>
            </div>
            <p>Itens encontrados: {itensFiltrados.length}</p>
          </>
        )}
        {itensFiltrados.length === 0 && (
          <p>Nenhum item encontrado.</p>)}
      </div>
    </div>
  );
}

export default BuscaDeItens;
