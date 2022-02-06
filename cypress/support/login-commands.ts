declare global {
    namespace Cypress {
      interface Chainable {
          loginAsNormalUser: typeof loginAsNormalUser;
          loginAsManagerUser: typeof loginAsManagerUser;
          loginAsAdminUser: typeof loginAsAdminUser;
      }
    }
  }

  export const loginAsNormalUser = () => {
    cy.visit('https://qa-tech-test-demo.intellihr.net/auth/login');
    const userName = Cypress.env("normalUserName");
    const userPassword = Cypress.env("normalUserPassword");
    cy.get('#username').type(userName);

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${userPassword}{enter}`);
  };

  export const loginAsManagerUser = () => {
      cy.visit('https://qa-tech-test-demo.intellihr.net/auth/login');
      const userName = Cypress.env('managerUsername');
      const userPassword = Cypress.env('managerPassword');
      cy.get('#username').type(userName);

      // {enter} causes the form to submit
      cy.get('input[name=password]').type(`${userPassword}{enter}`);
    };

    export const loginAsAdminUser = () => {
      cy.visit('https://qa-tech-test-demo.intellihr.net/auth/login');
      const userName = Cypress.env('adminUserName');
      const userPassword = Cypress.env('adminPassword');
      cy.get('#username').type(userName);

      // {enter} causes the form to submit
      cy.get('input[name=password]').type(`${userPassword}{enter}`);
    };