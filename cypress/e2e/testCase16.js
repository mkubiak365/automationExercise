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
 

describe('Test Case 16: Place Order: Login before Checkout', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();

        home.loadFixtures();

    })

    it('Test Case 16', function() {
 
        home.getSignupLoginButon().click();
        
        signupLogin.getLogInHeading().should('have.text', 'Login to your account');
        signupLogin.getLoginEmailField().type(this.data.userData.correctData.email);
        signupLogin.getLoginPasswordField().type(this.data.userData.correctData.password);
        signupLogin.getLoginButton().click();

        products.getAddToCartButton(2).invoke('show').eq(0).click();
        products.getContinueShoppingButton().click();
        
        home.getCartButton().click();
        home.getUrl().should('include', '/view_cart');

        cart.getProceedToCheckout().click();
        
        checkOut.getFirstLastNameDelivery().should('have.text', `Mr. ${this.data.userData.correctData.name} ${this.data.userData.correctData.lastName}`);
        checkOut.getCompanyNameDelivery().should('have.text', this.data.userData.correctData.company);
        checkOut.getStreetDelivery().should('have.text', this.data.userData.correctData.street);
        checkOut.getStreetAddressDelivery().should('have.text', this.data.userData.correctData.streetNumber);
        checkOut.getCityStateZipCodeDelivery().should('contain.text', this.data.userData.correctData.city + ' ' + this.data.userData.correctData.state);
        checkOut.getCityStateZipCodeDelivery().should('contain.text', this.data.userData.correctData.zipCode);
        checkOut.getCountryDelivery().should('have.text', 'United States');
        checkOut.getPhoneNumberDelivery().should('have.text', this.data.userData.correctData.phoneNumber);
        checkOut.getFirstLastNameBilling().should('have.text', `Mr. ${this.data.userData.correctData.name} ${this.data.userData.correctData.lastName}`);
        checkOut.getCompanyNameBilling().should('have.text', this.data.userData.correctData.company);
        checkOut.getStreetBilling().should('have.text', this.data.userData.correctData.street);
        checkOut.getStreetAddressBilling().should('have.text', this.data.userData.correctData.streetNumber);
        checkOut.getCityStateZipCodeBilling().should('contain.text', this.data.userData.correctData.city + ' ' + this.data.userData.correctData.state);
        checkOut.getCityStateZipCodeBilling().should('contain.text', this.data.userData.correctData.zipCode);
        checkOut.getCountryBilling().should('have.text', 'United States');
        checkOut.getPhoneNumberBilling().should('have.text', this.data.userData.correctData.phoneNumber);

        cart.getCartProductsName().each(($el) => {
            expect($el.text()).to.eql(this.data.productsInCart[1].name);
        });
        cart.getCartProductsPrice().each(($el) => {
            expect($el.text()).to.eql(this.data.productsInCart[1].price);
        });
        cart.getCartProductsQuantity().each(($el) => {
            expect($el.text()).to.eql(this.data.productsInCart[1].quantity);
        });
        cart.getCartTotalPrice().each(($el) => {
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
        
    })
})