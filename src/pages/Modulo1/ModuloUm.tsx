import { useState, useEffect, useLayoutEffect, useRef } from "react";

// Definindo o tipo para o usuário
interface User {
    name: string;
    age: number;
}

const ModuloUm = () => {
    const [user, setUser] = useState<User | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // Definindo o tipo de intervalRef

    // Simula componentDidMount
    useEffect(() => {
        console.log("[Mount] Buscando dados do usuário...");
        fetchUser();

        // Simula componentWillUnmount
        return () => {
            console.log("[Unmount]");
            if (intervalRef.current) {
                console.log("[Unmount] Limpando intervalo");
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    // Simula componentDidUpdate para quando user.name muda
    useEffect(() => {
        if (user?.name) {
            document.title = `Bem-vindo, ${user.name}`;
            console.log("[Update] Título do documento atualizado");
        }
    }, [user?.name]);

    // useLayoutEffect antes da pintura do DOM
    useLayoutEffect(() => {
        console.log("[LayoutEffect] Antes da pintura do DOM");
    });

    // Simula chamada de API
    const fetchUser = async () => {
        const mockUser = await new Promise<User>((resolve) =>
            setTimeout(() => resolve({ name: "Laís", age: 29 }), 1000)
        );
        setUser(mockUser);

        // Começa um intervalo qualquer
        intervalRef.current = setInterval(() => {
            //  console.log(`[Interval] Usuário atual: ${mockUser.name}`);
        }, 3000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#fafafa] to-[#6EB8E2] p-6">
            <div className="text-center max-w-2xl p-8 bg-opacity-80 rounded-lg shadow-xl bg-white">
                <h1 className="text-5xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
                    Módulo 1 - Ciclo de Vida
                </h1>
                {user ? (
                    <div className="text-center">
                        <p className="text-lg text-gray-700 mb-2">
                            Olá, <span className="font-bold">{user.name}</span>!
                        </p>
                        <p className="text-lg text-gray-700">
                            Você tem {user.age} anos.
                        </p>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        Carregando usuário...
                    </p>
                )}
            </div>
        </div>
    );
};

export default ModuloUm;
