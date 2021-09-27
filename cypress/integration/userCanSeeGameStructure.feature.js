describe("Game Interface", () => {
  it("is expected to succefully render", () => {
    cy.visit("/");
    cy.get("#header").should("contain", "Rock-Paper-Scissors");
    cy.get("#footer").should("contain", "Made with React 17.0.2");
    cy.get("#game").should("contain", "Choose your weapon");
  });
});
