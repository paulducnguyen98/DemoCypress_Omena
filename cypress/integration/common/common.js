const {Given, When, Then} = require('cypress-cucumber-preprocessor/steps');



When(/^Go to booking UI$/, () => {
    cy.visit('https://test2.omenahotels.com/en/booking/');
});


When(/^Accept cookies$/, () => {
    cy.xpath('//button[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]', {timeout: 15000}).click();
});


When(/^Select (.*) hotel to make a booking$/, (hotel) => {
    cy.xpath('//button[@title="Choose hotel"]', {timeout:15000}).click();
    cy.xpath(`//ul[@role="menu"]//span[contains(text(),"${hotel}")]`, {timeout: 3000}).click();
});