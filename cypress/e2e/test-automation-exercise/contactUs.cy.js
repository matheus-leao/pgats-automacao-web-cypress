const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");

describe("Contact Us", () => {
  it("Upload file", () => {
    cy.visit(`/contact_us`);

    cy.get('[data-qa="name"]').type(faker.person.fullName());
    cy.get('[data-qa="email"]').type(faker.internet.email());
    cy.get('[data-qa="subject"]').type(faker.word.words());

    cy.fixture("arara.jpg").as(`arquivo`);
    cy.get(`input[type*="file"]`).selectFile(`@arquivo`);

    cy.get(`[data-qa="submit-button"]`).click();

    cy.get(".alert-success").should("be.visible");
  });
});
