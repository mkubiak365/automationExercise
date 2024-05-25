/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import SignupLoginPage from '../pages/SignupLoginPage';
const home = new HomePage();
const signupLogin = new SignupLoginPage(); 

describe('Test Case 5: Register User with existing email', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })

    it('Test Case 5', function() {

        home.getSignupLoginButon().click();

        signupLogin.getNewUserHeading().should('have.text', 'New User Signup!');
        signupLogin.getNewUserNameField().type(this.data.userData.correctData.name);
        signupLogin.getNewEmailField().type(this.data.userData.correctData.email);
        signupLogin.getSignupButton().click();
        signupLogin.getEmailExistInfo().should('have.text', 'Email Address already exist!');
        
    })
})