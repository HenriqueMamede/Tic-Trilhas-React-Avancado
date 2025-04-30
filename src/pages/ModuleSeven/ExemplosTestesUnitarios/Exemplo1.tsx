import { Button } from "@/components/ui/button";

// src/componentes/Botao.tsx?
interface BotaoProps {
  nome?: string;
  desabilitado?: boolean;
  aoClicar?: () => void;
}

function Botao({ nome = "Botão customizado", aoClicar, desabilitado = false }: BotaoProps) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button
        data-testid="botao-customizado"
        onClick={aoClicar}
        disabled={desabilitado}
        className="cursor-pointer w-50"
      >
        {nome}
      </Button>
    </div>
  );
}

export default Botao;
