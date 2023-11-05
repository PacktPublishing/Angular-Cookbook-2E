import { getCounterActions, getCounterCard, getHeaderTitle, getToggleCounterButton } from '../support/app.po';

describe('ng-cy-element-visibility', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the correct header title', () => {
    getHeaderTitle().should('contain.text', 'Validating if a DOM element is visible on the view');
  });

  it('should toggle visibility of counter card when the toggle button is clicked', () => {
    getCounterCard().should('exist');
    getToggleCounterButton().click();
    getCounterCard().should('not.exist');
    getToggleCounterButton().click();
    getCounterCard().should('exist');
  });

  it('should show the action buttons when the counter card is hovered', () => { 
    getCounterCard().realHover();
    getCounterActions().should('have.length', 3); 
    getCounterActions().contains('Increment').should('be.visible'); 
    getCounterActions().contains('Decrement').should('be.visible'); 
    getCounterActions().contains('Reset').should('be.visible'); 
  });
});
