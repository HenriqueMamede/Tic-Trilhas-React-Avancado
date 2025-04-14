import { FC, memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";

// Interface para indicar as props que o botão de Reset recebe
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

function Contador() {
  // Estado para armazenar o contador
  const [contador, setContador] = useState<number>(0);

  // Funções para incrementar o contador e resetar o contador
  const incrementaContador = () => setContador((prev) => prev + 1);
  const resetaContador = () => setContador(0);

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <div className="flex flex-col gap-4 p-6 border border-solid border-gray-300 rounded-xl w-[200px]">
        <h1 className="text-center text-3xl">Contador</h1>
        <h2 className="text-center text-2xl">{contador}</h2>
      </div>
      <Button onClick={incrementaContador} className="cursor-pointer w-[200px]">
        Incrementar
      </Button>
      <BotaoReset onReset={resetaContador} />
    </div>
  );
}

export default Contador;
