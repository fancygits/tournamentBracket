function WelcomePage() {
	this.open = function() {
		browser.get('/main.html');
	};

	this.getWelcomeH2 = function() {
		return element(by.id('welcome'));
	};
}

describe('Routing Test', function () {

	it('should navigate through the app', function() {
		var welcomePage = new WelcomePage();
		welcomePage.open();
		expect(welcomePage.getWelcomeH2().getText()).toEqual("Welcome");


	});
});
