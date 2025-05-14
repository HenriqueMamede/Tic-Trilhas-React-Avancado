import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Participante {
    nome: string;
}

interface IDadosFormulario {
    participantes: Participante[];
}

const schema = Yup.object({
    participantes: Yup.array()
        .of(
            Yup.object({
                nome: Yup.string()
                    .required("Nome é obrigatório")
                    .min(3, "Nome muito pequeno")
            })
        )
        .required()
});

const Exemplo4 = () => {
    const [participantes, setParticipantes] = useState<Participante[]>([]);

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<IDadosFormulario>({ resolver: yupResolver(schema) });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "participantes"
    });

    const onSubmit = (dadosDoFormulario: IDadosFormulario) => {
        console.log(dadosDoFormulario);
        setParticipantes(dadosDoFormulario.participantes);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl">
                <h1 className="text-xl text-neutral-800">
                    Cadastro de Participantes
                </h1>
                {fields.map((field, index) => (
                    <div
                        key={field.id}
                        className="flex flex-col gap-2 w-[300px]">
                        <Label htmlFor={`participantes.${index}.nome`}>
                            Nome <span className="text-red-500">*</span>
                        </Label>
                        <div className="flex gap-4">
                            <div>
                                <Input
                                    id={`participantes.${index}.nome`}
                                    {...register(`participantes.${index}.nome`)}
                                />
                                <p className="text-red-500 text-sm">
                                    {
                                        errors?.participantes?.[index]?.nome
                                            ?.message
                                    }
                                </p>
                            </div>
                            <Button
                                onClick={() => remove(index)}
                                type="button"
                                variant="outline">
                                Remover
                            </Button>
                        </div>
                    </div>
                ))}

                <Button
                    onClick={() => append({ nome: "" })}
                    type="button"
                    className="w-50 cursor-pointer">
                    Adicionar participante
                </Button>
                <Button type="submit" className="w-50 cursor-pointer">
                    Cadastrar participantes
                </Button>
            </form>
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
