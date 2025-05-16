import { describe, it, expect } from "vitest";
import { somar, subtrair } from "./mathUtils";

describe("Testando a função somar", () => {
    it("Deve somar dois números corretamente", () => {
        expect(somar(2, 3)).toBe(5);
    });

    it("Deve retornar a soma de dois números negativos", () => {
        expect(somar(-2, -3)).toBe(-5);
    });
});

describe("Testando a função subtrair", () => {
    it("Deve retornar a subtração de dois números positivos", () => {
        expect(subtrair(5, 3)).toBe(2);
    });

    it("Deve retornar a subtração de dois números negativos", () => {
        expect(subtrair(-5, -3)).toBe(-2);
    });
});
