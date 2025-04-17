import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";

function InputSenha() {
  return (
    <div>
      <Label htmlFor="senha">Senha:</Label>
      <Input id="senha" type="password" />

      <p className="text-red-500 text-sm">mensagem de erro</p>
    </div>
  );
}

export default InputSenha;
