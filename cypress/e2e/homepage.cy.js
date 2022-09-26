import "cypress-real-events/support";
import { TelnyxHomePage } from '../pageobjects/telnyx-home-page.js';

describe('Testing the main page', () => {

    const homePage = new TelnyxHomePage();

    beforeEach(() => {
        homePage.visit();
        cy.closeCookiePopup();
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
        .should('have.attr', 'href', 'https://www.linkedin.com/company/telnyx/');
    })

    it('The “Follow on Twitter” link in the footer', () => {
        homePage.getTwitterLink()
        .should('be.visible')
        .should('have.attr', 'href', 'https://twitter.com/telnyx');
    })

    it('The “Follow on Facebook” link in the footer', () => {
        homePage.getFacebookLink()
        .should('be.visible')
        .should('have.attr', 'href', 'https://www.facebook.com/Telnyx/');
    })
})