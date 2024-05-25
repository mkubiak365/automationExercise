class SignupLoginPage {

    getNewUserHeading() { return cy.get('.signup-form > h2') };
    getNewUserNameField() { return cy.get('input[data-qa="signup-name"]') };
    getNewEmailField() { return cy.get('input[data-qa="signup-email"]') };
    getSignupButton() { return cy.get('button[data-qa="signup-button"]') };
    getLogInHeading() { return cy.get('.login-form > h2') };
    getLoginEmailField() { return cy.get('input[data-qa="login-email"]') };
    getLoginPasswordField() { return cy.get('input[data-qa="login-password"]') };
    getLoginButton() { return cy.get('button[data-qa="login-button"]') };
    getIncorrectEmailOrPassInfo() { return cy.get('.login-form > form > p') };
    getEmailExistInfo() { return cy.get('.signup-form > form > p') };
}

export default SignupLoginPage;