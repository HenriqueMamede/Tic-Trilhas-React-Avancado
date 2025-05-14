import { describe, it, expect } from "vitest";
import { somar, subtrair } from "./mathUtils";

describe("Testando a função somar", () => {
    it("Deve retornar a soma de dois numeros positivos", () => {
        expect(somar(2, 3)).toBe(5);
    });

    it("Deve retornar a soma de dois numeros negativos", () => {
        expect(somar(-2, -3)).toBe(-5);
    });
});

describe("Testando a função subtrair", () => {
    it("Deve retornar a subtracao de dois numeros positivos", () => {
        expect(subtrair(5, 2)).toBe(3);
    });

    it("Deve retornar a subtracao de dois numeros negativos", () => {
        expect(subtrair(-5, -3)).toBe(-2);
    });
});
