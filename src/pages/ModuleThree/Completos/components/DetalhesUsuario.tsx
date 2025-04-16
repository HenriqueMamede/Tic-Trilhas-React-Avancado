import { useSuspenseQuery } from "@tanstack/react-query";
import retornaUsuario from "@/pages/ModuleThree/components/retornaUsuario.ts";

interface Usuario {
  nome: string;
  idade: number;
  cargo: string;
};

const DetalhesUsuario = () => {
  // Query com suspense habilitado
  const { data: usuario } = useSuspenseQuery<Usuario>({
    queryKey: ['usuario'],
    queryFn: retornaUsuario,
  });

  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-lg self-center">Detalhes do Usuário</h2>
      <p>
        <span className="font-semibold">Nome:</span> {usuario.nome}
      </p>
      <p>
        <span className="font-semibold">Idade:</span> {usuario.idade}
      </p>
      <p>
        <span className="font-semibold">Cargo:</span> {usuario.cargo}
      </p>
    </div>
  );
};

export default DetalhesUsuario;
