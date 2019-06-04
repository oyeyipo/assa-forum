// const cy = require("cypress");

describe("CSS-Tricks home page", function() {
  beforeEach(function() {
    cy.visit("https://css-tricks.com/");
  });

  it('contains "CSS-Tricks" in the title', function() {
    cy.title().should("contain", "CSS-Tricks");
  });

  it("has a visible star logo", function() {
    cy.get(".icon-logo-star").should("be.visible");
  });
});
