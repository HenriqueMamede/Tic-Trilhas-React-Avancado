export interface ITarefas {
  id: number;
  texto: string;
  finalizada: boolean;
}

export type Status = "todas" | "finalizadas" | "nao-finalizadas";
