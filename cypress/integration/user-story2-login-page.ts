describe('Unauthenticated user visiting the tenant login page', () => {
    it('Username and password fields visible', () => {
      cy.visit('https://qa-tech-test-demo.intellihr.net/spa/settings')
      //Test to verify if login page is visible
      cy.url().should('include', '/auth/login')
      //Test to verify if username and password is visible
      cy.get('#username').should('be.visible')
      cy.get('#password').should('be.visible')
    })
})