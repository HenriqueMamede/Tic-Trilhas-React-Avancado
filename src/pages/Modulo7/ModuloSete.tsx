import { Button } from "@/components/ui/button";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";
import { useNavigate } from "react-router-dom";

function Modulo7() {
  const navigate = useNavigate();

  const exemploDoCypress = [
    { label: "Exemplo 1", rota: RotasAplicacao.MODULO_SETE_EXEMPLO_CYPRESS },
  ];

  const exemploDosTestesUnitarios = [
    {
      label: "Exemplo 1",
      rota: RotasAplicacao.MODULO_SETE_EXEMPLO_UM_TESTE_UNITARIO,
    },
    {
      label: "Exemplo 2",
      rota: RotasAplicacao.MODULO_SETE_EXEMPLO_DOIS_TESTE_UNITARIO,
    },
  ];

  const lidarComIdaParaRotas = (rota: string) => {
    navigate(rota);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#fafafa] to-[#6EB8E2] p-6">
      <div className="text-center max-w-2xl p-8 bg-opacity-80 rounded-lg shadow-xl bg-white">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Módulo 7 - Testes
        </h1>
        <p className="text-lg font-light mb-8">
          Para explorar os exemplos deste módulo, escolha entre os exemplo dos
          testes unitários ou do Cypress clicando nos botões abaixo.
        </p>
        <div className="flex flex-row items-baseline justify-between w-full gap-15">
          <div className="flex flex-col w-full gap-2">
            <p className="text-md font-medium text-blue-500">
              Exemplos dos Testes unitários
            </p>
            {exemploDosTestesUnitarios.map((exemplo) => (
              <Button
                key={exemplo.rota}
                onClick={() => lidarComIdaParaRotas(exemplo.rota)}
                className="cursor-pointer"
              >
                {exemplo.label}
              </Button>
            ))}
          </div>
          <div className="flex flex-col w-full gap-2">
            <p className="text-md font-medium text-blue-500">
              Exemplos do Cypress
            </p>
            {exemploDoCypress.map((exemplo) => (
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
    </div>
  );
}

export default Modulo7;
