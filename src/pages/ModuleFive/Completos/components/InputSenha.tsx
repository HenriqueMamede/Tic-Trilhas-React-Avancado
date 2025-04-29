import { useFormContext } from 'react-hook-form';
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";

function InputSenha() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <Label htmlFor="senha">Senha:</Label>
      <Input
        id="senha"
        type="password"
        {...register("senha", { required: "Senha é obrigatória" })}
      />
      {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message as string}</p>}
    </div>
  );
}

export default InputSenha;
