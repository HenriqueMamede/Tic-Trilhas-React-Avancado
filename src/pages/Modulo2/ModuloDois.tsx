import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";

const exemplos = [
  { label: "useCallback", rota: RotasAplicacao.MODULE_TWO_EXAMPLE_ONE },
  { label: "useMemo", rota: RotasAplicacao.MODULE_TWO_EXAMPLE_TWO },
  { label: "useDeferredValue", rota: RotasAplicacao.MODULE_TWO_EXAMPLE_THREE },
  { label: "useTransition", rota: RotasAplicacao.MODULE_TWO_EXAMPLE_FOUR },
  { label: "forwardRef e useImperativeHandle", rota: RotasAplicacao.MODULE_TWO_EXAMPLE_FIVE },
];

const ModuloDois = () => {
  const navigate = useNavigate();

  const lidarComIdaParaRotas = (rota: RotasAplicacao) => {
    navigate(rota);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#fafafa] to-[#6EB8E2] p-6">
      <div className="text-center max-w-2xl p-8 bg-opacity-80 rounded-lg shadow-xl bg-white">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Módulo 2 - Hooks
        </h1>
        <p className="text-lg font-light mb-4">
          Para acessar o exemplo de cada hook, clique no botão abaixo e navegue
          para o exemplo desejado.
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

export default ModuloDois;
