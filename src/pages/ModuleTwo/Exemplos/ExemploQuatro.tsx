
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input.tsx";

interface Item {
  nome: string;
}

function BuscaDeItens() {
  // Lista de itens (simulando uma lista grande de dados)
  const itens: Item[] = useMemo(() => {
    return Array.from({ length: 10000 }, (_, indice) => ({ nome: `Item ${indice}` }));
  }, []);

  const [filtro, setFiltro] = useState('');

  // Função para filtrar itens
  const itensFiltrados = useMemo(() => itens.filter(item =>
    item.nome.toLowerCase().includes(filtro.toLowerCase())
  ), [itens, filtro]);

  // Função para atualizar filtro
  const atualizaFiltro = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <div className="flex flex-col gap-4 grow-0 shrink-0 w-md">
        <h1 className="text-center text-2xl">Busca de Itens</h1>
        <Input
          type="text"
          placeholder="Buscar..."
          value={filtro}
          onChange={atualizaFiltro}
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
          <p>Nenhum item encontrado.</p>
        )}
      </div>
    </div>
  );
}
export default BuscaDeItens;
