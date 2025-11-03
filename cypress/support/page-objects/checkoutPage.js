export class CheckoutPage {
     static get checkoutButton() {
        return cy.get(`.check_out`);
    }

    //#region Address Details Selectors
    static get addressDetailsSection() {
        return cy.get(`#address_delivery`);
    }

    static get addressFirstName() {
        return cy.get(".address_firstname");
    }

    static get addressLastName() {
        return cy.get(".address_lastname");
    }

    static get address1() {
        return cy.get(".address_address1");
    }

    static get address2() {
        return cy.get(".address_address2");
    }

    static get addressCity() {
        return cy.get(".address_city");
    }

    static get addressStateName() {
        return cy.get(".address_state_name");
    }

    static get addressCountryName() {
        return cy.get(".address_country_name");
    }

    static get addressPostcode() {
        return cy.get(".address_postcode");
    }

    static get addressPhone() {
        return cy.get(".address_phone");
    }
    //#endregion

    //#region Order Details Selectors
    static get orderDetailTitle() {
        return cy.get(`h2.heading`);
    }

    static get cartInfo() {
        return cy.get(`#cart_info`);
    }

    static get cartTotalPrice() {
        return cy.get(`#cart_info`).find('.cart_total_price');
    }

    static get orderMessageTextarea() {
        return cy.get(`#ordermsg textarea`);
    }

    //#endregion
}