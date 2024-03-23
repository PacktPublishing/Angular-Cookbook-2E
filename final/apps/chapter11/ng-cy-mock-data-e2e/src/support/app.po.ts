export const getHeaderTitle = () => cy.get('.toolbar__title'); 
export const getFruits = () => cy.get('.fruits__item'); 
export const getFruitSelector = () => cy.get('[data-test-id="fruitSelector"'); 
export const getAddItemSubmitButton = () => cy.get('[data-test-id="addItemSubmitBtn"'); 
export const getSuccessToast = () => cy.get('#toast-container .toast-success'); 
export const getErrorToast = () => cy.get('#toast-container .toast-error')