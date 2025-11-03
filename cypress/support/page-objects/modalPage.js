export class ModalPage {
    static get cartModal() {
        return cy.get('#cartModal');
    }

    static get viewCartButton() {
        return this.cartModal.contains('View Cart');
    }

    static get continueShoppingButton() {
        return this.cartModal.contains('Continue Shopping');
    }
}