export class ProductPage {
  static get allProductsTitle() {
    return cy.get("h2.title.text-center");
  }

  static get productImageWrapper() {
    return cy.get(`div.product-image-wrapper`);
  }

  static get productInformation() {
    return cy.get(`.product-information`);
  }

  static get firstProductDetailButton() {
    return cy.get(`a[href*="/product_details/"]`).first();
  }

  static productDetailButtonByProductId(productId) {
    return cy.get(`a[href*="/product_details/${productId}"]`);
  }

  static addToCartButtonByProductId(productId) {
    return cy.get(`a[data-product-id="${productId}"]`);
  }

  static get searchProductInput() {
    return cy.get("#search_product");
  }

  static get submitSearch() {
    return cy.get("#submit_search");
  }

  static verifyProductDetails(product) {
    this.productInformation.within(() => {
      cy.get(`h2`).should("contain.text", product.name);
      cy.get(`p`).should("contain.text", `Category: ${product.category}`);
      cy.get(`span`).should("contain.text", product.price);
      cy.get(`p`).should(
        "contain.text",
        `Availability: ${product.availability}`,
      );
      cy.get(`p`).should("contain.text", `Condition: ${product.condition}`);
      cy.get(`p`).should("contain.text", `Brand: ${product.brand}`);
    });
  }
}
