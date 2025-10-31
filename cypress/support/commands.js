// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { faker } = require("@faker-js/faker");

Cypress.Commands.add("createUser", () => {
  const newUser = {
    name: faker.internet.username(),
    email: faker.internet.email(),
    password: "1234",
    title: "Mr",
    birthDate_day: faker.date.birthdate().getDate(),
    birthDate_month: faker.date.birthdate().getMonth() + 1,
    birthDate_year: faker.date.birthdate().getFullYear(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.location.country(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.number(),
  };

  return cy
    .request({
      url: `https://automationexercise.com/api/createAccount`,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      form: true, // This ensures Cypress sends the data as form-urlencoded
      body: {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        title: newUser.title,
        birth_date: newUser.birthDate_day,
        birth_month: newUser.birthDate_month,
        birth_year: newUser.birthDate_year,
        firstname: newUser.firstName,
        lastname: newUser.lastName,
        company: newUser.company,
        address1: newUser.address,
        address2: newUser.address2,
        country: newUser.country,
        zipcode: newUser.zipcode,
        state: newUser.state,
        city: newUser.city,
        mobile_number: newUser.mobileNumber,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      // response.body is a JSON string in this API response, parse it before assertions
      const parsedBody =
        typeof response.body === "string"
          ? JSON.parse(response.body)
          : response.body;
      expect(parsedBody.responseCode).to.eq(201);
      return newUser;
    });
});
