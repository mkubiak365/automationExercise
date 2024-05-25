/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import {faker} from '@faker-js/faker';
const home = new HomePage();

describe('Test Case 11: Verify Subscription in Cart page', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

    })

    it('Test Case 11', function() {
        
        home.getCartButton().click();
        home.getFooterWidget().scrollIntoView();
        home.getFooterHeading().should('have.text', 'Subscription');
        home.getSubscriptionField().type(faker.internet.email());
        home.getArrowButton().click();
        home.getSuccesSubscriptionInfo().should('have.text', 'You have been successfully subscribed!');

    })
})