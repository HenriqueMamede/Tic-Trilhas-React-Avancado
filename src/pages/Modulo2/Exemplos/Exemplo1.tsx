import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import BotaoReset from "@/pages/Modulo2/Exemplos/components/BotaoReset.tsx";

function ExemploUm() {
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

export default ExemploUm;
