/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import SignupLoginPage from '../pages/SignupLoginPage';
const home = new HomePage();
const signupLogin = new SignupLoginPage(); 

describe('Test Case 2: Login User with correct email and password', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();
        
    })   
    
    it('Test Case 2', function() {

        home.getSignupLoginButon().click();
        
        signupLogin.getLogInHeading().should('have.text', 'Login to your account');
        signupLogin.getLoginEmailField().type(this.data.userData.correctData.email);
        signupLogin.getLoginPasswordField().type(this.data.userData.correctData.password);
        signupLogin.getLoginButton().click();

        home.getLoggedInAsUserButton().should('have.text', ' Logged in as ' + this.data.userData.correctData.login);

    })
})