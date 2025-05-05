import { render, screen, fireEvent, cleanup } from "@testing-library/react";

// Explicando as funções - prompt de gravação:
// - `render`: Permite renderizar o componente em um ambiente de teste para simular sua exibição no navegador.
// - `screen`: Facilita a busca de elementos renderizados no DOM virtual, como botões ou textos específicos.
// - `fireEvent`: Simula interações do usuário, como cliques ou entradas de teclado, para testar a funcionalidade do componente.
// - `cleanup`: Remove do DOM virtual os elementos renderizados, garantindo que os testes não interfiram entre si.
import { describe, it, beforeEach, afterEach, vi, Mock, expect } from "vitest";
import Exemplo1 from "./Exemplo1";

describe("Componente Exemplo1", () => {
  let funcaoClique: Mock;

  // Configuramos o "ambiente" de teste antes de cada teste
  beforeEach(() => {
    funcaoClique = vi.fn();

    // Por que utilizamos o beforeEach? - prompt de gravação
    // O beforeEach é usado para configurar o ambiente de teste antes de cada execução.
    // Aqui, ele define a função simulada 'funcaoClique' e renderiza o componente <Exemplo1> com ela.
    // Isso garante que cada teste tenha um ambiente limpo e independente, evitando interferências de estados de outros testes.
    render(<Exemplo1 nome="Clique Aqui" aoClicar={funcaoClique} />);
  });

  // Após cada teste, limpamos o DOM
  afterEach(() => {
    cleanup();

    // Por que utilizamos o `cleanup`? - prompt de gravação
    // O `cleanup` remove o DOM virtual dos testes anteriores, garantindo que nenhum elemento remanescente interfira nos próximos testes.
    // Ele é essencial para criar um ambiente de teste limpo e evitar resultados inconsistentes ou conflitos entre testes.
  });

  it("Deve renderizar o botão com o texto correto", () => {
    const botao = screen.getByTestId("botao-customizado");
    expect(botao.textContent).toBe("Clique Aqui");
  });

  it("Deve disparar o evento de clique ao ser clicado", () => {
    const botao = screen.getByTestId("botao-customizado");
    // O `fireEvent` é usado para simular eventos reais do usuário no componente renderizado.
    // Aqui, simulamos um clique no botão, validando se o evento configurado foi acionado corretamente.
    fireEvent.click(botao);
    expect(funcaoClique).toHaveBeenCalledTimes(1);
  });

  it("Não deve disparar o evento de clique quando o botão está desabilitado", () => {
    // Renderizamos o componente com a propriedade desabilitado definida como true
    cleanup();
    render(
      <Exemplo1
        nome="Clique Aqui"
        aoClicar={funcaoClique}
        desabilitado={true}
      />
    );
    const botao = screen.getByTestId("botao-customizado");
    fireEvent.click(botao);
    expect(funcaoClique).toHaveBeenCalledTimes(0);
  });

  it("Deve disparar múltiplos cliques conforme esperado", () => {
    const botao = screen.getByTestId("botao-customizado");
    fireEvent.click(botao);
    fireEvent.click(botao);
    expect(funcaoClique).toHaveBeenCalledTimes(2);

    // Explicação da asserção:
    // A função `toHaveBeenCalledTimes` verifica o número exato de vezes que a função simulada foi chamada.
    // Neste caso, garantimos que a função `funcaoClique` tenha sido chamada exatamente duas vezes,
    // validando que o componente está respondendo corretamente aos cliques múltiplos.
  });
});
