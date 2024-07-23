import { CounterComponent } from './counter.component';

describe(CounterComponent.name, () => {
  it('renders', () => {
    cy.mount(CounterComponent);
  });
});
