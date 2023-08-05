export const getHeaderTitle = () => cy.get('.toolbar__title');
export const getVersionInput = () => cy.get('[data-test-id="versionInput"]');
export const getRequiredError = () => cy.get('[data-test-id="versionReqErr"]');
export const getMismatchError = () => cy.get('[data-test-id="versionMismatchErr"]');
export const getSubmitButton = () => cy.get('[data-test-id="submitVersionBtn"]');
export const getLogsListItems = () => cy.get('[data-test-id="logsList"] .logs__item');
export const getLatestVersion = () => cy.get('[data-test-id="latestVersion"]');
