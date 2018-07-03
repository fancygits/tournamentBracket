function WelcomePage() {
	this.open = function() {
		browser.get('/main.html');
	};

	this.getWelcomeH2 = function() {
		return element(by.id('welcome')).getText();
	};

	this.getHomeLink = function() {
		return element(by.id('mainLink'));
	}

	this.getRegistrationLink = function() {
		return element(by.id('registrationLink'));
	}

	this.getTournamentLink = function() {
		return element(by.id('tournamentLink'));
	}

	this.countRegistrationLinks = function() {
		return element.all(by.partialLinkText('egistration')).count();
	}
}

describe('Routing Test', function () {

	it('should navigate to the Welcome Page', function() {
		var welcomePage = new WelcomePage();
		welcomePage.open();
		expect(welcomePage.getWelcomeH2()).toEqual("Welcome");
		expect(welcomePage.getHomeLink().isDisplayed()).toBe(true);
		expect(welcomePage.getRegistrationLink().isDisplayed()).toBe(true);
		expect(welcomePage.getTournamentLink().isDisplayed()).toBe(true);
		expect(welcomePage.countRegistrationLinks()).toBe(2);
	});

	it('should navigate to the Registration Page', function() {
		var welcomePage = new WelcomePage();
		welcomePage.open();
		welcomePage.getRegistrationLink().click();
		expect(element(by.id('registrationHeading')).getText()).toEqual("Register Players");
	});

	it('should navigate to the Tournament Page', function() {
		var welcomePage = new WelcomePage();
		welcomePage.open();
		welcomePage.getTournamentLink().click();
		expect(element(by.id('tournamentHeading')).getText()).toEqual("Tournament");
	});
});
