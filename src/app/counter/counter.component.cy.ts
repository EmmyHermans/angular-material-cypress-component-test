import { CounterComponent } from './counter.component';

describe(CounterComponent.name, () => {
  it('renders with the counter on 0', () => {
    cy.mount(CounterComponent);
    cy.get('[data-cy=count]').should('have.text', '0');
  });
});
