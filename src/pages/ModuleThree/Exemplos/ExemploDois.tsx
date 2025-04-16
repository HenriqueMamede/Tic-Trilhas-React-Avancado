import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DetalhesUsuario from "@/pages/ModuleThree/components/DetalhesUsuario.tsx";

const queryClient = new QueryClient();

function MostrarUsuario() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col gap-6 items-center justify-center h-screen'>
        <h1 className='text-2xl'>Bem-vindo à aplicação!</h1>
        <div className='flex items-center w-xs p-4 border border-gray-500 bg-cyan-100 rounded-lg'>
          <DetalhesUsuario />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default MostrarUsuario;
