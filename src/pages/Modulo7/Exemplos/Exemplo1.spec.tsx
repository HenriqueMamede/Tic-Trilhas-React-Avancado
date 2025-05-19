import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { describe, it, beforeEach, afterEach, vi, expect } from "vitest";
import Botao from "./Exemplo1";

describe.only("Testando o componente Botão", () => {
    let funcaoClique: () => void;

    beforeEach(() => {
        funcaoClique = vi.fn();
        render(<Botao nome="Clique Aqui" aoClicar={funcaoClique} />);
    });

    afterEach(() => {
        cleanup();
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

    it("Não deve disparar o evento de clique quando botão está desabilitado", () => {
        cleanup();
        render(
            <Botao
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
    });
});
