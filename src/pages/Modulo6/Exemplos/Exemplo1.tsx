import { useState } from "react";
import { Button } from "@/components/ui/button";

import Modal from "./components/Modal";

const Exemplo1 = () => {
    const [modalAberto, setModalAberto] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-20">
            <h1 className="text-3xl">Exemplo de Portals</h1>
            <Button
                onClick={() => setModalAberto(true)}
                className="cursor-pointer">
                Abrir Modal
            </Button>
            {modalAberto && (
                <Modal>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-xl">Modal</h2>
                        <p>Este modal é um modal renderizado pelo Portals</p>
                        <button
                            onClick={() => setModalAberto(false)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Fechar Modal
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Exemplo1;
