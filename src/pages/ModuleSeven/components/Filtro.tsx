import { Badge } from "@/components/ui/badge";
import { Status } from "../interface";

const filtrarTexto: { [key: string]: string } = {
  todas: "Todas tarefas",
  finalizadas: "Tarefas finalizadas",
  "nao-finalizadas": "Tarefas não finalizadas",
};

const filtros = [
  { label: "Todas", value: "todas" },
  { label: "Finalizadas", value: "finalizadas" },
  { label: "Não finalizadas", value: "nao-finalizadas" },
];

interface FiltroProps {
  setFiltro: (filtro: Status) => void;
  filtro: string;
}

function Filtro({ setFiltro, filtro }: FiltroProps) {
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
            onClick={() => setFiltro(value as Status)}
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
}

export default Filtro;
