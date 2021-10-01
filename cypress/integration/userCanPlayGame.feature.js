describe("Play Game", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#new-game").click();
    cy.get("#weapon-rock").click();
    cy.get("#play-game").click();
  });

  it("is expected to play the game after weapon is chosen", () => {
    cy.get("#game-result").should("not.be.empty");
  });

  it('is expected that the computer chooses a weapon', () => {
    cy.get("#computer-weapon").should('exist')
  });
});
