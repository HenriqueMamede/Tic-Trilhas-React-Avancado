import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import { Button } from "@/components/ui/button.tsx";

interface IDadosFormulario {
  email: string;
  senha: string;
}

function Cadastro() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl">
        <h1>Exemplo com useFormContext</h1>
        <InputEmail />
        <InputSenha />
        <Button type="submit">Cadastrar</Button>
      </div>
    </div>
  );
}

export default Cadastro;
