declare global {
    namespace Cypress {
      interface Chainable {
        deleteSkill: typeof deleteSkill
      }
    }
  }

  export const deleteSkill = (skillName: string) => {
    cy.get('#filterControllerSearchInput').clear()
    cy.get('#filterControllerSearchInput').type(skillName)
    cy.get('div[data-component-context=skill-settings-card]').first().find('button').first().click()
    cy.get('span[data-component-type=popover] ul').find('li').last().click()
    cy.get('.dialog-overlay button').contains('Delete').click()
  };