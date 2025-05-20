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

    it("Ao adicionar uma tarefa deve apareer na lista de tarefas da tabela", () => {
        cy.get(`[data-testid="sem-dados"]`).should("be.visible");
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="sem-dados"]`).should("not.exist");
        cy.get(`[data-testid="texto-tarefa"]`)
            .eq(0)
            .should("contain", "Tarefa 1");

        cy.get(`[data-testid="status-tarefas"]`)
            .eq(0)
            .should("contain", "Não finalizada");
    });

    it("Deve ser possível remover uma tarefa", () => {
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 1");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="input-tarefa"]`).type("Tarefa 2");
        cy.get(`[data-testid="adicionar-tarefa"]`).click();
        cy.get(`[data-testid="remover-tarefa"]`).eq(0).click();
        cy.get(`[data-testid="texto-tarefa"]`).should(
            "not.contain",
            "Tarefa 1"
        );
    });

    it('Deve ser possivel marcar uma tarefa como "finalizada"', () => {
        cy.get('[data-testid="input-tarefa"]').type("Tarefa 1");
        cy.get('[data-testid="adicionar-tarefa"]').click();
        cy.get('[data-testid="mudar-status"]').eq(0).click();
        cy.get('[data-testid="status-tarefas"]')
            .eq(0)
            .should("contain", "Finalizada");
        cy.get('[data-testid="icone-finalizada"]').eq(0).should("be.visible");
    });

    it('Deve ser possivel marcar uma tarefa como "não finalizada"', () => {
        cy.get('[data-testid="input-tarefa"]').type("Tarefa 1");
        cy.get('[data-testid="adicionar-tarefa"]').click();
        cy.get('[data-testid="mudar-status"]').eq(0).click();
        cy.get('[data-testid="status-tarefas"]')
            .eq(0)
            .should("contain", "Finalizada");
        cy.get('[data-testid="mudar-status"]').eq(0).click();
        cy.get('[data-testid="status-tarefas"]')
            .eq(0)
            .should("contain", "Não finalizada");
        cy.get('[data-testid="icone-nao-finalizada"]')
            .eq(0)
            .should("be.visible");
    });
});
