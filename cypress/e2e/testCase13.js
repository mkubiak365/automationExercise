/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import SingleProductPage from '../pages/SingleProductPage';
import CartPage from '../pages/CartPage';
import ProductsPage from '../pages/ProductsPage'
const home = new HomePage();
const singleProduct = new SingleProductPage();
const cart = new CartPage();
const products = new ProductsPage();

describe('Test Case 13: Verify Product quantity in Cart', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })

    it('Test Case 13', function() {

        products.getViewProductButton(3).click();

        home.getUrl().should('include', '/product_details/3');

        singleProduct.getProductQunatityField().clear().type('4');
        singleProduct.getAddToCartButton().click();
        singleProduct.getViewCartButton().eq(1).click();

        cart.getCartProductsName().each(($el, i) => {
            expect($el.text()).to.eql(this.data.singleProductInCart[i].name);
        });
        cart.getCartProductsPrice().each(($el, i) => {
            expect($el.text()).to.eql(this.data.singleProductInCart[i].price);
        });
        cart.getCartProductsQuantity().each(($el, i) => {
            expect($el.text()).to.eql(this.data.singleProductInCart[i].quantity);
        });
        cart.getCartTotalPrice().each(($el, i) => {
            expect($el.text()).to.eql(this.data.singleProductInCart[i].total);
        });

        
    })
})