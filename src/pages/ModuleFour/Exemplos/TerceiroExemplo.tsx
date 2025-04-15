import { useState, useEffect, FormEvent } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filtro } from "@/components";
import { Tarefas } from "@/types";
import { Status } from "@/enums/TarefasEnums";

const tarefas: Tarefas[] = [
  { id: 1, texto: "Fazer café", finalizada: true },
  { id: 2, texto: "Estudar React", finalizada: false },
  { id: 3, texto: "Comprar mantimentos", finalizada: false },
  { id: 4, texto: "Lavar roupa", finalizada: true },
];

const TerceiroExemplo = () => {
  const [dados, setDados] = useState<Tarefas[]>(tarefas);
  const [filtro, setFiltro] = useState<Status>(Status.TODAS);
  const [adicionarTarefa, setAdicionarTarefa] = useState("");

  const tarefasFiltradas = dados.filter((tarefa) => {
    if (filtro === Status.FINALIZADAS) return tarefa.finalizada;
    if (filtro === Status.NAO_FINALIZADAS) return !tarefa.finalizada;
    return true;
  });

  // Uso do useEffect para monitorar se o estado data mudou e resetar o estado setAddTasks
  useEffect(() => {
    setAdicionarTarefa("");
  }, [dados]);

  const lidarComAdicaoDeTarefas = (e: FormEvent) => {
    e.preventDefault();
    setDados((valorAnterior) => [
      ...valorAnterior,
      {
        id: valorAnterior.length
          ? valorAnterior[valorAnterior.length - 1].id + 1
          : 0,
        texto: adicionarTarefa,
        finalizada: false,
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-6 w-full p-5">
      <h1 className="text-xl text-neutral-800">Terceiro Exemplo</h1>
      <form
        className="flex gap-3 items-center w-full"
        onSubmit={lidarComAdicaoDeTarefas}
      >
        <Input
          data-testid="tarefa"
          placeholder="Adicionar tarefas"
          value={adicionarTarefa}
          onChange={(e) => setAdicionarTarefa(e.target.value)}
        />
        <Button
          type="submit"
          data-testid="adicionar-tarefa"
          className="cursor-pointer"
          disabled={!adicionarTarefa}
        >
          Adicionar
        </Button>
      </form>
      <Filtro setFiltro={setFiltro} filtro={filtro} />
      <Table>
        <TableHeader className="bg-blue-500">
          <TableRow>
            <TableHead className="text-white">Tarefa</TableHead>
            <TableHead className="text-white"> Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tarefasFiltradas.map((tarefa) => (
            <TableRow
              key={tarefa.id}
              className="even:bg-blue-100 hover:bg-blue-200"
            >
              <TableCell>{tarefa.texto}</TableCell>
              <TableCell>
                {tarefa.finalizada ? "Finalizada" : "Não finalizada"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TerceiroExemplo;
