import "cypress-real-events/support";
import { TelnyxHomePage } from '../pageobjects/telnyx-home-page.js';
import { TelnyxLoginPage } from '../pageobjects/telnyx-login-page.js';
import { UserCredentials } from "../support/generate-crdentials.js";

describe('Testing the sign in page', () => {

    const homePage = new TelnyxHomePage();
    const loginPage = new TelnyxLoginPage();

    beforeEach(() => {
        homePage.visit();
        cy.get('body').then(($body) => { //Close the cookie pop-up window, if present
            if($body.find('footer + div button[aria-label="close and deny"]').length){
                cy.get('footer + div button[aria-label="close and deny"]').click();
            }
        })
        homePage.clickLogInButton();
    })

    it('Checking the login with empty fields', () => {
        loginPage.clickLoginButton();
        
        loginPage.getEmailInput()
        .should('have.css', 'border-color', 'rgb(255, 102, 102)');
        
        loginPage.getPasswordInput()
        .should('have.css', 'border-color', 'rgb(255, 102, 102)');

        loginPage.getEmailErrorMessage()
        .should('be.visible')
        .invoke('attr', 'class').should('contain','TextField__ErrorMessage');
        
        loginPage.getPasswordErrorMessage()
        .should('be.visible')
        .invoke('attr', 'class').should('contain','TextField__ErrorMessage');
    })

    it('Checking the login with a randomly generated email and password', () => {
        const testuser = new UserCredentials();
        cy.typeLogin(loginPage, testuser);
        loginPage.clickLoginButton();
        cy.get('[data-testid="login.signin.message"]').should('be.visible');
    })
})