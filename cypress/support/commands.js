/* eslint-disable no-undef */
Cypress.Commands.add("login", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[type=email]").type("cypress@teste.com");
    cy.get("input[type=password").type("cypress");
    cy.get("button[type=submit]").click();
    cy.url().should("equal", "http://localhost:3000/pagina-protegida");
});

Cypress.Commands.add("signup", () => {
    cy.visit("http://localhost:3000/sign-up");
    cy.get("input[type=text]").type("Cypress");
    cy.get("input[type=email]").type("cypress@teste.com");
    cy.get("input[placeholder='Senha'").type("cypress");
    cy.get('input[placeholder="Confirmar senha"').type("cypress");
    cy.get("button[type=submit]").click();
});