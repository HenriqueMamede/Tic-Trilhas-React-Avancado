describe("Exemplo1 spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/modulo-sete");
    cy.get('[data-testid="exemplo-cypress-0"]').click();
  });

  //   it("Deve acessar a página de exemplos do cypress do modulo-sete", () => {
  //     cy.visit("http://localhost:5173/modulo-sete");
  //     cy.get('[data-testid="exemplo-cypress-0"]').click();
  //   });

  it("Deve aparecer a informação que não há dados se não houver tarefas cadastradas", () => {
    cy.get('[data-testid="sem-dados"]').should("be.visible");
  });

  it("Não deve ser possivel adicionar tarefas se o input estiver vazio", () => {
    cy.get('[data-testid="tarefa"]').should("be.empty");
    cy.get('[data-testid="adicionar-tarefa"]').should("be.disabled");
  });

  it("Deve ser possivel adicionar tarefas se o input não estiver vazio", () => {
    cy.get('[data-testid="tarefa"]').type("Tarefa 1");
    cy.get('[data-testid="adicionar-tarefa"]').should("not.be.disabled");
  });

  it("Ao adicionar uma tarefa deve aparecer na lista de tarefas da tabela", () => {
    cy.get('[data-testid="sem-dados"]').should("be.visible");
    cy.get('[data-testid="tarefa"]').type("Tarefa 1");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="sem-dados"]').should("not.exist");
    cy.get('[data-testid="texto-tarefa"]').eq(0).should("contain", "Tarefa 1");
    cy.get('[data-testid="status-tarefas"]')
      .eq(0)
      .should("contain", "Não finalizada");
  });

  it("Deve ser possivel remover uma tarefa", () => {
    cy.get('[data-testid="tarefa"]').type("Tarefa 1");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="tarefa"]').type("Tarefa 2");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="remover-tarefa"]').eq(0).click();
    cy.get('[data-testid="texto-tarefa"]')
      .eq(0)
      .should("not.contain", "Tarefa 1");
  });

  it('Deve ser possivel marcar uma tarefa como "finalizada"', () => {
    cy.get('[data-testid="tarefa"]').type("Tarefa 1");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="mudar-status"]').eq(0).click();
    cy.get('[data-testid="status-tarefas"]')
      .eq(0)
      .should("contain", "Finalizada");
    cy.get('[data-testid="icone-finalizada"]').eq(0).should("be.visible");
  });

  it('Deve ser possivel marcar uma tarefa como "não finalizada"', () => {
    cy.get('[data-testid="tarefa"]').type("Tarefa 1");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="mudar-status"]').eq(0).click();
    cy.get('[data-testid="status-tarefas"]')
      .eq(0)
      .should("contain", "Finalizada");
    cy.get('[data-testid="mudar-status"]').eq(0).click();
    cy.get('[data-testid="status-tarefas"]')
      .eq(0)
      .should("contain", "Não finalizada");
    cy.get('[data-testid="icone-nao-finalizada"]').eq(0).should("be.visible");
  });

  it("Deve ser possivel filtrar as tarefas finalizada", () => {
    cy.get('[data-testid="tarefa"]').type("Tarefa 1");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="tarefa"]').type("Tarefa 2");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="mudar-status"]').eq(0).click();
    cy.get('[data-testid="filtro-finalizadas"]').click();
    cy.get('[data-testid="status-tarefas"]').each(($status) => {
      cy.wrap($status).should("contain", "Finalizada");
    });
    cy.get('[data-testid="label-filtro').should(
      "contain",
      "Visualizando: Tarefas finalizadas"
    );
  });

  it("Deve ser possivel filtrar as tarefas não finalizadas", () => {
    cy.get('[data-testid="tarefa"]').type("Tarefa 1");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="mudar-status"]').eq(0).click();
    cy.get('[data-testid="tarefa"]').type("Tarefa 2");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="filtro-nao-finalizadas"]').click();
    cy.get('[data-testid="status-tarefas"]').each(($status) => {
      cy.wrap($status).should("contain", "Não finalizada");
    });
    cy.get('[data-testid="label-filtro').should(
      "contain",
      "Visualizando: Tarefas não finalizadas"
    );
  });

  it("Deve ser possivel filtrar todas as tarefas", () => {
    cy.get('[data-testid="tarefa"]').type("Tarefa 1");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="tarefa"]').type("Tarefa 2");
    cy.get('[data-testid="adicionar-tarefa"]').click();
    cy.get('[data-testid="mudar-status"]').eq(0).click();
    cy.get('[data-testid="filtro-todas"]').click();
    cy.get('[data-testid="label-filtro').should(
      "contain",
      "Visualizando: Todas tarefas"
    );
  });
});
