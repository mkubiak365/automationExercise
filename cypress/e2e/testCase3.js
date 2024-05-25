/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import SignupLoginPage from '../pages/SignupLoginPage';
const home = new HomePage();
const signupLogin = new SignupLoginPage(); 

describe('Test Case 3: Login User with incorrect email and password', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })   
    
    it('Test Case 3', function() {

        home.getSignupLoginButon().click();
        
        signupLogin.getLogInHeading().should('have.text', 'Login to your account');
        signupLogin.getLoginEmailField().type(this.data.userData.incorrectData.email);
        signupLogin.getLoginPasswordField().type(this.data.userData.incorrectData.password);
        signupLogin.getLoginButton().click();
        signupLogin.getIncorrectEmailOrPassInfo().should('have.text', 'Your email or password is incorrect!')

    })
})