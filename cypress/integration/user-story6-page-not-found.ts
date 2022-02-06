describe(`Unauthenticated normal user visiting the tenant login page,
          Logging in with correct credentials, should see 'page not found'`, () => {
      it('Login page visible', () => {
        cy.visit('https://qa-tech-test-demo.intellihr.net/configuration/edit', {failOnStatusCode: false} ,)
        cy.url().should('include', '/auth/login')
        cy.loginAsNormalUser()
        //Test to verify if 'Page Not Found' is visible
        cy.get('span[data-component-type=text]').contains('Page Not Found')
        const notFoundImg = cy.get('#404-app img')
        //Test to verify the image is visible
        notFoundImg.should('be.visible')
        notFoundImg.invoke('outerWidth').should('be.gt', 0)
        //Test to verify the image has a sad intelliman
        cy.get('#404-app img').should('have.attr', 'src').should('include', '404-intelliman')
      })
  })