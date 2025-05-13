import InputPersonalizado from "./components/InputPersonalizado";
import { Button } from "@/components/ui/button";

export interface IDadosFormulario {
    inputPersonalizado: string;
}

const Exemplo3 = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl">
                <h1 className="text-xl text-neutral-800">
                    Formulário com useController
                </h1>
                <InputPersonalizado />
                <Button type="submit" className="cursor-pointer">
                    Enviar
                </Button>
            </div>
        </div>
    );
};

export default Exemplo3;
