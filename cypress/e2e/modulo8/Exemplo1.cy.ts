describe("Testando a Lista Interativa", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5173/modulo-oito");
    });

    it("Deve acessar a lista interativa do modulo 8", () => {
        cy.visit("http://localhost:5173/modulo-oito");
    });

    it("Deve aparecer a informação 'Não há dados' se não houver tarefas cadastradas", () => {
        cy.get(`[data-testid="sem-dados"]`).should("be.visible");
    });

    it("Não deve ser possível adicionar tarefas se o input estiver vazio", () => {
        cy.get(`[data-testid="input-tarefa"]`).should("be.empty");
        cy.get(`[data-testid="adicionar-tarefa"]`).should("be.disabled");
    });

    it("Deve ser possível adicionar tarefas se o input não estiver vazio", () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).should("not.be.disabled");
    });
});
