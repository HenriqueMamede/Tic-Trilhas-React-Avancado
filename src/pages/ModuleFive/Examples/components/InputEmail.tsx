import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";

function InputEmail() {
  return (
    <div>
      <Label htmlFor="email">Email:</Label>
      <Input id="email" />

      <p className="text-red-500 text-sm">Mensagem de erro</p>
    </div>
  );
}

export default InputEmail;
