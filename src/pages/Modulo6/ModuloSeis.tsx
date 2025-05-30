import { Button } from "@/components/ui/button";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";
import { useNavigate } from "react-router-dom";

const ModuloSeis = () => {
  const navigate = useNavigate();
  
  const exemplo = { label: "Exemplo", route: RotasAplicacao.MODULO_SEIS_EXEMPLO_UM }


  const handleGoModulePages = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#fafafa] to-[#6EB8E2] p-6">
    <div className="text-center max-w-2xl p-8 bg-opacity-80 rounded-lg shadow-xl bg-white">
      <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Módulo 6 - Portals
      </h1>
      <p className="text-lg font-light mb-4">
        Para acessar o exemplo deste módulo, clique no botão abaixo e navegue
        para o exemplo desejado.
      </p>
      <div className="flex flex-col items-center gap-2 w-full">
          <Button
            key={exemplo.route}
            onClick={() => handleGoModulePages(exemplo.route)}
            className="cursor-pointer"
          >
            {exemplo.label}
          </Button>
      </div>
    </div>
  </div>
  )
};


export default ModuloSeis;
