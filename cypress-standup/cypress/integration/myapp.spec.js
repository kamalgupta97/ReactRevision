describe("Input form", () => {
  it("visit home page", () => {
    cy.visit("https://cypressdeployedtest.netlify.app");
  });

  it("Main container should text as Kamal React App", () => {
    cy.get(".App").should("have.text", "Kamal React App");
  });
});
