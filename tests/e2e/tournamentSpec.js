var app = require('./bracketsE2EMethods.js');

describe('Successful tournament run', function () {

	it('should navigate to the Registration Page and fill register 8 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(8);

		expect(app.getContestants()).toEqual('Bracket: [["Cyclops","Jean Grey"],["Wolverine","Professor X"],["Storm","Iceman"],["Beast","Angel"]]');
	});

	it('should navigate to the Registration Page and fill register 2 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(2);

		expect(app.getContestants()).toEqual('Bracket: [["Cyclops","Jean Grey"]]');
	});

	it('should navigate to the Registration Page and fill register 4 contestants', function() {
		app.open();
		app.goToRegister();
		app.registerNames(4);

		expect(app.getContestants()).toEqual('Bracket: [["Cyclops","Jean Grey"],["Wolverine","Professor X"]]');
	});
});