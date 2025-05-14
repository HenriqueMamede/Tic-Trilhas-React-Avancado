import * as Yup from "yup";
import { useForm } from "react-hook-form";
import InputPersonalizado from "./components/InputPersonalizado";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IDadosFormulario {
    inputPersonalizado: string;
}

const schema = Yup.object({
    inputPersonalizado: Yup.string().required("O campo é obrigatório")
});

const Exemplo3 = () => {
    const { handleSubmit, control } = useForm<IDadosFormulario>({
        resolver: yupResolver(schema),
        defaultValues: {
            inputPersonalizado: ""
        }
    });

    const onSubmit = (dadosDoFormulario: IDadosFormulario) => {
        console.log(dadosDoFormulario);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl">
                <h1 className="text-xl text-neutral-800">
                    Formulário com useController
                </h1>
                <InputPersonalizado
                    name="inputPersonalizado"
                    control={control}
                />
                <Button type="submit" className="cursor-pointer">
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default Exemplo3;
