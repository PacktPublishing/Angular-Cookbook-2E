export const getHeaderTitle = () => cy.get('.toolbar__title'); 

export const getToggleCounterButton = () => cy.get('[data-test-id="toggleCounterBtn"]'); 

export const getCounterCard = () => cy.get('[data-test-id="counterCard"]'); 

export const getCounterActions = () => getCounterCard().find('button');