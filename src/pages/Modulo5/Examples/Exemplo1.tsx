import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="flex flex-col gap-3 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl"
      >
        <h1 className="text-xl text-neutral-800">Login</h1>
        <div className="flex flex-col gap-2 w-[300px]">
          <div className="flex flex-col gap-2 w-[300px]">
            <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
            <div>
              <Input id="email"/>
              <p className="text-red-500 text-sm">error</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[300px]">
            <Label htmlFor="senha">Senha <span className="text-red-500">*</span></Label>
            <div>
              <Input id="senha" type="password"/>
              <p className="text-red-500 text-sm">error</p>
            </div>
          </div>
          <div className="flex gap-2 w-full max-w-[300px]">
            <Button type="submit" className="cursor-pointer">
              Entrar
            </Button>
            <Button type="button" variant="outline" className="cursor-pointer">
              Limpar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;