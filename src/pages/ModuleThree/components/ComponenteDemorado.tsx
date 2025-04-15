import { useEffect } from 'react';

const ComponenteDemorado = () => {
  // Simulação de uma operação demorada, atrasando o carregamento do componente
  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 100000000; j++);
    }
  });

  return <div>Componente carregado com sucesso!</div>;
};

export default ComponenteDemorado;
