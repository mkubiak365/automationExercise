/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
const home = new HomePage();
const products = new ProductsPage();
const cart = new CartPage();

describe('Test Case 12: Add Products in Cart', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })

    it('Test Case 12', function() {

        home.getProductsButton().click();
        
        products.getAddToCartButton(1).invoke('show').eq(0).click();
        products.getContinueShoppingButton().click();
        products.getAddToCartButton(2).invoke('show').eq(0).click();
        products.getViewCartButton().eq(1).click();
        
        cart.getCartProductsName().each(($el, i) => {
            expect($el.text()).to.eql(this.data.productsInCart[i].name);
        });
        cart.getCartProductsPrice().each(($el, i) => {
            expect($el.text()).to.eql(this.data.productsInCart[i].price);
        });
        cart.getCartProductsQuantity().each(($el, i) => {
            expect($el.text()).to.eql(this.data.productsInCart[i].quantity);
        });
        cart.getCartTotalPrice().each(($el, i) => {
            expect($el.text()).to.eql(this.data.productsInCart[i].total);
        });
        
    })
})