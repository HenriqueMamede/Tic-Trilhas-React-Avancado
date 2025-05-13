import { useQuery } from "@tanstack/react-query";
import retornaUsuario from "./retornaUsuario";

const DetalhesUsuario = () => {
    const { data: usuario } = useQuery({
        queryKey: ["usuario"],
        queryFn: retornaUsuario
    });

    return (
        <div className="flex flex-col gap-2 w-full">
            <h2 className="text-lg self-center">Detalhes do Usuário</h2>
            <p>
                <span className="font-semibold">Nome:</span> {usuario?.nome}
            </p>
            <p>
                <span className="font-semibold">Idade:</span> {usuario?.idade}
            </p>
            <p>
                <span className="font-semibold">Cargo:</span> {usuario?.cargo}
            </p>
        </div>
    );
};

export default DetalhesUsuario;
