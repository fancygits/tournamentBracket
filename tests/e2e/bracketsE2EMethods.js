module.exports = {

	dumpHtml: function() {
		browser.getPageSource().then(function(source) {
			console.log(source);
		});
	},

	testNames: [
		'Cyclops',
		'Jean Grey',
		'Wolverine',
		'Professor X',
		'Storm',
		'Iceman',
		'Beast',
		'Angel'
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

	getContestants: function() {
		element(by.id('tournamentLink')).click();
		return element.all(by.css('li')).last().getText();
		browser.navigate().back();
	}
};
