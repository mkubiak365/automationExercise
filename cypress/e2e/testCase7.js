/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
const home = new HomePage();

describe('Test Case 7: Verify Test Cases Page', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();
        
    })

    it('Test Case 7', function() {

        home.getTestCaseButton().click();
        home.getUrl().should('include', '/test_case');

    })
})