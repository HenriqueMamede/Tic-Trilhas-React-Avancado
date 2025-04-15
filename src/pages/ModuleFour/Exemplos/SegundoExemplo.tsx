import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filtro } from "@/components";
import { Status } from "@/enums/TarefasEnums";
import { Tarefas } from "@/types";

const tarefas = [
  { id: 1, texto: "Fazer café", finalizada: true },
  { id: 2, texto: "Estudar React", finalizada: false },
  { id: 3, texto: "Comprar mantimentos", finalizada: false },
  { id: 4, texto: "Lavar roupa", finalizada: true },
];

function SegundoExemplo() {
  const [filtro, setFiltro] = useState<Status>(Status.TODAS);
  const [tarefasFiltradas, setTarefasFiltradas] = useState<Tarefas[]>([]);

  // Uso do useEffect para filtrar as tarefas finalizadas
  useEffect(() => {
    const filtradas = tarefas.filter((tarefa) => {
      if (filtro === Status.FINALIZADAS) return tarefa.finalizada;
      if (filtro === Status.NAO_FINALIZADAS) return !tarefa.finalizada;
      return true;
    });
    setTarefasFiltradas(filtradas);
  }, [filtro]);

  return (
    <div className="flex flex-col gap-6 w-full p-5">
      <h1 className="text-xl text-neutral-800">Segundo Exemplo</h1>
      <Filtro filtro={filtro} setFiltro={setFiltro} showLabel={false} />
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

export default SegundoExemplo;
