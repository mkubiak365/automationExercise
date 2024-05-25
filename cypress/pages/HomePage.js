class HomePage {

    getSignupLoginButon() { return cy.get('ul li:nth-child(4) > a').contains('Signup / Login')};
    getLoggedInAsUserButton() {return cy.get('ul li:nth-child(10) > a') };
    getDeleteAccountButton() { return cy.get('ul li:nth-child(5) > a').contains('Delete Account') };
    getContinueButton() { return cy.get('a[data-qa="continue-button"]') };
    getAccountDeletedHeading() { return cy.contains('Account Deleted!') };
    getAccountCreatedHeading() { return cy.contains('Account Created!') };
    getLogoutButton() { return cy.get('ul li:nth-child(4) > a').contains('Logout') };
    getUrl() { return cy.url() };
    getContactUsButton() { return cy.get('ul li:nth-child(8) > a').contains('Contact us') };
    getTestCaseButton() { return cy.get('ul li:nth-child(5) > a').contains('Test Case') };
    getProductsButton() { return cy.get('ul li:nth-child(2) > a').contains('Products') };
    openSiteAndGetTile() { 
        return cy.visit('');
        cy.title().should('eq', 'Automation Exercise'); 
    };
    takeScreenshotAndCompare() { return cy.compareSnapshot('home-page') };
    loadFixtures() { 
        return cy.fixture('data').then(function(data)
        {this.data = data})
    };
    getFooterWidget() { return cy.get('.footer-widget') };
    getFooterHeading() { return cy.get('.single-widget > h2') };
    getSubscriptionField() { return cy.get('#susbscribe_email') };
    getArrowButton() { return cy.get('.fa.fa-arrow-circle-o-right') };
    getSuccesSubscriptionInfo() { return cy.get('.alert-success') };
    getCartButton() { return cy.get('ul li:nth-child(3) > a').contains('Cart') };
    getViewCartButton() { return cy.get('a[href="/view_cart"]') };

    



}

export default HomePage;