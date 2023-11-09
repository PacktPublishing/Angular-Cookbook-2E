export const getUsersCards = () => { 
  return cy.get('app-users ul li'); 
} 

export const getSearchInput = () => { 
  return cy.get('[data-test-id="searchUsersInput"]'); 
}