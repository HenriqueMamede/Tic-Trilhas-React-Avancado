import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetalhesUsuario from './components/DetalhesUsuario';
import { Suspense } from 'react';

const queryClient = new QueryClient();

const ExemploDois = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col gap-6 items-center justify-center h-screen'>
        <h1 className='text-2xl'>Bem-vindo à aplicação!</h1>
        <div className='flex items-center w-xs p-4 border border-gray-500 bg-cyan-100 rounded-lg'>
          <Suspense fallback={<div>Carregando dados do usuário...</div>}>
            <DetalhesUsuario />
          </Suspense>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default ExemploDois;
