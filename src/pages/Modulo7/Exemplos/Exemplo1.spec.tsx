import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, beforeEach, afterEach, vi, expect } from "vitest";
import Botao from "./Exemplo1";

describe("Testando o componente Botao", () => {
    let funcaoClique: () => void;

    beforeEach(() => {
        funcaoClique = vi.fn();
        render(<Botao nome="Clique aqui" aoClicar={funcaoClique} />);
    });

    afterEach(() => {
        cleanup();
    });

    it("Deve renderizar o botao com o texto correto", () => {
        const botao = screen.getByTestId("botao-customizado");
        expect(botao.textContent).toBe("Clique aqui");
    });

    it("Deve disparar o evento de clique ao ser clicado", () => {
        const botao = screen.getByTestId("botao-customizado");
        fireEvent.click(botao);

        expect(funcaoClique).toHaveBeenCalledTimes(1);
    });

    it("nao deve disparar o eento de clique quando o botao esta desabiitado", () => {
        cleanup();
        render(
            <Botao nome="Clique" aoClicar={funcaoClique} desabilitado={true} />
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
