import "cypress-real-events/support";
import { TelnyxHomePage } from '../pageobjects/telnyx-home-page.js';
import { TelnyxRegistrationPage } from '../pageobjects/telnyx-registration-page.js';
import { UserCredentials } from "../support/generate-crdentials.js";

describe('Testing the sign up page', () => {
    
    const homePage = new TelnyxHomePage();
    const registrationPage = new TelnyxRegistrationPage();
    
    beforeEach(() => {
        homePage.visit();
        cy.get('body').then(($body) => { //Close the cookie pop-up window, if present
            if($body.find('footer + div button[aria-label="close and deny"]').length){
                cy.get('footer + div button[aria-label="close and deny"]').click();
            }
        })
        homePage.clickSignUpButton();
    })

    it('Checking the registration with blank inputs', () => {
        registrationPage.clickCreateAccountButton();
        registrationPage.getEmailErrorMessage().should('be.visible');
        registrationPage.getFullnameErrorMessage().should('be.visible');
    })

    it('Checking the registration with valid random generated inputs', () => {
        const testuser = new UserCredentials();
        cy.typeRegistration(registrationPage, testuser);
        registrationPage.clickTermsCheckbox();
        registrationPage.clickCreateAccountButton();
        cy.get('svg[name="emailNew"] + h1', {timeout: 60000}).should('be.visible');
        cy.get('svg[name="emailNew"] + h1 + div strong').should('be.visible').should('contain', testuser.email);
    })
})