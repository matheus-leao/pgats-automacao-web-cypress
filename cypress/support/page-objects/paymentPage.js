export class PaymentPage {
  static get paymentTitle() {
    return cy.get(`.heading`);
  }

  static get nameOnCardInput() {
    return cy.get(`input[name="name_on_card"]`);
  }

  static get cardNumberInput() {
    return cy.get(`input[name="card_number"]`);
  }

  static get cvcInput() {
    return cy.get(`input[name="cvc"]`);
  }

  static get expiryMonthInput() {
    return cy.get(`input[name="expiry_month"]`);
  }
  static get expiryYearInput() {
    return cy.get(`input[name="expiry_year"]`);
  }
  static get payButton() {
    return cy.get(`[data-qa="pay-button"]`);
  }
  static get orderPlacedMessage() {
    return cy.get(`[data-qa="order-placed"]`);
  }
}
