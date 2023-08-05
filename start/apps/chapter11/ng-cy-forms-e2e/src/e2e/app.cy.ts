import { getHeaderTitle, getLatestVersion, getLogsListItems, getSubmitButton, getVersionInput } from '../support/app.po';

describe('ng-cy-element-visibility', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the correct header title', () => {
    getHeaderTitle().should('contain.text', 'Testing form inputs and submission in Cypress');
  });

  it('should have the submit button disabled on invalid input', () => {
    getVersionInput().type('invalid input');
    getSubmitButton().should('be.disabled');
    getVersionInput().clear();
    getSubmitButton().should('be.disabled');
    getVersionInput().type('0.0.1');
    getSubmitButton().should('be.enabled');
  });

  it('should add a new version log on valid version submission', () => {
    getLogsListItems().should('have.length', 1);
    getVersionInput().type('0.0.1');
    getSubmitButton().click();
    getLogsListItems().should('have.length', 2);
    getLogsListItems().eq(1).then(el => {
      expect(
        el.text().trim()
      ).to.eq('version changed to 0.0.1')
    });
  });

  it.only('should display the latest version', () => {
    getLatestVersion().should('have.text', 'Latest Version = 0.0.0');
    getVersionInput().type('0.0.1');
    getSubmitButton().click();
    getLatestVersion().should('have.text', 'Latest Version = 0.0.1');
  });
});
