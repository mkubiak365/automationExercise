class ContactUsPage {

    getGetInTouchHeading() { return cy.get('div.contact-form > .title') };
    getNameField() { return cy.get('input[data-qa="name"]') };
    getEmailField() { return cy.get('input[data-qa="email"]') };
    getSubjectField() { return cy.get('input[data-qa="subject"]') };
    getMessageField() { return cy.get('textarea[data-qa="message"]') };
    getUploadFile() {return cy.get('input[type="file"]') };
    getSubmitButton() { return cy.get('[data-qa="submit-button"]') };
    getStatusHeading() { return cy.get('.status') };
    getHomeButton() { return cy.get('.btn.btn-success') };
}

export default ContactUsPage;