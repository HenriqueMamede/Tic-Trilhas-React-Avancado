import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";
import { Button } from "@/components/ui/button";
import { Tarefas } from "@/types";
import EmptyState from "./EmptyState";

interface TabelaDeTarefasProps {
  tarefas: Tarefas[];
  removerTarefa: (id: number) => void;
  mudarStatus: (id: number) => void;
}

const TabelaDeTarefas = ({
  tarefas,
  removerTarefa,
  mudarStatus,
}: TabelaDeTarefasProps) => {
  if (!tarefas.length) return <EmptyState />;

  return (
    <Table>
      <TableHeader className="bg-blue-500">
        <TableRow>
          <TableHead className="text-white">Tarefa</TableHead>
          <TableHead className="min-w-[100px] text-white">Status</TableHead>
          <TableHead className="w-[50px]" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {tarefas.map((tarefa) => (
          <TableRow key={tarefa.id}>
            <TableCell data-testid="texto-tarefa">{tarefa.texto}</TableCell>
            <TableCell data-testid="status-tarefas">
              {tarefa.finalizada ? "Finalizada" : "Não finalizada"}
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Button
                  size="sm"
                  variant="ghost"
                  className="cursor-pointer"
                  data-testid="remover-tarefa"
                  onClick={() => removerTarefa(tarefa.id)}
                >
                  <MdDelete className="text-red-700" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="cursor-pointer"
                  data-testid="mudar-status"
                  onClick={() => mudarStatus(tarefa.id)}
                >
                  {tarefa.finalizada ? (
                    <FaCheckCircle
                      className="text-green-700"
                      data-testid="icone-finalizada"
                    />
                  ) : (
                    <ImRadioUnchecked
                      className="text-yellow-700"
                      data-testid="icone-nao-finalizada"
                    />
                  )}
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TabelaDeTarefas;
