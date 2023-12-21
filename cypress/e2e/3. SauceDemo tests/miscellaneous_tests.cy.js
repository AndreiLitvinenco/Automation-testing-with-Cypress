describe('Hamburger menu tests', () => {
    it('1. Test if the hangburger menu opens and closes', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').should('exist').click();
        cy.get('.bm-menu').should('exist');
        cy.get('.bm-item-list').should('exist');
        cy.get('#react-burger-cross-btn').should('exist').click();
        cy.get('.bm-menu').should('not.visible');
        cy.get('.bm-item-list').should('not.visible');
        cy.get('#react-burger-cross-btn').should('not.visible');
    })
})


describe('Product info tests', () => {
    it('1. Test if the user can acces the product info upon clicking on the product title ', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('.inventory_details_img').should('exist');
        cy.get('.inventory_details_desc_container').should('exist');
    })

    it('2. Test if "Back to products button works', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('[data-test="back-to-products"]').should('exist').click();
        cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should('exist');
    })
})
