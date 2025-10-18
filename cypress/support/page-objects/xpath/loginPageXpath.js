require("cypress-xpath");

export class LoginPageXpath {
  static get signupNameInput() {
    return cy.xpath('//*[@data-qa="signup-name"]');
  }

  static get signupEmailInput() {
    return cy.xpath('//*[@data-qa="signup-email"]');
  }

  static get signupButton() {
    return cy.xpath('//*[@data-qa="signup-button"]');
  }

  static get genderMrRadio() {
    return cy.xpath('//*[@id="id_gender1"]');
  }

  static get passwordInput() {
    return cy.xpath('//*[@data-qa="password"]');
  }

  static get daysSelect() {
    return cy.xpath('//*[@id="days"]');
  }

  static get monthsSelect() {
    return cy.xpath('//*[@id="months"]');
  }

  static get yearsSelect() {
    return cy.xpath('//*[@id="years"]');
  }

  static get firstNameInput() {
    return cy.xpath('//*[@data-qa="first_name"]');
  }

  static get lastNameInput() {
    return cy.xpath('//*[@data-qa="last_name"]');
  }

  static get companyInput() {
    return cy.xpath('//*[@data-qa="company"]');
  }

  static get addressInput() {
    return cy.xpath('//*[@data-qa="address"]');
  }

  static get address2Input() {
    return cy.xpath('//*[@data-qa="address2"]');
  }

  static get countrySelect() {
    return cy.xpath('//*[@data-qa="country"]');
  }

  static get stateInput() {
    return cy.xpath('//*[@data-qa="state"]');
  }

  static get cityInput() {
    return cy.xpath('//*[@data-qa="city"]');
  }

  static get zipcodeInput() {
    return cy.xpath('//*[@data-qa="zipcode"]');
  }

  static get mobileNumberInput() {
    return cy.xpath('//*[@data-qa="mobile_number"]');
  }

  static get createAccountButton() {
    return cy.xpath('//*[@data-qa="create-account"]');
  }

  static get continueButton() {
    return cy.xpath('//*[@data-qa="continue-button"]');
  }

  static get deleteAccountButton() {
    return cy.xpath('//a[contains(@href, "/delete_account")]');
  }
}
