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

}
