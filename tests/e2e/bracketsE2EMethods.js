module.exports = {

	dumpHtml: function() {
		browser.getPageSource().then(function(source) {
			console.log(source);
		});
	},

	testNames: [
		'Cyclops', 		//0
		'Jean Grey',	//1
		'Wolverine',	//2
		'Professor X',	//3
		'Storm',		//4
		'Iceman',		//5
		'Beast',		//6
		'Angel'			//7
	],

	open: function() {
		browser.get('/main.html');
	},

	goToHome: function() {
		element(by.id('mainLink')).click();
	},

	goToRegister: function() {
		element(by.id('registrationLink')).click();
	},

	goToTournament: function() {
		element(by.id('tournamentLink')).click();
	},

	registerNames: function(count) {
		for (var i = 0; i < count; i++) {
			element(by.id('Contestant_' + (i+1))).sendKeys(this.testNames[i]);
		}
		element(by.id('submitRosterButton')).click();
	},

	addContestant: function(number, name) {
		element(by.id('Contestant_' + number)).sendKeys(name);
	},

	submitRoster: function() {
		element(by.id('submitRosterButton')).click();
	},

	getBracket: function() {
		element(by.id('tournamentLink')).click();
		return element.all(by.css('ol li')).last().getText();
		browser.navigate().back();
	},

	getPlayers: function() {
		element(by.id('tournamentLink')).click();
		return element.all(by.css('ol li')).first().getText();
		browser.navigate().back();
	},

	selectPlayer: function(contestant) {
		element(by.css('input[value="' + contestant + '"]')).click();
	},

	selectPlayers: function(first, second, third, fourth) {
		[first, second, third, fourth].forEach(function(item) {
			if (item != undefined) {
				element.all(by.css("input[type='radio']")).get(item).click();
			}
		});
	},

	finishRound: function() {
		element(by.id('completeThisRoundButton')).click();
	}
};
