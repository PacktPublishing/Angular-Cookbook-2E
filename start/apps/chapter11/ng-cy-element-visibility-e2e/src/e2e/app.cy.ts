import { getHeaderTitle } from '../support/app.po';

describe('ng-cypress-starter', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the correct header title', () => {
    getHeaderTitle().should('contain.text', 'Validating if a DOM element is visible on the view');
  });
});
