import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, beforeEach, vi, expect, Mock } from "vitest";
import Botao from "./Exemplo1";

describe("Componente Botao", () => {
  let funcaoClique: Mock;

  beforeEach(() => {
    funcaoClique = vi.fn();

    render(<Botao nome="Clique Aqui" aoClicar={funcaoClique} />);
  });

  it("Deve renderizar o botão com o texto correto", () => {
    const botao = screen.getByTestId("botao-customizado");
    expect(botao.textContent).toBe("Clique Aqui");
  });

  it("Deve disparar o evento de clique ao ser clicado", () => {
    const botao = screen.getByTestId("botao-customizado");
    fireEvent.click(botao);
    expect(funcaoClique).toHaveBeenCalledTimes(1);
  });

  it("Não deve disparar o evento de clique quando o botão está desabilitado", () => {
    cleanup();
    render(
      <Botao nome="Clique Aqui" aoClicar={funcaoClique} desabilitado={true} />
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
  });
});
