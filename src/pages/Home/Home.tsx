import { Button } from "@/components/ui/button";
import { RotasAplicacao } from "@/enums/RotasAplicacaoEnums";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const lidarComIdaParaModulos = () => {
        navigate(RotasAplicacao.MODULO_UM);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#fafafa] to-[#6EB8E2] p-6">
            <div className="text-center max-w-2xl p-8 bg-opacity-80 rounded-lg shadow-xl bg-white">
                <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    Bem-vindo a trilha Dominando React
                </h1>
                <p className="text-lg font-light mb-4">
                    Parabéns por iniciar esta jornada na trilha dominando React
                    do programa TIC em Trilhas! Estamos empolgados em acompanhar
                    seu progresso e ajudá-lo a se tornar um expert em React.
                </p>
                <p className="text-lg font-light mb-8">
                    Prepare-se para aprender novos conceitos e técnicas
                    avançadas. Vamos juntos nessa jornada!
                </p>
                <Button
                    onClick={lidarComIdaParaModulos}
                    className="cursor-pointer">
                    Navegar para os Módulos
                </Button>
            </div>
        </div>
    );
};

export default Home;
