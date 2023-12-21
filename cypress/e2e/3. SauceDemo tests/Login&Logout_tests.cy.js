describe('Login tests', () => {
	it('1. Login with right credentials - standard_user & secret_sauce', () => {
		cy.visit('https://www.saucedemo.com/');
		
		cy.get('[data-test="username"]').type('standard_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		cy.get('.shopping_cart_link').should('exist');
	})

	it('2. Login with right credentials - locked_out_user & secret_sauce', () => {
		cy.visit('https://www.saucedemo.com/');
		
		cy.get('[data-test="username"]').type('locked_out_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		// cy.get('.shopping_cart_link').should('exist');
		cy.get('[data-test="error"]').should('exist');
	})

	it('3. Login with right credentials - problem_user & secret_sauce', () => {
		cy.visit('https://www.saucedemo.com/');
		
		cy.get('[data-test="username"]').type('locked_out_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		// cy.get('.shopping_cart_link').should('exist');
		cy.get('[data-test="error"]').should('exist');
	})

	it('4. Login with right credentials - performance_glitch_user & secret_sauce', () => {
		cy.visit('https://www.saucedemo.com/');
		
		cy.get('[data-test="username"]').type('performance_glitch_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		cy.get('.shopping_cart_link').should('exist');
	})



	it('5. Login with wrong credentials', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.get('[data-test="username"]').type('NotSoStandard');
		cy.get('[data-test="password"]').type('NotSoStandard');
		cy.get('[data-test="login-button"]').click();
		cy.get('[data-test="error"]').should('exist');
	})

	it('6. Test to check of login state remains after leaving', () => {
		cy.visit('https://www.saucedemo.com/');
		cy.get('[data-test="username"]').type('standard_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should('exist');
		cy.visit('https://www.google.com');
		cy.reload();
		cy.get('.jw8mI').scrollTo('bottom');
		cy.get('#L2AGLb > .QS5gu').click();
		cy.reload();
		cy.visit('https://www.saucedemo.com/');
		cy.get(':nth-child(2) > :nth-child(1) > #inventory_container').should('exist');
		cy.log('Did not pass the test');
		cy.screenshot('test');
	})


})

describe('Logout tests', () => {
	const url = 'https://www.saucedemo.com/';

	it('1. Simple logout', () => {
		cy.visit(url);
	
		cy.get('[data-test="username"]').type('standard_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		cy.get('#react-burger-menu-btn').should('exist').click();
		cy.get('#logout_sidebar_link').click();
		cy.get('#login_credentials').should('exist');
	})

	it('2. Logout with items in cart', () => {
		cy.visit(url);
	
		cy.get('[data-test="username"]').type('standard_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		
		cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
		cy.get('.shopping_cart_link').click();
		
		cy.get('#react-burger-menu-btn').click();
		cy.get('#logout_sidebar_link').click();
		
		cy.get('[data-test="username"]').type('standard_user');
		cy.get('[data-test="password"]').type('secret_sauce');
		cy.get('[data-test="login-button"]').click();
		
		cy.get('.shopping_cart_link').click();
		cy.get('.cart_item_label').should('exist');
	})
})
