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

  it("is expected that the computer chooses a weapon", () => {
    cy.get("#computer-weapon").should("exist");
  });

  it("is expected to clear result output when new game is clicked", () => {
    cy.get("#new-game").click();
    cy.get("#game-result").should("be.empty");
  });

  it('is expected to only allow new game after game is played', () => {
    cy.get('#play-game').should('not.exist')
  });
});
