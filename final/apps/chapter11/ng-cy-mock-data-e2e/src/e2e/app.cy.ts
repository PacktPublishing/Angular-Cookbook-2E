import { getAddItemSubmitButton, getFruitSelector, getFruits, getHeaderTitle, getSuccessToast } from '../support/app.po';

describe('ng-cy-mock-data', () => {
  beforeEach(() => {
    cy.fixture("get-bucket") 
      .then((getBucketResp) => { 
        cy.intercept('GET', 'http://localhost:3333/api/bucket', getBucketResp) 
        return cy.fixture("add-bucket-item"); 
      }) 
      .then((addItemResp) => { 
        cy.intercept('POST', 'http://localhost:3333/api/bucket', addItemResp) 
        return cy.fixture("delete-bucket-item"); 
      }) 
      .then((deleteItemResp) => { 
        cy.intercept('DELETE', 'http://localhost:3333/api/bucket/*', deleteItemResp) 
      })
      .visit('/');
  });

  it('should display title in the header', () => {
    // Function helper example, see `../support/app.po.ts` file
    getHeaderTitle().contains('Using cypress fixtures to provide mock data');
  });

  it('should get the bucket items from server', () => {
    getFruits().should('have.length', 4);
  });

  it('should add a bucket item to the list', () => {
    getFruitSelector().select('Apple 🍎');
    getAddItemSubmitButton().click();
    getSuccessToast().should('be.visible');
    getSuccessToast().then(el => {
      expect(el.text().trim()).to.eq('Bucket item added');
    });
    getFruits().should('have.length', 5);
  });

  it('should delete a bucket item from the list', () => { 
    getFruits().should('have.length', 4); 
    getFruits().eq(0).find('.fruits__item__delete-icon').click(); 
    getSuccessToast().should('be.visible'); 
    getSuccessToast().then(el => { 
      expect(el.text().trim()).to.eq('Bucket item deleted'); 
    }); 
    getFruits().should('have.length', 3); 
  });

});
