var app = require('./bracketsE2EMethods.js');

describe('Successful tournament', function () {

	it('should register 8 contestants, then skip one winner in the first round of the tournament', function() {
		app.open();
		app.goToRegister();
		app.registerNames(8);
		app.goToTournament();
		app.selectPlayers(0,4,6);
		app.finishRound();
		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Please select a winner for every match.');
	});

	it('should register 8 contestants, then skip one winner in the second round of the tournament', function() {
		app.open();
		app.goToRegister();
		app.registerNames(8);
		app.goToTournament();
		app.selectPlayers(0,2,4,6);
		app.finishRound();
		app.selectPlayers(3);
		app.finishRound();
		expect(element(by.id('round')).getText()).toBe('Round 2');
		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Please select a winner for every match.');
	});

	it('should register 8 contestants, then skip one winner in the third round of the tournament', function() {
		app.open();
		app.goToRegister();
		app.registerNames(8);
		app.goToTournament();
		expect(element(by.id('round')).getText()).toBe('Round 1');
		app.selectPlayers(1,3,5,7);
		app.finishRound();
		expect(element(by.id('round')).getText()).toBe('Round 2');
		app.selectPlayers(1,2);
		app.finishRound();
		expect(element(by.id('round')).getText()).toBe('Round 3');
		app.finishRound();
		expect(element(by.id('round')).getText()).toBe('Round 3');
		expect(element(by.id('error')).isDisplayed()).toBe(true);
		expect(element(by.id('error')).getText()).toBe('Please select a winner for every match.');
	});

});
