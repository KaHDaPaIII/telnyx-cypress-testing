import "cypress-real-events/support";
import { TelnyxHomePage } from '../pageobjects/telnyx-home-page.js';

describe('Testing the main page', () => {

    const homePage = new TelnyxHomePage();

    beforeEach(() => {
        homePage.visit();
        cy.get('body').then(($body) => { //Close the cookie pop-up window, if present
            if($body.find('footer + div button[aria-label="close and deny"]').length){
                cy.get('footer + div button[aria-label="close and deny"]').click();
            }
        })
    })

    it('Clicking the "Try for free" button redirects to the sign up page', () => {
        homePage.clickTryForFreeButton();
        cy.url().should('equal', 'https://telnyx.com/sign-up');
    })

    it('Clicking the “Developer Docs” link in the hoverable dropdown menu', () => {
        cy.viewport(1600, 900);
        homePage.hoverResourcesLabel();
        homePage.clickDeveloperDocsLink();
        cy.get('#telnyx-api-v2-documentation').should('be.visible');
    })

    it('Clicking the “See all Pricing” link in the hoverable dropdown menu', () => {
        cy.viewport(1600, 900);
        homePage.hoverPricingLabel();
        homePage.clickSeeAllPricingLink();
        cy.url().should('equal', 'https://telnyx.com/pricing');
    })

    it('The “Connect on LinkedIn” link in the footer', () => {
        homePage.getLinkedInLink()
        .should('be.visible')
        .should('have.prop', 'href')
        .and('equal', 'https://www.linkedin.com/company/telnyx/');
    })

    it('The “Follow on Twitter” link in the footer', () => {
        homePage.getTwitterLink()
        .should('be.visible')
        .should('have.prop', 'href')
        .and('equal', 'https://twitter.com/telnyx');
    })

    it('The “Follow on Facebook” link in the footer', () => {
        homePage.getFacebookLink()
        .should('be.visible')
        .should('have.prop', 'href')
        .and('equal', 'https://www.facebook.com/Telnyx/');
    })
})