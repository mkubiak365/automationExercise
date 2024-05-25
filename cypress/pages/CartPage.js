class CartPage {

    getCartProductsName() { return cy.get('.cart_description > h4') };
    getCartProductsPrice() { return cy.get('.cart_price > p') };
    getCartProductsQuantity() { return cy.get('.cart_quantity > .disabled') };
    getCartTotalPrice() { return cy.get('.cart_total_price') };
    getQuantityField() { return cy.get('#quantity') };
    getProceedToCheckout() { return cy.get('.btn.btn-default.check_out') };
    getRegisterLoginButton() { return cy.get('a[href="/login"]').contains('Register / Login') };
    getDeleteButton() { return cy.get('.fa.fa-times') };
    getEmptyCartInfo() { return cy.get('#empty_cart > .text-center') };

}

export default CartPage;