
describe('ng-cy-http-requests > users', () => {
  beforeEach(() => {
    cy.intercept('/assets/users.json').as('searchUsers');
    cy.visit('/users');
  });
});
