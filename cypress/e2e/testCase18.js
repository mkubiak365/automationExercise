/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
const home = new HomePage();
const products = new ProductsPage();

describe('Test Case 18: View Category Products', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })   
    
    it('Test Case 18', function() {

        products.getWomenCategoryButton().should('contain.text', 'Women');
        products.getMenCategoryButton().should('contain.text', 'Men');
        products.getKidsCategoryButton().should('contain.text', 'Kids');
        products.getWomenCategoryButton().click();
        products.getDressSubcategoryButton().click();

        home.getUrl().should('include', '/category_products/1');

        products.getCategoryTitle().should('have.text', 'Women - Dress Products');
        products.getMenCategoryButton().click();
        products.getJeansSubcategoryButton().click();

        home.getUrl().should('include', '/category_products/6');

        products.getCategoryTitle().should('have.text', 'Men - Jeans Products');

    })
})