describe("template spec", () => {
  it("Deve acessar o site de exemplo do cypress", () => {
    cy.visit("https://example.cypress.io");
  });

  it("Deve acessar a página de Actions", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("focus").click();
    cy.url().should("include", "/commands/actions");
  });
});
