const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");
import { HomePage } from "../../support/page-objects/homePage";
import { LoginPage } from "../../support/page-objects/loginPage";

describe('Automation Exercise', () => {
    it('Test Case 1: Register User', () => {
        const fakeUserName = faker.internet.username()
        
        cy.visit('/').title().should('eq', 'Automation Exercise')
        HomePage.homePageLabel.should('be.visible')
        HomePage.loginButton.click();
        
        cy.contains('h2','New User Signup!').should('be.visible')
        LoginPage.signupNameInput.type(fakeUserName);
        LoginPage.signupEmailInput.type(faker.internet.email());
        LoginPage.signupButton.click()
        cy.contains('Enter Account Information').should('be.visible')

        LoginPage.genderMrRadio.check()
        LoginPage.passwordInput.type(1234, {log: false})

        const todayDate = dayjs(Date.now());

        LoginPage.daysSelect.select(todayDate.daysInMonth());
        LoginPage.monthsSelect.select(todayDate.month());
        LoginPage.yearsSelect.select(`1997`);

        //Adress information

        LoginPage.firstNameInput.type('test')
        LoginPage.lastNameInput.type('test')
        LoginPage.companyInput.type('test')
        LoginPage.addressInput.type('test')
        LoginPage.address2Input.type('test')
        LoginPage.countrySelect.select('Canada')
        LoginPage.stateInput.type('Quebec')
        LoginPage.cityInput.type('Montreal')
        LoginPage.zipcodeInput.type('000000')
        LoginPage.mobileNumberInput.type('00000000')

        LoginPage.createAccountButton.click();

        cy.contains('Account Created!').should('be.visible')
        LoginPage.continueButton.should('be.visible').click()
        cy.get('a b').should('contain.text', `${fakeUserName}`)

        LoginPage.deleteAccountButton.click();
        cy.contains('Account Deleted!').should('be.visible')
        LoginPage.continueButton.should('be.visible')
    });
});