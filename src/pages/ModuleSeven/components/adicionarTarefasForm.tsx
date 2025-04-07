import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { ITarefas } from "../interface";

interface AdicionarTarefasFormProps {
  setDados: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}

function AdicionarTarefasForm({ setDados }: AdicionarTarefasFormProps) {
  const [adicionarTarefa, setAdicionarTarefa] = useState("");

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
    setAdicionarTarefa("");
  };

  return (
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
  );
}

export default AdicionarTarefasForm;
