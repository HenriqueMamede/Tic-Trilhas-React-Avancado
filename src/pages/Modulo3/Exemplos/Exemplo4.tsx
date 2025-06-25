import { useState, useEffect } from "react";

const Exemplo4 = () => {
    const [posScroll, setPosScroll] = useState(0);

    useEffect(() => {
        let idTimeout: number;

        const atualizaPosScroll = () => {
            setPosScroll(window.scrollY);
        };

        const throttleScroll = () => {
            if (idTimeout) {
                clearTimeout(idTimeout);
            }

            idTimeout = window.setTimeout(() => {
                atualizaPosScroll();
            }, 200);
        };

        window.addEventListener("scroll", throttleScroll);

        return () => {
            window.removeEventListener("scroll", throttleScroll);
            clearTimeout(idTimeout);
        };
    }, []);

    return (
        <div className="h-[4000px]">
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center justify-center p-5 border border-gray-500 bg-white rounded-lg">
                <h1 className="text-2xl">Exemplo com Throttle</h1>
                <p>Posição de rolagem: {posScroll}px</p>
            </div>
        </div>
    );
};

export default Exemplo4;
