/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import SingleProductPage from '../pages/SingleProductPage';
const home = new HomePage();
const products = new ProductsPage();
const singleProduct = new SingleProductPage();

describe('Test Case 8: Verify All Products and product detail page', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

    })

    it('Test Case 8', function() {

        home.getProductsButton().click();

        products.getAllProductsHeading().should('have.text', 'All Products');
        products.getAmountOfTitle().should('have.length', 34).should('be.visible');
        products.getAmountOfPrice().should('have.length', 34).should('be.visible');
        products.getAmountOfImg().should('have.length', 34).should('be.visible');
        products.getViewProductButton(1).click();
        
        home.getUrl().should('include', '/product_details/1');

        singleProduct.getProductName().should('have.text', 'Blue Top');
        singleProduct.getProductCategory().should('have.text', 'Category: Women > Tops');
        singleProduct.getProductPrice().should('have.text', 'Rs. 500');
        singleProduct.getProductAvailabillity().should('have.text', 'Availability: In Stock');
        singleProduct.getProductCondition().should('have.text', 'Condition: New');
        singleProduct.getProductBrand().should('have.text', 'Brand: Polo');

    })
})