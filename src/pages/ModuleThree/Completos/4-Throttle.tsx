import { useState, useEffect } from 'react';

function ExibirPosicaoDoScroll() {
  const [posScroll, setPosScroll] = useState(0);

  useEffect(() => {
    let idTimeout: number; // Armazena o identificador do timeout

    const atualizaPosScroll = () => {
      setPosScroll(window.scrollY);
    };

    const throttleScroll = () => {
      if (idTimeout) {
        clearTimeout(idTimeout); // Limpa o timeout anterior
      }

      idTimeout = window.setTimeout(() => {
        atualizaPosScroll();
      }, 200); // Executa a função após 200ms
    };

    window.addEventListener('scroll', throttleScroll);

    return () => {
      window.removeEventListener('scroll', throttleScroll);
      clearTimeout(idTimeout); // Limpa o timeout quando o componente é desmontado
    };
  }, []);

  return (
    <div className='h-[4000px]'>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center justify-center p-5 border border-gray-500 bg-white rounded-lg">
        <h1 className='text-2xl'>Exemplo com Throttle</h1>
        <p>Posição de rolagem: {posScroll}px</p>
      </div>
    </div>
  );
}

export default ExibirPosicaoDoScroll;