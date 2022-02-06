describe('Creating and Deleting skills', () => {
    beforeEach(() => cy.loginAsAdminUser())
    //Good practice is to clear the database in the afterEach.
    afterEach(()=> cy.deleteSkill('This is a new skill'))
    it('Creating skills and deleting', () => {
        const skillName = 'This is a new skill'
        cy.visit('https://qa-tech-test-demo.intellihr.net/spa/settings/skills')
        cy.get('a[href="/spa/settings/skills/create"').click()
        cy.get('#name').type(skillName)
        cy.get('.react-select-skillDisciplineId').type('Test{enter}')
        cy.get('#description').type('Testing adding a skill')
        cy.get('button').contains('Save').click()
        //Searching for the skill created
        cy.get('#filterControllerSearchInput').type(skillName)
        //Test to verify if the skill searched is displayed
        cy.get('div[data-component-context=skill-settings-card]').should('be.visible')
        //Test to verify if there is a skill displayed and empty skill doesn't exist
        cy.get('div[data-component-type=empty_state]').should('not.exist')
        //Adding another skill
        cy.get('a[href="/spa/settings/skills/create"').click()
        const newSkillName = 'This is a new skill' + 'part 2'
        cy.get('#name').type(newSkillName)
        cy.get('.react-select-skillDisciplineId').type('Test{enter}')
        cy.get('#description').type('Testing adding another skill')
        cy.get('button').contains('Save').click()
        //Clearing the search field
        cy.get('#filterControllerSearchInput').clear()
        //Searching for the new skill
        cy.get('#filterControllerSearchInput').type('This is a new skill')
        //Test to verify there are two skills displayed
        cy.get('div[data-component-context=skill-settings-card]').should('have.length', 2)
        //Deleting skill by clicking the hamburger and the last option
        cy.get('div[data-component-context=skill-settings-card]').last().find('button').first().click()
        //Selecting the 'Delete' button from the popover
        cy.get('span[data-component-type=popover] ul').find('li').last().click()
        cy.get('.dialog-overlay button').contains('Delete').click()
        cy.get('#filterControllerSearchInput').clear()
        cy.get('#filterControllerSearchInput').type(skillName)
    })

})