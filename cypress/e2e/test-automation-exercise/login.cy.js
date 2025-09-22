const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");

describe('User Tests', () => {
    it('Create new user', () => {
        cy.visit('/login')
        cy.get('[data-qa="signup-name"]').type(faker.internet.username());
        cy.get('[data-qa="signup-email"]').type(faker.internet.email());
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('Enter Account Information').should('be.visible')

        cy.get('#id_gender1').check()
        
        cy.get('[data-qa="password"]').type(1234, {log: false})

        const todayDate = dayjs(Date.now());

        cy.get('#days').select(todayDate.daysInMonth());
        cy.get('#months').select(todayDate.month());
        cy.get('#years').select(`1997`);

        //Adress information

        cy.get('[data-qa="first_name"]').type('test')
        cy.get('[data-qa="last_name"]').type('test')
        cy.get('[data-qa="company"]').type('test')
        cy.get('[data-qa="address"]').type('test')
        cy.get('[data-qa="address2"]').type('test')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('Quebec')
        cy.get('[data-qa="city"]').type('Montreal')
        cy.get('[data-qa="zipcode"]').type('000000')
        cy.get('[data-qa="mobile_number"]').type('00000000')

        cy.get('[data-qa="create-account"]').click();

        cy.contains('Account Created!').should('be.visible')
        cy.get('[data-qa="continue-button"]').should('be.visible')
    });
});