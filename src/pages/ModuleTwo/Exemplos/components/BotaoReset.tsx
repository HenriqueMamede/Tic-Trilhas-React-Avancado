// Interface para indicar as props que o botão de Reset recebe
import { FC, memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";

interface BotaoResetProps {
  onReset: () => void;
}

// O uso de memo faz com que o componente só seja renderizado novamente se as props mudarem
const BotaoReset: FC<BotaoResetProps> = memo(({ onReset }) => {
  // Contador para monitorar quantas vezes o botão foi renderizado
  const [contadorRenderizacoes, setContadorRenderizacoes] = useState<number>(0);

  // Monitora se a prop onReset mudou e incrementa o contador de renderizações
  useEffect(
    () => setContadorRenderizacoes((prev) => prev + 1),
    [onReset]
  );

  return (
    <div className="flex flex-col gap-1">
      <Button onClick={onReset} variant="outline" className="cursor-pointer w-[200px]">
        Resetar Contador
      </Button>
      <p className="text-sm">
        Renderizações do botão: {contadorRenderizacoes}
      </p>
    </div>
  );
});

export default BotaoReset;