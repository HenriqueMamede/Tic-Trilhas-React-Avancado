import { useState } from 'react';

const ModuloSeis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
      <h1 className="text-3xl">Exemplo de Portals</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Abrir Modal
      </button>
      {isModalOpen && (
        <div>
          /* adicionar modal */
        </div>
      )}
    </div>
    );
};


export default ModuloSeis;
