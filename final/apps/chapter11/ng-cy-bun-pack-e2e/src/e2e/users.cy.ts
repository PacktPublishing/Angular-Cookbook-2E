import { getNoResultsMessage, getSearchInput, getUsersCards } from '../support/users.po';

const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{2}$/;

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

  it('should show the no results found message on search', () => {
    const { $ } = Cypress;
    cy.wait('@searchUsers');
    const searchInput = $('[data-test-id="searchUsersInput"]');
    cy.wrap(searchInput).type('abc123');
    getNoResultsMessage().then((el) => {
      expect(el).to.exist;
      expect(el.text().trim()).to.eq('Nothing returned for the following search');
    });
  });

  it('should show the dob on each user in the correct format', () => {
    const { $, _ } = Cypress;
    cy.wait('@searchUsers');
    getUsersCards().then((cards) => {
      _.forEach(cards, (card) => {
        const cardItem = $(card);
        const dobText = cardItem.find('.dob').text();
        const dob = dobText.split('Birthday:')[1].trim();
        expect(dobRegex.test(
          dob
        )).to.be.true;
      })
    });
  });

  it('should have unique names for all the users', () => {
    const { $, _ } = Cypress;
    cy.wait('@searchUsers');
    getUsersCards().then((cards) => {
      const names = _.map(cards, (card) => {
        const cardItem = $(card);
        return cardItem.find('h4').text();
      });
      const uniqueNames = _.uniq(names);
      expect(names.length).to.equal(uniqueNames.length);
    });
  });

  it('should go to the user details page with the user uuid', () => {
    const { minimatch, $ } = Cypress;
    getUsersCards().then((cards) => {
      const userCard = cards[0];
      const uuid = $(userCard).attr('ng-reflect-router-link').split('/users/')[1];
      cy.wrap(userCard).click();
      cy.url().should((url) => {
        const urlMatches = minimatch(url, `${location.origin}/users/${uuid}*`, { debug: true });
        expect(urlMatches).to.equal(true);
      });
    });
  });
});
