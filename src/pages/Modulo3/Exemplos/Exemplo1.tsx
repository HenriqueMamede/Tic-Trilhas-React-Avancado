import { lazy, Suspense } from "react";

const ComponenteDemorado = lazy(
    () => import("@/pages/Modulo3/components/ComponenteDemorado")
);

const Exemplo1 = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            <h1 className="text-2xl">Exemplo sem React.lazy</h1>

            <div className="p-4 bg-gray-300 rounded-lg">
                <Suspense fallback={<div>Carregando componente...</div>}>
                    <ComponenteDemorado />
                </Suspense>
            </div>
        </div>
    );
};

export default Exemplo1;
