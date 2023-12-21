const { it } = require("mocha");

describe("Site google.com", () => {

    it("functioneaza cu o cautare basic", () => {
        cy.visit("https://google.com");
        cy.get('.jw8mI').scrollTo('bottom').get('#L2AGLb').click();
        cy.get(".gLFyf").type("vlog de it {enter}")
        // cy.get('.gNO89b').click();
    
        cy.get('#result-stats').should('exist');
    })
})