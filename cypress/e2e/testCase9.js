/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
const home = new HomePage();
const products = new ProductsPage();

describe('Test Case 9: Search Product', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();
        
    })

    it('Test Case 9', function() {

        home.getProductsButton().click();

        products.getAllProductsHeading().should('have.text', 'All Products');
        products.getSearchProductField().type('Tshirt');
        products.getSubmitSearchButton().click();
        products.getProductNames().each(($el, i) => {
            expect($el.text()).to.eql(this.data.productList[i]);
        })

    })
})