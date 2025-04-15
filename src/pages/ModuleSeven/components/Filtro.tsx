import { Badge } from "@/components/ui/badge";
import { Status } from "@/enums/TarefasEnums";

const filtrarTexto: { [key: string]: string } = {
  [Status.TODAS]: "Todas tarefas",
  [Status.FINALIZADAS]: "Tarefas finalizadas",
  [Status.NAO_FINALIZADAS]: "Tarefas não finalizadas",
};

const filtros = [
  { label: "Todas", value: Status.TODAS },
  { label: "Finalizadas", value: Status.FINALIZADAS },
  { label: "Não finalizadas", value: Status.NAO_FINALIZADAS },
];

interface FiltroProps {
  setFiltro: (filtro: Status) => void;
  filtro: Status;
}

const Filtro = ({ setFiltro, filtro }: FiltroProps) => {
  const lidarComFiltroAtivo = (value: string) => {
    if (filtro === value) return "bg-blue-500 text-white hover:bg-blue-600";
    return "inherit";
  };

  return (
    <div className="flex gap-2.5 justify-between items-center">
      <div className="flex gap-2.5 items-center">
        <p className="text-sm text-gray-700">Filtrar por:</p>
        {filtros.map(({ label, value }) => (
          <Badge
            key={value}
            className={`cursor-pointer ${lidarComFiltroAtivo(value)}`}
            onClick={() => setFiltro(value)}
            data-testid={`filtro-${value}`}
          >
            {label}
          </Badge>
        ))}
      </div>
      <p className="text-sm text-gray-700" data-testid="label-filtro">
        Visualizando: {filtrarTexto[filtro]}
      </p>
    </div>
  );
};

export default Filtro;
