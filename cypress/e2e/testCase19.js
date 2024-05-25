/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
const home = new HomePage();
const products = new ProductsPage();

describe('Test Case 19: View & Cart Brand Products', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })   
    
    it('Test Case 19', function() {

        home.getProductsButton().click();

        for(let i = 1; i <= 8; i++) {
            products.getBrandButton(i).then(($el) => {
                expect($el.text()).to.include(this.data.brands[i-1]);
            });
        }

        products.getBrandButton(7).click();

        home.getUrl().should('include', '/brand_products/Kookie%20Kids');

        products.getProductNames().each(($el, i) => {
            expect($el.text()).to.eql(this.data.brandKookieKidsProducts[i]);
        })

        products.getBrandButton(8).click();

        home.getUrl().should('include', '/brand_products/Biba');

        products.getProductNames().each(($el, i) => {
            expect($el.text()).to.eql(this.data.brandBibaProducts[i]);
        })

    })
})