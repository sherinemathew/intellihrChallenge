describe('Visiting homepage as anonymous user', () => {
  //Visit the website before each test
  beforeEach(() => cy.visit('https://www.intellihr.com'))
    //Test to verify the intelliHR logo
    it('Logo is visible on homepage', () => {
      cy.get('#header-logo').should('be.visible')
    })
    it(`Multiple case studies visible on selecting 'Case Studies'
    On selecting 'Fujitsu General', Download button is visible`, () => {
      cy.scrollTo('bottom')
      cy.get('#menu-footer-intellihr').contains('Case studies').click()
      //Test to verify if multiple case studies are visible
      cy.get('.post-result-container').children('a').should('have.length.gte', 1)
      //Test to verify 'Fujitsu General' is visible
      cy.get('a[href="https://intellihr.com/case-studies/fujitsu-general"]').click()
      //Test to verify 'Download Now' button is visible
      cy.contains('button[type=submit]', 'Download now').should('be.visible')
    })
})