const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");
import { HomePage } from "../../../support/page-objects/homePage";
import { LoginPage } from "../../../support/page-objects/loginPage";
import { ContactUsPage } from "../../../support/page-objects/contactUsPage";
import { ProductPage } from "../../../support/page-objects/productPage";
import { ModalPage } from "../../../support/page-objects/modalPage";
import { CheckoutPage } from "../../../support/page-objects/checkoutPage";
import { PaymentPage } from "../../../support/page-objects/paymentPage";

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
    loginWithExistentUser(userData);

    LoginPage.deleteAccountButton.click();
    cy.contains("Account Deleted!").should("be.visible");
    LoginPage.continueButton.should("be.visible");
  });

  it("Test Case 3: Login User with incorrect email and password", () => {
    cy.visit("/");
    HomePage.loginButton.click();

    cy.contains("Login to your account").should("be.visible");
    LoginPage.loginEmailInput.type("fake@example.com");
    LoginPage.loginPasswordInput.type("fakePassword", { log: false });
    LoginPage.loginButton.click();

    cy.get("form").should(
      "contain.text",
      `Your email or password is incorrect!`,
    );
  });

  it("Test Case 4: Logout User", () => {
    cy.visit("/");
    loginWithExistentUser(userData);
    deleteLoggedAccount();
  });

  it("Test Case 5: Register User with existing email", () => {
    cy.visit("/").title().should("eq", "Automation Exercise");
    HomePage.homePageLabel.should("be.visible");
    HomePage.loginButton.click();

    cy.contains("h2", "New User Signup!").should("be.visible");
    LoginPage.signupNameInput.type(userData.name);
    LoginPage.signupEmailInput.type(userData.email);
    LoginPage.signupButton.click();
    cy.get("form").should("contain.text", `Email Address already exist!`);
  });

  it("Test Case 6: Contact Us Form", () => {
    cy.visit(`/contact_us`);

    ContactUsPage.nameInput.type(faker.person.fullName());
    ContactUsPage.emailInput.type(faker.internet.email());
    ContactUsPage.subjectInput.type(faker.word.words());

    cy.fixture("arara.jpg").as(`arquivo`);
    ContactUsPage.fileUploadInput.selectFile(`@arquivo`);
    ContactUsPage.submitButton.click();

    ContactUsPage.successMessage.should("be.visible");
  });

  it("Test Case 8: Verify All Products and product detail page", () => {
    cy.visit("/");
    HomePage.productsButton.click();
    ProductPage.allProductsTitle.should("contain.text", "All Products");

    ProductPage.productImageWrapper.first().should("be.visible");

    ProductPage.firstProductDetailButton.first().click();
    ProductPage.productInformation.should("be.visible");

    cy.fixture("product/blueTop.json").then((blueTop) => {
      ProductPage.verifyProductDetails(blueTop);
    });
  });

  it("Test Case 9: Search Product", () => {
    cy.visit("/");
    HomePage.productsButton.click();
    ProductPage.allProductsTitle.should("contain.text", "All Products");
    cy.fixture("product/menTshirt.json").then((menTshirt) => {
      ProductPage.searchProductInput.type(menTshirt.name);
      ProductPage.submitSearch.click();
      ProductPage.productDetailButtonByProductId(menTshirt.id).click();
      ProductPage.productInformation.should("be.visible");
      ProductPage.verifyProductDetails(menTshirt);
    });
  });

  it("Test Case 10: Verify Subscription in home page", () => {
    cy.visit("/");
    cy.get("#footer").scrollIntoView();
    HomePage.subscriptionInput.type(faker.internet.email());
    HomePage.subscriptionButton.click();
    HomePage.successSubscriptionMessage.should("be.visible");
  });

  it("Test Case 15: Place Order: Register before Checkout", () => {
    cy.visit("/");
    loginWithExistentUser(userData);

    HomePage.productsButton.click();
    cy.fixture("product/menTshirt.json").then((menTshirt) => {
      ProductPage.searchProductInput.type(menTshirt.name);
      ProductPage.submitSearch.click();
      ProductPage.addToCartButtonByProductId(menTshirt.id)
        .first()
        .scrollIntoView()
        .click();
      ModalPage.cartModal.should("be.visible");
      ModalPage.viewCartButton.click();
      CheckoutPage.checkoutButton.click();

      //verify address details
      CheckoutPage.addressDetailsSection.within(() => {
        CheckoutPage.addressFirstName.should(
          "contain.text",
          userData.firstName,
        );
        CheckoutPage.addressLastName.should("contain.text", userData.lastName);
        CheckoutPage.address1.should("contain.text", userData.address);
        CheckoutPage.address2.should("contain.text", userData.address2);
        CheckoutPage.addressCity.should("contain.text", userData.city);
        CheckoutPage.addressStateName.should("contain.text", userData.state);
        CheckoutPage.addressCountryName.should(
          "contain.text",
          userData.country,
        );
        CheckoutPage.addressPostcode.should("contain.text", userData.zipcode);
        CheckoutPage.addressPhone.should("contain.text", userData.mobileNumber);
      });

      //order details
      CheckoutPage.orderDetailTitle.should("contain.text", "Review Your Order");
      CheckoutPage.cartInfo.should("contain.text", "Total Amount");
      CheckoutPage.cartTotalPrice.should("contain.text", menTshirt.price);

      CheckoutPage.orderMessageTextarea.type(
        "Please deliver between 9 AM to 5 PM",
      );
      CheckoutPage.checkoutButton.click();

      PaymentPage.paymentTitle.should("contain.text", "Payment");

      PaymentPage.nameOnCardInput.type("John Doe");
      PaymentPage.cardNumberInput.type("4111111111111111");
      PaymentPage.cvcInput.type("123");
      PaymentPage.expiryMonthInput.type("12");
      PaymentPage.expiryYearInput.type("25");

      PaymentPage.payButton.click();
      PaymentPage.orderPlacedMessage.should("contain.text", "Order Placed!");
      cy.contains("Congratulations! Your order has been confirmed!").should(
        "be.visible",
      );

      deleteLoggedAccount();
    });
  });
});

const loginWithExistentUser = (user) => {
  HomePage.loginButton.click();
  cy.contains("Login to your account").should("be.visible");
  LoginPage.loginEmailInput.type(user.email);
  LoginPage.loginPasswordInput.type(user.password, { log: false });
  LoginPage.loginButton.click();
  cy.get("a b").should("contain.text", `${user.name}`);
};

const deleteLoggedAccount = () => {
  LoginPage.deleteAccountButton.click();
  cy.contains("Account Deleted!").should("be.visible");
  LoginPage.continueButton.should("be.visible");
};
