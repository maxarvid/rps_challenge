describe("Play Game", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#new-game").click();
    cy.get("#weapon-rock").click();
  });

  it("is expected to play the game after weapon is chosen", () => {
    cy.get("#play-game").click();
    cy.get("#game-result").should("exist");
  });
});
