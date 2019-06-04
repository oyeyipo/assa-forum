describe("ASSA forum landing page -- NO AUTH", function() {
  beforeEach(function() {
    cy.visit("/");
  });

  // USER STORY -- NO AUTH
  // Eke is student of afieser sec sch. he heard about the ASSA forum where students can go
  // and read about majorly news and events concerning the sch.
  // This has always been his heart desire
  // He got the web page address to visit it
  // IT opens and on the tab of the page he saw the statement "Afiesere seccondary school forum"
  it('contains "Afiesere Secondary School Forum"', function() {
    cy.title().should("contain", "Afiesere Secondary School Forum");
  });

  // Looking at the main webpage he saw the title or logo of the website which reassured him
  it('"ASSA forum" is visible on the banner', function() {
    cy.get(".assa-logo-text").should("contain", "ASSA Forum");
  });

  // Because he aware of the main purpose of the site to disburse information, he went searching
  // for some by scrolling down and he saw a segment site with a title "ASBN frontpage news"
  it("section contains 'ASBN Frontpage News'", function() {
    cy.get(".frontpage-news").should("contain", "ASBN Frontpage News");
  });
});
