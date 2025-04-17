import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

interface IDadosFormulario {
  email: string;
  senha: string;
}

function LoginSemYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IDadosFormulario>();

  const onSubmit = (dadosDoFormulario: IDadosFormulario) => {
    console.log(dadosDoFormulario);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl"
      >
        <h1 className="text-xl text-neutral-800">Login</h1>
        <div className="flex flex-col gap-2 w-[300px]">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <div>
            <Input
              id="email"
              {...register("email", { required: "Email é obrigatório" })}
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
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
              {...register("senha", { required: "Senha é obrigatória" })}
            />
            <p className="text-red-500 text-sm">{errors.senha?.message}</p>
          </div>
        </div>
        <div className="flex gap-2 w-full max-w-[300px]">
          <Button type="submit" className="cursor-pointer">
            Entrar
          </Button>
          <Button
            type="button"
            className="cursor-pointer"
            onClick={() => reset()}
          >
            Limpar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginSemYup;
