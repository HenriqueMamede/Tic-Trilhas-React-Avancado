import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import ListaInterativa from "./Exemplo2";

describe.only("Testando o componente de lista", () => {
    afterEach(() => {
        cleanup();
    });

    it("Deve renderizar a lista inicial corretamente", () => {
        render(<ListaInterativa itensIniciais={["Item 1", "Item 2"]} />);

        const lista = screen.getByTestId("lista-itens");

        expect(lista.children.length).toBe(2);
        expect(lista.textContent).toContain("Item 1");
        expect(lista.textContent).toContain("Item 2");
    });

    it("Deve adicionar um novo item na lista", () => {
        render(<ListaInterativa />);
        const input = screen.getByTestId("input-novo-item");
        const botaoAdicionar = screen.getByTestId("botao-adicionar");

        fireEvent.change(input, { target: { value: "Novo Item" } });
        fireEvent.click(botaoAdicionar);

        const lista = screen.getByTestId("lista-itens");

        expect(lista.children.length).toBe(1);
        expect(lista.textContent).toContain("Novo Item");
    });

    it("Deve remover um item da lista", () => {
        render(<ListaInterativa itensIniciais={["Item 1", "Item 2"]} />);
        const botaoRemover = screen.getByTestId("botao-remover-0");

        fireEvent.click(botaoRemover);

        const lista = screen.getByTestId("lista-itens");

        expect(lista.children.length).toBe(1);
        expect(lista.textContent).not.toContain("Item 1");
    });

    it("Não deve adicionar itens vazios ou compostos por apenas espaços vazios", () => {
        render(<ListaInterativa />);
        const input = screen.getByTestId("input-novo-item");
        const botaoAdicionar = screen.getByTestId("botao-adicionar");

        fireEvent.change(input, { target: { value: "  " } });
        fireEvent.click(botaoAdicionar);

        const lista = screen.getByTestId("lista-itens");

        expect(lista.children.length).toBe(0);
    });
});
