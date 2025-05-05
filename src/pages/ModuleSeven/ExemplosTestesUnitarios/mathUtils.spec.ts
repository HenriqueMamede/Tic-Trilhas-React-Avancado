describe("Testando a função 'somar'", () => {
  it("Deve retornar a soma de dois números positivos", () => {
    expect(somar(2, 3)).toBe(5);
  });
  it("Deve retornar a soma de números negativos", () => {
    expect(somar(-2, -3)).toBe(-5);
  });
});
