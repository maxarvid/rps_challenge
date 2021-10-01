describe("Game Interface", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("is expected to succefully render", () => {
    cy.get("#header").should("contain", "Rock-Paper-Scissors");
    cy.get("#footer").should("contain", "Made with React 17.0.2");
    cy.get("#game").should("contain", "Choose your weapon");
  });

  it("is expected that there is no result on render", () => {
    cy.get('#game-result').should('be.empty')
  });
});
