// This user story is not complete

//Function to go to the People page and type 'Lyanna' into the search field
function visitPeoplePage () {
    cy.get('ul[data-component-context=sidebar]').find('li>a[data-component-context=sidebar_people_index]').click()
    cy.get('input[data-component-context=filter-controller-search-input]').type('Lyanna')
}

describe(`Authenticated admin user visiting the people page,
         Searching for 'Lyanna' displays her profile page,
         Verifying email address section`, { viewportWidth: 1280, viewportHeight: 720 }, () => {
    beforeEach(() => cy.loginAsAdminUser())
    it(`Admin is logging in and visiting profile page, searching for 'Lyanna' returns only one result`, () => {
        visitPeoplePage()
        //Test to verify the search displays only 1 person
        cy.get('span[data-component-context=total-person-count').contains('1 person')
    })
    it(`Verifying first email for Lyanna`, () => {
        visitPeoplePage()
        cy.wait(2000)
        cy.get('div[data-component-context=avatar-tile]').click()
        //Test to verify if the position of email id is on the first row)
        const firstEmailContainer = cy.get('div[data-component-context=email-address-smart-list]').children().eq(1)
        //Test to verify if the anchor element contains the email id
        firstEmailContainer.find('a').contains('demo@intellihr.com')
        //Test to verify if the first email entry has the 'Primary' and 'Personal' tags
        cy.get('div[data-component-context=email-address-smart-list]').children().eq(1).find('span[data-component-context="email-address-demo@intellihr.com-pill-primary"]').contains('Primary')
        cy.get('div[data-component-context=email-address-smart-list]').children().eq(1).find('span[data-component-context="email-address-demo@intellihr.com-pill-personal"]').contains('Personal')
    })
    it(`Verifying second email for Lyanna`, () => {
        visitPeoplePage()
        cy.wait(2000)
        cy.get('div[data-component-context=avatar-tile]').click()
        //Test to verify if the position of email id is on the second row)
        const secondEmailContainer = cy.get('div[data-component-context=email-address-smart-list]').children().eq(2)
        secondEmailContainer.find('a').contains('demo@intellihr.com')
        //Test to verify if the first email entry has the 'Personal' tag and no 'Primary' tag
        cy.get('div[data-component-context=email-address-smart-list]').children().eq(2).find('span[data-component-context="email-address-demo@intellihr.com.au-pill-personal"]').contains('Personal')
        cy.get('div[data-component-context=email-address-smart-list]').children().eq(2).find('span[data-component-context="email-address-demo@intellihr.com-pill-primary"]').should('not.exist')
    })
})