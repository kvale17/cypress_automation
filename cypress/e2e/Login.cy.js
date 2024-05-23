describe("Login Test Suite", () => {

    it('Can login with valid credentials', () => {
        cy.visit("https://practicetestautomation.com/practice-test-login/");

        //Enter credentials
        cy.get("#username").type("student");
        cy.get("#password").type("Password123");

        cy.get("#submit").click();

        cy.url().should('eq', 'https://practicetestautomation.com/logged-in-successfully/');

        cy.get(".post-title").should("contain.text", "Logged In Successfully");
    });

});