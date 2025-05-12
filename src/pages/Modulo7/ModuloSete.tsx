import { Button } from "@/components/ui/button";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";
import { useNavigate } from "react-router-dom";

const Modulo7 = () => {
  const navigate = useNavigate();

  const exemplos = [
    {
      label: "Exemplo 1",
      rota: RotasAplicacao.MODULO_SETE_EXEMPLO_UM,
    },
    {
      label: "Exemplo 2",
      rota: RotasAplicacao.MODULO_SETE_EXEMPLO_DOIS,
    },
  ];

  const lidarComIdaParaRotas = (rota: string) => {
    navigate(rota);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#fafafa] to-[#6EB8E2] p-6">
      <div className="text-center max-w-2xl p-8 bg-opacity-80 rounded-lg shadow-xl bg-white">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Módulo 7 - Testes unitários
        </h1>
        <p className="text-lg font-light mb-8">
          Para acessar cada exemplo deste módulo, clique no botão abaixo e
          navegue para o exemplo desejado.
        </p>
        <div className="flex flex-col items-center gap-2 w-full">
          {exemplos.map((exemplo) => (
            <Button
              key={exemplo.rota}
              onClick={() => lidarComIdaParaRotas(exemplo.rota)}
              className="cursor-pointer"
            >
              {exemplo.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modulo7;
