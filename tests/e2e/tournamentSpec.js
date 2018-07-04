var app = require('./bracketsE2EMethods.js');

describe('Successful tournament', function () {

	it('should register 8 contestants, then complete the first round of the tournament', function() {
		app.open();
		app.goToRegister();
		app.registerNames(8);
		app.goToTournament();
		app.selectPlayers(0,2,4,6);
		app.finishRound();
		expect(app.getBracket()).toEqual('Bracket: [["Cyclops","Wolverine"],["Storm","Beast"]]');
		expect(element(by.id('round')).getText()).toBe('Round 2');
	});

	it('should register 4 contestants, then select 2 winners', function() {
		app.open();
		app.goToRegister();
		app.registerNames(4);
		app.goToTournament();
		app.selectPlayer('Wolverine');
		app.selectPlayer('Jean Grey');

		expect(app.getPlayers()).toEqual('Players: ["Jean Grey","Wolverine"]');
		expect(element(by.id('round')).getText()).toBe('Round 1');
	});

	it('should register 8 contestants, then complete the first and second round of the tournament', function() {
		app.open();
		app.goToRegister();
		app.registerNames(8);
		app.goToTournament();
		app.selectPlayers(0,2,4,6);
		app.finishRound();
		app.selectPlayers(1,3);
		app.finishRound();
		expect(app.getBracket()).toEqual('Bracket: [["Wolverine","Beast"]]');
		expect(element(by.id('round')).getText()).toBe('Round 3');
	});

	it('should register 4 contestants, then complete the tournament', function() {
		app.open();
		app.goToRegister();
		app.registerNames(4);
		app.goToTournament();
		app.selectPlayers(0,2);
		app.finishRound();
		app.selectPlayer('Wolverine');
		app.finishRound();
		expect(app.getBracket()).toEqual('Bracket: [["Cyclops","Wolverine"]]');
		expect(element(by.id('winner')).isDisplayed()).toBe(true);
		expect(element(by.id('winner')).getText()).toBe('Winner: Wolverine');
	});
});
