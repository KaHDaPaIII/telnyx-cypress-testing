export class TelnyxRegistrationPage {
    getCreateAccountButton() {
        return cy.get('form[aria-label="signup-form"] button[type="submit"]');
    }
    getEmailErrorMessage() {
        return cy.get('#email_error');
    }
    getFullnameErrorMessage() {
        return cy.get('#full_name_error');
    }
    getEmailInput() {
        return cy.get('#email');
    }
    getFullnameInput() {
        return cy.get('#full_name');
    }
    getPasswordInput() {
        return cy.get('#password');
    }
    getTermsCheckbox() {
        return cy.get('[aria-labelledby="terms-label"]');
    }
    typeEmail(email) {
        this.getEmailInput().type(email);
    }
    typeFullname(fullname) {
        this.getFullnameInput().type(fullname);
    }
    typePassword(password) {
        this.getPasswordInput().type(password);
    }
    clickTermsCheckbox() {
        this.getTermsCheckbox().click({scrollBehavior: 'center'});
    }
    clickCreateAccountButton() {
        this.getCreateAccountButton().click({scrollBehavior: 'center'});
    }
    
}