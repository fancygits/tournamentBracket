var app = require('./bracketsE2EMethods.js');

describe('Successful registration', function () {

	it('should navigate to the Registration Page and register 8 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(8);
		expect(element(by.id('error')).isDisplayed()).toBe(false);
		expect(app.getBracket()).toEqual('Bracket: [["Cyclops","Jean Grey"],["Wolverine","Professor X"],["Storm","Iceman"],["Beast","Angel"]]');
	});

	it('should navigate to the Registration Page and register 2 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(2);
		expect(element(by.id('error')).isDisplayed()).toBe(false);
		expect(app.getBracket()).toEqual('Bracket: [["Cyclops","Jean Grey"]]');
	});

	it('should navigate to the Registration Page and register 4 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(4);
		expect(element(by.id('error')).isDisplayed()).toBe(false);
		expect(app.getBracket()).toEqual('Bracket: [["Cyclops","Jean Grey"],["Wolverine","Professor X"]]');
	});
});
