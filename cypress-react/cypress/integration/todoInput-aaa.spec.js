describe("Todo Input form", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("visit home page", () => {
    cy.focused().should("have.class", "taskInput");
  });

  it("type value into input tag", () => {
    cy.get(".taskInput").type("BUY MILK").should("have.value", "BUY MILK");
  });
});
