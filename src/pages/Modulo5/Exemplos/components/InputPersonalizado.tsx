import { Control, useController } from "react-hook-form";
import { IDadosFormulario } from "../Exemplo3";

interface InputPersonalizadoProps {
    control: Control<IDadosFormulario>;
    name: keyof IDadosFormulario;
}

const InputPersonalizado = ({ name, control }: InputPersonalizadoProps) => {
    const {
        field,
        fieldState: { error }
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
            <p className="text-red-500 text-sm">{error?.message}</p>
        </div>
    );
};

export default InputPersonalizado;
