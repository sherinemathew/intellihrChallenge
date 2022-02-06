describe('Authenticated normal user visiting dashboard', () => {
    //Login as normal user before each test
    beforeEach(() => cy.loginAsNormalUser())
    it('Dashboard is visible', () => {
        cy.url().should('include', 'dashboard')
    })
    it('Greeting is visible', () => {
        //Regex expression to verify if either morning, afternoon or night is visible
        cy.contains('h1', /Good morning|afternoon|night, Ally/).should('exist')
    })
})