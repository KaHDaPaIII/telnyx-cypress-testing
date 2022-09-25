import "cypress-real-events/support";

describe('Testing the main page', () => {
    beforeEach(() => {
        cy.visit('https://telnyx.com/');
        cy.get('body').then(($body) => { //Close the cookie pop-up window, if present
            if($body.find('footer + div button[aria-label="close and deny"]').length){
                cy.get('footer + div button[aria-label="close and deny"]').click();
            }
        })
    })

    it('Clicking the "Try for free" button redirects to the sign up page', () => {
        cy.get('main button[type="submit"]').click();
        cy.url().should('eq', 'https://telnyx.com/sign-up');
    })

    it('Clicking the “Developer Docs” link in the hoverable dropdown menu', () => {
        cy.viewport(1600, 900);
        cy.get('header ul > li:nth-of-type(4)').realHover({scrollBehavior: false});
        cy.get('header ul > li:nth-of-type(4) a').first().click();
        cy.get('#telnyx-api-v2-documentation').should('be.visible');
    })

    it('Clicking the “See all Pricing” link in the hoverable dropdown menu', () => {
        cy.viewport(1600, 900);
        cy.get('header ul > li:nth-of-type(6)').realHover({scrollBehavior: false});
        cy.get('header ul > li:nth-of-type(6) a[href="/pricing"]').click();
        cy.url().should('equal', 'https://telnyx.com/pricing');
    })

    it('The “Connect on LinkedIn” link in the footer', () => {
        cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(1) > a')
        .should('be.visible')
        .should('have.prop', 'href')
        .and('equal', 'https://www.linkedin.com/company/telnyx/');
    })

    it('The “Follow on Twitter” link in the footer', () => {
        cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(2) > a')
        .should('be.visible')
        .should('have.prop', 'href')
        .and('equal', 'https://twitter.com/telnyx');
    })

    it('The “Follow on Facebook” link in the footer', () => {
        cy.get('[data-e2e="Footer--navItem-social"] ul > li:nth-child(3) > a')
        .should('be.visible')
        .should('have.prop', 'href')
        .and('equal', 'https://www.facebook.com/Telnyx/');
    })
})