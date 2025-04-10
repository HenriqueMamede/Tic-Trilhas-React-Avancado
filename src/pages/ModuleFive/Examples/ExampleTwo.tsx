import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function FormularioCadastro() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl"
      >
        <h1 className="text-xl text-neutral-800">Formulário de Cadastro</h1>
        <div className="flex flex-col gap-2 w-[300px]">
          <Label htmlFor="nome">
            Nome <span className="text-red-500">*</span>
          </Label>
          <div>
            <Input
              id="nome"
            />
            <p className="text-red-500 text-sm">error</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[300px]">
          <Label htmlFor="sobrenome">
            Sobrenome <span className="text-red-500">*</span>
          </Label>
          <div>
            <Input
              id="sobrenome"
            />
            <p className="text-red-500 text-sm">error</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[300px]">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <div>
            <Input
              id="email"
            />
            <p className="text-red-500 text-sm">error</p>
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
            />
            <p className="text-red-500 text-sm">error</p>
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
            />
            <p className="text-red-500 text-sm">error</p>
          </div>
        </div>
        <Button type="submit" className="w-50 cursor-pointer">
          Cadastrar
        </Button>
      </div>
    </div>
  );
}

export default FormularioCadastro;