export class ContactUsPage {
    static get nameInput() {
        return cy.get('[data-qa="name"]');
    }

    static get emailInput() {
        return cy.get('[data-qa="email"]');
    }

    static get subjectInput() {
        return cy.get('[data-qa="subject"]');
    }

    static get fileUploadInput() {
        return cy.get(`input[type*="file"]`);
    }

    static get submitButton() {
        return cy.get('[data-qa="submit-button"]');
    }

    static get successMessage() {
        return cy.get(".alert-success");
    }
}