import { useState, useEffect } from 'react';

function ExibirPosicaoDoScroll() {
  const [posScroll, setPosScroll] = useState(0);

  useEffect(() => {
    const atualizaPosScroll = () => {
      setPosScroll(window.scrollY);
    };

    window.addEventListener('scroll', atualizaPosScroll);

    return () => {
      window.removeEventListener('scroll', atualizaPosScroll);
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