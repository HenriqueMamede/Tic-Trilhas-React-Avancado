import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";

const ModuloCinco = () => {
  const navigate = useNavigate();

  const examples = [
    { label: "Exemplo 1", route: RotasAplicacao.MODULO_CINCO_EXEMPLO_UM },
    { label: "Exemplo 2", route: RotasAplicacao.MODULO_CINCO_EXEMPLO_DOIS },
    { label: "Exemplo 3", route: RotasAplicacao.MODULO_CINCO_EXEMPLO_TRES },
    { label: "Exemplo 4", route: RotasAplicacao.MODULO_CINCO_EXEMPLO_QUATRO },
  ];

  const handleGoModulePages = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#fafafa] to-[#6EB8E2] p-6">
      <div className="text-center max-w-2xl p-8 bg-opacity-80 rounded-lg shadow-xl bg-white">
        <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Módulo 5 - React Hook Form
        </h1>
        <p className="text-lg font-light mb-4">
          Para acessar cada exemplo deste módulo, clique no botão abaixo e navegue
          para o exemplo desejado.
        </p>
        <div className="flex flex-col items-center gap-2 w-full">
          {examples.map((example) => (
            <Button
              key={example.route}
              onClick={() => handleGoModulePages(example.route)}
              className="cursor-pointer"
            >
              {example.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuloCinco;