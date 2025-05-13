import InputCustomizado from "@/pages/Modulo2/Exemplos/components/InputCustomizado.tsx";
import { Button } from "@/components/ui/button.tsx";

const Exemplo5 = () => {
    return (
        <div className="flex flex-col gap-8 items-center justify-center h-screen">
            <div className="p-4 bg-gray-100 rounded-lg">
                <InputCustomizado
                    className="border border-gray-400 rounded p-1"
                    placeholder="Digite aqui..."
                />
            </div>
            <div className="flex flex-col gap-2">
                <Button className="cursor-pointer">Focar no Input</Button>
                <Button className="cursor-pointer">Limpar o Input</Button>
            </div>
        </div>
    );
};

export default Exemplo5;
