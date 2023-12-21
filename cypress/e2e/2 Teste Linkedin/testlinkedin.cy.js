describe('On linkedin', () => {

    it('I should login', () => {
        cy.visit('https://www.linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('REDACTED');
        cy.get('#password').type("REDACTED");
        cy.get('.btn__primary--large').click();
        //cy.get('.secondary-action').click();
        cy.get('#ember103').should('exist');
        //cy.get('#ember101').click();
    })

})