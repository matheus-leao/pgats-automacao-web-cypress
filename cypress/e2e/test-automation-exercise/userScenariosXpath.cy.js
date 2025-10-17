const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");
import { HomePageXpath } from "../../support/page-objects/xpath/homePageXpath";
import { LoginPageXpath } from "../../support/page-objects/xpath/loginPageXpath";

describe("Automation Exercise", () => {
  it("Test Case 1: Register User", () => {
    const fakeUserName = faker.internet.username();

    cy.visit("/").title().should("eq", "Automation Exercise");
    HomePageXpath.homePageLabel.should("be.visible");
    HomePageXpath.loginButton.click();

    cy.contains("h2", "New User Signup!").should("be.visible");
    LoginPageXpath.signupNameInput.type(fakeUserName);
    LoginPageXpath.signupEmailInput.type(faker.internet.email());
    LoginPageXpath.signupButton.click();
    cy.contains("Enter Account Information").should("be.visible");

    LoginPageXpath.genderMrRadio.check();
    LoginPageXpath.passwordInput.type(1234, { log: false });

    const todayDate = dayjs(Date.now());

    LoginPageXpath.daysSelect.select(todayDate.daysInMonth());
    LoginPageXpath.monthsSelect.select(todayDate.month());
    LoginPageXpath.yearsSelect.select(`1997`);

    //Adress information

    LoginPageXpath.firstNameInput.type("test");
    LoginPageXpath.lastNameInput.type("test");
    LoginPageXpath.companyInput.type("test");
    LoginPageXpath.addressInput.type("test");
    LoginPageXpath.address2Input.type("test");
    LoginPageXpath.countrySelect.select("Canada");
    LoginPageXpath.stateInput.type("Quebec");
    LoginPageXpath.cityInput.type("Montreal");
    LoginPageXpath.zipcodeInput.type("000000");
    LoginPageXpath.mobileNumberInput.type("00000000");

    LoginPageXpath.createAccountButton.click();

    cy.contains("Account Created!").should("be.visible");
    LoginPageXpath.continueButton.should("be.visible").click();
    cy.get("a b").should("contain.text", `${fakeUserName}`);

    LoginPageXpath.deleteAccountButton.click();
    cy.contains("Account Deleted!").should("be.visible");
    LoginPageXpath.continueButton.should("be.visible");
  });
});
