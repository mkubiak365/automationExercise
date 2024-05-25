/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import SignupLoginPage from '../pages/SignupLoginPage';
import SignupPage from '../pages/SignupPage';
import CheckOutPage from '../pages/CheckOutPage';
import ProductsPage from '../pages/ProductsPage';
import {faker} from '@faker-js/faker';
const home = new HomePage();
const cart = new CartPage();
const signupLogin = new SignupLoginPage(); 
const signup = new SignupPage();
const checkOut = new CheckOutPage();
const products = new ProductsPage();
 

describe('Test Case 15: Place Order: Register before Checkout', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })

    it('Test Case 15', function() {

        const name = faker.internet.userName();
        const email = faker.internet.email();
        const street = faker.location.street();
        const streetAddress = faker.location.streetAddress();
        const state = faker.location.state();
        const city = faker.location.city();
        const zipCode = faker.location.zipCode();
        const phoneNumber = faker.phone.number();
        const company = faker.company.name();
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
 

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
        signup.getFirstNameField().type(firstName);
        signup.getLastNameField().type(lastName);
        signup.getCompanyField().type(company);
        signup.getAddress1Field().type(street);
        signup.getAddress2Field().type(streetAddress);
        signup.getCountrySelect().select('United States');
        signup.getStateField().type(state);
        signup.getCityField().type(city);
        signup.getZipcodeField().type(zipCode);
        signup.getMobileNumberField().type(phoneNumber);
        signup.getCreateAccountButton().click();

        home.getAccountCreatedHeading().should('have.text', 'Account Created!');
        home.getContinueButton().click();
        home.getLoggedInAsUserButton().should('have.text', ' Logged in as ' + name);

        products.getAddToCartButton(2).invoke('show').eq(0).click();
        products.getContinueShoppingButton().click();

        home.getCartButton().click();
        home.getUrl().should('include', '/view_cart');

        cart.getProceedToCheckout().click();
        
        checkOut.getFirstLastNameDelivery().should('have.text', `Mrs. ${firstName} ${lastName}`);
        checkOut.getCompanyNameDelivery().should('have.text', company);
        checkOut.getStreetDelivery().should('have.text', street);
        checkOut.getStreetAddressDelivery().should('have.text', streetAddress);
        checkOut.getCityStateZipCodeDelivery().should('contain.text', city + ' ' + state);
        checkOut.getCityStateZipCodeDelivery().should('contain.text', zipCode);
        checkOut.getCountryDelivery().should('have.text', 'United States');
        checkOut.getPhoneNumberDelivery().should('have.text', phoneNumber);
        checkOut.getFirstLastNameBilling().should('have.text', `Mrs. ${firstName} ${lastName}`);
        checkOut.getCompanyNameBilling().should('have.text', company);
        checkOut.getStreetBilling().should('have.text', street);
        checkOut.getStreetAddressBilling().should('have.text', streetAddress);
        checkOut.getCityStateZipCodeBilling().should('contain.text', city + ' ' + state);
        checkOut.getCityStateZipCodeBilling().should('contain.text', zipCode);
        checkOut.getCountryBilling().should('have.text', 'United States');
        checkOut.getPhoneNumberBilling().should('have.text', phoneNumber);

        cart.getCartProductsName().each(($el) => {
            expect($el.text()).to.eql(this.data.productsInCart[1].name);
        });
        cart.getCartProductsPrice().each(($el) => {
            expect($el.text()).to.eql(this.data.productsInCart[1].price);
        });
        cart.getCartProductsQuantity().each(($el) => {
            expect($el.text()).to.eql(this.data.productsInCart[1].quantity);
        });
        cart.getCartTotalPrice().each(($el, i) => {
            expect($el.text()).to.eql(this.data.productsInCart[1].total);
        });

        checkOut.getCommentField().type(faker.lorem.sentence());
        checkOut.getPlaceOrderButton().click();
        checkOut.getNameOnCardField().type(faker.finance.accountName() );
        checkOut.getCardNumberField().type(faker.finance.creditCardNumber());
        checkOut.getCvcField().type(faker.finance.creditCardCVV());
        checkOut.getExpiryMonthField().type('12');
        checkOut.getExpiryYear().type('25');
        checkOut.getPayAndConfirmButton().click();
        checkOut.getOrderInfo().should('have.text', 'Congratulations! Your order has been confirmed!');
        checkOut.getContinueButton().click();

        home.getDeleteAccountButton().click();
        home.getAccountDeletedHeading().should('have.text', 'Account Deleted!');
        home.getContinueButton().click();
        
    })
})