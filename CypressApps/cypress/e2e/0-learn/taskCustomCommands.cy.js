/// <reference types="cypress" />

describe('Test Payment zero webapps', () => {
  
    it('Login to zero web app and make a payment', () => {

        // Login to website

        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture("userData").then(user => {
            const username = user.zeroWebApp.username
            const password = user.zeroWebApp.password

        cy. loginZeroWebApp(username, password)

        cy.get('.brand').should('have.text','Zero Bank')

        // Make a payments

        cy.get('#pay_bills_tab').click()

        cy.get('h2').should('have.text', 'Make payments to your saved payees')

        cy.get('#sp_payee').select('Apple')

        cy.get('#sp_account').select(0)

        cy.get('#sp_amount').type('1000')

        cy.get('#sp_date').click()

        cy.get('.ui-datepicker-title').click()

        cy.contains('15').click()

        cy.get('input[name="description"]').type('Make a payment')

        cy.get('input[type="submit"]').click()

        cy.get('#alert_content').should('have.text', 'The payment was successfully submitted.')
        
    });
    
    });

    
})

  

