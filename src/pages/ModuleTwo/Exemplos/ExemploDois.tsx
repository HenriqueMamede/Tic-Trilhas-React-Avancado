import { useState } from 'react';
import { Button } from "@/components/ui/button.tsx";

interface IUsuario {
  id: number;
  nome: string;
  ativo: boolean;
}

const usuarios: IUsuario[] = [
  { id: 1, nome: 'Usuário 1', ativo: true },
  { id: 2, nome: 'Usuário 2', ativo: false },
  { id: 3, nome: 'Usuário 3', ativo: true },
  { id: 4, nome: 'Usuário 4', ativo: false },
  { id: 5, nome: 'Usuário 5', ativo: true },
  // ... mais 1000 usuários
];

function ExemploDois() {
  // Filtragem de usuários ativos, executada toda vez que o componente for renderizado
  const usuariosAtivos = usuarios.filter((usuario) => usuario.ativo);

  // Ao atualizar este estado, o componente será renderizado novamente
  const [contagemNotificacoes, setContagemNotificacoes] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col gap-6 items-center'>
        <h1 className='text-3xl'>Central de Notificações</h1>
        <div className='flex flex-col gap-1'>
          <p>{`Usuários ativos: ${usuariosAtivos.length}`}</p>
          <p>{`Contagem de notificações enviadas: ${contagemNotificacoes}`}</p>
        </div>
        <Button
          className="cursor-pointer"
          onClick={() => setContagemNotificacoes(contagemNotificacoes + 1)}
        >
          Enviar Notificações
        </Button>
      </div>
    </div>
  )
}

export default ExemploDois;
