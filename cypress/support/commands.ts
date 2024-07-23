/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getBySelector(
      selector: string,
      ...args: any[]
    ): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add('getBySelector', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
