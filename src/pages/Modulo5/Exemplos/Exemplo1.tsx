import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IDadosFormulario {
    email: string;
    senha: string;
}

const schema = Yup.object({
    email: Yup.string().email("Email invalido").required("Email obrigatorio"),
    senha: Yup.string().required("Senha é obrigatoria")
});

const Exemplo1 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IDadosFormulario>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (dadosDoFormulario: IDadosFormulario) => {
        console.log(dadosDoFormulario);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl">
                <h1 className="text-xl text-neutral-800">Login</h1>
                <div className="flex flex-col gap-2 w-[300px]">
                    <div className="flex flex-col gap-2 w-[300px]">
                        <Label htmlFor="email">
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <div>
                            <Input id="email" {...register("email")} />
                            <p className="text-red-500 text-sm">
                                {errors?.email?.message}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-[300px]">
                        <Label htmlFor="senha">
                            Senha <span className="text-red-500">*</span>
                        </Label>
                        <div>
                            <Input
                                id="senha"
                                type="password"
                                {...register("senha")}
                            />
                            <p className="text-red-500 text-sm">
                                {errors.senha?.message}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full max-w-[300px]">
                        <Button type="submit" className="cursor-pointer">
                            Entrar
                        </Button>
                        <Button
                            onClick={() => reset()}
                            type="button"
                            variant="outline"
                            className="cursor-pointer">
                            Limpar
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Exemplo1;
