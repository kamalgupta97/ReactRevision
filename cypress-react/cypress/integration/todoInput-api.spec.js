describe("Task form Submit", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Add a new item on submit form", () => {
    const text = "BUY MILK";
    it("Add a new item on Submit of form", () => {
      cy.server();

      cy.route(
        "POST", // method
        "/task", // url
        {
          // response
          title: text,
          id: 1,
          completed: false,
        }
      );
    });
    cy.get(".taskInput").type(text).type("{enter}");
    cy.get(".todolist li").should("have.length", 1).and("contain", text);
  });
});
