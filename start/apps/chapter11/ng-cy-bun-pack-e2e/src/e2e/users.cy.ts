import { getSearchInput, getUsersCards } from '../support/users.po';

describe('Users List Page', () => {
  beforeEach(() => {
    cy.intercept('/assets/users.json').as('searchUsers');
    cy.visit('/users');
  });

  it('should get the users list from the server and display', () => {
    cy.wait('@searchUsers');
    getUsersCards().should('have.length', 10);
  });

  it('should get the users list on searching', () => {
    getSearchInput().type('iri');
    cy.wait('@searchUsers');
    getUsersCards().should('have.length', 1);
    getUsersCards().find('h4').should(
      el => {
        expect(
          el.text().trim()
        ).to.eq(
          'Irineu da Rocha'
        )
      }
    );
  });
});
