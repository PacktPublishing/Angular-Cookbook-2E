import { getHeaderTitle, getLatestVersion, getLogsListItems, getMismatchError, getRequiredError, getSubmitButton, getVersionInput } from '../support/app.po';

describe('ng-cy-forms', () => {
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

  it('should display the latest version', () => {
    getLatestVersion().should('have.text', 'Latest Version = 0.0.0');
    getVersionInput().type('0.0.1');
    getSubmitButton().click();
    getLatestVersion().should('have.text', 'Latest Version = 0.0.1');
  });

  it('should show the version required error when the input gets clered after typing something', () => {
    getVersionInput().type('0.0.1');
    getVersionInput().clear();
    getRequiredError().should('exist');
    getRequiredError().should('be.visible');
    getRequiredError().then(el => {
      expect(
        el.text().trim()
      ).to.eq('Version number is required')
    });
  });

  it('should show the invalid input error when the version input is invalid', () => {
    getVersionInput().type('abc123');
    getMismatchError().should('exist');
    getMismatchError().should('be.visible');
    getMismatchError().then(el => {
      expect(
        el.text().trim()
      ).to.eq('Version number does not match the pattern (x.x.x)')
    });
  });
});
