/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import SignupLoginPage from '../pages/SignupLoginPage';
import SignupPage from '../pages/SignupPage';
import {faker} from '@faker-js/faker';
const home = new HomePage();
const signupLogin = new SignupLoginPage(); 
const signup = new SignupPage();

describe('Test Case 1: Register User', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();
        
    })

    it('Test Case 1', function() {

        const name = faker.internet.userName();
        const email = faker.internet.email();

        home.getSignupLoginButon().click();

        signupLogin.getNewUserHeading().should('have.text', 'New User Signup!');
        signupLogin.getNewUserNameField().type(name);
        signupLogin.getNewEmailField().type(email);
        signupLogin.getSignupButton().click();
        
        signup.getEnterAccountHeading().should('have.text', 'Enter Account Information');
        signup.getTitleMrsRadio().check().should('be.checked');
        signup.getNameField().should('have.value', name);
        signup.getEmailField().should('have.value', email);
        signup.getPasswordField().type(faker.internet.password());
        signup.getDaysSelect().select('1');
        signup.getMonthsSelect().select('December');
        signup.getYearsSelect().select('1995');
        signup.getNewslettrCheckbox().check().should('be.checked');
        signup.getSpecialOffersCheckbox().check().should('be.checked');
        signup.getFirstNameField().type(faker.person.firstName());
        signup.getLastNameField().type(faker.person.lastName());
        signup.getCompanyField().type(faker.company.name());
        signup.getAddress1Field().type(faker.location.street());
        signup.getAddress2Field().type(faker.location.streetAddress());
        signup.getCountrySelect().select('United States');
        signup.getStateField().type(faker.location.state());
        signup.getCityField().type(faker.location.city());
        signup.getZipcodeField().type(faker.location.zipCode());
        signup.getMobileNumberField().type(faker.phone.number());
        signup.getCreateAccountButton().click();

        home.getAccountCreatedHeading().should('have.text', 'Account Created!');
        home.getContinueButton().click();
        home.getLoggedInAsUserButton().should('have.text', ' Logged in as ' + name);
        home.getDeleteAccountButton().click();
        home.getAccountDeletedHeading().should('have.text', 'Account Deleted!');
        home.getContinueButton().click();

    })
})