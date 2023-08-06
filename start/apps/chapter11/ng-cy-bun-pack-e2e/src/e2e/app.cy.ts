import { getHeaderTitle } from '../support/app.po';

describe('App', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the correct header title', () => {
    getHeaderTitle().should('contain.text', 'Using Cypress bundled packages');
  });

});
