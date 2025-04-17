import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Participante {
  nome: string;
}

interface IDadosFormulario {
  participantes: { nome: string }[];
}

// Definição do esquema de validação usando Yup
const schema = yup
  .object({
    participantes: yup
      .array()
      .of(
        yup.object({
          nome: yup
            .string()
            .required("Nome é obrigatório")
            .min(3, "Nome muito pequeno")
            .matches(/^[A-Za-z]+$/, "Nome deve conter apenas letras"),
        })
      )
      .required(),
  })
  .required();

function ListaDeParticipantes() {
  const [participantes, setParticipantes] = useState<Participante[]>([]);

  // Hook do react-hook-form para gerenciar o estado do formulário e validação
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IDadosFormulario>({
    resolver: yupResolver(schema),
  });

  // Hook do useFieldArray para gerenciar arrays de campos
  const { fields, append, remove } = useFieldArray({
    control,
    name: "participantes",
  });

  const onSubmit = (dadosDoFormulario: IDadosFormulario) => {
    console.log(dadosDoFormulario);
    setParticipantes(dadosDoFormulario.participantes);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl"
      >
        <h1 className="text-xl text-neutral-800">Cadastro de Participantes</h1>
        {fields.map((field: { id: string; nome: string }, index: number) => (
          <div key={field.id} className="flex flex-col gap-2 w-[300px]">
            <Label htmlFor={`participantes.${index}.nome`}>
              Nome <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-4">
              <div>
                <Input
                  id={`participantes.${index}.nome`}
                  {...register(`participantes.${index}.nome` as const)}
                />
                <p className="text-red-500 text-sm">
                  {errors.participantes?.[index]?.nome?.message as string}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => remove(index)}
              >
                Remover
              </Button>
            </div>
          </div>
        ))}
        <Button type="button" onClick={() => append({ nome: "" })}>
          Adicionar participante
        </Button>
        <Button type="submit">Cadastrar participantes</Button>
      </form>
      {participantes.length > 0 && (
        <div className="flex flex-col gap-3 items-center justify-center w-[500px] p-5">
          <h2>Participantes cadastrados:</h2>
          <ul>
            {participantes.map((participante, index) => (
              <li key={index}>{participante.nome}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListaDeParticipantes;
