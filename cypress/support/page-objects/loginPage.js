export class LoginPage {
    static get signupNameInput() {
        return cy.get('[data-qa="signup-name"]')
    }

    static get signupEmailInput() {
        return cy.get('[data-qa="signup-email"]')
    }

    static get signupButton() {
        return cy.get('[data-qa="signup-button"]')
    }

    static get genderMrRadio() {
        return cy.get('#id_gender1')
    }

    static get passwordInput() {
        return cy.get('[data-qa="password"]')
    }

    static get daysSelect() {
        return cy.get('#days')
    }
    static get monthsSelect() {
        return cy.get('#months')
    }
    static get yearsSelect() {
        return cy.get('#years')
    }

    static get firstNameInput() {
        return cy.get('[data-qa="first_name"]')
    }
    static get lastNameInput() {
        return cy.get('[data-qa="last_name"]')
    }
    static get companyInput() {
        return cy.get('[data-qa="company"]')
    }
    static get addressInput() {
        return cy.get('[data-qa="address"]')
    }
    static get address2Input() {
        return cy.get('[data-qa="address2"]')
    }
    static get countrySelect() {
        return cy.get('[data-qa="country"]')
    }
    static get stateInput() {
        return cy.get('[data-qa="state"]')
    }
    static get cityInput() {
        return cy.get('[data-qa="city"]')
    }
    static get zipcodeInput() {
        return cy.get('[data-qa="zipcode"]')
    }
    static get mobileNumberInput() {
        return cy.get('[data-qa="mobile_number"]')
    }
    static get createAccountButton() {
        return cy.get('[data-qa="create-account"]')
    }
    static get continueButton() {
        return cy.get('[data-qa="continue-button"]')
    }
    static get deleteAccountButton() {
        return cy.get('a[href*="/delete_account"]');
    }
}