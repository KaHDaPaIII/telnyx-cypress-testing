import "cypress-real-events/support";
import {UserCredentials} from "../support/generate-crdentials.js"

describe('Testing the sign in page', () => {
    beforeEach(() => {
        cy.visit('https://telnyx.com/');
        cy.get('body').then(($body) => { //Close the cookie pop-up window, if present
            if($body.find('footer + div button[aria-label="close and deny"]').length){
                cy.get('footer + div button[aria-label="close and deny"]').click();
            }
        })
    })

    it('Checking the login with empty fields', () => {
        cy.get('header a[href="https://portal.telnyx.com/"]:last-of-type').click();
        cy.get('form[aria-label="loginForm"] button[type="submit"]').click();
        
        cy.get('form[aria-label="loginForm"] input[name="email"]')
        .should('have.css', 'border-color', 'rgb(255, 102, 102)');
        
        cy.get('form[aria-label="loginForm"] div:has(> input[name="email"]) + div')
        .should('be.visible')
        .invoke('attr', 'class').should('contain','TextField__ErrorMessage');
        
        cy.get('form[aria-label="loginForm"] input[name="password"]')
        .should('have.css', 'border-color', 'rgb(255, 102, 102)');
        
        cy.get('form[aria-label="loginForm"] div:has(> input[name="password"]) + div')
        .should('be.visible')
        .invoke('attr', 'class').should('contain','TextField__ErrorMessage');
    })

    it('Checking the login with a randomly generated email and password', () => {
        const testuser = new UserCredentials();
        cy.get('header a[href="https://portal.telnyx.com/"]:last-of-type').click();
        cy.get('form[aria-label="loginForm"] input[name="email"]').type(testuser.email);
        cy.get('form[aria-label="loginForm"] input[name="password"]').type(testuser.password);
        cy.get('form[aria-label="loginForm"] button[type="submit"]').click();
        cy.get('[data-testid="login.signin.message"]').should('be.visible');
    })
})