describe("Selecting weapon", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#new-game").click();
  });

  it("is expected that the user can select Rock", () => {
    cy.get("#weapon-rock").click();
    cy.get("#selected-weapon").should("contain", "You chose rock");
  });

  it("is expected that the user can select Paper", () => {
    cy.get("#weapon-paper").click();
    cy.get("#selected-weapon").should("contain", "You chose paper");
  });

  it("is expected that the user can select Scissors", () => {
    cy.get("#weapon-scissors").click();
    cy.get("#selected-weapon").should("contain", "You chose scissors");
  });
});
