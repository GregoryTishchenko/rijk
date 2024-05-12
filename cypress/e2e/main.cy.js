describe('Chech home page functionality', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.grid .grid__column:nth-child(1) > .grid__item:nth-child(1)')
      .trigger('mouseover')
      .should('have.css', 'opacity', '1');
    cy.get('[data-testid="search-input"]').type('Monet');
    cy.get('[data-testid="search-form"]').submit();
    cy.get('.grid .grid__item').should('have.length', 20);
    cy.get('[data-testid="load-more-button"]').click();
    cy.get('.grid .grid__item').should('have.length', 21);
  });
});
