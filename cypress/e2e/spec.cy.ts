/// <reference types="cypress" />

describe('render all the pokemons and fetch more and choose one', () => {
  let oldItems = []
  it('renders correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#scrollableDiv').should('exist')
    cy.get('.itemCard').should('have.length', 20);

  })
  it('scrolls and fetch more', () => {
    cy.scrollTo('bottom')
    cy.get('.itemCard').should('have.length', 40);
  })
  it('should fetch one pokemon', () => {
    cy.get('.itemCard:first').click()
  })
  it('pokemon modal should open', () => {
    cy.get('.modal-dialog').should('be.visible')

  })
})