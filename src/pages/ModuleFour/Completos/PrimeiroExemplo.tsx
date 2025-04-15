import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";

const PrimeiroExemplo = () => {
  const [dadosDoFomulario, setDadosDoFomulario] = useState({
    nome: "",
    email: "",
  });

  // Função de manipulação de eventos (mudanças nos campos)
  const atualizarCampoFormulario = (valor: string, campo: string) => {
    setDadosDoFomulario((estadoAnterior) => ({
      ...estadoAnterior,
      [campo]: valor,
    }));
  };

  const submeterFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(dadosDoFomulario));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={submeterFormulario}
        className="flex flex-col gap-5 items-center justify-center w-[500px] p-5 border-2 border-solid border-gray-100 rounded-2xl"
      >
        <h1 className="text-xl text-neutral-800">Formulário</h1>
        <div className="flex flex-col gap-2 w-[100%]">
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            type="text"
            value={dadosDoFomulario.nome}
            onChange={(e) => atualizarCampoFormulario(e.target.value, "nome")}
            placeholder="Nome"
            className="h-8 py-0.5 px-2.5 border border-solid border-gray-100 text-neutral-800 rounded"
          />
        </div>
        <div className="flex flex-col gap-2 w-[100%]">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            value={dadosDoFomulario.email}
            onChange={(e) => atualizarCampoFormulario(e.target.value, "email")}
            placeholder="Email"
            className="h-8 py-0.5 px-2.5 border border-solid border-gray-100 text-neutral-800 rounded"
          />
        </div>
        <Button
          type="submit"
          className="cursor-pointer w-[100%]"
          disabled={!dadosDoFomulario.nome || !dadosDoFomulario.email}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default PrimeiroExemplo;
