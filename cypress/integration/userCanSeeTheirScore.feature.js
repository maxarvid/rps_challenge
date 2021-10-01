describe('User and computer score', () => {
  beforeEach(() => {
    cy.visit('/')
  });
  describe('User score', () => {
    it('is expected to be 0 on render', () => {
      cy.get('#score').should('contain', "Your score: 0 – Computer score: 0")
    });
  })
  
})
