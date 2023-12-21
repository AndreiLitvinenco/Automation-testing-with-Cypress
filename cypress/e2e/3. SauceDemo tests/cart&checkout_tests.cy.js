describe('Cart tests', () => {

    it('1. Add product to cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item_label').should('exist');
        cy.get('[data-test="checkout"]').should('exist');
    })

    it('2. Remove product from cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.reload();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.cart_item_label').should('not.exist');
    })

    it('3. Checkout a product', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item_label').should('exist');
        cy.get('[data-test="checkout"]').should('exist');
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Michael');
        cy.get('[data-test="lastName"]').type('Jackson');
        cy.get('[data-test="postalCode"]').type('90077');
        cy.get('[data-test="continue"]').click();
        cy.get('.cart_item_label').should('exist');
        cy.get('.summary_info').should('exist');
        cy.get('[data-test="finish"]').should('exist').click();
        cy.get('#checkout_complete_container').should('exist');
    })

})