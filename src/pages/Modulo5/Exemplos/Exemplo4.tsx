import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Participante {
    nome: string;
}

const Exemplo4 = () => {
    const [participantes, setParticipantes] = useState<Participante[]>([]);

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl">
                <h1 className="text-xl text-neutral-800">
                    Cadastro de Participantes
                </h1>
                <div className="flex flex-col gap-2 w-[300px]">
                    <Label htmlFor="nome">
                        Nome <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex gap-4">
                        <div>
                            <Input id="nome" />
                            <p className="text-red-500 text-sm">
                                mensagem de erro
                            </p>
                        </div>
                        <Button type="button" variant="outline">
                            Remover
                        </Button>
                    </div>
                </div>
                <Button type="button" className="w-50 cursor-pointer">
                    Adicionar participante
                </Button>
                <Button type="submit" className="w-50 cursor-pointer">
                    Cadastrar participantes
                </Button>
            </div>
            {participantes.length > 0 && (
                <div className="flex flex-col gap-3 items-center justify-center w-[500px] p-5">
                    <h2>Participantes cadastrados:</h2>
                    <ul>
                        {participantes.map(
                            (participante: Participante, index: number) => (
                                <li key={index}>{participante.nome}</li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Exemplo4;
