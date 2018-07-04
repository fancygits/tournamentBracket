var app = require('./bracketsE2EMethods.js');

describe('Errors on registration', function () {

	it('should navigate to the Registration Page and fail registering 1 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(1);

		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Must seed bracket with either 2, 4, or 8 players');
	});

	it('should navigate to the Registration Page and fail registering 3 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(3);

		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Must seed bracket with either 2, 4, or 8 players');
	});

	it('should navigate to the Registration Page and fail registering 5 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(5);

		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Must seed bracket with either 2, 4, or 8 players');
	});

	it('should navigate to the Registration Page and fail registering 6 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(6);

		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Must seed bracket with either 2, 4, or 8 players');
	});

	it('should navigate to the Registration Page and fail registering 7 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(7);

		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Must seed bracket with either 2, 4, or 8 players');
	});

	it('should navigate to the Registration Page and fail registering duplicate contestants', function() {
		app.open();
		app.goToRegister();
		expect(element(by.id('error')).isDisplayed()).toBe(false);
		app.addContestant(1, "James");
		app.addContestant(2, "Luke");
		app.addContestant(3, "Luke");
		app.submitRoster();
		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Duplicate name(s) not allowed');
	});

	it('should navigate to the Registration Page and fail registering duplicate contestants', function() {
		app.open();
		app.goToRegister();
		expect(element(by.id('error')).isDisplayed()).toBe(false);
		app.addContestant(1, "James");
		app.addContestant(2, "Luke");
		app.addContestant(3, "Emily");
		app.addContestant(4, "Frank");
		app.addContestant(5, "Paul");
		app.addContestant(6, "Mary");
		app.addContestant(7, "Paula");
		app.addContestant(8, "James");
		app.submitRoster();
		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Duplicate name(s) not allowed');
	});
});
