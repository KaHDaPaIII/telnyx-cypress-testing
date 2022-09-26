export class TelnyxHomePage {
    visit() {
        cy.visit('https://telnyx.com/');
    }
    getTryForFreeButton() {
        return cy.get('main button[type="submit"]');
    }
    clickTryForFreeButton() {
        this.getTryForFreeButton().click();
    }
    getSignUpButton() {
        return cy.get('header a[href="/sign-up"]').first();
    }
    getLogInButton() {
        return cy.get('header a[href="https://portal.telnyx.com/"]:last-of-type');
    }
    getResourcesLabel() {
        return cy.get('header ul > li:nth-of-type(4)');
    }
    getPricingLabel() {
        return cy.get('header ul > li:nth-of-type(6)');
    }
    getDeveloperDocsLink() {
        return cy.get('header ul > li:nth-of-type(4) a').first();
    }
    getSeeAllPricingLink() {
        return cy.get('header ul > li:nth-of-type(6) a[href="/pricing"]');
    }
    getLinkedInLink() {
        return cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(1) > a');
    }
    getTwitterLink() {
        return cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(2) > a');
    }
    getFacebookLink() {
        return cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(3) > a');
    }
    hoverResourcesLabel() {
        this.getResourcesLabel().realHover({scrollBehavior: false});
    }
    hoverPricingLabel() {
        this.getPricingLabel().realHover({scrollBehavior: false});
    }
    clickLogInButton() {
        this.getLogInButton().click();
    }
    clickDeveloperDocsLink() {
        this.getDeveloperDocsLink().click();
    }
    clickSeeAllPricingLink() {
        this.getSeeAllPricingLink().click();
    }
    clickSignUpButton() {
        this.getSignUpButton().click();
    }
}