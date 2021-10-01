describe("User and computer score", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#new-game").click();
  });
  it("is expected to be 0 on render", () => {
    cy.get("#score").should("contain", "Your score: 0 – Computer score: 0");
  });

  it("is expected to increment after a game is played", () => {
    cy.get("#weapon-rock").click();
    cy.get("#play-game").click();
    cy.get("#score").should(
      "not.contain",
      "Your score: 0 – Computer score: 0"
    );
  });
});
