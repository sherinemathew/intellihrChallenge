
describe(`Authenticated manager user visiting the profile page,
          'Job' tab visible and on clicking it, 'Remuneration Schedule' is visible,
          On clicking 'Show Content' button, salary figure is visible`, { viewportWidth: 1280, viewportHeight: 720 }, () => {
      it(`Manager logging in and visiting profile page, 'Job' tab is visible`, () => {
        cy.loginAsManagerUser()
        //Navigating to the profile page
        cy.get('a[data-component-context=sidebar_my_profile]').click()
        //Test to verify if 'Job' tab is visible
        cy.get('div[data-component-type=scrolling_tab_group] ul').find('li').contains('Job').should('be.visible').click()
        //Test to verify if 'Remuneration Schedule' is visible
        cy.get('span[data-component-type=text]').contains('Remuneration Schedule').should('be.visible')
        cy.get('button').contains('Show Content').click()
        //Regex expression to verify a salary figure is visible.
        cy.get('span[data-component-type=currency_text]').children().last().contains(/[0-9]+/)
      })
  })