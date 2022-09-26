import "cypress-real-events/support";
import { TelnyxHomePage } from '../pageobjects/telnyx-home-page.js';
import { TelnyxRegistrationPage } from '../pageobjects/telnyx-registration-page.js';
import { UserCredentials } from "../support/generate-credentials.js";

describe('Testing the sign up page', () => {
    
    const homePage = new TelnyxHomePage();
    const registrationPage = new TelnyxRegistrationPage();
    
    beforeEach(() => {
        homePage.visit();
        cy.closeCookiePopup();
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
        cy.ifNoCaptchaErrorThenAssertRegistration(testuser.email);       
    })
})