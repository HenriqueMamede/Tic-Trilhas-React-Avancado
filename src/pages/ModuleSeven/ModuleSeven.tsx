import { useState, useMemo } from "react";
import { AdicionarTarefasForm, Filtro, TabelaDeTarefas } from "./components";
import { ITarefas, Status } from "./interface";

function ModuleSeven() {
  const [dados, setDados] = useState<ITarefas[]>([]);
  const [filtro, setFiltro] = useState<Status>("todas");

  const tarefasFiltradas = useMemo(
    () =>
      dados.filter((task) => {
        if (filtro === "finalizadas") return task.finalizada;
        if (filtro === "nao-finalizadas") return !task.finalizada;
        return true;
      }),
    [dados, filtro]
  );

  const removerTarefa = (id: number) => {
    setDados((valorAnterior) => valorAnterior.filter((task) => task.id !== id));
  };

  const mudarStatus = (id: number) => {
    const dadosAtualizados = dados.map((task) =>
      task.id === id ? { ...task, finalizada: !task.finalizada } : task
    );
    setDados(dadosAtualizados);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <AdicionarTarefasForm setDados={setDados} />
      <Filtro setFiltro={setFiltro} filtro={filtro} />
      <TabelaDeTarefas
        tarefas={tarefasFiltradas}
        removerTarefa={removerTarefa}
        mudarStatus={mudarStatus}
      />
    </div>
  );
}

export default ModuleSeven;
