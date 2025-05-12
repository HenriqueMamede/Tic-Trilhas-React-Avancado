
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Modal from './components/Modal';

function Exemplo1() {
const [modalAberto, setModalAberto] = useState(false);

 return (
    <div className="flex flex-col items-center justify-center h-screen gap-20">
        <h1 className="text-3xl">Exemplo de Portals</h1>
        <Button  onClick={() => setModalAberto(true)} className="cursor-pointer">Abrir Modal</Button>
        {/* // TODO */}
    </div>
 );
}

export default Exemplo1;
