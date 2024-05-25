/// <reference types="Cypress" />

import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';
const home = new HomePage();
const contactUs = new ContactUsPage();

describe('Test Case 6: Contact Us Form', function() {

    before(function() {

        home.openSiteAndGetTile();
        //home.takeScreenshotAndCompare();
        
        home.loadFixtures();
        
    })

    it('Test Case 6', function() {

        home.getContactUsButton().click();

        contactUs.getGetInTouchHeading().should('have.text', 'Get In Touch');
        contactUs.getNameField().type(this.data.userData.correctData.name);
        contactUs.getEmailField().type(this.data.userData.correctData.email);
        contactUs.getSubjectField().type(this.data.subjectInfo.subject);
        contactUs.getMessageField().type(this.data.subjectInfo.message);
        contactUs.getUploadFile().selectFile('../automationExercise/cypress/fixtures/stock.jpg');
        contactUs.getSubmitButton().click();
        contactUs.getStatusHeading().should('have.text', 'Success! Your details have been submitted successfully.');
        contactUs.getHomeButton().click();
        
    })
})