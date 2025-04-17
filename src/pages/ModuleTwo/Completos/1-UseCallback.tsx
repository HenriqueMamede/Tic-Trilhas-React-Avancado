import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import BotaoReset from "@/pages/ModuleTwo/Completos/components/botaoReset.tsx";

function ExemploUm() {
  // Estado para armazenar o contador
  const [contador, setContador] = useState<number>(0);

  // Funções para incrementar o contador e resetar o contador
  const incrementaContador = () => setContador((prev) => prev + 1);

  // O uso de useCallback faz com que a função só seja criada uma vez,
  // já que estamos passando uma lista de dependências vazia
  const resetaContador = useCallback(
    () => setContador(0),
    []
  );

  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen">
      <div className="flex flex-col gap-4 p-6 border border-solid border-gray-300 rounded-xl">
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

export default ExemploUm;
