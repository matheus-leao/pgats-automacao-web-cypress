const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");
import { HomePage } from "../../../support/page-objects/homePage";
import { LoginPage } from "../../../support/page-objects/loginPage";

let userData = {};

describe("Automation Exercise", () => {

  beforeEach(() => {
    cy.createUser().then((user) => {
      userData = user;
      cy.log(`User created!`);
    });
  });

  it("Test Case 1: Register User", () => {
    const fakeUserName = faker.internet.username();

    cy.visit("/").title().should("eq", "Automation Exercise");
    HomePage.homePageLabel.should("be.visible");
    HomePage.loginButton.click();

    cy.contains("h2", "New User Signup!").should("be.visible");
    LoginPage.signupNameInput.type(fakeUserName);
    LoginPage.signupEmailInput.type(faker.internet.email());
    LoginPage.signupButton.click();
    cy.contains("Enter Account Information").should("be.visible");

    LoginPage.genderMrRadio.check();
    LoginPage.passwordInput.type(1234, { log: false });

    const todayDate = dayjs(Date.now());

    LoginPage.daysSelect.select(todayDate.daysInMonth());
    LoginPage.monthsSelect.select(todayDate.month());
    LoginPage.yearsSelect.select(`1997`);

    //Adress information

    LoginPage.firstNameInput.type("test");
    LoginPage.lastNameInput.type("test");
    LoginPage.companyInput.type("test");
    LoginPage.addressInput.type("test");
    LoginPage.address2Input.type("test");
    LoginPage.countrySelect.select("Canada");
    LoginPage.stateInput.type("Quebec");
    LoginPage.cityInput.type("Montreal");
    LoginPage.zipcodeInput.type("000000");
    LoginPage.mobileNumberInput.type("00000000");

    LoginPage.createAccountButton.click();

    cy.contains("Account Created!").should("be.visible");
    LoginPage.continueButton.should("be.visible").click();
    cy.get("a b").should("contain.text", `${fakeUserName}`);

    LoginPage.deleteAccountButton.click();
    cy.contains("Account Deleted!").should("be.visible");
    LoginPage.continueButton.should("be.visible");
  });

  it("Test Case 2: Login User with correct email and password", () => {
      cy.visit("/");
      HomePage.loginButton.click();

      cy.contains("Login to your account").should("be.visible");
      LoginPage.loginEmailInput.type(userData.email);
      LoginPage.loginPasswordInput.type(userData.password, { log: false });
      LoginPage.loginButton.click();

      cy.get("a b").should("contain.text", `${userData.name}`);

      LoginPage.deleteAccountButton.click();
      cy.contains("Account Deleted!").should("be.visible");
      LoginPage.continueButton.should("be.visible");
  });

  it("Test Case 3: Login User with incorrect email and password", () => {
    cy.visit("/");
    HomePage.loginButton.click();

    cy.contains("Login to your account").should("be.visible");
      LoginPage.loginEmailInput.type('fake@example.com');
      LoginPage.loginPasswordInput.type('fakePassword', { log: false });
      LoginPage.loginButton.click();

      cy.get('form').should("contain.text", `Your email or password is incorrect!`);

  });

  it("Test Case 4: Logout User", () => {
    cy.visit("/");
    HomePage.loginButton.click();

    cy.contains("Login to your account").should("be.visible");
    LoginPage.loginEmailInput.type(userData.email);
    LoginPage.loginPasswordInput.type(userData.password, { log: false });
    LoginPage.loginButton.click();

    cy.get("a b").should("contain.text", `${userData.name}`);

    HomePage.logoutButton.click();
    cy.contains("Login to your account").should("be.visible");
  });

  it.only("Test Case 5: Register User with existing email", () => {
    cy.visit("/").title().should("eq", "Automation Exercise");
    HomePage.homePageLabel.should("be.visible");
    HomePage.loginButton.click();

    cy.contains("h2", "New User Signup!").should("be.visible");
    LoginPage.signupNameInput.type(userData.name);
    LoginPage.signupEmailInput.type(userData.email);
    LoginPage.signupButton.click();
    cy.get('form').should("contain.text", `Email Address already exist!`);

  });
  it("Test Case 6: Contact Us Form", () => {});
  it("Test Case 8: Verify All Products and product detail page", () => {});
  it("Test Case 9: Search Product", () => {});
  it("Test Case 10: Verify Subscription in home page", () => {});
  it("Test Case 15: Place Order: Register before Checkout", () => {});
});
