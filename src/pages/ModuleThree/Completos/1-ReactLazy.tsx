import { lazy, Suspense } from 'react';

const ComponenteDemorado = lazy(() => import('./components/ComponenteDemorado'));

function ExemploUm() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center h-screen'>
      <h1 className='text-2xl'>Exemplo de React.lazy com Suspense</h1>

      <div className='p-4 bg-gray-300 rounded-lg'>
        {/* Suspense envolve o componente e exibe um fallback enquanto ele carrega */}
        <Suspense fallback={<div>Carregando componente...</div>}>
          <ComponenteDemorado />
        </Suspense>
      </div>
    </div>
  );
}

export default ExemploUm;
