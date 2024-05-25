class SingleProductPage {

    getProductName() { return cy.get('.product-information > h2') };
    getProductCategory() { return cy.get('.product-information > :nth-child(3)') };
    getProductPrice() { return cy.get(':nth-child(5) > span') };
    getProductAvailabillity() { return cy.get('.product-information > :nth-child(6)') };
    getProductCondition() { return cy.get('.product-information > :nth-child(7)') };
    getProductBrand() { return cy.get('.product-information > :nth-child(8)') };
    getProductQunatityField() { return cy.get('#quantity') };
    getAddToCartButton() { return cy.get('.btn.btn-default.cart') };
    getViewCartButton() { return cy.get('a[href="/view_cart"]') };
}

export default SingleProductPage;