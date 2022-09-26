export class TelnyxLoginPage {
    getLoginButton() {
        return cy.get('form[aria-label="loginForm"] button[type="submit"]');
    }
    getEmailInput() {
        return cy.get('form[aria-label="loginForm"] input[name="email"]');
    }
    getEmailErrorMessage() {
        return cy.get('form[aria-label="loginForm"] div:has(> input[name="email"]) + div');
    }
    getPasswordInput() {
        return cy.get('form[aria-label="loginForm"] input[name="password"]');
    }
    getPasswordErrorMessage() {
        return cy.get('form[aria-label="loginForm"] div:has(> input[name="password"]) + div');
    }
    typeEmail(email) {
        this.getEmailInput().type(email);
    }
    typePassword(password) {
        this.getPasswordInput().type(password);
    }
    clickLoginButton() {
        this.getLoginButton().click();
    }
}