import { useController, Control } from "react-hook-form";
import { IDadosFormulario } from "@/pages/ModuleFive/Completed/3-LoginUserController.tsx";

// Definição das props do componente com tipagem
interface InputPersonalizadoProps {
  control: Control<IDadosFormulario>; // Tipagem genérica para o controle do formulário
  name: keyof IDadosFormulario;
}

// Componente de Input personalizado que usa useController para gerenciar o estado do campo
function InputPersonalizado({ control, name }: InputPersonalizadoProps) {
  // useController para conectar o input ao estado do formulário
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="flex flex-col gap-2 w-[300px]">
      <label className="text-gray-800">
        Nome <span className="text-red-500">*</span>
      </label>
      <input
        {...field}
        className="h-10 w-full p-2 rounded-md border border-gray-400"
      />
      {error && <p className="text-red-500 text-sm">{error.message as string}</p>}
    </div>
  );
}

export default InputPersonalizado;
