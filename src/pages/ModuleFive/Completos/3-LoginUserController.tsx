import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import InputPersonalizado from "./components/InputPersonalizadoCompleto.tsx";

export interface IDadosFormulario {
  inputPersonalizado: string;
}

const schema = Yup.object({
  inputPersonalizado: Yup.string().required('O campo é obrigatório'),
});

function FormularioUseController() {
  const { handleSubmit, control } = useForm<IDadosFormulario>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (dadosDoFormulario: IDadosFormulario) => {
    console.log(dadosDoFormulario);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 items-center justify-center w-[600px] p-5 border-2 border-solid border-gray-100 rounded-2xl">
        {/* Componente de input personalizado controlado pelo React Hook Form */}
        <InputPersonalizado name="inputPersonalizado" control={control} />
        <Button type="submit" className="cursor-pointer">Enviar</Button>
      </form>
    </div>
  );
}

export default FormularioUseController;

