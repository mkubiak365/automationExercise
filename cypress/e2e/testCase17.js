/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ProductsPage from '../pages/ProductsPage';
const home = new HomePage();
const cart = new CartPage();
const products = new ProductsPage();

describe('Test Case 17: Remove Products From Cart', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })   
    
    it('Test Case 17', function() {

        products.getAddToCartButton(2).invoke('show').eq(0).click();
        products.getContinueShoppingButton().click();

        home.getCartButton().click();
        home.getUrl().should('include', '/view_cart');

        cart.getDeleteButton().click();
        cart.getEmptyCartInfo().should('have.text', 'Cart is empty! Click here to buy products.');
    
    })
})