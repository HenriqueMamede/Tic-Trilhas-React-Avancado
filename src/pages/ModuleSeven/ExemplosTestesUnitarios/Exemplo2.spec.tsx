// src/componentes/ListaInterativa.spec.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Exemplo2 from "./Exemplo2";

describe("Componente Exemplo2", () => {
  it("Deve renderizar a lista inicial corretamente", () => {
    render(<Exemplo2 itensIniciais={["Item 1", "Item 2"]} />);
    const lista = screen.getByTestId("lista-itens");
    expect(lista.children.length).toBe(2);
    expect(lista.textContent).toContain("Item 1");
    expect(lista.textContent).toContain("Item 2");
  });

  // Teste 2: Adicionar um novo item
  // Simula a digitação de um novo item e o clique no botão para verificar se ele é adicionado corretamente à lista
  it("Deve adicionar um novo item na lista", () => {
    render(<Exemplo2 />);
    const input = screen.getByTestId("input-novo-item");
    const botaoAdicionar = screen.getByTestId("botao-adicionar");

    fireEvent.change(input, { target: { value: "Novo Item" } });
    fireEvent.click(botaoAdicionar);

    const lista = screen.getByTestId("lista-itens");
    expect(lista.children.length).toBe(1);
    expect(lista.textContent).toContain("Novo Item");
  });

  // Teste 3: Remover um item
  //Simula o clique no botão de remover e valida se o item correspondente foi excluído da lista.

  it("Deve remover um item da lista", () => {
    render(<Exemplo2 itensIniciais={["Item 1", "Item 2"]} />);
    const botaoRemover = screen.getByTestId("botao-remover-0");

    fireEvent.click(botaoRemover);

    const lista = screen.getByTestId("lista-itens");
    expect(lista.children.length).toBe(1);
    expect(lista.textContent).not.toContain("Item 1");
  });

  // Teste 4: Não adicionar itens inválidos
  // Garante que itens vazios ou compostos apenas por espaços em branco não sejam adicionados à lista.
  it("Não deve adicionar itens vazios ou compostos apenas por espaços", () => {
    render(<Exemplo2 />);
    const input = screen.getByTestId("input-novo-item");
    const botaoAdicionar = screen.getByTestId("botao-adicionar");

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(botaoAdicionar);

    const lista = screen.getByTestId("lista-itens");
    expect(lista.children.length).toBe(0);
  });
});
