class SignupPage {

    getEnterAccountHeading() { return cy.contains('Enter Account Information') };
    getTitleMrRadio() { return cy.get('#id_gender1') };
    getTitleMrsRadio() { return cy.get('#id_gender2') };
    getNameField() { return cy.get('#name') };
    getEmailField() { return cy.get('#email') };
    getPasswordField() { return cy.get('#password') };
    getDaysSelect() { return cy.get('#days') };
    getMonthsSelect() { return cy.get('#months') };
    getYearsSelect() { return cy.get('#years') };
    getNewslettrCheckbox() { return cy.get('#newsletter') };
    getSpecialOffersCheckbox() { return cy.get('#optin') };
    getFirstNameField() {return cy.get('#first_name') };
    getLastNameField() {return cy.get('#last_name') };
    getCompanyField() {return cy.get('#company') };
    getAddress1Field() {return cy.get('#address1') };
    getAddress2Field() {return cy.get('#address2') };
    getCountrySelect() {return cy.get('#country') };
    getStateField() {return cy.get('#state') };
    getCityField() {return cy.get('#city') };
    getZipcodeField() {return cy.get('#zipcode') };
    getMobileNumberField() {return cy.get('#mobile_number') };
    getCreateAccountButton() { return cy.get('button[data-qa="create-account"]') };
}

export default SignupPage;