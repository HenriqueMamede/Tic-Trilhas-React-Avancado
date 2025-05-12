import { useState, useMemo } from "react";
import { Status } from "@/enums/TarefasEnums";
import { Tarefas } from "@/types";
import { Filtro } from "@/components";
import { AdicionarTarefasForm, TabelaDeTarefas } from "./components";

const Modulo8 = () => {
  const [dados, setDados] = useState<Tarefas[]>([]);
  const [filtro, setFiltro] = useState<Status>(Status.TODAS);

  const tarefasFiltradas = useMemo(
    () =>
      dados.filter((task) => {
        if (filtro === Status.FINALIZADAS) return task.finalizada;
        if (filtro === Status.NAO_FINALIZADAS) return !task.finalizada;
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
    <div className="flex flex-col gap-6 w-full p-5">
      <AdicionarTarefasForm setDados={setDados} />
      <Filtro setFiltro={setFiltro} filtro={filtro} />
      <TabelaDeTarefas
        tarefas={tarefasFiltradas}
        removerTarefa={removerTarefa}
        mudarStatus={mudarStatus}
      />
    </div>
  );
};

export default Modulo8;
