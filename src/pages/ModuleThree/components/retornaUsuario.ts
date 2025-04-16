interface Usuario {
  nome: string;
  idade: number;
  cargo: string;
}

async function retornaUsuario() {
  const resposta: Usuario = await new Promise(
    (resolve) => setTimeout(
      () => resolve({
        nome: 'João Silva',
        idade: 23,
        cargo: 'Desenvolvedor'
      }),
      5000
    )
  );

  return resposta;
}

export default retornaUsuario;
