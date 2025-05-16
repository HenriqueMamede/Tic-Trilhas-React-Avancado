import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IDadosFormulario {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
}

const schema = Yup.object({
    nome: Yup.string()
        .trim()
        .min(3, "Nome muito pequeno")
        .required("Nome é obrigatorio"),
    sobrenome: Yup.string().trim().required("Sobrenome é obrigatorio"),
    email: Yup.string()
        .trim()
        .email("Email invalido")
        .required("Email é obrigatorio"),
    senha: Yup.string()
        .min(8, "Senha com pelo menos 8 caracteres")
        .required("Senha é obrigatório"),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref("senha")], "As senhas precisam ser iguais")
        .required("Confirmar senha é obrigatorio")
});

const Exemplo2 = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
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
                <h1 className="text-xl text-neutral-800">
                    Formulário de Cadastro
                </h1>
                <div className="flex flex-col gap-2 w-[300px]">
                    <Label htmlFor="nome">
                        Nome <span className="text-red-500">*</span>
                    </Label>
                    <div>
                        <Input id="nome" {...register("nome")} />
                        <p className="text-red-500 text-sm">
                            {errors?.nome?.message}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[300px]">
                    <Label htmlFor="sobrenome">
                        Sobrenome <span className="text-red-500">*</span>
                    </Label>
                    <div>
                        <Input id="sobrenome" {...register("sobrenome")} />
                        <p className="text-red-500 text-sm">
                            {errors?.sobrenome?.message}
                        </p>
                    </div>
                </div>
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
                            {errors?.senha?.message}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-[300px]">
                    <Label htmlFor="confirmar-senha">
                        Confirmar Senha <span className="text-red-500">*</span>
                    </Label>
                    <div>
                        <Input
                            id="confirmar-senha"
                            type="password"
                            {...register("confirmarSenha")}
                        />
                        <p className="text-red-500 text-sm">
                            {errors?.confirmarSenha?.message}
                        </p>
                    </div>
                </div>
                <Button type="submit" className="w-50 cursor-pointer">
                    Cadastrar
                </Button>
            </form>
        </div>
    );
};

export default Exemplo2;
