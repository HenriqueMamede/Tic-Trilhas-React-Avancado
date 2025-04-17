import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";

function InputEmail() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Label htmlFor="email">Email:</Label>
      <Input
        id="email"
        {...register("email", { required: "Email é obrigatório" })}
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message as string}</p>
      )}
    </div>
  );
}

export default InputEmail;
