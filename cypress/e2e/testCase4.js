/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import SignupLoginPage from '../pages/SignupLoginPage';
const home = new HomePage();
const signupLogin = new SignupLoginPage(); 

describe('Test Case 4: Logout User', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })   
    
    it('TTest Case 4', function() {

        home.getSignupLoginButon().click();
        
        signupLogin.getLogInHeading().should('have.text', 'Login to your account');
        signupLogin.getLoginEmailField().type(this.data.userData.correctData.email);
        signupLogin.getLoginPasswordField().type(this.data.userData.correctData.password);
        signupLogin.getLoginButton().click();

        home.getLoggedInAsUserButton().should('have.text', ' Logged in as ' + this.data.userData.correctData.login);
        home.getLogoutButton().click();
        home.getUrl().should('include', '/login');
    })
})