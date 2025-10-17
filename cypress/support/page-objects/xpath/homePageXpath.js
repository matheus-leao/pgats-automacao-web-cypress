require("cypress-xpath");

export class HomePageXpath {
  static get homePageLabel() {
    return cy.xpath("//*[contains(@class, 'fa-home')]");
  }

  static get loginButton() {
    return cy.xpath("//a[contains(@href,'/login')]");
  }
}
