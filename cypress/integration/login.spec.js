/* eslint-disable no-undef */

describe("Login", () => {
    it("should login successfully", () => {
        cy.signup();
        cy.wait(2000);
        cy.visit("http://localhost:3000/login");
        cy.get("input[type=email]").type("cypress@teste.com");
        cy.get("input[type=password]").type("cypress");
        cy.get("button[type=submit]").click();
        cy.url().should("equal", "http://localhost:3000/plans");
    });
  });