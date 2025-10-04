const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");


describe('Automation Exercise', () => {
    it('Test Case 1: Register User', () => {
        const fakeUserName = faker.internet.username()
        
        cy.visit('/');
        cy.title().should('eq', 'Automation Exercise')
        cy.get('.fa-home').should('be.visible')
        cy.get('a[href*="/login"]').click();
        
        cy.contains('h2','New User Signup!').should('be.visible')
        cy.get('[data-qa="signup-name"]').type(fakeUserName);
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
        cy.get('[data-qa="continue-button"]').should('be.visible').click()
        cy.get('a b').should('contain.text', `${fakeUserName}`)

        cy.get('a[href*="/delete_account"]').click();
        cy.contains('Account Deleted!').should('be.visible')
        cy.get('[data-qa="continue-button"]').should('be.visible')
    });
});