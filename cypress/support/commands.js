// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('closeCookiePopup', () => {
    cy.get('body').then(($body) => { //Close the cookie pop-up window, if present
        if($body.find('footer + div button[aria-label="close and deny"]').length){
            cy.get('footer + div button[aria-label="close and deny"]').click();
        }
    })
})

Cypress.Commands.add('typeLogin', (page, user) => {
    page.typeEmail(user.email);
    page.typePassword(user.password);
})

Cypress.Commands.add('typeRegistration', (page, user) => {
    page.typeEmail(user.email);
    page.typeFullname(user.fullname);
    page.typePassword(user.password);
})