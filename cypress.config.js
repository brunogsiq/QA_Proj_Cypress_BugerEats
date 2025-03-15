const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",  // Pasta onde os relatórios serão salvos
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://buger-eats-qa.vercel.app',
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    
  },
});
