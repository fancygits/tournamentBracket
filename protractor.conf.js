exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // The address where our server under test is running
  baseUrl: 'http://localhost:8000/',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
	chromeOptions: {
		binary: "/vagrant/project3/node_modules/puppeteer/.local-chromium/linux-555668/chrome-linux/chrome",
		args: [ "--headless", "--disable-gpu", "--window-size=800x600"]
   }
  },

  // Spec patterns are relative to the location of the
  // spec file. They may include glob patterns.
  specs: ['tests/e2e/*Spec*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true // Use colors in the command line report.
  }
};
