describe("ASSA forum landing page", function() {
  beforeEach(function() {
    cy.visit("/");
  });

  it('contains "Afiesere Secondary School Forume', function() {
    cy.title().should("contain", "Afiesere Secondary School Forum");
  });
});
