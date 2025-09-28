const { defineConfig } = require("cypress");

module.exports = defineConfig({
	viewportWidth: 1300,
	viewportHeight: 800,
	video: true,
	chromeWebSecurity: false,

	reporter: "cypress-mochawesome-reporter",
	reporterOptions: {
		reportDir: "cypress/reports/mochawesome",
		overwrite: true,
		html: true,
		json: false,
		timestamp: "dd-mm-yyyy_HH-MM-ss",
	},

	e2e: {
		baseUrl: "https://buger-eats-qa.vercel.app",
		defaultCommandTimeout: 9000,
		experimentalRunAllSpecs: true,
		hideXHRInCommandLog: true,
		specPattern: "cypress/e2e/**.cy.js",
			setupNodeEvents(on, config) {
				require("cypress-mochawesome-reporter/plugin")(on);
				return require('./cypress/plugins/index.js')(on, config)
			},
	},

	env: {
		dev: "https://www.seuambiente-dev.com",
		tst: "https://www.seuambiente-tst.com",
		hml: "https://www.seuambiente-hml.com",
		prod: "https://www.seuambiente-prod.com",
	},
});