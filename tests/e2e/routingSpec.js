var app = require('./bracketsE2EMethods.js');

describe('Routing Test', function () {

	it('should navigate to the Welcome Page', function() {
		app.open();
		expect(element(by.id('welcome')).getText()).toEqual("Welcome");
		expect(element(by.id('mainLink')).isDisplayed()).toBe(true);
		expect(element(by.id('registrationLink')).isDisplayed()).toBe(true);
		expect(element(by.id('tournamentLink')).isDisplayed()).toBe(true);
		expect(element.all(by.partialLinkText('egistration')).count()).toBe(2);
	});

	it('should navigate to the Registration Page', function() {
		app.open();
		app.goToRegister();
		expect(element(by.id('registrationHeading')).getText()).toEqual("Register Players");
	});

	it('should navigate to the Tournament Page', function() {
		app.open();
		app.goToTournament();
		expect(element(by.id('tournamentHeading')).getText()).toEqual("Tournament");
	});

	it('should navigate to the every Page', function() {
		app.open();
		app.goToHome();
		expect(element(by.tagName('p')).getText()).toMatch(/Get started/);
		app.goToRegister();
		expect(element(by.id('registrationHeading')).getText()).toEqual("Register Players");
		app.goToTournament();
		expect(element(by.id('tournamentHeading')).getText()).toEqual("Tournament");
		app.goToRegister();
		expect(element(by.id('registrationHeading')).getText()).toEqual("Register Players");
		app.goToHome();
		expect(element(by.id('welcome')).getText()).toEqual("Welcome");
		app.goToRegister();
		expect(element(by.id('registrationHeading')).getText()).toEqual("Register Players");
	});
});
