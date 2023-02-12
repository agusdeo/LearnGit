/// <reference types="cypress" />

describe('My First Test', () => {
  it('Get types and assert', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('focus').click()
    cy.url().should('include', '/commands/action')
    cy.get('.action-email').type('agus@email.com')
    cy.get('.action-email').should('have.value', 'agus@email.com')
  });
});