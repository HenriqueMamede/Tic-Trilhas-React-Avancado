import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ListaInterativa from "./Exemplo2";

describe("Testando o componente Lista Interativa", () => {
    it("Deve renderizar a lista inicial corretamente", () => {
        render(<ListaInterativa itensIniciais={["Item 1", "Item 2"]} />);

        const list = screen.getByTestId("lista-itens");

        expect(list.children.length).toBe(2);
        expect(list.textContent).toContain("Item 1");
        expect(list.textContent).toContain("Item 2");
    });

    it("Deve adicionar um novo item na lista", () => {
        render(<ListaInterativa />);
        const input = screen.getByTestId("input-novo-item");
        const botaoAdicionar = screen.getByTestId("botao-adicionar");

        fireEvent.change(input, { target: { value: "Novo item" } });
        fireEvent.click(botaoAdicionar);

        const lista = screen.getByTestId("lista-itens");
        expect(lista.children.length).toBe(1);
        expect(lista.textContent).toContain("Novo item");
    });

    it("Deve remover um item da lista", () => {
        render(<ListaInterativa itensIniciais={["Item 1", "Item 2"]} />);

        const botaoRemover = screen.getByTestId("botao-remover-0");
        fireEvent.click(botaoRemover);

        const lista = screen.getByTestId("lista-itens");

        expect(lista.children.length).toBe(1);
        expect(lista.textContent).not.toContain("Item 1");
    });

    it("Nao deve adicionar itens vazios ou compostos apenas por espaco", () => {
        render(<ListaInterativa />);
        const input = screen.getByTestId("input-novo-item");
        const botaoAdicionar = screen.getByTestId("botao-adicionar");

        fireEvent.change(input, { target: { value: "  " } });
        fireEvent.click(botaoAdicionar);

        const lista = screen.getByTestId("lista-itens");
        expect(lista.children.length).toBe(0);
    });
});
