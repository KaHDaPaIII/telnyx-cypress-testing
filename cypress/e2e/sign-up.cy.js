import "cypress-real-events/support";
import {UserCredentials} from "../support/generate-crdentials.js"

describe('Testing the sign up page', () => {
    beforeEach(() => {
        cy.visit('https://telnyx.com/');
        cy.get('body').then(($body) => { //Close the cookie pop-up window, if present
            if($body.find('footer + div button[aria-label="close and deny"]').length){
                cy.get('footer + div button[aria-label="close and deny"]').click();
            }
        })
    })

    it('Checking the registration with blank inputs', () => {
        cy.get('header a[href="/sign-up"]').first().click();
        cy.get('form[aria-label="signup-form"] button[type="submit"]').click();
        cy.get('#email_error').should('be.visible');
        cy.get('#full_name_error').should('be.visible');
    })

    it('Checking the registration with valid random generated inputs', () => {
        const testuser = new UserCredentials();
        cy.get('header a[href="/sign-up"]').first().click();
        cy.get('#email').type(testuser.email);
        cy.get('#full_name').type(testuser.firstname + ' ' + testuser.lastname);
        cy.get('#password').type(testuser.password);
        cy.get('[aria-labelledby="terms-label"]').click();
        cy.get('button[type="submit"]').click();
        cy.get('svg[name="emailNew"]', {timeout: 30000}).should('be.visible');
        cy.get('svg[name="emailNew"] + h1').should('be.visible');
        cy.get('svg[name="emailNew"] + h1 + div strong').should('contain', testuser.email).should('be.visible');
    })
})