/// <reference types="cypress" />

describe('Working with inputs', () => {

    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });
 
    it('Should fill username and Password and click the checkbox', () => {
       // fill username
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')

        // fill password
        cy.get('#user_password').clear()
        cy.get('#user_password').type('password')

        // click the checkbox
        cy.get('#user_remember_me').click()

    });

});