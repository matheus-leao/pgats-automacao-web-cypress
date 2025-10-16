export class HomePage{

    static get homePageLabel() {
        return cy.get('.fa-home');
    }

    static get loginButton() {
        return cy.get('a[href*="/login"]');
    }

}    