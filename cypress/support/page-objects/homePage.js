export class HomePage {
  static get homePageLabel() {
    return cy.get(".fa-home");
  }

  static get loginButton() {
    return cy.get('a[href*="/login"]');
  }

  static get logoutButton() {
    return cy.get('a[href*="/logout"]');
  }

  static get deleteAccountButton() {
    return cy.get('a[href*="/delete_account"]');
  }

  static get productsButton() {
    return cy.get('a[href*="/products"]');
  }

  static get subscriptionInput() {
    return cy.get("#susbscribe_email");
  }

  static get subscriptionButton() {
    return cy.get("#subscribe");
  }

  static get successSubscriptionMessage() {
    return cy.get(".alert-success");
  }
  
}
