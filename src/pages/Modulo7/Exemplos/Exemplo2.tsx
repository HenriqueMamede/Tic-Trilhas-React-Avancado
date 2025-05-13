import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

interface Exemplo2Props {
    itensIniciais?: string[];
}

const Exemplo2 = ({ itensIniciais = [] }: Exemplo2Props) => {
    const [itens, setItens] = useState<string[]>(itensIniciais);
    const [novoItem, setNovoItem] = useState("");

    const adicionarItem = () => {
        if (novoItem.trim()) {
            setItens([...itens, novoItem.trim()]);
            setNovoItem("");
        }
    };

    const removerItem = (index: number) => {
        setItens(itens.filter((_, i) => i !== index));
    };

    return (
        <div className="flex flex-col gap-6 w-full p-5">
            <h1 className="text-xl text-neutral-800">Lista Interativa</h1>
            <div className="flex gap-3 items-center w-full">
                <Input
                    data-testid="input-novo-item"
                    type="text"
                    value={novoItem}
                    onChange={(e) => setNovoItem(e.target.value)}
                />
                <Button
                    data-testid="botao-adicionar"
                    onClick={adicionarItem}
                    className="cursor-pointer">
                    Adicionar
                </Button>
            </div>
            <ul
                data-testid="lista-itens"
                className={`flex flex-col gap-2 p-4 rounded-lg ${
                    itens.length ? "bg-gray-100" : "inherit"
                }`}>
                {itens.map((item, index) => (
                    <div
                        className="flex items-center gap-2"
                        key={`${item}-${index}`}>
                        <li
                            key={index}
                            className=" text-lg font-light text-neutral-800">
                            {item}
                        </li>
                        <Button
                            variant="ghost"
                            data-testid={`botao-remover-${index}`}
                            onClick={() => removerItem(index)}
                            className="cursor-pointer"
                            style={{ padding: "0px" }}>
                            <RiDeleteBinLine className="text-red-600" />
                        </Button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Exemplo2;
