import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PaginaNaoEncontrada = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100 px-4 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Página não encontrada
            </h2>
            <p className="text-gray-600 mb-6">
                A página que você está procurando não existe ou foi movida.
            </p>
            <Button>
                <Link to="/">Voltar para a página inicial</Link>
            </Button>
        </div>
    );
};

export default PaginaNaoEncontrada;
