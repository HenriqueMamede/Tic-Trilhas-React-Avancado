import { useRef } from "react";
import InputCustomizado, { InputCustomizadoHandle } from "@/pages/ModuleTwo/Completos/components/InputCustomizado.tsx";
import { Button } from "@/components/ui/button.tsx";

function ComponentePai() {
  const inputRef = useRef<InputCustomizadoHandle>(null);

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <div className="p-4 bg-gray-100 rounded-lg">
        <InputCustomizado
          ref={inputRef}
          className="border border-gray-400 rounded p-1"
          placeholder="Digite aqui..."
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          className="cursor-pointer"
          onClick={() => inputRef.current?.focusInput()}
        >
          Focar no Input
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => inputRef.current?.limparInput()}
        >
          Limpar o Input
        </Button>
      </div>
    </div>
  );
}

export default ComponentePai;
