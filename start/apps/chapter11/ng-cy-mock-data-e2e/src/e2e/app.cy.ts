import { getFruits, getHeaderTitle } from '../support/app.po';

describe('ng-cy-mock-data', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should display title in the header', () => {
    // Function helper example, see `../support/app.po.ts` file
    getHeaderTitle().contains('Using cypress fixtures to provide mock data');
  });

  it('should get the bucket items from server', () => {
    getFruits().should('have.length', 4);
  });

});
