import { CounterComponent } from './counter.component';

describe(CounterComponent.name, () => {
  it('renders with the counter on 0', () => {
    cy.mount(CounterComponent);
    cy.getBySelector('count').should('have.text', '0');
  });

  it('increments the counter', () => {
    cy.mount(CounterComponent);
    cy.getBySelector('increment-button').click();
    cy.getBySelector('count').should('have.text', '1');
    cy.getBySelector('increment-button').click();
    cy.getBySelector('count').should('have.text', '2');
  });

  it('decrements the counter', () => {
    cy.mount(CounterComponent);
    cy.getBySelector('decrement-button').click();
    cy.getBySelector('count').should('have.text', '-1');
    cy.getBySelector('decrement-button').click();
    cy.getBySelector('count').should('have.text', '-2');
  });
});
