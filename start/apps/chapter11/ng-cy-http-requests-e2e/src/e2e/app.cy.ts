import { getHeaderTitle } from '../support/app.po';

describe('ng-cy-forms', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the correct header title', () => {
    getHeaderTitle().should('contain.text', 'Waiting for http requests in Cypress');
  });

});
