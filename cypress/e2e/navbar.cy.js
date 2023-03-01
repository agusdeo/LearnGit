/// <reference types="cypress" />

describe('Navbar Test', () => {

    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    });
    it('Should display online bangking app', () => {
        cy.get('#onlineBankingMenu').click()
        cy.get('h1').should('have.text', 'Online Banking')

    })
    it('Should display feedback content', () => {
        cy.get('#onlineBankingMenu').click()

        cy.get('#feedback').click()
        cy.get('#faq-link').should('have.text', 'Frequently Asked Questions')
        
    });
    it('Should display homepage content', () => {
        cy.get('#onlineBankingMenu').click()
        
        cy.get('#feedback').click()
        cy.get('#faq-link').should('have.text', 'Frequently Asked Questions')
        
        cy.get('.brand').click()
        cy.get('p').should('contain.text', 'Welcome to Zero Online Banking.')
        
    });


});